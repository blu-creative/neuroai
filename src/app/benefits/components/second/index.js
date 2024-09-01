import Image from "next/image";

export default function First({ translate }) {
  return (
    <section>
      <div className="flex justify-center px-4 md:px-0">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] bg-mintcream w-full md:w-[80%] max-w-[80%]">
          <div
            data-aos="fade-right"
            className="bg-[#F7F7F7] flex items-center justify-center w-full max-w-[550px] h-[230px] rounded-xl"
          >
            1
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#F7F7F7] flex items-center justify-center w-full max-w-[550px] h-[230px] rounded-xl"
          >
            2
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#F7F7F7] flex items-center justify-center w-full max-w-[550px] h-[230px] rounded-xl"
          >
            3
          </div>
          <div
            data-aos="fade-right"
            className="bg-[#F7F7F7] flex items-center justify-center w-full max-w-[550px] h-[230px] rounded-xl"
          >
            4
          </div>
        </div>
      </div>
    </section>
  );
}
