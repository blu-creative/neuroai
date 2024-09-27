export async function generateStaticParams() {
  const url = process.env.NEXT_PUBLIC_URL;

  const posts = await fetch(
    `${url}api/articles?populate=cover&pagination[page]=1&pagination[pageSize]=10`
  ).then((res) => res.json());
  return posts.data.map((post) => ({
    id: post.documentId,
  }));
}

export default function Blog({ params }) {
  const { id } = params;
  return (
    <main>
      <h1>asdas</h1>
    </main>
  );
}
