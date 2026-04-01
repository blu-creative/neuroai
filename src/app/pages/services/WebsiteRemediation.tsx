import { Code, Wrench, CheckCircle, Rocket, Settings, ClipboardCheck, Smartphone, FileText, FileSearch, Zap, Sparkles, AlertCircle, Target, Users, Calendar, Ban } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router';

function HowItWorksSection() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  const steps = [
    {
      icon: FileSearch,
      title: 'Audit First',
      description: 'We begin with a completed Accessibility Remediation Audit (ours or an existing one) to establish scope.'
    },
    {
      icon: Zap,
      title: 'Remediation Sprints',
      description: 'Our team executes fixes in structured sprints, prioritized by severity and category.'
    },
    {
      icon: CheckCircle,
      title: 'Validation',
      description: 'Each fix is verified against WCAG criteria. A post-remediation scan confirms the new compliance score.'
    },
    {
      icon: FileText,
      title: 'Handoff',
      description: 'Documentation of all changes plus recommendations for maintaining compliance going forward.'
    }
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSteps((prev) => {
                if (!prev.includes(index)) {
                  return [...prev, index];
                }
                return prev;
              });
            }
          });
        },
        {
          threshold: 0.5,
          rootMargin: '-100px 0px'
        }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section className="bg-[#F8F9FA] px-[24px] py-[64px]">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Title */}
          <div className="md:sticky md:top-32">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
              How It Works
            </h2>
          </div>

          {/* Right Column: Stepper */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeSteps.includes(index);
              const isLast = index === steps.length - 1;

              return (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="relative pl-20"
                >
                  {/* Connecting Line */}
                  {!isLast && (
                    <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gray-300 -mb-8"></div>
                  )}

                  {/* Icon Circle */}
                  <div className="absolute left-0 top-0">
                    <div 
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-700 ${
                        isActive 
                          ? 'bg-[#001957] shadow-lg' 
                          : 'bg-gray-300'
                      }`}
                    >
                      <Icon 
                        className={`w-6 h-6 transition-colors duration-700 ${
                          isActive ? 'text-white' : 'text-gray-500'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pb-4">
                    <h3 className="text-xl md:text-2xl text-[#001957] mb-2 font-[DM_Sans]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function WebsiteRemediation() {
  const features = [
    {
      icon: Code,
      title: 'Code-Level Fixes',
      description: 'Our team works directly in your website\'s codebase to resolve accessibility issues. This includes ARIA roles, heading hierarchy, color contrast, keyboard navigation, alt text, form labeling, table markup, and every other category identified in the audit.',
      imageUrl: '/images/services/remediation/1-code_fixes.png'
    },
    {
      icon: Smartphone,
      title: 'Cross-Device Remediation',
      description: 'We fix issues on both Desktop and Mobile. Your website will be accessible regardless of how your audience accesses it.',
      imageUrl: '/images/services/remediation/2-cross_devices.png'
    },
    {
      icon: CheckCircle,
      title: 'Post-Remediation Verification',
      description: 'After remediation, we run a full verification scan to confirm that issues have been resolved and your accessibility score reflects the improvements.',
      imageUrl: '/images/services/remediation/3-post-remediation_verification.png'
    },
    {
      icon: FileText,
      title: 'Handoff Documentation',
      description: 'We document every change made to your website so your team understands what was modified and how to maintain compliance as new content is published.',
      imageUrl: '/images/services/remediation/4-handoff_documentation.png'
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
              <Code className="w-4 h-4" aria-hidden="true" />
              Website Accessibility Remediation
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">We Fix It. You Stay Compliant.</h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg text-left">Knowing what's wrong is only half the battle. The NeuroCompliance Website Accessibility Remediation service puts our accessibility engineers directly into your website to resolve the issues identified in your audit. We don't hand you a report and wish you luck—we do the work. When we're done, your website meets a minimum WCAG 2.1 Level AA standard—the level required by ADA Title II—across every page, component, and interactive element.</p>
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
              Hands-On Remediation by Accessibility Engineers
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

      {/* Section 1.75: How It Works */}
      <HowItWorksSection />

      {/* Section 2: Remediation Approach */}
      

      {/* Section 3: Key Features */}
      

      {/* Section 4: Common Remediations */}
      

      {/* Section 5: NeuroAI Automation */}
      <section className="px-[24px] py-[64px] bg-[#F8F9FA] relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3366FF]/10 to-[#69BCFF]/10 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#69BCFF]/5 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="max-w-6xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column: Content */}
            <div>
              {/* Tagline */}
              <div className="inline-block mb-6">
                <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                  <Sparkles className="w-4 h-4" aria-hidden="true" />
                  Optional Add-On
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-6">
                NeuroAI Automation
              </h2>

              {/* Body Text */}
              <div className="space-y-4 mb-8">
                <p className="text-gray-600 leading-relaxed text-lg">
                  For recurring, minor accessibility issues that reappear each time content is updated, NeuroAI can be deployed alongside manual remediation to automatically correct common patterns—such as missing alt text, improper heading hierarchy, and basic color contrast violations.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  NeuroAI operates with full human-in-the-loop controls. Your team decides which issue types are auto-corrected and reviews all changes before they go live.
                </p>
              </div>

              {/* Important Notice Box */}
              <div className="border-2 border-gray-300 rounded-2xl p-6 bg-white">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-gray-700 leading-relaxed">
                      <span className="font-semibold">Important:</span> NeuroAI is an accelerator that reduces manual workload on repetitive issues. It is not a replacement for expert remediation. The DOJ has clarified that overlay widgets and automated tools alone do not satisfy ADA Title II requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Visual */}
            <div className="flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-lg rounded-2xl overflow-hidden bg-gradient-to-br from-[#F0F5FF] to-white border border-gray-200">
                <ImageWithFallback
                  src="/images/services/remediation/neuroai-automation.png"
                  alt="NeuroAI Automation visualization"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Ideal For */}
      <section className="px-[24px] py-[56px]">
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
                  Organizations that have completed an audit and need expert execution of the fixes.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  IT teams without in-house accessibility specialists.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Entities facing the April 2026 deadline that need rapid, reliable remediation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                  <Ban className="w-6 h-6 text-[#001957]" aria-hidden="true" />
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Organizations that have tried overlay widgets and need to move to substantive compliance.
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
              Make Your Website Fully Accessible
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              Let our expert developers handle the technical work of achieving compliance
            </p>
            <Link
              to="/contact?inquiryType=web-remediation"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Start Remediation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}