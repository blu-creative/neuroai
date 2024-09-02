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
        <span className="text-primary-900">How can we help? </span>
      </h1>
      <div data-aos="fade-left">
        <Accordion text="Can you detail what is included in the support, maintenance, and regular updates service?">
          <div className="font-CerebriSansPro font-medium text-xl">
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
          <div className="font-CerebriSansPro font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="What is the procedure to obtain the initial CDA/AODA compliance certification after installation?">
          <div className="font-CerebriSansPro font-medium text-xl">
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
        <Accordion text="Do you offer regular audits to ensure the continuous compliance of the website? If so, how frequently are these audits performed?">
          <div className="font-CerebriSansPro font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="What is the procedure to follow to report a problem or request technical assistance?">
          <div className="font-CerebriSansPro font-medium text-xl">
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
        <Accordion text="What are your fees for customer support services if we encounter problems with the widget?">
          <div className="font-CerebriSansPro font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="How do you ensure that your widget will meet accessibility requirements in real time?">
          <div className="font-CerebriSansPro font-medium text-xl">
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
        <Accordion text="How do you handle accessibility-related complaints?">
          <div className="font-CerebriSansPro font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>
      <div data-aos="fade-left">
        {" "}
        <Accordion text="Do you offer support in case of lawsuits related to    non-compliance of the website in Canada?">
          <div className="font-CerebriSansPro font-medium text-xl">
            The included services are updating the application, ensuring that
            the application constantly makes the necessary adjustments based on
            the WCAG 2.1 standard, as well as customer support (support for your
            technical team, not your end users) in case of any anomalies in the
            functioning of the application on your web pages.
          </div>
        </Accordion>
      </div>
    </section>
  );
}
