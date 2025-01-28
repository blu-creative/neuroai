"use client";
import { usePathname, useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "@/hooks/useTranslation";
import Form from "@/components/form";

export default function Footer() {
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();

  const { t } = useTranslation(searchParams.get("locale"));

  const { id } = params;
  const isBlog = pathname === `/blog/${id}` || pathname === "/blog";
  const isContact = pathname === "/contact-us";
  const isNeuro = pathname === "/neuro-vs-competition";
  return (
    <footer data-aos="fade-up" className={isNeuro ? "mt-4" : "mt-24"}>
      {!isBlog ? (
        <div className="md:my-16 my-12 flex flex-col justify-center items-center gap-6 px-4 md:px-0">
          <div
            className="font-bold
           max-w-[600px] w-full md:w-[600px] 
           flex flex-col gap-10 items-center"
          >
            <h1 className="text-primary-900 md:text-6xl text-4xl w-full text-center whitespace-nowrap">
              {t("RequestDemoTitle")}
            </h1>
            <p className="text-neutral-700 text-center text-xl mx-4 w-full">
              {t("RequestDemoDescription")}
            </p>
            {isContact && (
              <>
                <a href="tel:18559373726">
                  <div className="text-center text-xl">
                    <div
                      className="flex justify-center items-center"
                      data-aos="fade-up"
                    >
                      <i className="icon-mim-phone block text-xl mr-3 font-black text-primary-900" />
                      <p className="text-primary-900">1-855-937-3726</p>
                    </div>
                  </div>
                </a>
                <a href="mailto:sales@blucreative.dev">
                  <div className="text-center text-xl">
                    <div
                      className="flex justify-center items-center"
                      data-aos="fade-up"
                    >
                      <i className="icon-mim-email block text-xl mr-3 font-black text-primary-900" />
                      <p className="text-primary-900">sales@blucreative.dev</p>
                    </div>
                  </div>
                </a>
              </>
            )}
          </div>
          <Form />
        </div>
      ) : null}
      <div className="bg-primary-800 pt-12 px-20 text-neutral-50 font-bold">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/">
              <Image
                src="/images/footerLogo.png"
                width={200}
                height={60}
                alt="Blü Creative"
              />
            </Link>
            <Link href="/contact-us">
              <button className="mt-12 bg-primary-900 text-xl px-4 py-2 rounded-lg lg:mt-5 lg:ml-4">
                {t("book_a_demo")}
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">{t("AboutNeuroAI")}</p>
            <Link className="font-semibold text-lg" href="/features">
              {t("Features")}
            </Link>
            <Link className="font-semibold text-lg" href="/benefits">
              {t("Benefits")}
            </Link>
            <Link
              className="font-semibold text-lg"
              href="/neuro-vs-competition"
            >
              {t("NeuroAIvsCompetition")}
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">{t("Information")}</p>
            <Link className="font-semibold text-lg" href="/accessibility">
              {t("Accessibility")}
            </Link>
            <Link className="font-semibold text-lg" href="/fAQ">
              {t("FAQ_Frequently")}
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">{t("ContactUs")}</p>
            <a
              className="font-semibold text-lg flex items-center gap-2"
              href="tel:+18559373726"
            >
              <i className="icon-mim-phone" /> <span>1 (855) 937-3726</span>
            </a>
            <a
              className="font-semibold text-lg flex items-center gap-2"
              href="mailto:sales@blucreative.dev"
            >
              <i className="icon-mim-email" />
              <span>sales@blucreative.dev</span>
            </a>
            <a
              className="font-semibold text-lg flex items-center gap-2"
              href="https://www.linkedin.com"
            >
              <i className="icon-mim-linedin text-xl" />
            </a>
          </div>
        </div>
        <p className="font-semibold text-lg py-14 text-center lg:text-left">
          {"Copyright © 2024 Blü Creative. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
