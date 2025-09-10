import { Geist, Geist_Mono } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "@/components/navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Star Security Services",
  description: "Star Security Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
