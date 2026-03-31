import { BarChart3, ClipboardList, Code, GitBranch, FileText, Target, Sparkles, Monitor } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function Platform() {
  const features = [
    {
      icon: BarChart3,
      title: 'Accessibility Grading Dashboard',
      description: 'A color-coded, numeric scoring system that gives you a snapshot of your accessibility health at the site level and the page level. Track your score over time to verify that your compliance posture is improving.',
      imageUrl: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBzY29yaW5nJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NDg0NTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: ClipboardList,
      title: 'Issue Tracking & Management',
      description: 'Every accessibility issue on your website is cataloged, categorized, and prioritized. Filter by issue type (Clickables, Readability, Headings, Tables, Forms, Keyboard, Graphics), severity level, WCAG standard, or device type.',
      imageUrl: 'https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHRyYWNraW5nJTIwY2hlY2tsaXN0fGVufDF8fHx8MTc3NDg0NTMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Code,
      title: 'Guided Remediation',
      description: 'Each issue includes a detailed description, the relevant WCAG clause, and an AI-powered code fix suggestion. Your developers get the exact source code they need to resolve the issue—side-by-side with the original problematic code.',
      imageUrl: 'https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yJTIwcHJvZ3JhbW1pbmclMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NzQ4NDUzMzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: GitBranch,
      title: 'Team Collaboration & Governance',
      description: 'Assign issues to team members by technical specialty. Track progress with resolution workflows, team comments, and status management. Built for organizations with multiple people involved in the compliance process.',
      imageUrl: 'https://images.unsplash.com/photo-1739298061707-cefee19941b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZSUyMG1lZXRpbmd8ZW58MXx8fHwxNzc0ODQ1MzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: FileText,
      title: 'Auto-Generated Accessibility Statements',
      navTitle: 'Accessibility Statements',
      description: 'Generate a complete, standards-compliant accessibility statement for your website automatically. It includes your compliance targets, last audit date, contact information, and is updated as your compliance posture changes.',
      imageUrl: 'https://images.unsplash.com/photo-1642502093512-5b6c81aeef1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHRleHQlMjBzdGF0ZW1lbnQlMjBsZWdhbHxlbnwxfHx8fDE3NzQ4NDUzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Target,
      title: 'Compliance Targeting',
      description: 'Set your compliance goal—A, AA, AAA, or a best-practice mix—and the entire dashboard adjusts its grading, prioritization, and recommendations to match your target.',
      imageUrl: 'https://images.unsplash.com/photo-1768839722142-a980c55e994b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJnZXQlMjBnb2FsJTIwY29tcGxpYW5jZSUyMGFjaGlldmVtZW50fGVufDF8fHx8MTc3NDg0NTMzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Sparkles,
      title: 'NeuroAI Automation (Optional)',
      description: 'Enable selective auto-correction of common, recurring accessibility issues with human-in-the-loop controls. Your team approves the types of issues that get auto-fixed. NeuroAI handles the repetitive work so your team can focus on complex challenges.',
      imageUrl: 'https://images.unsplash.com/photo-1774229637247-3cd45219826c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwYXV0b21hdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzc0ODEzMTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
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
          <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-16">
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
                        className={`text-left py-4 transition-all duration-300 flex items-center gap-4 ${
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
                        <span className="text-[16px] whitespace-nowrap">{feature.navTitle || feature.title}</span>
                      </button>
                      {index < features.length - 1 && (
                        <div className="w-[310px] h-px bg-gray-200"></div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Feature Cards */}
            <div className="space-y-8">
              {features.map((feature, index) => {
                return (
                  <div
                    key={index}
                    ref={(el) => (featureRefs.current[index] = el)}
                    className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex flex-col gap-6">
                      {/* Text Content */}
                      <div>
                        <h3 className="text-xl lg:text-2xl text-[#001957] font-[DM_Sans] mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-[15px] lg:text-[16px]">
                          {feature.description}
                        </p>
                      </div>
                      
                      {/* Image - Full Width and Centered */}
                      <div className="w-full flex justify-center">
                        <div className="w-full max-w-2xl min-h-[400px] rounded-xl overflow-hidden bg-gradient-to-br from-[#F0F5FF] to-white border border-gray-200 flex items-center justify-center">
                          <ImageWithFallback
                            src={(() => {
                              const imageMap: { [key: number]: string } = {
                                0: '/images/platform/1-accessibility_grading.png',
                                1: '/images/platform/2-issue_tracking.png',
                                2: '/images/platform/3-guided_remediation.png',
                                3: '/images/platform/4-team_collaboration.png',
                                4: '/images/platform/5-accessibility_statements.png',
                                5: '/images/platform/6-compliance_targeting.png',
                                6: '/images/platform/7-neuroai_automation.png'
                              };
                              return imageMap[index] || feature.imageUrl;
                            })()}
                            alt={`${feature.title} illustration`}
                            className="w-full h-auto max-h-[500px] object-contain"
                          />
                        </div>
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
            <Link
              to="/contact?inquiryType=platform-demo"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}