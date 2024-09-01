import Image from "next/image";

export default function First({ translate }) {
  return (
    <div className="flex items-center justify-center gap-10 md:px-6 px-12 md:flex-row flex-col-reverse">
      <div className="flex flex-col gap-8 items-center justify-evenly max-md:w-full max-md:aspect-[4/3] ">
        <div
          className="relative md:min-w-[359px] md:min-h-[376px] min-w-[332px] md:h-[376px] md:w-[332px] min-h-[175px] w-[332px] h-[175px] rounded-md overflow-hidden"
          data-aos="flip-right"
        >
          <Image
            src="/images/about-us/wwa1.png"
            fill
            quality={100}
            className="object-cover object-center"
            alt="Pic1"
          />
        </div>
        <div
          className="relative md:min-w-[359px] md:min-h-[376px] min-w-[332px] md:h-[376px] md:w-[332px] min-h-[175px] w-[332px] h-[175px] rounded-md overflow-hidden"
          data-aos="flip-left"
        >
          <Image
            src="/images/about-us/wwa2.png"
            fill
            className="object-cover object-center"
            quality={100}
            alt="Pic1"
          />
        </div>
      </div>
      <div>
        {/* <p
          className="text-neutral-500 md:text-xl text-xs font-bold text-center md:text-left"
          data-aos="fade-up"
        >
          {translate("about_us_history")}
        </p> */}
        <h1
          className="text-primary-700 mb-8 mt-2.5 md:text-5xl text-3xl font-extrabold text-center md:text-left"
          data-aos="fade-up"
        >
          {translate("who_we_are")}
        </h1>
        <div className="flex">
          <div className="w-[2px] bg-primary-700 ml-8" />
          <div>
            <div className="max-w-lg mb-16">
              <div className="relative pl-8">
                <div className="absolute w-9 h-9 rounded-full bg-primary-500 -left-5" />
                <h2
                  className="text-primary-700 md:text-4xl text-2xl font-extrabold mb-3"
                  data-aos="fade-up"
                >
                  {translate("early_years")}
                </h2>
                <p
                  className="text-neutral-500 md:text-xl text-xs font-bold"
                  data-aos="fade-up"
                >
                  {translate("early_years_description")}
                </p>
              </div>
            </div>
            <div className="max-w-lg mb-16">
              <div className="relative pl-8">
                <div className="absolute w-9 h-9 rounded-full bg-primary-500 -left-5" />
                <h2
                  className="text-primary-700 md:text-4xl text-2xl font-extrabold mb-3"
                  data-aos="fade-up"
                >
                  {translate("around_1970")}
                </h2>
                <p
                  className="text-neutral-500 md:text-xl text-xs font-bold"
                  data-aos="fade-up"
                >
                  {translate("around_1970_description")}
                </p>
              </div>
            </div>
            <div className="max-w-lg mb-16">
              <div className="relative pl-8">
                <div className="absolute w-9 h-9 rounded-full bg-primary-500 -left-5" />
                <h2
                  className="text-primary-700 md:text-4xl text-2xl font-extrabold mb-3"
                  data-aos="fade-up"
                >
                  {translate("in_1985")}
                </h2>
                <p
                  className="text-neutral-500 md:text-xl text-xs font-bold"
                  data-aos="fade-up"
                >
                  {translate("in_1985_description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
