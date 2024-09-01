"use client";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";
import Links from "@/components/links";

export default function Header() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const { t } = useTranslation(searchParams.get("locale"));
  return (
    <div className="bg-[url('/images/header/Background.png')] text-neutral-25 bg-cover">
      <Links locale={locale} />
      <section className="flex flex-col items-center gap-12 md:pt-16 pt-0 md:pb-24 pb-12 px-12">
        <h1
          className="md:text-6xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {t("customize-your-journey")}
        </h1>
      </section>
    </div>
    // <header className="bg-primary-500 text-neutral-25 hidden md:flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-20 md:py-8">
    //   <a
    //     className="flex gap-2 items-center font-bold text-center md:text-left"
    //     href="/"
    //   >
    //     <div
    //       className="relative md:w-[42px] md:h-[42px] w-[42px] h-[42px]"
    //     >
    //     <Image
    //       src="/images/Logo.png"
    //       fill
    //       quality={100}
    //       alt="Mitch's Iron & Metal Logo"
    //     />
    //     </div>

    //   </a>

    //   <a className="block w-fit" href="#form">
    //     <button className="bg-primary-700 rounded-md px-6 py-3 font-extrabold text-md">
    //       {t("get_a_quote")}
    //     </button>
    //   </a>
    // </header>
  );
}
