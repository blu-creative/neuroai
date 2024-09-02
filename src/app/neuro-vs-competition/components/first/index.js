const EqualWeb = [
  "Ensures compliance on paid version",
  "Maintenance requires additional services",
  "Monitors select pages on paid version",
  "Automation technology on paid version",
  "Doesn’t store user preferences for visits",
];

const Userway = [
  "Ensures compliance on paid version",
  "Maintenance requires additional services",
  "Monitoring of 10 pages on paid version",
  "Automation technology on paid version",
  "Fixes issues only when site scanning is done",
];

const NeuroAI = [
  "Compliance with WCAG 2.1, ADA, s508 & more",
  "Re-scanning every 24 hours",
  "Monitoring starting at 10.000 pages",
  "Industry's highest rate of compliance through automation widget",
  "AI Remediation of site to WCAG Compliance within 48 hours of installation",
];

export default function First() {
  return (
    <section className="flex font-CerebriSansPro items-center justify-evenly my-16">
      <div className="bg-neutral-50 rounded-lg px-10 py-20 w-md">
        <h2 className="font-bold text-5xl text-primary-900 text-center pb-10 font-Exo">
          EqualWeb
        </h2>
        <div className="flex flex-col gap-12">
          {EqualWeb.map((text) => (
            <div className="flex gap-5" key={text}>
              <div className="w-7 h-7 min-w-7 min-h-7 rounded-full bg-primary-900 flex items-center justify-center">
                <i className="icon-mim-close block text-neutral-50 text-base" />
              </div>
              <p className="font-bold text-xl max-w-72">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-primary-500 text-neutral-50 rounded-lg px-10 py-20 w-md">
        <h2 className="font-bold text-5xl text-center pb-10 font-Exo">
          Neuro.AI
        </h2>
        <div className="flex flex-col gap-12">
          {NeuroAI.map((text) => (
            <div className="flex gap-5" key={text}>
              <div className="w-7 h-7 min-w-7 min-h-7 rounded-full bg-primary-900 flex items-center justify-center">
                <i className="icon-mim-check block text-neutral-50 text-base" />
              </div>
              <p className="font-bold text-xl max-w-72">{text}</p>
            </div>
          ))}
        </div>
        <div className="w-full my-5 text-center">
          <button className="bg-primary-900 text-neutral-50 px-6 py-1 rounded-md font-bold text-xl">
            Get Started
          </button>
        </div>
      </div>
      <div className="bg-neutral-50 rounded-lg px-10 py-20 w-md">
        <h2 className="font-bold text-5xl text-primary-900 text-center pb-10 font-Exo">
          Userway
        </h2>
        <div className="flex flex-col gap-12">
          {Userway.map((text) => (
            <div className="flex gap-5" key={text}>
              <div className="w-7 h-7 min-w-7 min-h-7 rounded-full bg-primary-900 flex items-center justify-center">
                <i className="icon-mim-close block text-neutral-50 text-base" />
              </div>
              <p className="font-bold text-xl max-w-72">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
