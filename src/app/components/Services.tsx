import { Monitor, FileSearch, Code, FileText, ArrowRight, Briefcase } from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Website Accessibility Monitoring',
    description: 'Continuous, automated tracking of your website\'s accessibility score. Know exactly where you stand at all times—and catch critical issues before they become public complaints or legal exposure. Our most cost-effective service for organizations that need to stay on track.',
  },
  {
    icon: FileSearch,
    title: 'Accessibility Remediation Audit',
    description: 'A comprehensive, page-by-page audit of your website\'s accessibility. We identify every issue, map it to the relevant WCAG standard, classify its severity, and deliver a prioritized technical roadmap so your team knows exactly what needs to happen.',
  },
  {
    icon: Code,
    title: 'Website Accessibility Remediation',
    description: 'Our accessibility engineers go directly into your website and fix the issues identified in your audit. We bring your site to a minimum WCAG 2.1 Level AA standard—the level required by ADA Title II—across every page and component.',
  },
  {
    icon: FileText,
    title: 'Document Accessibility Remediation',
    description: 'Accessibility doesn\'t stop at your website. Every PDF, Excel file, and Word document your organization publishes must be accessible. We audit and remediate your entire document library to meet ADA Title II and Section 508 standards.',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-[#F8F9FA] px-[24px] py-[64px]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
              <Briefcase className="w-4 h-4" aria-hidden="true" />
              Services Overview
            </span>
          </div>
          <h2 id="services-heading" className="text-3xl md:text-4xl lg:text-5xl text-[#001957] mb-6 font-[DM_Sans]">Four Services. One Compliance Partner.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Whether you need ongoing visibility into your accessibility posture or a full-scale remediation of your website and documents, NeuroCompliance has you covered.
          </p>
        </div>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3366FF] transition-all duration-300 hover:shadow-lg flex flex-col"
              >
                {/* Visual Element */}
                <div className="bg-gradient-to-br from-[#F0F5FF] to-white rounded-xl p-8 mb-6 flex items-center justify-center min-h-[200px] relative overflow-hidden" aria-hidden="true">
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#3366FF] to-[#69BCFF] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-[#69BCFF] opacity-10 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#3366FF] opacity-10 rounded-full"></div>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl text-[#001957] mb-4 leading-tight">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                {/* Button */}
                <div>
                  <a 
                    href="#"
                    className="group/btn inline-flex items-center gap-2 text-[#3366FF] hover:text-[#001957] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}