import First from "./components/first";

const big = {
  title: "Title of the Blog Post",
  documentId: "7",
  minute: 5,
  cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
  description: "Brief description / keywords about the Blog Post",
};

const latests = [
  {
    title: "Title of the Blog Post",
    documentId: "8",
    minute: 8,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    documentId: "9",
    minute: 11,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
];

const blogList = [
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "10",
    minute: 5,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "11",
    minute: 8,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "12",
    minute: 11,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "13",
    minute: 5,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "14",
    minute: 8,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    documentId: "15",
    minute: 11,
    cover: { url: "/uploads/photo_5915634318967947972_y_bf862171c8.jpg" },
    description: "Brief description / keywords about the Blog Post",
  },
];

export default function Blog(data) {
  console.log("reza : ", data);
  return (
    <main>
      <First big={big} latests={latests} blogList={blogList} />
    </main>
  );
}

export async function generateStaticParams() {
  const url = process.env.NEXT_PUBLIC_URL;
  const posts = await fetch(
    `${url}api/articles?populate=cover&pagination[page]=1&pagination[pageSize]=10`
  ).then((res) => res.json());

  return posts;
}
