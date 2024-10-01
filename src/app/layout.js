import { Data } from "@/context/context";
import { Ubuntu } from "next/font/google";
import Head from "../pageComponents/header";
import Footer from "../pageComponents/footer";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Locco Biz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} antialiased`}>
        <Data>
          <Head />
          <div className="min-h-screen">{children}</div>

          <Footer />
        </Data>
      </body>
    </html>
  );
}
