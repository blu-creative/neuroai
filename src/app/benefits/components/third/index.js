import Image from "next/image";

export default function First({ translate }) {
  return (
    <div className="w-full flex justify-center my-20 px-2">
      <div className="flex flex-col md:flex-row justify-center md:justify-around md:gap-40 gap-12 items-center">
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          {/* <p className="text-neutral-500 text-xl font-bold" data-aos="fade-up">
            {translate("about_us_mission")}
          </p> */}
          <h1
            className="text-primary-900 mb-8 mt-2.5 text-3xl md:text-5xl font-bold"
            data-aos="fade-up"
          >
            {/* {translate("our_objective")} */}
            How Neuro <span className="text-primary-500"> helps your SEO </span>
          </h1>
          <h2
            className="text-neutral-800 text-base md:text-xl font-bold py-4"
            data-aos="fade-up"
          >
            {/* {translate("objective_description")} */}
            Implementing accessibility practices not only makes your website
            more inclusive but also enhances its SEO performance. Investing in
            Neuro has a dual benefit of reaching a broader audience and
            improving your site's search engine visibility and rankings.
          </h2>

          <ul className="list-disc list-inside marker:text-primary-500 text-xl font-bold">
            <li data-aos="fade-right" className="mb-2">
              Improved usability
            </li>
            <li data-aos="fade-left" className="mb-2">
              Mobile friendliness
            </li>
            <li data-aos="fade-right" className="mb-2">
              Enhanced readability
            </li>
            <li data-aos="fade-left" className="mb-2">
              Reduced bounce rates
            </li>
            <li data-aos="fade-right" className="mb-2">
              Faster page loading times
            </li>
          </ul>
        </div>
        {/* Image Section */}
        <div
          className="md:min-w-[400px] md:min-h-[516px] md:w-[410px] md:h-[410px] relative min-w-[330px] min-h-[195px] w-[330px] h-[195px] overflow-hidden rounded-lg"
          data-aos="flip-left"
        >
          <Image
            src="/images/benefits/pic1.png"
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
