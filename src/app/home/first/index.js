const textList = [
  { text: "Compliant with CDA & AODA, based on WCAG Standards", icon: "world" },
  { text: "Extensive NeuroDiverse Profiles Included", icon: "hand" },
  { text: "Accessibility Widget Interface", icon: "full-screen" },
  { text: "Daily Compliance Monitoring and Analysis", icon: "mag" },
  {
    text: "Does not Collect Personal Identifiable Information",
    icon: "shield",
  },
];

const clientList = [
  { text: "Compliant with CDA & AODA, based on WCAG Standards", icon: "world" },
  { text: "Extensive NeuroDiverse Profiles Included", icon: "hand" },
  { text: "Accessibility Widget Interface", icon: "full-screen" },
  { text: "Daily Compliance Monitoring and Analysis", icon: "mag" },
  {
    text: "Does not Collect Personal Identifiable Information",
    icon: "shield",
  },
];

export default function First({ translate, locale }) {
  return (
    <section className="flex flex-col items-center gap-12 md:pt-36 pt-20 md:pb-24 pb-12">
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl  font-bold text-center text-primary-900"
      >
        {/* {translate("trusted_leader")} */}
        <span>What is </span>
        <span className="text-primary-500">Neuro?</span>
      </h1>
      <h2
        data-aos="fade-up"
        className="md:text-xl text-base max-w-2xl font-bold text-center mt-10 font-CerebriSansPro"
      >
        {/* {translate("full_service_company")} */}
        Neuro is a customized extension set up in your website that provides the
        power to address accessibility requirements relating to the UI, design,
        and readability of your website by enabling users to modify your site’s
        design to meet their individual needs.
      </h2>
      <div className="flex justify-evenly w-full my-20">
        {textList.map((text) => (
          <div key={text.icon} className="text-center font-CerebriSansPro">
            <i className={`icon-mim-${text.icon} text-primary-500 text-5xl`} />
            <p className="text-primary-900 text-center font-bold text-xl max-w-52 mt-5">
              {text.text}
            </p>
          </div>
        ))}
      </div>
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl  font-bold text-center text-primary-900"
      >
        {/* {translate("trusted_leader")} */}
        <span>Some clients that use </span>
        <span className="text-primary-500">Neuro</span>
      </h1>
      <div className="h-64 flex justify-evenly w-full bg-primary-900 items-center mt-10">
        {clientList.map((cli) => (
          <div key={cli.icon} className="w-28 h-28 rounded-full bg-neutral-0" />
        ))}
      </div>
    </section>
  );
}
