import Accordion from "@/components/accordion";

const list = [
  "Enhance readable text content",
  "Modify fonts, colors, and sounds",
  "Detailed text alternatives for images",
  "Adjust web page layout and order of information",
  "Maintain the design friendly to not induce seizures",
];

export default function Third() {
  return (
    <section className="m-20">
      <h1
        className="text-6xl font-bold font-Exo text-center mb-10"
        data-aos="fade-up"
      >
        <span className="text-primary-900">See all of our </span>
        <span className="text-primary-500">Features</span>
      </h1>
      <Accordion text="Content">
        <ul className="font-CerebriSansPro font-medium text-xl">
          {list.map((text) => (
            <li className="flex items-center gap-4 mb-2" key={text}>
              <div className="h-4 bg-primary-500 w-4 rounded-full" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Accordion>
      <Accordion text="Display">
        <ul className="list-disc list-inside marker:text-primary-500 font-CerebriSansPro font-medium text-xl">
          {list.map((text) => (
            <li className="flex items-center gap-4 mb-2" key={text}>
              <div className="h-4 bg-primary-500 w-4 rounded-full" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Accordion>
      <Accordion text="Orientation">
        <ul className="list-disc list-inside marker:text-primary-500 marker:text-2xl font-CerebriSansPro font-medium text-xl">
          {list.map((text) => (
            <li className="flex items-center gap-4 mb-2" key={text}>
              <div className="h-4 bg-primary-500 w-4 rounded-full" />
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </Accordion>
    </section>
  );
}
