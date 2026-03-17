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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
ml('account', '1276449');
            `.trim(),
          }}
        />
      </head>
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
