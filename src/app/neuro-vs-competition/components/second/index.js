import Image from "next/image";
import Accordion from "@/components/accordion";

const list = [
  { title: "Widget Features", image: "Chart1", descriptions: [] },
  {
    title: "Pages Monitored",
    image: "Chart2",
    descriptions: [
      "*1  Monitors 10 pages of the website for accessibility compliance - on paid version. Extra fees to monitor and remediate more than 10 pages per site.",
      "*2  Monitors select pages of the website for accessibility compliance - on paid version.",
      "*3  Select website pages are regularly scanned and updated - on paid version.",
    ],
  },
  {
    title: "Compliance with WCAG",
    image: "Chart3",
    descriptions: [
      "*4  Adheres to WCAG 2.1 AA standards - on paid version.",
      "*5  Fixes accessibility issues only when site scanning is done.",
    ],
  },
  {
    title: "Scheduled Monitoring and Automation",
    image: "Chart4",
    descriptions: [
      "*6  Utilizes automation technology to automatically fix detected issues and maintain compliance - on paid version.",
      "*7  Utilizes automation technology to automatically detect & notify about issues to fix while remediating minor issues - on paid version.",
    ],
  },
];

export default function Second() {
  return (
    <section className="m-8 flex flex-col items-center gap-8">
      <Accordion text="See Comparison Charts">
        {list.map((sec) => (
          <div key={sec.title}>
            <p
              className="text-4xl font-bold text-primary-900 text-center"
              data-aos="fade-up"
            >
              {sec.title}
            </p>
            <div className="w-full p-8 max-w-7xl" data-aos="flip-right">
              <Image
                src={`/images/neuro-vs-competition/${sec.image}.png`}
                fill
                className="!relative"
              />
            </div>
            {sec.descriptions.map((text) => (
              <p key={text} className="text-lg font-medium" data-aos="fade-up">
                {text}
              </p>
            ))}
          </div>
        ))}
      </Accordion>
    </section>
  );
}
