"use client";
import Image from "next/image";

import Form from "@/components/form";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isContact = pathname === "/contact-us";
  const isNeuro = pathname === "/neuro-vs-competition";
  return (
    <footer data-aos="fade-up" className={isNeuro ? "mt-4" : "mt-24"}>
      <div className="md:my-16 my-12 flex flex-col justify-center items-center gap-6 px-4 md:px-0">
        <div className="font-bold max-w-[452px] w-full md:w-[452px] flex flex-col gap-10 items-center">
          <h1 className="text-primary-900 md:text-6xl text-4xl w-full text-center whitespace-nowrap">
            Request a Demo
          </h1>
          <p className="text-neutral-700 text-center text-xl mx-4">
            For more information or to schedule a consultation, fill this form
            or contact us at your convenience.
          </p>
          {isContact && (
            <>
              <a href="tel:5143337800">
                <div className="text-center text-xl">
                  <div
                    className="flex justify-center items-center"
                    data-aos="fade-up"
                  >
                    <i className="icon-mim-phone block text-xl mr-3 font-black text-primary-900" />
                    <p className="text-primary-900">(514) 333-7800</p>
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
      <div className="bg-primary-800 pt-12 px-20 text-neutral-50 font-bold">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
          <div className="flex flex-col items-center lg:items-start">
            <Link href="/">
              <Image src="/images/footerLogo.png" width={200} height={60} />
            </Link>
            <Link href="/contact-us">
              <button className="mt-12 bg-primary-900 text-xl px-4 py-2 rounded-lg lg:mt-5 lg:ml-4">
                Book a Demo
              </button>
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">About Neuro.AI</p>
            <Link className="font-semibold text-lg" href="/features">
              Features
            </Link>
            <Link className="font-semibold text-lg" href="/benefits">
              Benefits
            </Link>
            <Link
              className="font-semibold text-lg"
              href="/neuro-vs-competition"
            >
              Neuro.AI vs Competition
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">Information</p>
            <Link className="font-semibold text-lg" href="/accessibility">
              Accessibility
            </Link>
            <Link className="font-semibold text-lg" href="/fAQ">
              Frequent Asked Questions
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            <p className="text-xl">Contact Us</p>
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
