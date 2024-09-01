import Image from "next/image";

export default function First({ translate }) {
  return (
    <section>
      <div className="flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[22px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
          <div
            data-aos="fade-button"
            className="bg-[#F7F7F7] flex items-center w-full max-w-[550px] h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start h-[65%] ">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-love-screen block text-5xl weight300 font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-[80%] pl-4">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                Inclusion and Equity
              </h2>
              <p className="text-base font-bold">
                Neuro provides accessible digital content, allowing people with
                disabilities to have the same opportunities as everyone else.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#F7F7F7] flex items-center w-full max-w-[550px] h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start h-[65%] ">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-like block text-5xl weight300 font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-[80%] pl-4">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                Improved User Experience
              </h2>
              <p className="text-base font-bold">
                By enhancing the usability of digital platforms with features
                such as clear navigation, alt text for images and readable
                fonts.{" "}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            className="bg-[#F7F7F7] flex items-center w-full max-w-[550px] h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start h-[65%] ">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-search block text-5xl weight300 font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-[80%] pl-4">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                Minor Remediation Powered by AI
              </h2>
              <p className="text-base font-bold">
                Neuro uses artificial intelligence to monitor, perform minor
                corrections in real-time and suggest more significant updates as
                needed.{" "}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#F7F7F7] flex items-center w-full max-w-[550px] h-[230px] rounded-xl p-4"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start h-[65%] ">
              <div className="w-[65px] h-[65px] rounded-full flex items-center justify-center bg-primary-500">
                <i className="icon-mim-search-page block text-5xl weight300 font-light text-neutral-25" />
              </div>
            </div>

            <div className="w-[80%] pl-4">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                Continuous Profile Generation
              </h2>
              <p className="text-base font-bold">
                Settings include profiles for safe spaces, visually impaired,
                ADHD and individuals with cognitive challenges, among others.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}