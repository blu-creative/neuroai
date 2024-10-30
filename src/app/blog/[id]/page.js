// import Sections from "./sections";
// const url = process.env.NEXT_PUBLIC_URL;

// export let metadata = {
//   title: "Default Title",
//   description: "Default Description",
//   keywords: "Default Keywords",
// };

// export default async function Blog({ params, searchParams }) {
//   const { id } = params;
//   const locale =
//     searchParams.locale === "fr"
//       ? "fr-CA"
//       : searchParams.locale === "en"
//       ? "en"
//       : "";

//   const res = await fetch(
//     `${url}/api/articles/${id}?locale=${locale}&populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags&populate[5]=seo`,
//     {
//       // Control caching behavior
//       cache: "no-store", // Fetch fresh data on every request
//       // next: { revalidate: 60 }, // Revalidate data every 60 seconds
//     }
//   );

//   let post = {};
//   if (res.ok) {
//     try {
//       const object = await res.json();
//       console.log("object:", object);

//       post = object.data;
//       console.log("post:", post);
//       if (post.seo && post.seo.length > 0) {
//         metadata = {
//           title: post.seo[0].metaTitle || "",
//           description: post.seo[0].metaDescription || "",
//           keywords: post.seo[0].keywords || "",
//         };
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   if (post.tags?.length) {
//     let filter = "";
//     post.tags.forEach((element, index) => {
//       filter += `filters[$or][${index}][tags][title][$eq]=${element.title}&`;
//     });

//     const related = await fetch(
//       `${url}/api/articles?locale=${locale}&${filter}&populate=cover`,
//       {
//         // Control caching behavior
//         cache: "no-store", // Fetch fresh data on every request
//         // next: { revalidate: 60 }, // Revalidate data every 60 seconds
//       }
//     );

//     if (related.ok) {
//       try {
//         const object = await related.json();
//         post.related = object.data;
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   }

//   const nextPost = await fetch(
//     `${url}/api/articles?filters[publishedAt][$gt]=${post.publishedAt}&sort=publishedAt:asc&pagination[limit]=1`,
//     {
//       // Control caching behavior
//       cache: "no-store", // Fetch fresh data on every request
//       // next: { revalidate: 60 }, // Revalidate data every 60 seconds
//     }
//   );

//   if (nextPost.ok) {
//     try {
//       const object = await nextPost.json();
//       if (object.data.length) {
//         post.nextId = object.data[0].documentId;
//       }
//       post.next = object.data;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <main>
//       <Sections post={post} locale={locale} />
//     </main>
//   );
// }

import Sections from "./sections";
const url = process.env.NEXT_PUBLIC_URL;

export async function generateMetadata({ params, searchParams }) {
  const { id } = params;
  const locale =
    searchParams.locale === "fr"
      ? "fr-CA"
      : searchParams.locale === "en"
      ? "en"
      : "";

  const res = await fetch(
    `${url}/api/articles/${id}?locale=${locale}&populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags&populate[5]=seo`,
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

  const res = await fetch(
    `${url}/api/articles/${id}?locale=${locale}&populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags&populate[5]=seo`,
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
      filter += `filters[$or][${index}][tags][title][$eq]=${element.title}&`;
    });

    const related = await fetch(
      `${url}/api/articles?locale=${locale}&${filter}&populate=cover`,
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
    `${url}/api/articles?filters[publishedAt][$gt]=${post.publishedAt}&sort=publishedAt:asc&pagination[limit]=1`,
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
