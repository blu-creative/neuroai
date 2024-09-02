import Link from "next/link";

export default function First({ translate, locale }) {
  return (
    <div className=" bg-cover ">
      <section className="flex flex-col items-center gap-12 py-16 px-8">
        <div className="flex justify-center px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[22px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
            <div
              data-aos="fade-button"
              className="bg-neutral-50 flex items-center w-full max-w-[655px] h-[230px] rounded-xl p-4"
            >
              <h2 className="text-2xl font-bold mb-2 text-primary-900">
                Web accessibility has evolved from a niche consideration to a
                standard practice driven by legal, ethical, business,
                technological and institutional factors...
              </h2>
            </div>
            <div
              data-aos="fade-left"
              className="bg-neutral-50 flex items-center w-full max-w-[655px] h-[230px] rounded-xl p-4"
            >
              <div className="flex-shrink-0 w-[20%] flex justify-center items-start h-[65%] ">
                <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                  <i className="icon-mim-search-page block text-5xl weight300 font-light text-neutral-25" />
                </div>
              </div>

              <div className="w-[80%] pl-4">
                <h2 className="text-2xl mb-2 font-normal text-primary-900">
                  <span className=" font-bold"> 96%</span> of the{" "}
                  <span className=" font-bold"> top one million web pages</span>{" "}
                  had accessibility issues in
                  <span className=" font-bold"> 2023</span>
                </h2>
                <p className="text-sm font-bold">
                  institute for disability Research, Policy, and practice
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1
          className="md:text-6xl text-3xl max-w-2xl font-extrabold text-center"
          data-aos="fade-up"
        >
          {/* {translate("about_us")} */}
          <span className="text-primary-800"> What is </span>
          <span className="text-primary-500">Accessibility?</span>
        </h1>
        <h2
          className="md:text-2xl text-xs max-w-4xl font-bold text-center text-secondary-500"
          data-aos="fade-down"
        >
          {/* {translate("integrating ")} */}
          In digital contexts, accessibility often refers to making websites,
          applications, and digital content usable for people with disabilities
          such as visual, auditory, motor, or cognitive impairments. It is
          crucial for ensuring that everyone can access and use digital
          resources without barriers.
        </h2>
      </section>
    </div>
  );
}
