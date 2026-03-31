"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import ProductPageFooter from "@/components/productPage/footer/Footer";

const FooterSwitcher = () => {
  const pathname = usePathname();

  const isProductPageRoute =
    pathname === "/productPage" ||
    pathname?.startsWith("/productPage/") ||
    pathname === "/productPageBeta" ||
    pathname === "/" ||
    pathname?.startsWith("/productPageBeta/");

  if (isProductPageRoute) {
    return <ProductPageFooter />;
  }

  return <Footer />;
};

export default FooterSwitcher;
