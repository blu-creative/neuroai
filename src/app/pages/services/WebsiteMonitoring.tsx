import { Eye, Radar, TrendingUp, AlertTriangle, Bell, LayoutDashboard, CheckCircle, Target, Shield, DollarSign, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';

export function WebsiteMonitoring() {
  const features = [
    {
      icon: Radar,
      title: 'Automated Domain-Wide Scanning',
      description: 'Your entire web domain is scanned at regular intervals - weekly, bi-weekly, or monthly - depending on the frequency your organization needs. Every page is checked against your target WCAG compliance level.',
      imageUrl: '/images/services/monitoring/1-automated_domain-wide_scanning.png'
    },
    {
      icon: TrendingUp,
      title: 'Accessibility Score Tracking',
      description: 'A clear, numeric accessibility score for your entire site and for each individual page. Historical trend data shows whether you\'re improving, holding steady, or regressing - so leadership always has a current picture.',
      imageUrl: '/images/services/monitoring/2-accessibility_score_tracking.png'
    },
    {
      icon: AlertTriangle,
      title: 'Issue Severity Classification',
      description: 'Every detected issue is classified as Extreme, High, Medium, or Low severity. Your team sees what matters most and can prioritize accordingly.',
      imageUrl: '/images/services/monitoring/3-issue_severity.png'
    },
    {
      icon: Bell,
      title: 'Alerts & Notifications',
      description: 'When new critical issues are detected - such as a page dropping below your compliance threshold - your team is notified immediately.',
      imageUrl: '/images/services/monitoring/4-notifications.png'
    },
    {
      icon: LayoutDashboard,
      title: 'Dashboard Access',
      description: 'Full access to the NeuroCompliance platform with color-coded grading, page-level drill-downs, and compliance targeting (A, AA, AAA, or best-practice mix).',
      imageUrl: '/images/services/monitoring/5-dashboard.png'
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
              <Eye className="w-4 h-4" aria-hidden="true" />
              Website Accessibility Monitoring
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Stay Ahead of Accessibility Issues Before They Become Problems
          </h1>
        </div>
      </section>

      {/* Section 1: Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed text-lg text-left">
            Accessibility doesn't stay fixed. Every time your team publishes new content, updates a template, or launches a new page, your compliance posture can change. NeuroCompliance's Website Accessibility Monitoring service gives your organization continuous visibility into your accessibility score - so you can catch and resolve critical issues before they trigger complaints, lawsuits, or enforcement action.
          </p>
        </div>
      </section>

      {/* Section 2: What's Included with Sticky Scroll */}
      <section className="bg-[#F8F9FA] px-[24px] py-[40px]">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <CheckCircle className="w-4 h-4" aria-hidden="true" />
                What's Included
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
              Continuous Monitoring, Clear Visibility
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

      {/* Section 3: Why This Matters */}
      <section className="px-[24px] pt-[64px] pb-[32px]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl md:text-4xl text-[#001957] mb-6 font-[DM_Sans]">
                Why This Matters
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  This is the most cost-effective entry point for organizations that need to maintain awareness of their accessibility posture. It's ideal as a standalone service for organizations that have already completed remediation, or as the foundation for a broader compliance program.
                </p>
                <p>
                  Think of it as your accessibility early warning system. Without ongoing monitoring, a single content update can introduce dozens of new accessibility issues that go undetected for months.
                </p>
              </div>
            </div>

            {/* Right Column - Horizontal Cards */}
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#001957]" aria-hidden="true" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Organizations that have completed remediation and need ongoing compliance assurance.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-[#001957]" aria-hidden="true" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    IT and compliance teams that want early warning before accessibility issues escalate.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-5 h-5 text-[#001957]" aria-hidden="true" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Budget-conscious organizations looking for a cost-effective compliance starting point.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F0F5FF] flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-[#001957]" aria-hidden="true" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Entities preparing for the April 2026 ADA Title II deadline that need baseline visibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-[24px] pt-[40px] pb-[0px]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">Start Monitoring Your Accessibility Score</h2>
            <p className="text-white/90 mb-8 text-lg">
              Ensure continuous compliance and protect your organization from accessibility risks
            </p>
            <Link
              to="/contact?inquiryType=monitoring"
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