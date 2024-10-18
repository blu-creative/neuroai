import Image from "next/image";

export default function First({ translate, locale }) {
  // const textList = [
  //   { text: "Compliant with CDA & AODA, based on WCAG Standards", icon: "world" },
  //   { text: "Extensive NeuroDiverse Profiles Included", icon: "hand" },
  //   { text: "Accessibility Widget Interface", icon: "full-screen" },
  //   { text: "Daily Compliance Monitoring and Analysis", icon: "mag" },
  //   {
  //     text: "Does not Collect Personal Identifiable Information",
  //     icon: "shield",
  //   },
  // ];

  const textList = [
    { text: translate("CDAAODACompliant"), icon: "world" },
    { text: translate("NeuroDiverseProfilesIncluded"), icon: "hand" },
    { text: translate("AccessibilityWidgetInterface"), icon: "full-screen" },
    { text: translate("ComplianceMonitoringAndAnalysis"), icon: "mag" },
    {
      text: translate("NoPersonalIdentifiableInformationCollected"),
      icon: "shield",
    },
  ];

  const clientList = [
    {
      text: "Compliant with CDA & AODA, based on WCAG Standards",
      icon: "MonAvenir",
      width: 166,
      fade: "fade-up",
    },
    {
      text: "Extensive NeuroDiverse Profiles Included",
      icon: "Milo",
      width: 203,
      fade: "fade-down",
    },
    {
      text: "Daily Compliance Monitoring and Analysis",
      icon: "PointeClaire",
      width: 133,
      fade: "fade-up",
    },
    {
      text: "Accessibility Widget Interface",
      icon: "Perry",
      width: 326,
      fade: "fade-down",
    },
  ];
  return (
    <section className="flex flex-col items-center md:pt-48 lg:pt-80 pt-48 pb-2">
      <h1
        data-aos="fade-down"
        className="md:text-6xl text-3xl  font-bold text-center text-primary-900"
      >
        {/* {translate("trusted_leader")} */}
        <span>{translate("WhatIs")} </span>
        <span className="text-primary-500">{translate("NeuroAI")}?</span>
      </h1>
      <h2
        data-aos="fade-up"
        className="md:text-xl text-base max-w-2xl font-bold text-center mt-10 md:mx-0 mx-5"
      >
        {/* {translate("full_service_company")} */}
        {translate("NeuroAIIntroPart1")}
      </h2>
      {/* <div className="flex justify-evenly w-full my-20">
        {textList.map((text) => (
          <div key={text.icon} className="text-center " data-aos="flip-right">
            <i className={`icon-mim-${text.icon} text-primary-500 text-5xl`} />
            <p className="text-primary-900 text-center font-bold text-xl max-w-52 mt-5">
              {text.text}
            </p>
          </div>
        ))}
      </div> */}
      <div className="flex flex-wrap justify-evenly w-full my-20">
        {textList.map((text) => (
          <div
            key={text.icon}
            className="text-center mb-8 md:mb-0"
            data-aos="flip-right"
          >
            <i className={`icon-mim-${text.icon} text-primary-500 text-5xl`} />
            <p className="text-primary-900 text-center font-bold text-xl max-w-xs md:max-w-52 mt-5">
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
        <span>{translate("SomeClientsThatUse")}</span>
        <span className="text-primary-500">{translate("NeuroAI")}</span>
      </h1>
      <div className="flex flex-col lg:flex-row  justify-evenly w-full bg-primary-900 items-center mt-14 sm:mt-10 h-auto sm:h-52 md:h-[30rem]">
        {clientList.map((cli) => (
          <div key={cli.icon} className="flex-shrink-0 mb-4 sm:mb-0 md:py-4">
            <Image
              data-aos={cli.fade}
              width={cli.width}
              height={80}
              src={`/images/home/${cli.icon}.png`}
              alt={cli.text}
              quality={100}
              className="max-w-full h-auto sm:mx-2 md:mb-0 mb-2"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
