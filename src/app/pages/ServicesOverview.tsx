import { Eye, FileSearch, Code, FileText, ArrowRight, Landmark, GraduationCap, Shield, Building2 } from 'lucide-react';
import { Link } from 'react-router';
import { CheckCircle2 } from 'lucide-react';

export function ServicesOverview() {
  const services = [
    {
      icon: Eye,
      title: 'Website Accessibility Monitoring',
      shortTitle: 'Monitor',
      description: 'Continuous, automated monitoring to ensure your website maintains WCAG 2.1 Level AA compliance 24/7 with real-time alerts and expert manual reviews.',
      path: '/services/website-monitoring',
      features: ['24/7 Automated Scanning', 'Real-Time Alerts', 'Expert Manual Reviews', 'Compliance Dashboard']
    },
    {
      icon: FileSearch,
      title: 'Accessibility Remediation Audit',
      shortTitle: 'Audit',
      description: 'Comprehensive accessibility assessment with detailed remediation roadmap to achieve WCAG 2.1 Level AA compliance and meet ADA Title II requirements.',
      path: '/services/remediation-audit',
      features: ['Comprehensive Testing', 'Detailed Documentation', 'Expert Consultation', 'Prioritized Roadmap']
    },
    {
      icon: Code,
      title: 'Website Accessibility Remediation',
      shortTitle: 'Remediate Web',
      description: 'Expert-led website remediation services to bring your digital properties into full WCAG 2.1 Level AA compliance with production-ready code.',
      path: '/services/website-remediation',
      features: ['Expert Developers', 'Production-Ready Code', 'WCAG 2.1 Level AA', 'Fast Turnaround']
    },
    {
      icon: FileText,
      title: 'Document Accessibility Remediation',
      shortTitle: 'Remediate Documents',
      description: 'Professional remediation of PDFs, Word documents, Excel spreadsheets, and PowerPoint presentations to meet Section 508 and WCAG standards.',
      path: '/services/document-remediation',
      features: ['PDF Documents', 'Microsoft Office Files', 'Bulk Processing', 'Quality Assurance']
    }
  ];

  const audiences = [
    {
      icon: Landmark,
      title: 'Government Agencies',
      description: 'Federal, state, and local government entities subject to ADA Title II and Section 508. We help you meet the April 2026 compliance deadline across your entire digital footprint—websites, portals, applications, and published documents.'
    },
    {
      icon: GraduationCap,
      title: 'School Boards & Higher Education',
      description: 'Student portals, parent communication platforms, course materials, board meeting minutes, and administrative documents all fall under accessibility requirements. We ensure your entire digital ecosystem is compliant.'
    },
    {
      icon: Shield,
      title: 'Law Enforcement & Courts',
      description: 'Public safety portals, records management systems, community resources, and court documents must be accessible to all citizens. Our NCSA contract makes procurement straightforward.'
    },
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Reduce litigation risk, expand your addressable market by up to 20%, and improve your SEO performance. Accessible websites cost up to 18% less to market through search and paid channels.'
    }
  ];

  return (
    <div className="p-[0px]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6F4FF]">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3366FF]/20 to-[#69BCFF]/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#69BCFF]/15 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt] px-[0px] pt-[32px] pb-[0px] text-[32px] md:text-[40px] lg:text-[48px]">
              End-to-End Accessibility Compliance Services
            </h1>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto text-[16px] md:text-[18px] lg:text-[20px]">
              Our services are designed for the scale and complexity of government agencies, school boards, and enterprises. You can engage us for a single service or the full lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-[24px] pt-[64px] pb-[0px]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed mb-4 text-[16px]">
            Most accessibility tools stop at telling you what's wrong. We fix it. NeuroCompliance provides the full spectrum of accessibility compliance services—from the initial monitoring that tells you where you stand, through the audit that maps every issue, to the hands-on remediation that brings your websites and documents into compliance.
          </p>
          
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        {/* Service Journey Visual */}
        <section className="my-16">
          <div className="py-8">
            {/* Journey Steps */}
            <div className="grid grid-cols-2 gap-6 md:flex md:items-center md:justify-center md:gap-8 lg:gap-12">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <div key={index} className="flex items-center gap-8 md:gap-12">
                    <Link
                      to={service.path}
                      className="group flex flex-col items-center gap-3 transition-all w-full"
                    >
                      <div className="w-16 h-16 rounded-full bg-gray-100 group-hover:bg-[#E6F4FF] flex items-center justify-center transition-colors">
                        <Icon className="w-8 h-8 text-gray-400 group-hover:text-[#3366FF] transition-colors" aria-hidden="true" />
                      </div>
                      <h3 className="text-gray-600 group-hover:text-[#001957] font-semibold text-sm text-center transition-colors">
                        {service.shortTitle}
                      </h3>
                    </Link>
                    
                    {/* Arrow connector - hide on mobile, show on desktop, hide on last item */}
                    {index < services.length - 1 && (
                      <ArrowRight className="hidden md:block w-5 h-5 text-gray-300" aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Who We Serve Section */}
        <section className="my-16 bg-white rounded-2xl px-[0px] py-[32px]">
          <div className="max-w-7xl mx-auto px-6">
            {/* Tagline */}
            <div className="mb-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                  Who We Serve
                </span>
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="w-full h-px bg-gray-200 mb-12"></div>

            {/* Title - Left Aligned */}
            <h2 className="mb-12 text-[#001957] leading-[1.1] font-[DM_Sans] text-3xl md:text-4xl lg:text-5xl">
              Built for Institutions That Serve the Public
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {audiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <div 
                    key={index}
                    className="bg-gray-50/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:bg-gray-100/80 hover:border-gray-200 transition-all shadow-sm hover:shadow-md"
                  >
                    <Icon className="w-10 h-10 text-[#3366FF] mb-4" aria-hidden="true" />
                    <h3 className="text-[#001957] mb-3 text-[24px] font-[Inter]">
                      {audience.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">Not Sure Where to Start?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Get a free compliance assessment from our accessibility experts
            </p>
            <Link
              to="/contact?inquiryType=compliance-assessment"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get a Free Compliance Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}