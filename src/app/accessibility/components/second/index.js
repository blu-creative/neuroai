import Image from "next/image";

export default function First({ translate }) {
  return (
    <section>
      <div className="flex justify-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-[40px] gap-y-[22px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
          <div
            data-aos="fade-button"
            className="flex flex-col items-center justify-center w-full max-w-[274px] h-[188px] rounded-xl"
          >
            <div className="flex-shrink-0 w-[20%] flex justify-center items-start mb-4">
              <i className="icon-mim-document block text-5xl weight300 font-light text-secondary-500" />
            </div>
            <div className="w-[90%] text-center">
              <h2 className="text-2xl font-bold mb-2 text-primary-700">
                Perceivable
              </h2>
              <p className="text-base font-bold">
                Providing alternative text, captions and text descriptions
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
                Understandable
              </h2>
              <p className="text-base font-bold">
                Content and operation of the interface should be clear to all
                users
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
                Operable
              </h2>
              <p className="text-base font-bold">
                Making elements accessible with methods like keyboard, mouse or
                voice commands
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
                Compliant
              </h2>
              <p className="text-base font-bold">
                Following accessibility standards and guidelines, such as the
                WCAG
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
