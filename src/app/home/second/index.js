"use client";

import Link from "next/link";
import BlogPreview from "@/components/blog-preview";
import { useSearchParams, usePathname, useParams } from "next/navigation";

export default function Second({ posts, lang }) {
  // console.log(1, { lang });
  const searchParams = useSearchParams();

  const locale = searchParams.get("locale") || "en";

  return (
    <section className="flex flex-col items-center md:pt-6 lg:pt-10 pt-6 pb-2">
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl font-bold text-center text-primary-900 font-Exo"
      >
        <span>{locale === "en" ? "Check our latest" : "Découvrez nos derniers" } </span>
        <span className="text-primary-500">{locale === "en" ? "blog posts" : "articles de blog" }</span>
      </h1>
      <div className="flex flex-wrap gap-y-8 items-center justify-evenly w-full mt-14 mb-8">
        {posts.map((blog, index) => (
          <div
            data-aos={`fade-${index % 2 === 0 ? "up" : "down"}`}
            data-aos-delay={`${(index + 1) * 200}`}
            key={blog.id}
          >
            <BlogPreview {...blog} lang={lang} />
          </div>
        ))}
      </div>
      <Link href={`/blog?locale=${lang}`}>
        <button className="bg-primary-500 text-white px-8 py-2 rounded-lg font-bold text-xl">
          {locale === "en" ? "View all" : "Voir tout"}
        </button>
      </Link>
    </section>
  );
}
