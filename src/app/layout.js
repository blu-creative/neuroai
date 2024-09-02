import { Suspense } from "react";
import { AOSInit } from "@/hooks/useAos";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Scroll from "@/components/scroll";

export const metadata = {
  title: "Blü Creative",
  description:
    "Site Designed & Maintained by Blu Creative Digital Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <Suspense fallback={<div>Loading...</div>}>
          <AOSInit />
          <Header />
          <>{children}</>
          <Footer />
          <Scroll />
        </Suspense>
      </body>
    </html>
  );
}
