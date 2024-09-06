"use client";
import { useSearchParams, usePathname } from "next/navigation";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import Links from "@/components/links";
import Link from "next/link";

export default function Header({ text }) {
  const pathname = usePathname();
  const list = {
    "/": "Accessibility compliance and remediation at your fingertips with Neuro.AI",
    "/features": "Customize your journey",
    "/accessibility": "Learn about accessibility",
    "/contact-us": "Let’s address accessibility",
    "/benefits": "Benefits for all users",
    "/neuro-vs-competition": "Why choose Neuro.AI",
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
    <header className="text-neutral-25 bg-gradient-to-b from-[#001549] to-[#090E1B]">
      <Links locale={locale} />
      <div
        className={`flex items-center xl:pt-28 pt-4 pb-36 relative px-24
    ${isHome ? "xl:justify-start justify-center" : "justify-center"}
    `}
      >
        <h1
          className={`lg:text-4xl xl:text-6xl text-2xl max-w-3xl font-bold ${
            isHome
              ? "lg:text-4xl xl:text-left lg:text-center text-center"
              : "text-center"
          }`}
          data-aos="fade-up"
        >
          {list[pathname] || "Customize your journey"}
        </h1>
        {isHome && (
          <>
            <div className="flex justify-center absolute right-0 xl:right-60 top-48 xl:top-10 lg:top-32 md:top-24 sm:top-24 xl:left-auto left-1/2 transform xl:translate-x-0 -translate-x-1/2">
              <div className="xl:block hidden w-60 h-60 rounded-full bg-primary-900 opacity-90 absolute -top-20 right-40" />
              <div className="relative  xl:w-[288px] w-[144px] xl:h-[602px] h-[300px]   lg:w-[192px] lg:h-[401px]">
                <Image
                  fill
                  src="/images/header/Neuro-Menu.gif"
                  alt="phone"
                  quality={100}
                />
              </div>
            </div>

            <div className="absolute left-30 -bottom-16 font-bold text-xl text-neutral-50 xl:flex hidden gap-10">
              {textList.map((text, i) => (
                <Link
                  key={text}
                  className="bg-primary-500 [&:nth-child(odd)]:bg-primary-800 rounded-xl"
                  href={`/benefits${locale === "en" ? "" : "?locale=fr"}`}
                  data-aos={i % 2 ? "flip-right" : "flip-left"}
                >
                  <div
                    key={text}
                    className="w-44 h-32 min-w-44 min-h-32 flex items-center justify-center"
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
