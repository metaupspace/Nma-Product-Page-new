"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import ProductPageFooter from "@/components/productPage/footer/Footer";
import Navbar from "@/components/navbar/index";
import ProductPageNavbar from "@/components/productPage/navbar/index";

const isProductPagePath = (pathname: string | null) =>
  pathname === "/productPage" ||
  pathname?.startsWith("/productPage/") ||
  pathname === "/productPageBeta" ||
  pathname?.startsWith("/productPageBeta/");

export const NavbarSwitcher = () => {
  const pathname = usePathname();

  if (isProductPagePath(pathname)) {
    return <ProductPageNavbar />;
  }

  return <Navbar />;
};

const FooterSwitcher = () => {
  const pathname = usePathname();

  const isProductPageRoute = isProductPagePath(pathname);

  if (isProductPageRoute) {
    return <ProductPageFooter />;
  }

  return <Footer />;
};


export default FooterSwitcher;
