import Accordion from "@/components/accordion";

const list = [
  "Clickable Content",
  "oDomains",
  "oMenus",
  "oOrientation",
  "oTitles",
  "oGraphics",
  "oForms",
  "oReadability",
  "oDocuments",
  "oTables",
  "oCarousels",
];
const list1 = [
  "Documentation and tests conducted by our research and development team, including a line-by-line assessment and responses to each accessibility complaint.",
  "Two different audits conducted by a third party with our team.",
  "Suggested responses for all case scenarios.",
  "Ongoing support from our team.",
];

export default function Third() {
  return (
    <section className="m-20">
      <h1
        className="md:text-6xl text-3xl font-bold font-Exo text-center mb-10"
        data-aos="fade-left"
      >
        <span className="text-primary-900">How can we help? </span>
      </h1>
      <div data-aos="fade-left">
        <Accordion text="Can you detail what is included in the support, maintenance, and regular updates service?">
          <div className=" font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>

      <div data-aos="fade-right">
        {" "}
        <Accordion text="How do you manage updates and patches to ensure the site remains compliant with accessibility standards?">
          <div className=" font-medium text-xl">
            The application uses generative artificial intelligence to generate
            minor corrections on your website. It analyzes your web pages every
            24 hours to check and correct any new content added. These
            corrections are added to the neurodiverse profiles your users have
            chosen or the personalized modifications they have created and are
            stored in your end users cookies. Our application is a SaaS
            application. This type of cloud application allows us to maintain
            the technological base and the generative artificial intelligence
            technology connected to our servers to keep your instance of the
            NeuroAI utility up to date
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="What is the procedure to obtain the initial CDA/AODA compliance certification after installation?">
          <div className=" font-medium text-xl">
            Once the application is installed, our office will generate an audit
            of your web pages and we will provide you with a report of this
            audit, based on the compliance status of your web pages with the
            WCAG 2.1 standard, included in the cost of the first year. This
            audit result provides specific details on the compliance of the
            audited pages. Among these are:
            <ul className=" font-medium text-xl mt-2 ">
              {list.map((text) => (
                <li className="flex items-center gap-4 mb-2" key={text}>
                  {/* <div className="h-4 bg-primary-500 w-4 rounded-full" /> */}
                  <p>{text}</p>
                </li>
              ))}
            </ul>
            As with all audits, a percentage of the available pages are audited.
            The audited pages are chosen randomly and these pages are modified
            during subsequent audits (if other audits are performed).
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-right">
        {" "}
        <Accordion text="Do you offer regular audits to ensure the continuous compliance of the website? If so, how frequently are these audits performed?">
          <div className=" font-medium text-xl">
            Yes, we offer audits to certify the compliance of the website at the
            time of the audit. The audit options are monthly (12 times per
            year), semi-annually (2 times per year), and quarterly (4 times per
            year). It is also possible to request an audit without having to
            repeat it at a certain frequency.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="What is the procedure to follow to report a problem or request technical assistance?">
          <div className=" font-medium text-xl">
            You simply need to contact your account manager and report the
            problem. Our technical team will then generate a work ticket to make
            the correction.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-right">
        {" "}
        <Accordion text="What are your fees for customer support services if we encounter problems with the widget?">
          <div className=" font-medium text-xl">
            There is no additional cost for the technical support of the tool.
            However, if one of your technicians or administrators modifies the
            code or the NeuroAI SaaS application on your website, and this
            requires a repair or reinstallation, there is a charge for each
            reinstallation or hour of service.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="How do you ensure that your widget will meet accessibility requirements in real time?">
          <div className=" font-medium text-xl">
            Our application examines the web pages every 24 hours, ensuring that
            any new content is analyzed by our application and processed by our
            artificial intelligence tool to generate the necessary corrections.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-right">
        {" "}
        <Accordion text="How do you handle accessibility-related complaints?">
          <div className=" font-medium text-xl">
            The installation of our application on your website is intended to
            demonstrate that your organization has an accessibility program for
            your website. You will find a note of your organization&apos;s
            policy based on the adoption of our application to comply with
            accessibility laws. This policy details in our &quot;compliance
            status&quot; the various elements and technologies applied to your
            website, which meets the Canadian Disabilities Act and provincial
            requirements, in which the organization in question (you) must
            demonstrate that you are making, have made, and continue to make the
            best possible effort to have an accessible website for the
            neurodiverse community. In case of a complaint, our team can provide
            reports that show your site was covered by our accessibility program
            at the date of the complaint. Therefore, if you think you are a
            victim of a complaint abuse, you may consider adding recurring
            audits to your websites.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="Do you offer support in case of lawsuits related to    non-compliance of the website in Canada?">
          <div className=" font-medium text-xl">
            The risk of a lawsuit for non-compliance is based on a complaint
            filed in Canada and is managed by the government of each province
            that has an accessibility law in place. In Ontario, for example, any
            complaint and possible fine is administered by the Ministry for
            Seniors and Accessibility, which is the Ministry responsible for
            enforcing the law. In Canada, we offer the following services:
            <ul className=" font-medium text-xl mt-2 ">
              {list1.map((text) => (
                <li className="flex items-center gap-4 mb-2" key={text}>
                  {/* <div className="h-4 bg-primary-500 w-4 rounded-full" /> */}
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
