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
    <section className="flex justify-center gap-10 flex-col items-center text-center">
      <h1 className="text-6xl font-bold font-Exo" data-aos="fade-up">
        <span className="text-primary-900">See all of our </span>
        <span className="text-primary-500">Features</span>
      </h1>
      <Accordion text="Content">
        <ul>
          {list.map((text) => (
            <li key={text}>{text}</li>
          ))}
        </ul>
      </Accordion>
    </section>
  );
}
