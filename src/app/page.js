import First from "./home/first";
import Second from "./home/second";
import { useTranslation } from "@/hooks/useTranslation";
import { fromTo } from "@/utils/dateFilter";

export default async function Home({ searchParams }) {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const { locale } = searchParams;
  let lang = "en";
  if (typeof locale === "string") {
    lang = locale;
  }
  const { t } = useTranslation(lang);

  const localeLang = locale === "fr" ? "fr-CA" : "en";

  const fromToFilter = fromTo();

  const url = `${baseUrl}/api/articles?locale=${localeLang}&populate=cover&${fromToFilter}&pagination[page]=1&pagination[pageSize]=3&sort=publishedAt:desc`;

  const res = await fetch(url, {
    // Control caching behavior
    cache: "no-store", // Fetch fresh data on every request
    // next: { revalidate: 60 }, // Revalidate data every 60 seconds
  });

  let posts = [];
  if (res.ok) {
    try {
      const object = await res.json();
      posts = object.data;
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <First translate={t} locale={lang} />
      <Second posts={posts} lang={lang} />
    </main>
  );
}
