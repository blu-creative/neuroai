import Sections from "./sections";
const url = process.env.NEXT_PUBLIC_URL;

export default async function Blog({ params }) {
  const { id } = params;

  const res = await fetch(
    `${url}/api/articles/${id}?populate[0]=blocks.file&populate[1]=blocks.files&populate[2]=cover&populate[3]=author&populate[4]=tags`,
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
