import Links from "@/components/links";

export default function First({ translate, locale }) {
  return (
    <div className="bg-[url('/images/contact/top-bg.png')] text-neutral-25 bg-cover">
      <Links locale={locale} />
      <section className="flex flex-col items-center gap-12 pt-16 pb-24  px-8">
        <h1
          className="md:text-6xl text-3xl max-w-2xl font-extrabold"
          data-aos="fade-down"
        >
          {translate("get_in_touch")}
        </h1>
        <h2
          className="md:text-2xl text-xs max-w-2xl font-bold text-center"
          data-aos="fade-up"
        >
          {translate("customer_confidence")}
        </h2>
      </section>
    </div>
  );
}
