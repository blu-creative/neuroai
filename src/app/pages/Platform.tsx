import { BarChart3, ClipboardList, Code, GitBranch, FileText, Target, Sparkles, Monitor } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Platform() {
  const features = [
    {
      icon: BarChart3,
      title: 'Accessibility Grading Dashboard',
      description: 'A color-coded, numeric scoring system that gives you a snapshot of your accessibility health at the site level and the page level. Track your score over time to verify that your compliance posture is improving.'
    },
    {
      icon: ClipboardList,
      title: 'Issue Tracking & Management',
      description: 'Every accessibility issue on your website is cataloged, categorized, and prioritized. Filter by issue type (Clickables, Readability, Headings, Tables, Forms, Keyboard, Graphics), severity level, WCAG standard, or device type.'
    },
    {
      icon: Code,
      title: 'Guided Remediation',
      description: 'Each issue includes a detailed description, the relevant WCAG clause, and an AI-powered code fix suggestion. Your developers get the exact source code they need to resolve the issue—side-by-side with the original problematic code.'
    },
    {
      icon: GitBranch,
      title: 'Team Collaboration & Governance',
      description: 'Assign issues to team members by technical specialty. Track progress with resolution workflows, team comments, and status management. Built for organizations with multiple people involved in the compliance process.'
    },
    {
      icon: FileText,
      title: 'Auto-Generated Accessibility Statements',
      description: 'Generate a complete, standards-compliant accessibility statement for your website automatically. It includes your compliance targets, last audit date, contact information, and is updated as your compliance posture changes.'
    },
    {
      icon: Target,
      title: 'Compliance Targeting',
      description: 'Set your compliance goal—A, AA, AAA, or a best-practice mix—and the entire dashboard adjusts its grading, prioritization, and recommendations to match your target.'
    },
    {
      icon: Sparkles,
      title: 'NeuroAI Automation (Optional)',
      description: 'Enable selective auto-correction of common, recurring accessibility issues with human-in-the-loop controls. Your team approves the types of issues that get auto-fixed. NeuroAI handles the repetitive work so your team can focus on complex challenges.'
    }
  ];

  const [activeFeature, setActiveFeature] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      featureRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveFeature(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6F4FF]">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3366FF]/20 to-[#69BCFF]/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#69BCFF]/15 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto text-center relative px-[0px] pt-[24px] pb-[0px]">
          {/* Tagline with Icon */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
              <Monitor className="w-4 h-4" aria-hidden="true" />
              SaaS Platform
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            The Accessibility Dashboard Built for Institutional Scale
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg text-left mb-6">
            NeuroCompliance is a powerful, standalone SaaS platform designed for the compliance demands of large organizations. It's the technology backbone behind our services—and it's available to your team as a monitoring and management tool.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg text-left">
            Whether you're tracking your accessibility score, managing issue remediation across a team, or generating compliance documentation, the NeuroCompliance dashboard gives you centralized visibility and control.
          </p>
        </div>
      </section>

      {/* Platform Features Section with Sticky Scroll */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="text-left mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" aria-hidden="true" />
                Platform Capabilities
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout: Sticky Left, Scrollable Right */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 lg:gap-16">
            {/* Left Column: Sticky Title and Feature List */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-6 lg:mb-12 text-center lg:text-left">
                Platform Features
              </h2>
              
              {/* Feature Navigation */}
              <div className="space-y-0 hidden lg:block">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index}>
                      <button
                        onClick={() => {
                          featureRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }}
                        className={`text-left w-full py-4 transition-all duration-300 flex items-center gap-4 ${
                          activeFeature === index 
                            ? 'text-[#001957] font-semibold' 
                            : 'text-gray-600 hover:text-[#001957]'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                          activeFeature === index
                            ? 'bg-[#3366FF] text-white'
                            : 'bg-gray-100 text-gray-500'
                        }`}>
                          <Icon className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <span className="text-lg">{feature.title}</span>
                      </button>
                      {index < features.length - 1 && (
                        <div className="w-full h-px bg-gray-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 min-h-[200px] flex flex-col lg:flex-row items-center text-center lg:text-left"
                  >
                    <div className="flex-1 lg:pr-8">
                      <h3 className="text-2xl text-[#001957] mb-4 font-[DM_Sans]">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-[16px]">
                        {feature.description}
                      </p>
                    </div>
                    {/* Icon Visual */}
                    <div className="w-full lg:w-32 flex-shrink-0 mt-6 lg:mt-0 flex justify-center">
                      <div className="w-20 h-20 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br from-[#3366FF] to-[#69BCFF] flex items-center justify-center">
                        <Icon className="w-10 h-10 lg:w-8 lg:h-8 text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">Ready to see the dashboard in action?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Schedule a personalized demo with our accessibility experts
            </p>
            <a
              href="#demo"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}