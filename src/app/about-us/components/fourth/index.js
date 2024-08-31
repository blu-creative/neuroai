import Image from "next/image";

export default function First({ translate }) {
  return (
    <section>
      <div className="flex flex-col items-center gap-4 py-8 max-w-5xl m-auto">
        {/* <p
          className="text-neutral-500 md:text-xl text-xs font-bold"
          data-aos="fade-up"
        >
          {translate("about_us_history")}
        </p> */}
        <h1
          className="text-primary-700 md:text-6xl text-3xl font-extrabold mt-2 mb-7 text-center px-6"
          data-aos="fade-up"
        >
          {translate("still_growing")}
        </h1>
        <p
          className="text-neutral-500 md:text-xl text-xs font-bold text-center px-4 md:px-0"
          data-aos="fade-up"
        >
          {translate("still_growing_description")}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-4 px-4 md:max-w-7xl m-auto max-w-96">
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic9.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic1"
          />
        </div>
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic4.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic2"
          />
        </div>
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic5.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic3"
          />
        </div>
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic6.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic4"
          />
        </div>
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic7.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic5"
          />
        </div>
        <div
          className="relative md:w-[400px] md:h-[276px] w-[150px] h-[150px]"
          data-aos="flip-up"
        >
          <Image
            src="/images/about-us/pic8.png"
            fill
            quality={100}
            className="object-cover object-center md:rounded rounded-xl"
            alt="pic6"
          />
        </div>
      </div>
    </section>
  );
}
