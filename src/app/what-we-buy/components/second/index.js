import Accordion from "@/components/accordion";

import Image from "next/image";

export default function Second({ translate }) {
  return (
    <>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center gap-4 md:pt-20 md:pb-8 pt-8 pb-2  text-center md:text-left"
      >
        {/* <p className="text-neutral-500 font-extrabold text-xl">
            {translate("services_what_we_buy")}
          </p> */}
        <p className="text-primary-700 md:text-6xl text-3xl font-extrabold">
          {translate("non_ferrous_materials")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-evenly m-4 md:m-10 gap-6">
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]  ">
            <Image
              src="/images/what-we-buy/image1.jpeg"
              quality={100}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-3xl md:text-5xl">#1</p>
            <p className="text-xl md:text-3xl font-semibold">
              {translate("bare_bright_copper")}
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]">
            <Image
              src="/images/what-we-buy/image2.jpeg"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-3xl md:text-5xl">#2</p>
            <p className="text-xl md:text-3xl font-semibold">
              {translate("copper")}
            </p>
          </div>
        </div>
        <div
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
          data-aos="flip-left"
        >
          <div
            data-aos="flip-left"
            className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]"
          >
            <Image
              src="/images/what-we-buy/image3.jpeg"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-3xl md:text-5xl">#3</p>
            <p className="text-xl md:text-3xl font-semibold">
              {translate("electric_motors")}
            </p>
          </div>
        </div>
      </div>
      <Accordion text={translate("see_detailed_list")}>
        <ul className="list-box !my-8 flex flex-wrap text-xs md:grid md:grid-cols-4">
          <li className="w-4/5 md:w-auto ml-8">{translate("lead")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("brass")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("titanium")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("insulated_wire")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">{translate("aluminum")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("copper")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("nickel_alloys")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("electronic_scrap")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">{translate("batteries")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("stainless_steel")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("electric_motors")}
          </li>
        </ul>
      </Accordion>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center gap-4 md:pt-8 md:pb-8 pt-8 pb-2  text-center md:text-left"
      >
        {/* <p className="text-neutral-500 font-extrabold text-xl">
            {translate("services_what_we_buy")}
          </p> */}
        <p className="text-primary-700 md:text-6xl text-3xl font-extrabold">
          {translate("ferrous_materials")}
        </p>
      </div>

      <div className="flex flex-wrap md:flex-nowrap items-center justify-evenly m-4 md:m-10 gap-4">
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]">
            <Image
              src="/images/what-we-buy/image4.jpeg"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-5xl">#1</p>
            <p className="text-3xl font-semibold">HMS</p>
          </div>
        </div>
        <div className="relative w-fit h-fit group rounded-lg overflow-hidden">
          <div
            data-aos="flip-left"
            className="relative md:w-[354px] md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]"
          >
            <Image
              src="/images/what-we-buy/image5.jpeg"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-5xl">#2</p>
            <p className="text-3xl font-semibold">
              {translate("busheling_steel")}
            </p>
          </div>
        </div>

        <div className="relative w-fit h-fit group rounded-lg overflow-hidden">
          <div
            data-aos="flip-left"
            className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3]"
          >
            <Image
              src="/images/what-we-buy/image6.jpeg"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 text-neutral-50 flex flex-col gap-2 items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-5xl">#3</p>
            <p className="text-3xl font-semibold">{translate("rebar_steel")}</p>
          </div>
        </div>
      </div>
      <Accordion text={translate("see_detailed_list")}>
        <ul className="list-box !my-8 flex flex-wrap text-xs md:grid md:grid-cols-4">
          <li className="w-4/5 md:w-auto ml-8">{translate("lead")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("brass")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("titanium")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("insulated_wire")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">{translate("aluminum")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("copper")}</li>
          <li className="w-4/5 md:w-auto ml-8">{translate("nickel_alloys")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("electronic_scrap")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">{translate("batteries")}</li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("stainless_steel")}
          </li>
          <li className="w-4/5 md:w-auto ml-8">
            {translate("electric_motors")}
          </li>
        </ul>
      </Accordion>

      <div
        data-aos="fade-up"
        className="flex flex-col items-center gap-4 md:pb-8 pt-8 pb-2 text-center md:text-left"
      >
        {/* <p className="text-neutral-500 font-extrabold text-xl">
            {translate("services_what_we_buy")}
          </p> */}
        <p className="text-primary-700 md:text-6xl text-3xl font-extrabold">
          {translate("electronic_scrap")}
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-4 px-10 md:pt-8 md:pb-8 pb-0 pt-2 items-center">
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3] flex justify-center">
            <Image
              src="/images/what-we-buy/image7.png"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-4xl md:text-5xl">#1</p>
            <p className="text-2xl md:text-3xl font-semibold">
              {translate("Hard_Drives")}
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3] flex justify-center">
            <Image
              src="/images/what-we-buy/image8.png"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-4xl md:text-5xl">#2</p>
            <p className="text-2xl md:text-3xl font-semibold text-center">
              {translate("Hubs_and_Switches")}
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px] md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out flex justify-center">
            <Image
              src="/images/what-we-buy/image9.png"
              fill
              quality={100}
              alt=""
              className="object-cover transition duration-300 ease-in-out group-hover:brightness-[0.3]"
            />
          </div>

          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-4xl md:text-5xl">#3</p>
            <p className="text-2xl md:text-3xl font-semibold text-center">
              {translate("PC_Boards")}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-evenly gap-4 px-10 md:py-6 py-4 pb-0  items-center ">
        <div
          data-aos="flip-left"
          className="relative  w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px]  md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3] flex justify-center">
            <Image
              src="/images/what-we-buy/image10.png"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-4xl md:text-5xl">#4</p>
            <p className="text-2xl md:text-3xl font-semibold">
              {translate("Power_Supplies")}
            </p>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="relative w-fit h-fit group rounded-lg overflow-hidden"
        >
          <div className="relative md:w-[354px] md:h-[280px] w-[320px] h-[150px] transition duration-300 ease-in-out group-hover:brightness-[0.3] flex justify-center">
            <Image
              src="/images/what-we-buy/image11.png"
              fill
              quality={100}
              alt=""
              className="object-cover"
            />
          </div>

          <div className="absolute inset-0 flex flex-col gap-2 items-center justify-center text-neutral-50 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
            <p className="font-black text-4xl md:text-5xl">#5</p>
            <p className="text-2xl md:text-3xl font-semibold">
              {translate("Servers")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
