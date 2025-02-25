import Link from "next/link";

export default function First({ translate, locale }) {
  return (
    <div className="bg-cover">
      <section className="flex flex-col items-center gap-12 py-16 px-8">
        <div className="flex justify-center px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 bg-mintcream w-full md:w-[80%] max-w-[80%]">
            <div
              data-aos="fade-button"
              className="bg-neutral-50 flex items-center w-full max-w-full md:max-w-[655px] h-[200px] md:h-[230px] rounded-xl p-4"
            >
              <h2 className="text-lg md:text-2xl font-bold mb-2 text-primary-900">
                {translate("WebAccessibilityEvolution")}
              </h2>
            </div>
            <div
              data-aos="fade-left"
              className="bg-neutral-50 flex flex-col md:flex-row items-center w-full max-w-full md:max-w-[655px] h-auto md:h-[230px] rounded-xl p-4"
            >
              <div className="flex-shrink-0 w-full md:w-[20%] flex justify-center items-start h-[auto] md:h-[65%] mb-4 md:mb-0">
                <div className="w-[50px] md:w-[65px] h-[50px] md:h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                  <i className="icon-mim-search-page block text-3xl md:text-5xl weight300 font-light text-neutral-25" />
                </div>
              </div>

              {/* <div className="w-full md:w-[80%] pl-4">
                <h2 className="text-lg md:text-2xl mb-2 font-normal text-primary-900">
                  <span className="font-bold"> 96%</span> of the{" "}
                  <span className="font-bold"> top one million web pages</span>{" "}
                  had accessibility issues in
                  <span className="font-bold"> 2023</span>
                </h2>
                <p className="text-xs md:text-sm font-bold">
                  institute for disability Research, Policy, and practice
                </p>
              </div> */}
              <div className="w-full md:w-[80%] pl-4">
                <h2 className="text-lg md:text-2xl mb-2 font-normal text-primary-900">
                  <span className="font-bold">
                    {translate("AccessibilityStatisticPercentage")}
                  </span>{" "}
                  {translate("ofTopWebPages")}{" "}
                  <span className="font-bold">
                    {translate("AccessibilityStatisticYear")}
                  </span>
                </h2>
                <p className="text-xs md:text-sm font-bold">
                  {translate("InstituteForDisabilityResearch")}
                </p>
              </div>
            </div>
          </div>
        </div>

        <h1
          className="text-3xl md:text-6xl max-w-2xl font-bold text-center mt-10"
          data-aos="fade-up"
        >
          <span className="text-primary-800">{translate("WhatIs")}</span>
          <span className="text-primary-500">{translate("Accessibility")}</span>
        </h1>
        <h2
          className="text-xs md:text-2xl max-w-4xl font-bold text-center text-secondary-500"
          data-aos="fade-down"
        >
          {translate("AccessibilityDescription")}
        </h2>
      </section>
    </div>
  );
}
