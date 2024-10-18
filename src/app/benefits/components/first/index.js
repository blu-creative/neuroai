import Link from "next/link";

export default function First({ translate, locale }) {
  return (
    <div className=" bg-cover">
      <section className="flex flex-col items-center gap-12 py-16 px-8">
        <h1
          className="md:text-6xl text-3xl max-w-2xl font-bold text-center"
          data-aos="fade-up"
        >
          {/* {translate("about_us")} */}
          <span className="text-primary-900">
            {" "}
            {translate("WhatNeuroAIBringsPart1")}
          </span>
          <span className="text-primary-500">
            {" "}
            {translate("WhatNeuroAIBringsPart2")}
          </span>
        </h1>
        <h2
          className="md:text-2xl text-xs max-w-4xl font-bold text-center text-secondary-500"
          data-aos="fade-down"
        >
          {translate("integrating ")}
        </h2>

        <Link
          className="hidden md:flex"
          data-aos="fade-up"
          href={`/contact-us${locale === "fr" ? "?locale=fr" : ""}`}
        >
          <button className="bg-primary-500 text-neutral-25 md:rounded-lg md:px- md:py-2 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg">
            {translate("book_a_demo")}
          </button>
        </Link>
      </section>
    </div>
  );
}
