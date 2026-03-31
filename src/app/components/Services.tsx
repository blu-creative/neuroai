import { Monitor, FileSearch, Code, FileText, ArrowRight, Briefcase } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

const services = [
  {
    icon: Monitor,
    title: 'Website Accessibility Monitoring',
    description: 'Continuous, automated tracking of your website\'s accessibility score. Know exactly where you stand at all times—and catch critical issues before they become public complaints or legal exposure. Our most cost-effective service for organizations that need to stay on track.',
    image: '/images/services/monitoring.png',
    path: '/services/website-monitoring',
  },
  {
    icon: FileSearch,
    title: 'Accessibility Remediation Audit',
    description: 'A comprehensive, page-by-page audit of your website\'s accessibility. We identify every issue, map it to the relevant WCAG standard, classify its severity, and deliver a prioritized technical roadmap so your team knows exactly what needs to happen.',
    image: '/images/services/audit.png',
    path: '/services/remediation-audit',
  },
  {
    icon: Code,
    title: 'Website Accessibility Remediation',
    description: 'Our accessibility engineers go directly into your website and fix the issues identified in your audit. We bring your site to a minimum WCAG 2.1 Level AA standard—the level required by ADA Title II—across every page and component.',
    image: '/images/services/remediation.png',
    path: '/services/website-remediation',
  },
  {
    icon: FileText,
    title: 'Document Accessibility Remediation',
    description: 'Accessibility doesn\'t stop at your website. Every PDF, Excel file, and Word document your organization publishes must be accessible. We audit and remediate your entire document library to meet ADA Title II and Section 508 standards.',
    image: '/images/services/document.png',
    path: '/services/document-remediation',
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
              <Link
                key={index}
                to={service.path}
                className="group bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#3366FF] transition-all duration-300 hover:shadow-lg flex flex-col"
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Visual Element */}
                <div className="bg-gradient-to-br from-[#F0F5FF] to-white rounded-xl mb-6 min-h-[200px] relative overflow-hidden" aria-hidden="true">
                  {/* Image positioned at bottom center */}
                  <img 
                    src={service.image} 
                    alt="" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[180px] w-auto object-contain"
                  />
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
                  <span className="group/btn inline-flex items-center gap-2 text-[#3366FF] group-hover:text-[#001957] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}