import First from "./components/first";

const big = {
  title: "Title of the Blog Post",
  id: "7",
  minute: 5,
  src: "/images/blogs/blog1.png",
  brief: "Brief description / keywords about the Blog Post",
};

const latests = [
  {
    title: "Title of the Blog Post",
    id: "8",
    minute: 8,
    src: "/images/blogs/blog2.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    id: "9",
    minute: 11,
    src: "/images/blogs/blog3.png",
    brief: "Brief description / keywords about the Blog Post",
  },
];

const blogList = [
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "10",
    minute: 5,
    src: "/images/blogs/blog1.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "11",
    minute: 8,
    src: "/images/blogs/blog2.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "12",
    minute: 11,
    src: "/images/blogs/blog3.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "13",
    minute: 5,
    src: "/images/blogs/blog1.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "14",
    minute: 8,
    src: "/images/blogs/blog2.png",
    brief: "Brief description / keywords about the Blog Post",
  },
  {
    title: "Title of the Blog Post",
    date: "JAN 20, 2024",
    id: "15",
    minute: 11,
    src: "/images/blogs/blog3.png",
    brief: "Brief description / keywords about the Blog Post",
  },
];

export default function Blog() {
  return (
    <main>
      <First big={big} latests={latests} blogList={blogList} />
    </main>
  );
}
