import { IBM_Plex_Mono, Catamaran } from "next/font/google";

import "./globals.css";
import Logo from "./Logo";
import Footer from "./footer/page";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import { ScrollToTopButton } from "./ToTopButton";

const ibm_plex_mono = IBM_Plex_Mono({
  preload: true,
  variable: "--font-ibm_plex_mono",
  weight: ["600", "400"],
  subsets: ["latin"],
});

const catamaran = Catamaran({
  preload: true,
  variable: "--font-catamaran",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hundeschule",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${ibm_plex_mono.variable} ${catamaran.variable}`}
    >
      <body className="bg-light-blue overflow-x-hidden">
        <TopBar />
        <nav className="container mx-auto">
          <Logo />
          <Navbar />
        </nav>
        <main>{children}</main>
        <ScrollToTopButton />
        <footer className="bg-white h-80 w-screen">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
