"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";
import Links from "@/components/links";

export default function Header() {
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const { t } = useTranslation(searchParams.get("locale"));
  return (
    <header className="text-neutral-25 bg-gradient-to-b from-[#001549] to-[#090E1B] ">
      <Links locale={locale} />
      <div className="flex items-center justify-center py-32">
        <h1
          className="md:text-7xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {t("customize-your-journey")}
        </h1>
      </div>
    </header>
  );
}
