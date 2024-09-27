import BlogPreview from "@/components/blog-preview";

export default function First({ big, latests, blogList }) {
  return (
    <section className="m-20 lg:m-12 md:m-10 sm:m-8 sx:m-4">
      <div className="flex items-center justify-evenly flex-wrap gap-y-8">
        <div data-aos="fade-up" className="w-fit">
          <BlogPreview {...big} size="big" />
        </div>
        <div className="flex flex-col gap-4">
          {latests.map((blog, index) => (
            <div
              data-aos={`fade-${index % 2 === 1 ? "up" : "down"}`}
              key={blog.id}
              className="w-fit"
            >
              <BlogPreview {...blog} size="small" />
            </div>
          ))}
        </div>
      </div>
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl font-bold text-center text-primary-900 font-Exo my-24"
      >
        <span>Check our latest </span>
        <span className="text-primary-500">blog posts</span>
      </h1>
      <div className="grid grid-cols-1 justify-items-center lg:grid-cols-3 md:grid-cols-2 gap-y-8">
        {blogList.map((blog, index) => (
          <div
            className="w-fit"
            data-aos={`fade-${index % 2 === 0 ? "up" : "down"}`}
            data-aos-delay={`${(index % 3) * 100}`}
            key={blog.id}
          >
            <BlogPreview {...blog} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 text-primary-500 items-center font-bold text-2xl mt-6 justify-center cursor-pointer">
        <span>Load More</span> <i className="icon-mim-chevron block" />
      </div>
    </section>
  );
}
