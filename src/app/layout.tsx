import React from "react"
import type { Metadata } from "next";
import "./globals.css";
import Home from "./page";

import LeftNav from "../components/navBar/LeftNav/page";
import TopNav from "../components/navBar/TopNav/page";
import RightNav from "../components/navBar/RightNav/page";

import { AntdRegistry } from '@ant-design/nextjs-registry';

export const metadata: Metadata = {
  title: "ChainaaS",
  description: "Chain as a Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <AntdRegistry>
          <section className="w-[100vw] h-[100vh] flex">
            <LeftNav />
            <section className="w-[93vw] h-full flex flex-col">
              <TopNav />
              <div className="w-full h-[94vh] overflow-hidden">
                {children}
              </div>
            </section>
            <RightNav />
          </section>
        </AntdRegistry>
      </body>
    </html>
  );
}
