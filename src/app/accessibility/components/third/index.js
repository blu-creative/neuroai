import Image from "next/image";

export default function First({ translate }) {
  return (
    <div className="w-full flex justify-center my-20 px-2">
      <div className="flex flex-col md:flex-row justify-center md:justify-around md:gap-30 gap-12 items-center">
        <div className="max-w-xl text-center md:text-left mb-8 md:mb-0">
          {/* <p className="text-neutral-500 text-xl font-bold" data-aos="fade-up">
            {translate("about_us_mission")}
          </p> */}
          <h1
            className="text-primary-700 mb-8 mt-2.5 text-3xl md:text-5xl font-bold"
            data-aos="fade-up"
          >
            {/* {translate("our_objective")} */}
            Disability{" "}
            <span className="text-primary-900"> and Neurodiversity </span>
          </h1>
          <h2
            className="text-neutral-800 text-base md:text-xl font-bold py-4"
            data-aos="fade-up"
          >
            {/* {translate("objective_description")} */}A disability is any
            condition of the body or mind that makes it more difficult for the
            person with the condition to do certain activities and interact with
            the world around them. For neurodiversity, it describes the idea
            that there is a wide range of ways that people perceive and respond
            to the world, and some neurodiverse conditions could fall under the
            umbrella of disability.
          </h2>
        </div>
        {/* Image Section */}
        <div
          className=" relative min-w-[330px]  overflow-hidden rounded-lg"
          data-aos="flip-left"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] gap-y-[22px] bg-mintcream  ">
            <div
              data-aos="fade-button"
              className=" flex flex-col items-center justify-center w-full max-w-[257px] h-[155px] rounded-xl bg-primary-500 "
            >
              <div className="flex justify-between mb-2">
                <div className="flex-shrink-0 w-[20%] flex justify-center items-start ">
                  <i className="icon-mim-neurodivergence block text-5xl weight300 font-light text-neutral-25" />
                </div>
                <h2 className="text-5xl font-bold text-neutral-25 text-center">
                  15%
                </h2>
              </div>

              <div className="w-[90%]">
                <p className="text-base font-bold text-center text-neutral-25">
                  of the world’s population is neurodivergence
                </p>
              </div>
            </div>
            <div
              data-aos="fade-button"
              className=" flex flex-col items-center justify-center w-full max-w-[257px] h-[155px] rounded-xl bg-[#F7F7F7] "
            >
              <div className="flex justify-between mb-2">
                <div className="flex-shrink-0 w-[20%] flex justify-center items-start ">
                  <i className="icon-mim-neurodivergence block text-5xl weight300 font-light text-primary-700" />
                </div>
                <h2 className="text-5xl font-bold text-primary-700 text-center">
                  6.2M
                </h2>
              </div>

              <div className="w-[90%]">
                <p className="text-base font-bold text-center text-primary-800">
                  Canadians live with a disability{" "}
                </p>
              </div>
            </div>
            <div
              data-aos="fade-button"
              className=" flex flex-col items-center justify-center w-full max-w-[257px] h-[155px] rounded-xl bg-[#F7F7F7]"
            >
              <div className="flex justify-between mb-2">
                <div className="flex-shrink-0 w-[20%] flex justify-center items-start ">
                  <i className="icon-mim-neurodivergence block text-5xl weight300 font-light text-primary-700" />
                </div>
                <h2 className="text-5xl font-bold text-primary-700 text-center">
                  1.3B
                </h2>
              </div>

              <div className="w-[90%]">
                <p className="text-base font-bold text-center text-primary-800">
                  experience significant disability worldwide
                </p>
              </div>
            </div>
            <div
              data-aos="fade-button"
              className=" flex flex-col items-center justify-center w-full max-w-[257px] h-[155px] rounded-xl bg-primary-900 "
            >
              <div className="flex justify-between mb-2">
                <div className="flex-shrink-0 w-[20%] flex justify-center items-start ">
                  <i className="icon-mim-neurodivergence block text-5xl weight300 font-light text-primary-500" />
                </div>
                <h2 className="text-5xl font-bold text-neutral-25 text-center">
                  13%
                </h2>
              </div>

              <div className="w-[90%]">
                <p className="text-base font-bold text-center text-neutral-25">
                  Americans are neurodivergent
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
