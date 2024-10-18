import Sections from "./sections";
const url = process.env.NEXT_PUBLIC_URL;

export default async function Blog({ params, searchParams }) {
  const { id } = params;
  const locale = searchParams.locale === "fr" ? "fr-CA" : "en";

  const res = await fetch(
    `${url}/api/articles/${id}?locale=${locale}&populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags`,
    {
      // Control caching behavior
      cache: "no-store", // Fetch fresh data on every request
      // next: { revalidate: 60 }, // Revalidate data every 60 seconds
    }
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
  if (post.tags?.length) {
    let filter = "";
    post.tags.forEach((element, index) => {
      filter += `filters[$or][${index}][tags][title][$eq]=${element.title}&`;
    });

    const related = await fetch(
      `${url}/api/articles?locale=${locale}&${filter}&populate=cover`,
      {
        // Control caching behavior
        cache: "no-store", // Fetch fresh data on every request
        // next: { revalidate: 60 }, // Revalidate data every 60 seconds
      }
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

  return (
    <main>
      <Sections post={post} />
    </main>
  );
}
