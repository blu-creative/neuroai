import Link from "next/link";

export default function First({ locale, translate }) {
  const EqualWeb = [
    translate("EnsuresComplianceOnPaidVersion"),
    translate("MaintenanceRequiresAdditionalServices"),
    translate("MonitorsSelectPagesOnPaidVersion"),
    translate("AutomationTechnologyOnPaidVersion"),
    translate("DoesNotStoreUserPreferences"),
  ];

  const Userway = [
    translate("EnsuresComplianceOnPaidVersion"),
    translate("MaintenanceRequiresAdditionalServices"),
    translate("MonitoringOf10PagesOnPaidVersion"),
    translate("AutomationTechnologyOnPaidVersion"),
    translate("FixesIssuesWhenScanningDone"),
  ];

  const NeuroAI = [
    translate("ComplianceWithWCAG21ADA508"),
    translate("ReScanningEvery24Hours"),
    translate("MonitoringStartingAt10000Pages"),
    translate("HighestRateOfComplianceThroughAutomation"),
    translate("AIRemediationToWCAGComplianceWithin48Hours"),
  ];
  return (
    <section className="flex flex-col lg:flex-row items-center justify-evenly my-16">
      <div
        className="bg-neutral-50 rounded-lg px-10 py-20 w-full md:w-md"
        data-aos="fade-down"
      >
        <h2 className="font-bold text-5xl text-primary-900 text-center pb-10 font-Exo">
          {translate("EqualWeb")}
        </h2>
        <div className="flex flex-col gap-12">
          {EqualWeb.map((text) => (
            <div className="flex gap-5 items-start" key={text}>
              <div className="w-7 h-7 min-w-7 min-h-7 rounded-full bg-primary-900 flex items-center justify-center">
                <i className="icon-mim-close block text-neutral-50 text-base" />
              </div>
              <p className="font-bold text-xl max-w-72">{text}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="bg-primary-500 text-neutral-50 rounded-lg px-10 py-20 w-full md:w-md"
        data-aos="fade-up"
      >
        <h2 className="font-bold text-5xl text-center pb-10 font-Exo">
          {translate("NeuroAI")}
        </h2>
        <div className="flex flex-col gap-12">
          {NeuroAI.map((text) => (
            <div className="flex gap-5 items-start" key={text}>
              <div className="w-7 h-7 min-w-7 min-h-7 rounded-full bg-primary-900 flex items-center justify-center">
                <i className="icon-mim-check block text-neutral-50 text-base" />
              </div>
              <p className="font-bold text-xl max-w-72">{text}</p>
            </div>
          ))}
        </div>
        <div className="w-full my-5 text-center">
          <Link
            data-aos="fade-up"
            href={`/contact-us${locale === "fr" ? "?locale=fr" : ""}`}
          >
            <button className="bg-primary-900 text-neutral-50 px-6 py-1 rounded-md font-bold text-xl">
              {translate("GetStarted")}
            </button>
          </Link>
        </div>
      </div>
      <div
        className="bg-neutral-50 rounded-lg px-10 py-20 w-full md:w-md"
        data-aos="fade-down"
      >
        <h2 className="font-bold text-5xl text-primary-900 text-center pb-10 font-Exo">
          {translate("Userway")}
        </h2>
        <div className="flex flex-col gap-12">
          {Userway.map((text) => (
            <div className="flex gap-5 items-start" key={text}>
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
