import Image from "next/image";

export default function Second() {
  return (
    <section className="flex justify-center gap-10 flex-col items-center text-center">
      <h1 className="text-6xl font-bold font-Exo" data-aos="fade-up">
        <span className="text-primary-900">Automated </span>
        <span className="text-primary-500">Remediation</span>
      </h1>
      <p className="font-bold text-xl max-w-xl" data-aos="fade-down">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <button
        data-aos="fade-up"
        className="bg-primary-500 text-neutral-50 w-fit px-4 py-1 rounded-lg font-medium text-xl"
      >
        Book Now
      </button>
      <Image
        data-aos="flip-left"
        width={743}
        height={610}
        quality={100}
        alt="img"
        src="/images/features/computer.png"
      />
    </section>
  );
}
