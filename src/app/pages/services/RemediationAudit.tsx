import { FileSearch, Users, ClipboardCheck, TrendingUp, Search, ListChecks, Globe, FolderKanban, BookCheck, AlertCircle, Smartphone, Code2, Map, Target, Calendar, Briefcase, Scale } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function RemediationAudit() {
  const features = [
    {
      icon: Globe,
      title: 'Full-Domain Coverage',
      description: 'Every page, component, and interactive element on your website is audited. Nothing is skipped.',
      imageUrl: '/images/services/audit/1-full_coverage.png'
    },
    {
      icon: FolderKanban,
      title: 'Issue Categorization',
      description: 'Issues are organized into categories your team can act on: Clickables, Readability, Headings, Tables, Forms, Keyboard Navigation, Graphics, Context, Document Structure, Errors, and Navigation.',
      imageUrl: '/images/services/audit/2-issue_categorization.png'
    },
    {
      icon: BookCheck,
      title: 'WCAG Compliance Tagging',
      description: 'Every issue is tagged with its corresponding WCAG compliance level—A, AA, AAA, or Best Practice—so your team knows which issues are legally required to fix and which are recommended.',
      imageUrl: '/images/services/audit/3-wcag_tagging.png'
    },
    {
      icon: AlertCircle,
      title: 'Severity Classification',
      description: 'Extreme, High, Medium, and Low. You\'ll know immediately which issues pose the greatest compliance risk and which can be addressed in later phases.',
      imageUrl: '/images/services/audit/4-severity_classification.png'
    },
    {
      icon: Smartphone,
      title: 'Device-Specific Findings',
      description: 'We identify issues specific to Desktop, Mobile, or Cross-device so your remediation team can target their fixes appropriately.',
      imageUrl: '/images/services/audit/6-code_specific.png'
    },
    {
      icon: Code2,
      title: 'Code-Level Issue Identification',
      description: 'For each issue, we show you the exact source code causing the problem, along with an AI-generated suggested fix that your developers can copy and implement.',
      imageUrl: '/images/services/audit/2-issue_categorization.png'
    },
    {
      icon: Map,
      title: 'Prioritized Technical Roadmap',
      description: 'We don\'t just hand you a list of problems. We deliver a prioritized roadmap organized by effort and impact, so your team or ours can execute remediation in the most efficient sequence.',
      imageUrl: '/images/services/audit/7-prioritized_roadmap.png'
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
              <FileSearch className="w-4 h-4" aria-hidden="true" />
              Accessibility Remediation Audit
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Know Exactly Where You Stand—and What to Fix
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg text-left">Before you can fix your accessibility issues, you need to know what they are, where they are, and how critical they are. The NeuroCompliance Accessibility Remediation Audit provides a comprehensive, page-by-page analysis of your website's accessibility—and delivers a clear technical roadmap for achieving compliance. This isn't a surface-level scan. It's an in-depth audit that maps every issue to the relevant WCAG standard, classifies its severity, identifies the code-level cause, and provides an AI-powered suggested fix.</p>
        </div>
      </section>

      {/* Section 2: Audit Process */}
      

      {/* Section 2.5: What's Included with Sticky Scroll */}
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
              The Most Thorough Accessibility Audit Available
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
          
          {/* Spacer to allow last card to scroll properly */}
          
        </div>
      </section>

      {/* Section 3: Key Features */}
      

      {/* Section 4: Deliverables */}
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
              Audit Deliverables
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-200">
            <ul className="space-y-6 max-w-3xl mx-auto">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Comprehensive Accessibility Audit Report (PDF and live dashboard access).</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Issue-by-issue breakdown with WCAG clause references and severity ratings.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Prioritized Remediation Roadmap with estimated level of effort per issue category.</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ClipboardCheck className="w-4 h-4 text-[#001957]" aria-hidden="true" />
                </div>
                <span className="text-gray-700">Executive Summary for leadership, governance, and procurement stakeholders.</span>
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
                  <Target className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Organizations beginning their compliance journey that need a clear baseline.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Entities approaching the April 2026 deadline that need to understand their current exposure.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  IT and compliance teams building a business case for remediation funding.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Organizations required to demonstrate due diligence to oversight bodies or legal counsel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[24px] pt-[40px] pb-[24px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">Request Your Accessibility Audit</h2>
            <p className="text-white/90 mb-8 text-lg">
              Understand your current compliance status and receive a clear path to accessibility
            </p>
            <Link
              to="/contact?inquiryType=audit"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}