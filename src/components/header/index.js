"use client";
import { useTranslation } from "@/hooks/useTranslation";
import { useSearchParams, usePathname } from "next/navigation";
import Links from "@/components/links";

export default function Header({ text }) {
  const pathname = usePathname();
  const list = {
    "/": "Customize your journey",
    "/accessibility": "Learn about accessibility",
    "/contact-us": "Let’s address accessibility",
  };
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale") || "en";
  const { t } = useTranslation(searchParams.get("locale"));
  return (
    <header className="text-neutral-25 bg-gradient-to-b from-[#001549] to-[#090E1B] ">
      <Links locale={locale} />
      <div className="flex items-center justify-center pt-28 pb-36">
        <h1
          className="md:text-7xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {/* {t("customize-your-journey")} */}
          {list[pathname]}
        </h1>
      </div>
    </header>
  );
}
