import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({ display: "swap", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolve Wealth",
  description: "Crypto Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar></NavBar>
        <div className="">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
