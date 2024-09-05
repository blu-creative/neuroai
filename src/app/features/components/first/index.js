import Image from "next/image";
import Link from "next/link";

const textList = [
  {
    first: "ADHD Friendly",
    second: "Profile",
    description:
      "Significantly reduces distractions and noise, to help people with ADHD and others to browse, read, and focus on the essential elements of the website more easily.",
    img: "Feature - ADHD.gif",
  },
  {
    first: "Cognitive Disability",
    second: "Profile",
    description:
      "Provides various assistive features to help users with cognitive disabilities such as Autism, Dyslexia, CVA, and others to focus on the essential elements of the website more easily.",
    img: "Feature2.gif",
  },
  {
    first: "Content",
    second: "Adjustments",
    description:
      "Neuro.AI provides customized content adjustment support, for example, adjusting font size, line height and letter spacing.",
    img: "Feature - Content.gif",
  },
  {
    first: "Display",
    second: "Adjustments",
    description:
      "Neuro.AI empowers users to adjust the colors and contrast of the site, with customized adjustments like monochrome, background and text colorization and more.",
    img: "Feature4.gif",
  },
  {
    first: "Orientation",
    second: "Adjustments",
    description:
      "Achieved through links, shortcuts and guiding elements, as well as reducing distractions and noise for individuals with impairments, Neuro.AI permits reorienting the website to suit their needs, like activating the read mode, stopping animations or hiding images.",
    img: "Feature5.gif",
  },
];

export default function First() {
  return (
    <div className="flex flex-col items-center gap-0 py-2 px-8 ">
      {textList.map((text, index) => (
        <div key={index}>
          {" "}
          <section
            key={index}
            className="flex justify-center gap-10 flex-row [&:nth-child(even)]:flex-row-reverse items-center"
          >
            <div className="flex flex-col gap-7">
              <h1 className="text-5xl font-bold font-Exo" data-aos="fade-up">
                <p className="text-primary-500">{text.first}</p>
                <p className="text-primary-900">{text.second}</p>
              </h1>
              <p className="font-bold text-xl max-w-xl" data-aos="fade-down">
                {text.description}
              </p>
              <button
                data-aos="fade-up"
                className="bg-primary-500 text-neutral-50 w-fit px-5 py-1 rounded-lg font-medium text-xl"
              >
                Learn More
              </button>
            </div>
            <div className="relative w-[500px] h-[420px]">
              <Image
                data-aos="flip-left"
                className="w-[500px] h-[420px]"
                fill
                quality={100}
                alt={text.img} // Make alt text dynamic
                src={`/images/features/${text.img}`}
              />
            </div>
          </section>
          <div className="w-full border-t border-gray-300 my-4"></div>
        </div>
      ))}
    </div>
  );
}
