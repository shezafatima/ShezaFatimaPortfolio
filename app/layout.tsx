import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Conatainer from "./components/Container";
import Navbar from "./components/Navbar";
import ChatBot from "@/app/components/ChatBot";
import LoaderWrapper from "./components/LoaderWrapper";

const redHat = Red_Hat_Display({
  weight: ["400", "500", "600", "700","800", "900"],
  style: ["normal", "italic"],
  subsets:["latin"]
});


export const metadata: Metadata = {
  title: "Sheza Fatima",
  description: "My Portfolio",
  keywords: ["sheza fatima","shezafatima", "portfolio",  "fullstack developer", "AI developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="EvRWGZGw5PPmbFHF-oTInDfxdztnPohBZBXWbFZFcfY" />
      </head>
      <body
        className={`${redHat.className}  antialiased bg-[#0D031C]`}
      >
        <LoaderWrapper>
          <Conatainer>
            <Navbar/>
          </Conatainer>
          {children}
          <ChatBot />
        </LoaderWrapper>
      </body>
    </html>
  );
}
