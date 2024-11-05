import Sections from "./sections";
import { urlBuilder } from "@/utils/urlBuilder";

export async function generateMetadata({ params, searchParams }) {
  const { id } = params;
  const { locale } = searchParams;

  const url = urlBuilder({ locale, id, populate: ["seo"] });

  const res = await fetch(url, { cache: "no-store" });

  if (res.ok) {
    try {
      const data = await res.json();
      const post = data.data;

      // Define dynamic metadata based on fetched SEO data or defaults
      const metadata = {
        title: post.seo?.[0]?.metaTitle || "Default Title",
        description: post.seo?.[0]?.metaDescription || "Default Description",
        keywords: post.seo?.[0]?.keywords || "Default Keywords",
      };
      return metadata;
    } catch (error) {
      console.error("Error generating metadata:", error);
    }
  }

  // Fallback metadata in case of fetch failure
  return {
    title: "Default Title",
    description: "Default Description",
    keywords: "Default Keywords",
  };
}

export default async function Blog({ params, searchParams }) {
  const { id } = params;
  const { locale } = searchParams;

  const url = urlBuilder({
    locale,
    id,
    populate: ["blocks.file", "blocks.files", "cover", "author", "tags", "seo"],
  });
  const res = await fetch(url, { cache: "no-store" });

  let post = {};
  if (res.ok) {
    try {
      const object = await res.json();
      post = object.data;
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch related articles based on tags if available
  if (post.tags?.length) {
    let filter = "";
    post.tags.forEach((element, index) => {
      filter += `filters[$or][${index + 2}][tags][title][$eq]=${
        element.title
      }&`;
    });

    const url = urlBuilder({ locale, filter });

    const related = await fetch(url, { cache: "no-store" });

    if (related.ok) {
      try {
        const object = await related.json();
        post.related = object.data;
      } catch (error) {
        console.error(error);
      }
    }
  }

  // Fetch the next post

  const nextUrl = urlBuilder({
    locale,
    filter: `filters[publishedAt][$gt]=${post.publishedAt}`,
    size: 1,
    populate: [],
    sortType: "asc",
  });

  const nextPost = await fetch(nextUrl, { cache: "no-store" });

  if (nextPost.ok) {
    try {
      const object = await nextPost.json();
      if (object.data.length) {
        post.nextId = object.data[0].documentId;
      }
      post.next = object.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <Sections post={post} locale={locale} />
    </main>
  );
}
