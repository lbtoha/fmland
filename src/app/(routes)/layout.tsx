"use client";
import "@/app/globals.css";
import Footer from "@/components/pages/home-1/Footer";
import FooterThree from "@/components/pages/homeThree/FooterThree";
import FooterTwo from "@/components/pages/homeTwo/FooterTwo";
import NavBar from "@/components/shared/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Lexend, Oswald, Roboto } from "next/font/google";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../styles/lib/all.min.css";
import "../../styles/lib/remixicon.css";
import "../../styles/scss/style.scss";
import Loading from "./loading";

const lexend = Lexend({ subsets: ["latin"], variable: "--heading-font" });
const roboto = Roboto({
  subsets: ["latin"],
  variable: "--para-font",
  weight: ["400", "500", "700"],
});

const oswald = Oswald({ subsets: ["latin"], variable: "--top-font" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    // @ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  const pathName = usePathname();
  return (
    <html lang="en">
      <body
        className={`${lexend.variable} ${roboto.variable} ${oswald.variable} ${
          pathname === "/home-three" ? "home-red" : " "
        }`}
      >
        <NavBar />
        <Suspense fallback={<Loading />}>
          <main className="site-body">{children}</main>
        </Suspense>
        {pathName === "/" && <Footer />}
        {pathName === "/" ||
          (pathName !== "/home-two" && pathName !== "/home-three" && (
            <Footer />
          ))}
        {pathName === "/home-two" && <FooterTwo />}
        {pathName === "/home-three" && <FooterThree />}

        <div className="scroll-top">
          <a href="#">
            <i className="ri-arrow-up-line"></i>
          </a>
        </div>
      </body>
    </html>
  );
}
