import Link from "next/link";

export default function First({ translate, locale }) {
  const Canada = [
    translate("AvailabilityInFormats"),
    translate("AlternativesForMultimedia"),
    translate("UsabilityOfTheSite"),
  ];

  const Us = [
    translate("TextAlternatives"),
    translate("AvailabilityInCaptions"),
    translate("AllFunctionalitiesAvailable"),
  ];
  return (
    <div className=" bg-cover ">
      <section className="flex flex-col items-center gap-12 pt-16 px-8">
        <h1
          className="md:text-6xl text-3xl max-w-3xl font-bold text-center"
          data-aos="fade-up"
        >
          <span className="text-primary-900">Disabilities Acts in the</span>
          <br />
          <span className="text-primary-500">United States and Canada</span>
        </h1>
        <h2
          className="md:text-2xl text-xs max-w-4xl font-bold text-center text-secondary-500"
          data-aos="fade-down"
        >
          They require websites to be accessible to neurodiverse individuals,
          ensuring they have equal access to the content and functionality of
          the site.
        </h2>

        <div className="flex justify-center px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[22px] bg-mintcream w-full md:w-[90%] max-w-[80%]">
            <div
              data-aos="fade-button"
              className="bg-neutral-50 flex-col items-center w-full max-w-[550px] rounded-xl"
            >
              <div className="flex-shrink-0 w-full  flex justify-center items-start bg-primary-900 rounded-t-xl py-5">
                <h2 className="text-3xl font-bold w-3/5 mb-2 text-neutral-25 text-center">
                  Accessible Canada Act (ACA)
                </h2>
              </div>

              <div className="w-[100%] p-8">
                <ul className=" font-bold text-xl">
                  {Canada.map((text) => (
                    <li
                      className="flex items-center gap-4 mb-2 text-neutral-800"
                      key={text}
                    >
                      <div className="h-3 bg-primary-500 w-4 rounded-full" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              data-aos="fade-button"
              className="bg-neutral-50 flex-col items-center w-full max-w-[550px] rounded-xl"
            >
              <div className="flex-shrink-0 w-full  flex justify-center items-start bg-primary-700 rounded-t-xl py-5">
                <h2 className="text-3xl font-bold w-4/5 mb-2 text-neutral-25 text-center">
                  American Disabilities Act (ADA) 
                </h2>
              </div>

              <div className="w-[100%] p-8 ">
                <ul className=" font-bold text-xl ">
                  {Us.map((text) => (
                    <li
                      className="flex items-center gap-4 mb-2 text-neutral-800"
                      key={text}
                    >
                      <div className="h-4 bg-primary-500 w-4 rounded-full" />
                      <p className="w-4/5">{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div
              data-aos="fade-button"
              className="bg-neutral-50 flex-col items-center w-full max-w-[550px] rounded-xl"
            >
              <div className="flex-shrink-0 w-full  flex justify-center items-start bg-primary-700 rounded-t-xl py-5">
                <h2 className="text-3xl font-bold w-4/5 mb-2 text-neutral-25 text-center">
                  American Disabilities Act (ADA) 
                </h2>
              </div>

              <div className="w-[100%] p-8">
                <ul className=" font-medium text-xl">
                  {Us.map((text) => (
                    <li className="flex items-center gap-4 mb-2" key={text}>
                      <div className="h-3 bg-primary-500 w-4 rounded-full" />
                      <p>{text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
