import { FileText, Download, CheckCircle, Users, FileCog, FolderSearch, FileCheck, Table2, FileType, Monitor, ClipboardCheck, Target, GraduationCap, Calendar, Building, AlertCircle, Image, Keyboard, Navigation } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function DocumentRemediation() {
  const features = [
    {
      icon: FolderSearch,
      title: 'Document Inventory & Audit',
      description: 'We catalog your organization\'s published documents and assess each one for accessibility compliance. This covers reading order, heading structure, table markup, alt text for images, form field labeling, color contrast, language settings, bookmarks, and tag structure.',
      imageUrl: '/images/services/documentation/1-document_inventory.png'
    },
    {
      icon: FileCheck,
      title: 'PDF Remediation',
      description: 'Tagged PDF remediation with proper reading order, bookmarks, structural tags, and screen reader compatibility. We convert scanned PDFs (image-only) into fully tagged, searchable, accessible documents.',
      imageUrl: '/images/services/documentation/2-pdf_remediation.png'
    },
    {
      icon: Table2,
      title: 'Excel Remediation',
      description: 'Named ranges, sheet structure, alt text for charts and graphics, accessible formatting, and proper data table markup.',
      imageUrl: '/images/services/documentation/3-excel_remediation.png'
    },
    {
      icon: FileType,
      title: 'Word Document Remediation',
      description: 'Heading hierarchy, accessible styles, alt text for all embedded images, proper document structure, and list formatting.',
      imageUrl: '/images/services/documentation/4-word_remediation.png'
    },
    {
      icon: Monitor,
      title: 'Assistive Technology Validation',
      description: 'Every remediated document is tested with assistive technology to confirm it can be navigated and read by screen readers.',
      imageUrl: '/images/services/documentation/4-screen_readers.png'
    }
  ];

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6F4FF]">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3366FF]/20 to-[#69BCFF]/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#69BCFF]/15 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto text-center relative px-[0px] pt-[32px] pb-[0px]">
          {/* Tagline with Icon */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
              <FileText className="w-4 h-4" aria-hidden="true" />
              Document Accessibility Remediation
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">Professional Document Remediation for Section 508 and WCAG Standards</h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg text-left">When most organizations think about accessibility, they think about their website. But under ADA Title II and Section 508, every digital document your organization publishes—every PDF, every Excel spreadsheet, every Word document—must be accessible to individuals with disabilities. For government agencies, school boards, and public institutions that publish hundreds or thousands of documents each year, this is typically the most demanding and most overlooked requirement in the compliance process.<br /><br /><span className="font-bold">NeuroCompliance's Document Accessibility Remediation service closes this gap.</span></p>
        </div>
      </section>

      {/* Section 1.5: What's Included with Sticky Scroll */}
      <section className="px-[24px] py-[40px]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                What's Included
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
              Comprehensive Document Audit & Remediation
            </h2>
          </div>

          {/* Sticky Scrolling Cards Container */}
          <div className="relative">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="sticky top-20 mb-8"
                  style={{ 
                    top: `${80 + index * 20}px`
                  }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 p-8 md:p-12">
                      {/* Left Side: Content */}
                      <div className="flex flex-col justify-center">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3366FF] to-[#69BCFF] flex items-center justify-center mb-6 shadow-md">
                          <Icon className="w-7 h-7 text-white" aria-hidden="true" />
                        </div>
                        <h3 className="text-2xl md:text-3xl text-[#001957] mb-4 font-[DM_Sans]">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {feature.description}
                        </p>
                      </div>

                      {/* Right Side: Visual */}
                      <div className="flex items-center justify-center">
                        <div className="relative w-full aspect-square max-w-md rounded-2xl overflow-hidden bg-white">
                          <ImageWithFallback
                            src={feature.imageUrl}
                            alt={`${feature.title} visualization`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Document Types */}
      

      {/* Section 3: Key Features */}
      

      {/* Section 3.5: Why Document Accessibility Is the Hidden Gap */}
      <section className="px-[24px] py-[40px]">
        <div className="max-w-5xl mx-auto">
          {/* Tagline */}
          <div className="text-left mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <AlertCircle className="w-4 h-4" aria-hidden="true" />
                The Hidden Gap
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout: Title Left, Body Right */}
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            {/* Left: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
                Why Document Accessibility Is the Hidden Gap
              </h2>
            </div>

            {/* Right: Body Text */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Most organizations discover—often too late—that document accessibility represents the largest volume of compliance work required. A single school board may publish thousands of PDFs per year: board minutes, policy documents, budgets, curriculum materials, and parent communications. A municipal government may have decades of archived documents on its website.
              </p>
            </div>
          </div>

          {/* Light Blue Card with Common Failures */}
          <div className="bg-[#F0F5FF] rounded-2xl p-10 border border-[#3366FF]/10">
            <h3 className="text-xl font-semibold text-[#001957] mb-8 text-center">
              The most common failures we see:
            </h3>
            
            <div className="space-y-5 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText className="w-4 h-4 text-[#3366FF]" aria-hidden="true" />
                </div>
                <span className="text-gray-700 leading-relaxed">
                  PDFs scanned as flat images with no underlying text layer
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Navigation className="w-4 h-4 text-[#3366FF]" aria-hidden="true" />
                </div>
                <span className="text-gray-700 leading-relaxed">
                  Documents with no heading structure—screen readers cannot navigate them
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Table2 className="w-4 h-4 text-[#3366FF]" aria-hidden="true" />
                </div>
                <span className="text-gray-700 leading-relaxed">
                  Data tables without proper row and column headers
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Image className="w-4 h-4 text-[#3366FF]" aria-hidden="true" />
                </div>
                <span className="text-gray-700 leading-relaxed">
                  Images, charts, and infographics without alt text
                </span>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Keyboard className="w-4 h-4 text-[#3366FF]" aria-hidden="true" />
                </div>
                <span className="text-gray-700 leading-relaxed">
                  Forms that cannot be completed using a keyboard or screen reader
                </span>
              </div>
            </div>

            <p className="text-[#001957] font-semibold text-left mt-8 text-lg max-w-3xl mx-auto">
              Every one of these is a compliance violation under ADA Title II and Section 508.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Remediation Standards */}
      <section className="bg-[#F8F9FA] px-[24px] py-[40px]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <ClipboardCheck className="w-4 h-4" aria-hidden="true" />
                What You Get
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
              Deliverables
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Document Accessibility Audit Report cataloging all documents and their compliance status.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Fully remediated documents returned in accessible format, ready for republication.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Compliance certification for each remediated document.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Training recommendations so your team can create accessible documents going forward.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Ideal For */}
      <section className="px-[24px] py-[40px]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
              Ideal For
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Government agencies required to publish accessible public records, reports, budgets, and forms.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  School boards and universities with large volumes of academic, administrative, and policy documents.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Courts and law enforcement agencies with public-facing records and community resources.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Any organization with a significant backlog of inaccessible PDFs, Excel files, or Word documents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[24px] pt-[64px] pb-[24px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">
              Get Your Documents Compliant
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Ensure all your digital documents meet ADA Title II and Section 508 requirements
            </p>
            <a
              href="#demo"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}