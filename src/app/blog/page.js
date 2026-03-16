import First from "./components/first";
import { urlBuilder } from "@/utils/urlBuilder";

export default async function Blog({ searchParams }) {
  const { locale } = searchParams;

  const url = urlBuilder({ locale });

  const res = await fetch(url, { cache: "no-store" });

  let posts = [];

  if (res.ok) {
    try {
      const articles = await res.json();
      posts = articles.data;
    } catch (error) {
      console.error("Error processing articles:", error);
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
