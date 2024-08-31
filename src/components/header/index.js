"use client";
import Link from "next/link";

import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("locale") || "en";
  const { t } = useTranslation(searchParams.get("locale"));
  return (
    <header className="bg-primary-500 text-neutral-25 hidden md:flex flex-col md:flex-row items-center justify-between px-4 py-4 md:px-20 md:py-8">
      <a
        className="flex gap-2 items-center font-bold text-center md:text-left"
        href="tel:5143337800"
      >
        <i className="icon-mim-phone block text-3xl md:text-4xl" />
        <p className="text-xl md:text-2xl">514 333 7800</p>
      </a>
      <a className="block w-fit" href="#form">
        <button className="bg-primary-700 rounded-md px-6 py-3 font-extrabold text-md">
          {t("get_a_quote")}
        </button>
      </a>
    </header>
  );
}
