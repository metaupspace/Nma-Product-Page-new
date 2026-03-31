import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { serverConfig } from "./env"


export const authOptions: NextAuthOptions = {
  secret: serverConfig.NEXTAUTH_SECRET, // Use serverConfig instead of process.env
  providers: [
     GoogleProvider({
      clientId: serverConfig.GOOGLE_CLIENT_ID,
      clientSecret: serverConfig.GOOGLE_CLIENT_SECRET,
    })
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) {
        token.accessToken = account.access_token
        token.id = profile.sub || ""
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id
        session.accessToken = token.accessToken
      }
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/signin",
  }
}