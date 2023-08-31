"use client";
import "@/app/globals.css";
import NavBar from "@/components/shared/navbar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import { Suspense, useEffect } from "react";
import "react-h5-audio-player/lib/styles.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../styles/lib/all.min.css";
import "../styles/scss/style.scss";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"], variable: "--body-font" });

export const metadata: Metadata = {
  title: "Home | Online Radio NextJs Template",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <html lang="en">
      <body className={`${pathname === "/home-three" ? "home-red" : " "}`}>
        <NavBar />
        <Suspense fallback={<Loading />}>
          <main className="site-body">{children}</main>
        </Suspense>
      </body>
    </html>
  );
}
