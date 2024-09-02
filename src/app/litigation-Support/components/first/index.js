import Link from "next/link";

export default function First({ translate, locale }) {
  return (
    <div className=" bg-cover">
      <section className="flex flex-col items-center gap-12 py-16 px-8">
        <h1
          className="md:text-6xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {/* {translate("about_us")} */}
          <span className="text-primary-800"> litigation </span>
          <span className="text-primary-500"> Support</span>
        </h1>
      </section>
    </div>
  );
}
