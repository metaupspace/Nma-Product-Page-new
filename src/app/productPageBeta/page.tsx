"use client"
import Hero from "./fragments/Hero"
import NavBar from "@/components/productPage/navbar/index";

export default function ProductPageBeta() {
  return (
    <main className="bg-black">
      <NavBar />
      <Hero/>
    </main>
  )
}