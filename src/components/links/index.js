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
    <nav className="lg:h-[140px] h-[80px] flex px-14 items-center justify-between ">
      <Link
        href={`/${locale === "en" ? "" : "?locale=fr"}`}
        className="relative md:w-[42px] md:h-[42px] w-[42px] h-[42px]"
      >
        <Image
          src="/images/Logo.png"
          fill
          quality={100}
          alt="Blü Creative Logo"
        />
      </Link>
      {/* Hamburger Menu Icon for Mobile */}
      <div className="lg:hidden">
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
        className={`fixed top-0 right-0 w-3/4 bg-gradient-to-b from-[#3366ff] to-[#090E1B]  text-neutral-25 bg-primary-500 h-full z-50 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out lg:hidden`}
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
                Book a Demo
              </button>
            </Link>
          </div>
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
          {/* <li>
            <Link
              href={`/litigation-Support${locale === "en" ? "" : "?locale=fr"}`}
              onClick={toggleMenu}
            >
              {t("Litigation-Support")}
            </Link>
          </li> */}
          <li>
            <Link
              href={`/neuro-vs-competition${
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
          <li>
            <div
              onClick={selectLanguage}
              className="text-3xl font-extrabold cursor-pointer"
              id={lang.toLowerCase()}
            >
              {lang}
            </div>
          </li>
        </ul>
      </div>
      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-8 text-xl items-center">
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
        {/* <li>
          <Link
            href={`/litigation-Support${locale === "en" ? "" : "?locale=fr"}`}
          >
            {t("Litigation-Support")}
          </Link>
        </li> */}
        <li>
          <Link
            href={`/neuro-vs-competition${locale === "en" ? "" : "?locale=fr"}`}
          >
            {t("Neuro-vs-Competition")}
          </Link>
        </li>
        <li>
          <Link href={`/fAQ${locale === "en" ? "" : "?locale=fr"}`}>
            {t("FAQ")}
          </Link>
        </li>
        <li>
          <div
            onClick={selectLanguage}
            className="text-3xl font-extrabold cursor-pointer"
            id={lang.toLowerCase()}
          >
            {lang}
          </div>
        </li>
      </ul>
      <Link
        className="hidden lg:flex"
        data-aos="fade-up"
        href={`/contact-us${locale === "fr" ? "?locale=fr" : ""}`}
      >
        <button className="text-neutral-25 bg-primary-500 md:rounded-lg md:px- md:py-2 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg">
          {t("contact_us")}
        </button>
      </Link>
    </nav>
  );
};

export default MobileMenu;
