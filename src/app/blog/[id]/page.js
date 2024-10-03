import Sections from "./sections";
const url = process.env.NEXT_PUBLIC_URL;

export default async function Blog({ params }) {
  const { id } = params;

  const res = await fetch(
    `${url}api/articles/${id}?populate[0]=blocks.file&populate[1]=blocks.files&populate=cover&populate[2]=author`,
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
  return (
    <main>
      <Sections post={post} />
    </main>
  );
}
