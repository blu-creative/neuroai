import Link from "next/link";
import Links from "@/components/links";

export default function First({ translate, locale }) {
  return (
    <div className="bg-[url('/images/what-we-buy/top-bg.png')] text-neutral-25 bg-cover">
      <Links locale={locale} />
      <section className="flex flex-col items-center gap-12 pt-16 md:pb-24 pb-12 px-12">
        <h1
          className="md:text-6xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {translate("we_purchase_various_scrap")}
        </h1>
        <h2
          data-aos="fade-down"
          className="md:text-2xl text-xs max-w-2xl font-bold text-center"
        >
          {translate("from_general_public")}
        </h2>
        <Link
          data-aos="fade-up"
          href={`/get-an-estimate${locale === "fr" ? "?locale=fr" : ""}`}
        >
          <button className="bg-primary-500 md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg">
            {translate("contact_us")}
          </button>
        </Link>
      </section>
    </div>
  );
}
