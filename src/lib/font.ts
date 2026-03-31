import localFont from "next/font/local";

export const avenirNext = localFont({
  src: [
    {
      path: "../../public/fonts/AvenirNextLTPro-BoldIt.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-avenir-next",
  display: "swap",
});
