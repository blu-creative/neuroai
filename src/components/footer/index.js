"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";

export default function Footer() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("locale") || "en";
  const { t } = useTranslation(lang);
  return (
    <footer className="bg-neutral-800 text-neutral-25 px-6 py-8 md:px-20 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="w-full md:w-[344px] text-center md:text-left">
          <Link
            href={`/${lang === "fr" ? "?locale=fr" : ""}`}
            className="relative m-auto md:m-0 md:w-[42px] md:h-[42px] w-[42px] h-[42px] block"
          >
            <Image
              src="/images/Logo.png"
              fill
              quality={100}
              alt="Mitch's Iron & Metal Logo"
            />
          </Link>
          <p className="text-xs md:text-lg my-8 md:max-w-80 md:block hidden">
            3155 De Miniac Street Saint-Laurent, Montreal, QC H4S 1S9
          </p>
        </div>
        <ul
          className="hidden md:flex flex-col md:flex-row gap-4 lg:gap-8 text-lg md:text-xl md:mt-0 text-center md:text-left"
          data-aos="fade-up"
        >
          <li>
            <Link href={`/${lang === "fr" ? "?locale=fr" : ""}`}>
              {t("Home")}
            </Link>
          </li>
          <li>
            <Link href={`/what-we-buy${lang === "fr" ? "?locale=fr" : ""}`}>
              {t("what_we_buy")}
            </Link>
          </li>
          <li>
            <Link href={`/about-us${lang === "fr" ? "?locale=fr" : ""}`}>
              {t("about_us")}
            </Link>
          </li>
          <li>
            <Link href={`/get-an-estimate${lang === "fr" ? "?locale=fr" : ""}`}>
              {t("Contact")}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-between md:flex-row flex-col">
        <p className="text-xs md:text-lg text-center mt-6 md:text-left md:mt-0">
          {t("Copyright")}
        </p>
        <p className="text-xs md:text-lg text-center mt-6 md:text-right md:mt-0">
          {t("Designed")}
        </p>
      </div>
    </footer>
  );
}
