import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Conatainer from "./components/Container";
import Navbar from "./components/Navbar";

const redHat = Red_Hat_Display({
  weight: ["400", "500", "600", "700","800", "900"],
  style: ["normal", "italic"],
  subsets:["latin"]
});


export const metadata: Metadata = {
  title: "Sheza Fatima",
  description: "My Portfolio",
  keywords: ["sheza fatima", "portfolio", "website", "frontend"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redHat.className}  antialiased bg-[#0D031C]`}
      >
        <Conatainer>
          <Navbar/>

          
        </Conatainer>
        {children}
      </body>
    </html>
  );
}
