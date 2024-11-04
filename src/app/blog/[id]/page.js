import Sections from "./sections";
import { fromTo } from "@/utils/dateFilter";
const baseUrl = process.env.NEXT_PUBLIC_URL;

export async function generateMetadata({ params, searchParams }) {
  const { id } = params;
  const locale =
    searchParams.locale === "fr"
      ? "fr-CA"
      : searchParams.locale === "en"
      ? "en"
      : "";

  const res = await fetch(
    `${baseUrl}/api/articles/${id}?locale=${locale}&populate=seo`,
    { cache: "no-store" }
  );

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
  const locale =
    searchParams.locale === "fr"
      ? "fr-CA"
      : searchParams.locale === "en"
      ? "en"
      : "";

  const populate =
    "populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags&populate[5]=seo";

  const fromToFilter = fromTo();
  const res = await fetch(
    `${baseUrl}/api/articles/${id}?locale=${locale}&${populate}`,
    { cache: "no-store" }
  );

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

    const related = await fetch(
      `${baseUrl}/api/articles?locale=${locale}&${filter}&${fromToFilter}&populate=cover`,
      { cache: "no-store" }
    );

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
  const nextPost = await fetch(
    `${baseUrl}/api/articles?filters[publishedAt][$gt]=${post.publishedAt}&${fromToFilter}&sort=publishedAt:asc&pagination[limit]=1`,
    { cache: "no-store" }
  );

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
