import Image from "next/image";

export default function Firstranslate({ translate }) {
  return (
    <section>
      <div className="flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-x-[48px] gap-y-[22px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
          <div
            data-aos="fade-left"
            className="bg-neutral-50 flex flex-col md:flex-row items-center w-full max-w-[550px] h-auto md:h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-full md:w-[20%] flex justify-center items-start md:h-[65%] mb-4 md:mb-0">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-love-screen block text-5xl font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-full md:w-[80%] pl-0 md:pl-4 md:text-left text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("InclusionAndEquity")}
              </h2>
              <p className="text-base font-bold">
                {translate("NeuroAIProvidesAccessibleContent")}
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="bg-neutral-50 flex flex-col md:flex-row items-center w-full max-w-[550px] h-auto md:h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-full md:w-[20%] flex justify-center items-start mb-4 md:mb-0">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-like block text-5xl font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-full md:w-[80%] pl-0 md:pl-4 md:text-left text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("ImprovedUserExperience")}
              </h2>
              <p className="text-base font-bold">
                {translate("EnhancingUsabilityDescription")}
              </p>
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-neutral-50 flex flex-col md:flex-row items-center w-full max-w-[550px] h-auto md:h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-full md:w-[20%] flex justify-center items-start mb-4 md:mb-0">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-search block text-5xl font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-full md:w-[80%] pl-0 md:pl-4 md:text-left text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("MinorRemediationAI")}
              </h2>
              <p className="text-base font-bold">
                {translate("AIForMonitoringAndCorrections")}
              </p>
            </div>
          </div>

          <div
            data-aos="fade-right"
            className="bg-neutral-50 flex flex-col md:flex-row items-center w-full max-w-[550px] h-auto md:h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-full md:w-[20%] flex justify-center items-start mb-4 md:mb-0">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-search-page block text-5xl font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-full md:w-[80%] pl-0 md:pl-4 md:text-left text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("ContinuousProfileGeneration")}
              </h2>
              <p className="text-base font-bold">
                {translate("ProfileSettingsDescription")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
