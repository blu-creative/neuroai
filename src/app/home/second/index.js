import Image from "next/image";

import Counter from "@/components/countup";
export default function Second({ translate }) {
  return (
    <section className="md:py-20 py-10 px-10 flex flex-col-reverse md:flex-row gap-10 justify-center items-center md:items-start">
      <div
        data-aos="flip-right"
        className="md:w-[350px] md:h-[500px] w-[332px] h-[175px] relative md:min-w-[350px] md:min-h-[500px] min-w-[332px] min-h-[175px]"
      >
        <Image
          className="object-cover rounded-md"
          src="/images/home/img.jpeg"
          fill
          quality={100}
          alt="Img"
        />
      </div>
      <div className="max-w-xl text-center md:text-left">
        {/* <p className="text-neutral-500 font-extrabold text-xl">
          {translate("home_about_us")}
        </p> */}
        <h1
          data-aos="fade-up"
          className="text-primary-700 mb-8 text-3xl md:text-5xl md:mt-5 mt-2 font-extrabold px-4 md:px-0"
        >
          {translate("welcome")}
        </h1>
        <h2
          data-aos="fade-down"
          className="text-neutral-500 font-extrabold text-lg md:text-xl px-4 md:px-0"
        >
          {translate("comprehensive_solutions")}
        </h2>
        <div className="flex flex-col items-center justify-center gap-2 w-fit mt-9 mx-auto md:mx-0">
          <p className="md:text-6xl text-3xl font-black text-primary-500">
            <Counter end={50} />
          </p>
          <p
            data-aos="fade-up"
            className="text-2xl font-extrabold text-primary-700"
          >
            {translate("years")}
          </p>
          <p
            data-aos="fade-down"
            className="text-2xl font-extrabold text-primary-700"
          >
            {translate("experience")}
          </p>
        </div>
      </div>
    </section>
  );
}
