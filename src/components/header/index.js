"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import Links from "@/components/links";
import Link from "next/link";

export default function Header({ text }) {
  const pathname = usePathname();
  const list = {
    "/": "Accessibility compliance and remediation at your fingertips",
    "/features": "Customize your journey",
    "/accessibility": "Learn about accessibility",
    "/contact-us": "Let’s address accessibility",
    "/benefits": "Benefits for all users",
    "/neuro-vs-competition": "Why choose Neuro",
    "/fAQ": "Frequently Asked Questions",
    // "/litigation-Support": "Litigation Support",
  };
  const isHome = pathname === "/";
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const { t } = useTranslation(searchParams.get("locale"));

  const textList = [
    "Inclusion and Equity",
    "Improved User Experience",
    "Minor Remediation Powered by AI",
    "Continuous Profile Generation",
  ];

  return (
    // <header className="text-neutral-25 bg-gradient-to-b from-[#001549] to-[#090E1B]">
    <header className="text-neutral-25  bg-gradient-to-b from-[#001549] to-[#090E1B]">
      <Links locale={locale} />
      <div
        className={`flex items-center pt-28 pb-36 relative px-24
        ${isHome ? "justify-start" : "justify-center"}
        `}
      >
        <h1
          className={`md:text-7xl text-3xl max-w-2xl font-extrabold ${
            isHome ? "text-left" : "text-center"
          }`}
          data-aos="fade-up"
        >
          {/* {t("customize-your-journey")} */}
          {list[pathname] || "Customize your journey"}
        </h1>
        {isHome && (
          <>
            <div className="absolute right-60 top-10">
              <div className="w-60 h-60 rounded-full bg-primary-900 opacity-90 absolute -top-20 right-40" />
              {/* <div className="h-[230px] w-[460px] bg-neutral-0 rounded-tl-full rounded-tr-full absolute bottom-16 -right-20" /> */}
              <div className="relative w-[272px] h-[570px]">
                <Image
                  fill
                  src="/images/header/Phone.png"
                  alt="phone"
                  quality={100}
                />
              </div>
            </div>
            <div className="absolute left-30 -bottom-16 font-CerebriSansPro font-bold text-xl text-neutral-50 flex gap-10">
              {textList.map((text) => (
                <Link
                  key={text}
                  className="bg-primary-500 [&:nth-child(odd)]:bg-primary-800 rounded-xl"
                  href={`/benefits${locale === "en" ? "" : "?locale=fr"}`}
                >
                  <div
                    key={text}
                    className={`w-44 h-32 min-w-44 min-h-32 flex items-center justify-center  `}
                  >
                    <p className="text-center px-4">{text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </header>
  );
}
