import Image from "next/image";
import Link from "next/link";

export default function Second({ translate, locale }) {
  return (
    <section className="flex justify-center gap-10 flex-col items-center text-center mt-8">
      <h1 className="text-6xl font-bold font-Exo" data-aos="fade-up">
        <span className="text-primary-900">Automated </span>
        <span className="text-primary-500">Remediation</span>
      </h1>
      <p className="font-bold text-xl max-w-xl" data-aos="fade-down">
        By leveraging Generative AI, Neuro.AI automatically monitors and
        remediates websites to meet WCAG standards while creating personalized
        user profiles tailored to individual cognitive and sensory needs.
      </p>

      <Link
        className="hidden md:flex"
        data-aos="fade-up"
        href={`/contact-us${locale === "fr" ? "?locale=fr" : ""}`}
      >
        <button
          data-aos="fade-up"
          className="bg-primary-500 text-neutral-50 w-fit px-5 py-1 rounded-lg font-medium text-xl"
        >
          {translate("book_a_demo")}
        </button>
      </Link>

      <Image
        data-aos="flip-left"
        width={743}
        height={610}
        quality={100}
        alt="img"
        src="/images/features/Remediation.gif"
      />
    </section>
  );
}
