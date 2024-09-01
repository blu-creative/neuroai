import Image from "next/image";

export default function First({ translate }) {
  return (
    <div className="w-full flex justify-center my-20 px-4">
      <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 items-center">
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          {/* <p className="text-neutral-500 text-xl font-bold" data-aos="fade-up">
            {translate("about_us_mission")}
          </p> */}
          <h1
            className="text-primary-700 mb-8 mt-2.5 text-3xl md:text-5xl font-extrabold"
            data-aos="fade-up"
          >
            {translate("our_objective")}
          </h1>
          <h2
            className="text-neutral-500 text-base md:text-xl font-bold"
            data-aos="fade-up"
          >
            {translate("objective_description")}
          </h2>
        </div>
        {/* Image Section */}
        <div
          className="md:min-w-[410px] md:min-h-[410px] md:w-[410px] md:h-[410px] relative min-w-[330px] min-h-[195px] w-[330px] h-[195px] overflow-hidden rounded-lg"
          data-aos="flip-left"
        >
          <Image
            src="/images/Img1.png"
            fill
            quality={100}
            alt="Img"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
