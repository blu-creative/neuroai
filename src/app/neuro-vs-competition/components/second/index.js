import Image from "next/image";
import Accordion from "@/components/accordion";

// const list = [
//   { title: "Widget Features", image: "Chart1", descriptions: [] },
//   {
//     title: "Pages Monitored",
//     image: "Chart2",
//     descriptions: [
//       "*1  Monitors 10 pages of the website for accessibility compliance - on paid version. Extra fees to monitor and remediate more than 10 pages per site.",
//       "*2  Monitors select pages of the website for accessibility compliance - on paid version.",
//       "*3  Select website pages are regularly scanned and updated - on paid version.",
//     ],
//   },
//   {
//     title: "Compliance with WCAG",
//     image: "Chart3",
//     descriptions: [
//       "*4  Adheres to WCAG 2.1 AA standards - on paid version.",
//       "*5  Fixes accessibility issues only when site scanning is done.",
//     ],
//   },
//   {
//     title: "Scheduled Monitoring and Automation",
//     image: "Chart4",
//     descriptions: [
//       "*6  Utilizes automation technology to automatically fix detected issues and maintain compliance - on paid version.",
//       "*7  Utilizes automation technology to automatically detect & notify about issues to fix while remediating minor issues - on paid version.",
//     ],
//   },
// ];

export default function Second({ translate }) {
  const list = [
    { title: translate("WidgetFeatures"), image: "Chart1", descriptions: [] },
    {
      title: translate("PagesMonitored"),
      image: "Chart2",
      descriptions: [
        translate("Monitors10Pages"),
        translate("MonitorsSelectPages"),
        translate("RegularlyScanned"),
      ],
    },
    {
      title: translate("ComplianceWithWCAG"),
      image: "Chart3",
      descriptions: [
        translate("AdheresToWCAG"),
        translate("FixesAccessibilityIssues"),
      ],
    },
    {
      title: translate("ScheduledMonitoringAndAutomation"),
      image: "Chart4",
      descriptions: [
        translate("UtilizesAutomationTechnology"),
        translate("DetectsAndNotifies"),
      ],
    },
  ];
  return (
    <section className="md:m-8 m-0 flex flex-col items-center gap-8">
      <Accordion text={translate("SeeComparisonCharts")} simple>
        {list.map((sec, index) => (
          <div
            key={sec.title}
            className={`w-full ${index !== 3 ? "mb-16" : ""}`}
          >
            <p
              className="text-4xl font-bold text-primary-900 text-center"
              data-aos="fade-up"
            >
              {sec.title}
            </p>
            <div
              className="w-full p-4 md:p-8 max-w-7xl mx-auto"
              data-aos="flip-right"
            >
              <Image
                src={`/images/neuro-vs-competition/${sec.image}.png`}
                fill
                className="!relative w-full h-auto"
                alt="Img"
              />
            </div>
            {sec.descriptions.map((text) => (
              <p
                key={text}
                className="text-lg font-medium px-4 md:px-8"
                data-aos="fade-up"
              >
                {text}
              </p>
            ))}
          </div>
        ))}
      </Accordion>
      <div className="w-full border-t border-gray-300 -mt-[50px]"></div>
    </section>
  );
}
