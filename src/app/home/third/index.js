import Image from "next/image";
import Link from "next/link";

export default function Third({ translate, locale }) {
  return (
    <div className="md:mb-20">
      {/* <p className="text-neutral-500 font-extrabold text-xl text-center">
        {translate("home_services")}
      </p> */}
      <h1
        data-aos="fade-down"
        className="text-primary-700 text-3xl md:text-6xl mt-2 mb-8 font-extrabold text-center px-10"
      >
        {translate("high_quality_services")}
      </h1>
      <div className="flex flex-col md:flex-row md:justify-evenly justify-center items-center md:my-14 gap-6 md:gap-4 px-4 max-md:mb-8">
        <div
          data-aos="flip-right"
          className="md:w-[354px] md:h-[280px] relative group rounded-lg overflow-hidden"
        >
          <div className=" md:w-[354px]  md:h-[280px] w-[320px] h-[150px] relative group rounded-lg overflow-hidden">
            <div className="relative w-full h-full transition duration-300 ease-in-out group-hover:brightness-[0.3]">
              <Image
                src="/images/home/pic1.jpeg"
                fill
                quality={100}
                alt="Pic1"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
              <p className="text-xl md:text-3xl font-black text-center max-w-xs">
                {translate("scrap_management")}
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="flip-up"
          className="md:w-[354px]  md:h-[280px] w-[320px] h-[150px] relative group rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-full transition duration-300 ease-in-out group-hover:brightness-[0.3]">
            <Image
              src="/images/home/pic2.jpeg"
              fill
              quality={100}
              alt="pic2"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-xl md:text-3xl font-black text-center max-w-xs">
              {translate("containers_bins_hoppers")}
            </p>
          </div>
        </div>
        <div
          data-aos="flip-right"
          className="md:w-[354px]  md:h-[280px] w-[320px] h-[150px] relative group rounded-lg overflow-hidden"
        >
          <div className="relative w-full h-full transition duration-300 ease-in-out group-hover:brightness-[0.3]">
            <Image
              src="/images/home/pic3.jpeg"
              fill
              quality={100}
              alt="pic3"
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="text-xl md:text-3xl font-black text-center max-w-xs">
              {translate("purchase_scrap")}
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          data-aos="fade-up"
          href={`/what-we-buy${locale === "fr" ? "?locale=fr" : ""}`}
        >
          <button className="bg-primary-500 md:rounded-md md:px-8 md:py-4 px-6 py-3 font-extrabold md:text-xl text-xs rounded-lg text-neutral-25">
            {translate("see_what_we_buy")}
          </button>
        </Link>
      </div>
    </div>
  );
}
