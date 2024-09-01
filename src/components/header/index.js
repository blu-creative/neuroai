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
  );
}
