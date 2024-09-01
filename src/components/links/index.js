"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useTranslation } from "@/hooks/useTranslation";

const MobileMenu = ({ locale = "en" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLang] = useState(locale === "en" ? "FR" : "EN");
  const { t } = useTranslation(locale === "en" ? "en" : "fr");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (newLocale) => {
    let lng = "EN";
    if (newLocale === "en") {
      lng = "FR";
    }
    setLang(lng);
    router.push(`${pathname}?locale=${newLocale}`);
  };

  const selectLanguage = (e) => {
    changeLanguage(e.currentTarget.id);
  };

  return (
    <nav className="h-[140px] flex px-14 items-center justify-between">
      <Link
        href={`/${locale === "en" ? "" : "?locale=fr"}`}
        className="relative md:w-[42px] md:h-[42px] w-[42px] h-[42px]"
      >
        <Image
          src="/images/Logo.png"
          fill
          quality={100}
          alt="Mitch's Iron & Metal Logo"
        />
      </Link>
      {/* Hamburger Menu Icon for Mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-3xl focus:outline-none relative"
        >
          ☰
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 w-3/4 bg-neutral-800 text-neutral-25 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button
            onClick={toggleMenu}
            className="text-3xl text-neutral-25 focus:outline-none"
          >
            &times;
          </button>
        </div>
        <ul className="flex flex-col items-center gap-6 mt-20">
          <li>
            <Link
              href={`/benefits${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("Benefits")}
            </Link>
          </li>
          <li>
            <Link
              href={`/features${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("Features")}
            </Link>
          </li>

          <li>
            <Link
              href={`/accessibility${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("Accessibility")}
            </Link>
          </li>
          <li>
            <Link
              href={`/litigation-Support${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("Litigation-Support")}
            </Link>
          </li>
          <li>
            <Link
              href={`/Neuro-vs-Competition${
                locale === "en" ? "" : "?locale=fr"
              }`}
              onClick={toggleMenu}
            >
              {t("Neuro-vs-Competition")}
            </Link>
          </li>
          <li>
            <Link
              href={`/fAQ${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("FAQ")}
            </Link>
          </li>
          {/* <li>
            <div
              onClick={selectLanguage}
              className="text-3xl font-extrabold cursor-pointer"
              id={lang.toLowerCase()}
            >
              {lang}
            </div>
          </li> */}
        </ul>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 text-xl items-center">
        <li>
          <Link href={`/benefits${locale === "en" ? "" : "?locale=fr"}`}>
            {t("Benefits")}
          </Link>
        </li>
        <li>
          <Link href={`/features${locale === "en" ? "" : "?locale=fr"}`}>
            {t("Features")}
          </Link>
        </li>

        <li>
          <Link href={`/accessibility${locale === "en" ? "" : "?locale=fr"}`}>
            {t("Accessibility")}
          </Link>
        </li>
        <li>
          <Link
            href={`/litigation-Support${locale === "en" ? "" : "?locale=fr"}`}
          >
            {t("Litigation-Support")}
          </Link>
        </li>
        <li>
          <Link
            href={`/Neuro-vs-Competition${locale === "en" ? "" : "?locale=fr"}`}
          >
            {t("Neuro-vs-Competition")}
          </Link>
        </li>
        <li>
          <Link href={`/fAQ${locale === "en" ? "" : "?locale=fr"}`}>
            {t("FAQ")}
          </Link>
        </li>
        {/* <li>
          <div
            onClick={selectLanguage}
            className="text-3xl font-extrabold cursor-pointer"
            id={lang.toLowerCase()}
          >
            {lang}
          </div>
        </li> */}
      </ul>
      <Link
        className="hidden md:flex"
        data-aos="fade-up"
        href={`/get-an-estimate${locale === "fr" ? "?locale=fr" : ""}`}
      >
        <button className="bg-primary-500 md:rounded-lg md:px- md:py-2 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg">
          {t("contact_us")}
        </button>
      </Link>
    </nav>
  );
};

export default MobileMenu;
