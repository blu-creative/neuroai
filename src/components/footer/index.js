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
      <div className="md:my-16 my-12 flex mx-6 flex-col md:flex-row justify-evenly items-center gap-6">
        <div className="font-bold max-w-[452px] w-[452px] flex flex-col gap-10">
          <h1 className="text-primary-900 text-6xl w-fit whitespace-nowrap">
            Request a Demo
          </h1>
          <p className="text-neutral-700 text-justify text-xl ">
            For more information or to schedule a consultation, fill this form
            or contact us at your convenience.
          </p>
          {isContact ? (
            <>
              <a href="tel:5143337800">
                <div className="text-justify text-xl ">
                  <div className="flex items-start" data-aos="fade-up">
                    <i className="icon-mim-phone block text-xl mr-3 font-black text-primary-900" />
                    <p className="text-primary-900">(514) 333-7800</p>
                  </div>
                </div>
              </a>
              <a href="mailto:sales@blucreative.dev">
                <div className="text-justify text-xl ">
                  <div className="flex items-start" data-aos="fade-up">
                    <i className="icon-mim-email block text-xl mr-3 font-black text-primary-900" />
                    <p className="text-primary-900">sales@blucreative.dev</p>
                  </div>
                </div>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
        <Form />
      </div>
      <div className="bg-primary-800 pt-12 px-20  text-neutral-50 font-bold">
        <div className="flex justify-between items-start">
          <Link href="/contact-us">
            <Image src="/images/footerLogo.png" width={200} height={60} />
            <button className="mt-12 bg-primary-900 text-xl px-4 py-2 rounded-lg">
              Book a Demo
            </button>
          </Link>
          <div className="flex flex-col gap-3">
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
          <div className="flex flex-col gap-3">
            <p className="text-xl">Information</p>
            <Link className="font-semibold text-lg" href="/accessibility">
              Accessibility
            </Link>
            {/* <Link className="font-semibold text-lg" href="/accessibility">
              American Accessibility Act
            </Link>
            <Link className="font-semibold text-lg" href="/accessibility">
              Accessible Canada Act
            </Link> */}
            <Link className="font-semibold text-lg" href="/fAQ">
              Frequent Asked Questions
            </Link>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-xl">Contact Us</p>
            <a
              className="font-semibold text-lg+ flex items-center gap-2"
              href="tel:+18559373726"
            >
              <i className="icon-mim-phone" /> <span>1 (855) 937-3726</span>
            </a>
            <a
              className="font-semibold text-lg+ flex items-center gap-2"
              href="mailto:sales@blucreative.dev"
            >
              <i className="icon-mim-email" />
              <span>sales@blucreative.dev</span>
            </a>
            <a
              className="font-semibold text-lg+ flex items-center gap-2"
              href="https://www.linkedin.com"
            >
              <i className="icon-mim-linedin text-xl" />
              {/* <span>sales@blucreative.dev</span> */}
            </a>
          </div>
        </div>
        <p className="font-semibold text-lg py-14">
          {"Copyright © 2024 Blü Creative. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
