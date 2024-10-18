import Accordion from "@/components/accordion";

export default function Third({ translate }) {
  const list = [
    translate("ClickableContent"),
    translate("Domains"),
    translate("Menus"),
    translate("Orientation"),
    translate("Titles"),
    translate("Graphics"),
    translate("Forms"),
    translate("Readability"),
    translate("Documents"),
    translate("Tables"),
    translate("Carousels"),
  ];

  const list1 = [
    translate("DocumentationTests"),
    translate("TwoAudits"),
    translate("SuggestedResponses"),
    translate("OngoingSupport"),
  ];
  return (
    <section className="m-20">
      <h1
        className="md:text-6xl text-3xl font-bold font-Exo text-center mb-10"
        data-aos="fade-up"
      >
        <span className="text-primary-900">{translate("HowCanWeHelp")}</span>
      </h1>
      <div data-aos="fade-up">
        <Accordion text={translate("AccordionQuestion")}>
          <div className="font-medium text-xl">
            {translate("AccordionAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-down">
        <Accordion text={translate("ManageUpdatesQuestion")}>
          <div className="font-medium text-xl">
            {translate("ManageUpdatesAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-up">
        <Accordion text={translate("CDAProcedureQuestion")}>
          <div className="font-medium text-xl">
            {translate("CDAProcedureAnswer")}
            <ul className="font-medium text-xl mt-2 ">
              {list.map((text) => (
                <li className="flex items-center gap-4 mb-2" key={text}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            {translate("AuditNote")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-down">
        <Accordion text={translate("RegularAuditsQuestion")}>
          <div className="font-medium text-xl">
            {translate("RegularAuditsAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-up">
        <Accordion text={translate("ReportProblemQuestion")}>
          <div className="font-medium text-xl">
            {translate("ReportProblemAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-down">
        <Accordion text={translate("SupportFeesQuestion")}>
          <div className="font-medium text-xl">
            {translate("SupportFeesAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-up">
        <Accordion text={translate("AccessibilityRequirementsQuestion")}>
          <div className="font-medium text-xl">
            {translate("AccessibilityRequirementsAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-down">
        <Accordion text={translate("AccessibilityComplaintsQuestion")}>
          <div className="font-medium text-xl">
            {translate("AccessibilityComplaintsAnswer")}
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-up">
        <Accordion text={translate("LawsuitSupportQuestion")}>
          <div className="font-medium text-xl">
            {translate("LawsuitSupportAnswer")}
            <ul className="font-medium text-xl mt-2 ">
              {list1.map((text) => (
                <li className="flex items-center gap-4 mb-2" key={text}>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Accordion>
      </div>
    </section>
  );
}
