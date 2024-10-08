import First from "./components/first";

export default async function Blog() {
  const url = process.env.NEXT_PUBLIC_URL;

  const res = await fetch(
    `${url}api/articles?populate=cover&pagination[page]=1&pagination[pageSize]=10`,
    {
      // Control caching behavior
      cache: "no-store", // Fetch fresh data on every request
      // next: { revalidate: 60 }, // Revalidate data every 60 seconds
    }
  );

  let posts = [];
  if (res.ok) {
    try {
      const object = await res.json();
      posts = object.data;
      console.log(object);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main>
      <First
        big={posts[0]}
        latests={posts.slice(1, 3)}
        blogList={posts.slice(3, posts.length)}
      />
    </main>
  );
}
