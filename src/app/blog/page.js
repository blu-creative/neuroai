import Head from "next/head";
import First from "./components/first";

export default async function Blog({ searchParams }) {
  const url = process.env.NEXT_PUBLIC_URL;
  const locale = searchParams.locale === "fr" ? "fr-CA" : "en";

  // const res = await fetch(
  //   `${url}/api/articles?locale=${locale}&populate=cover&pagination[page]=1&pagination[pageSize]=10&sort=publishedAt:desc`,
  //   {
  //     // Control caching behavior
  //     cache: "no-store", // Fetch fresh data on every request
  //     // next: { revalidate: 60 }, // Revalidate data every 60 seconds
  //   }
  // );

  //with from to
  // const res = await fetch(
  //   `${url}/api/articles?locale=${locale}&populate[cover]=true&populate=from&populate=to&pagination[page]=1&pagination[pageSize]=10&sort=publishedAt:desc`,
  //   {
  //     cache: "no-store",
  //   }
  // );

  // GET /articles?filters[$or][0][from][$null]=true&filters[$or][1][from][$gte]=2023-10-01&filters[$or][0][to][$null]=true&filters[$or][1][to][$lte]=2023-12-31

  const res = await fetch(
    `${url}/api/articles?locale=${locale}&populate=*&pagination[page]=1&pagination[pageSize]=10&sort=publishedAt:desc`,
    {
      cache: "no-store",
    }
  );

  let posts = [];
  let seo = { title: "Default Title", description: "Default Description" }; // Default SEO values

  if (res.ok) {
    try {
      const articles = await res.json();
      const currentDate = new Date();

      articles.data.forEach((article) => {
        let fromDate = new Date(article.from);
        let toDate = article.to ? new Date(article.to) : null;

        // Check if currentDate is between fromDate and toDate (inclusive)
        const isWithinRange =
          fromDate <= currentDate && (!toDate || currentDate <= toDate);

        if (isWithinRange) {
          // console.log("Show article:", article);
          posts.push(article);
          if (article.seo && article.seo.length > 0) {
            const seoData = article.seo[0];
            seo = {
              title: seoData.metaTitle || "",
              description: seoData.metaDescription || "",
              keywords: seoData.keywords || "",
            };
          }
        } else {
          console.log("Article is not scheduled to display today.");
        }
      });
    } catch (error) {
      console.error("Error processing articles:", error);
    }
  }

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords} />
      </Head>
      <main>
        <First
          big={posts[0]}
          latests={posts.slice(1, 3)}
          blogList={posts.slice(3, posts.length)}
        />
      </main>
    </>
  );
}
