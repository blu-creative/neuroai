import Image from "next/image";

export default function Fourth({ translate }) {
  return (
    <div className="flex flex-col items-center gap-12 py-16 px-8 font-CerebriSansPro">
      <section className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto gap-24 md:gap-[100px]">
        {/* Box Section */}
        <div
          className="flex justify-center items-center w-full md:w-[50%] h-[200px] md:h-[420px] bg-primary-500 rounded-xl py-6 px-12"
          data-aos="flip-left"
        >
          <div className="w-full flex flex-col gap-4">
            {/* Box Title */}
            <span className="text-neutral-50 text-2xl font-bold mb-2 text-center">
              Most Common WCAG Failures
            </span>

            {/* Progress Bars */}
            {[
              { label: "Low Contrast Text", percentage: 81 },
              { label: "No Alternative Text", percentage: 54 },
              { label: "Missing Form Input Labels", percentage: 48 },
              { label: "Empty Links", percentage: 44 },
              { label: "Empty Buttons", percentage: 28 },
              { label: "Missing Document Language", percentage: 17 },
            ].map((task, index) => (
              <div
                key={index}
                className="flex items-center w-full mb-0.5 h-[40px] bg-primary-500 rounded-md border-3 border-primary-900 overflow-hidden"
              >
                {/* Filled Part of the Bar with Percentage and Label */}
                <div
                  className="bg-primary-900 h-full flex items-center justify-start pl-2"
                  style={{ width: `${task.percentage}%` }}
                >
                  {/* Percentage Text Inside the Bar */}
                  <span className="text-sm font-bold text-neutral-50 whitespace-nowrap">{`${task.percentage}%`}</span>
                  {/* Task Label Inside the Same Bar with margin-left 40px from percentage */}
                  <span className="ml-[40px] text-sm font-bold text-neutral-50 whitespace-nowrap">
                    {task.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-7 w-full md:w-[50%]">
          <h1
            className="text-3xl md:text-6xl font-bold font-Exo text-primary-900"
            data-aos="fade-up"
          >
            Web Content
            <span className="text-primary-500"> Accessibility</span> Guidelines
          </h1>
          <p
            className="font-bold text-base md:text-xl max-w-xl"
            data-aos="fade-down"
          >
            The Web Content Accessibility Guidelines (WCAG) are technical
            standards on web accessibility developed by the World Wide Web
            Consortium (W3C). These guidelines aim to make websites, apps,
            electronic documents, and other digital assets accessible to people
            with a broad range of disabilities, including sensory, intellectual,
            learning, and physical disabilities.
          </p>
        </div>
      </section>
    </div>
  );
}
