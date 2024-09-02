import Links from "@/components/links";
import Link from "next/link";

export default function First({ translate, locale }) {
  return (
    <section className="flex flex-col md:items-start items-center px-16 gap-12 md:pt-16 pt-0 md:pb-24 pb-12">
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl max-w-2xl font-extrabold md:text-left text-center"
      >
        {translate("trusted_leader")}
      </h1>
      <h2
        data-aos="fade-up"
        className="md:text-2xl text-base max-w-2xl font-bold md:text-left text-center"
      >
        {translate("full_service_company")}
      </h2>
      <Link
        data-aos="fade-up"
        href={`/contact-us${locale === "fr" ? "?locale=fr" : ""}`}
      >
        <button className="bg-primary-500 md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg">
          {translate("contact_us")}
        </button>
      </Link>
    </section>
  );
}
