import Image from "next/image";

export default function First({ translate }) {
  return (
    <section>
      <div className="flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2  gap-x-[40px] gap-y-[22px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
          <div
            data-aos="fade-button"
            className="flex flex-col items-center justify-center w-full max-w-[274px] h-[188px] rounded-xl"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start mb-4">
              <i className="icon-mim-document block text-5xl weight300 font-light text-secondary-500" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("Perceivable")}
              </h2>
              <p className="text-base font-bold">
                {translate("ProvidingAlternativeText")}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center justify-center w-full max-w-[274px] h-[188px] rounded-xl"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start mb-4">
              <i className="icon-mim-chat block text-5xl weight300 font-light text-secondary-500" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("Understandable")}
              </h2>
              <p className="text-base font-bold">
                {translate("ContentOperationClear")}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="flex flex-col items-center justify-center w-full max-w-[274px] h-[188px] rounded-xl"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start mb-4">
              <i className="icon-mim-click block text-5xl weight300 font-light text-secondary-500" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("Operable")}
              </h2>
              <p className="text-base font-bold">
                {translate("AccessibleMethods")}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col items-center justify-center w-full max-w-[274px] h-[188px] rounded-xl"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start mb-4">
              <i className="icon-mim-scales block text-5xl weight300 font-light text-secondary-500" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                {translate("Compliant")}
              </h2>
              <p className="text-base font-bold">
                {translate("AccessibilityStandards")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
