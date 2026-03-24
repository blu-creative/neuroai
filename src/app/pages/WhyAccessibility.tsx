import { Scale, Globe, Smartphone, FileText, Video, MousePointer, TrendingUp, Search, Award, CheckCircle2, AlertCircle } from 'lucide-react';

export function WhyAccessibility() {
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
              <AlertCircle className="w-4 h-4" aria-hidden="true" />
              Compliance Education
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Accessibility Is No Longer Optional
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Digital accessibility isn't just good practice. It's federal law. And with the DOJ's final rule under ADA Title II, the era of best-effort compliance is over.
          </p>
        </div>
      </section>

      {/* Section 1: The Legal Reality */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <Scale className="w-4 h-4" aria-hidden="true" />
                The Legal Reality
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-16">
            {/* Left Column: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
                The Rules Have Changed
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                On April 24, 2024, the Department of Justice published its final rule under Title II of the Americans with Disabilities Act. For the first time, the rule establishes specific technical requirements for web content and mobile application accessibility for state and local government entities.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg font-semibold">
                The standard is WCAG 2.1 Level AA.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                The compliance deadlines are:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span><strong>April 24, 2026</strong> — Public entities serving a population of 50,000 or more</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <CheckCircle2 className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span><strong>April 26, 2027</strong> — Public entities serving a population under 50,000</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-lg">
                After these dates, the informal safe harbor that has historically shielded public organizations from web accessibility lawsuits is removed. Non-compliant entities are exposed to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Department of Justice enforcement actions</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Private litigation under the ADA</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Public complaints filed through the Office for Civil Rights</span>
                </li>
                <li className="flex items-start gap-3 text-gray-600 text-lg">
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" aria-hidden="true" />
                  <span>Loss of federal funding eligibility</span>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-lg">
                This is not hypothetical. ADA Title II web accessibility lawsuits have increased every year since 2018. The DOJ's final rule provides plaintiffs with a clear, enforceable standard for the first time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: What Is Required */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                What Is Required
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-16">
            {/* Left Column: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
                It's Not Just Your Website
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                The ADA Title II rule covers all web content and digital services provided by public entities. This includes:
              </p>
              
              {/* Grid of covered items with icons */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Websites and web applications</span>
                </div>
                <div className="flex items-start gap-3">
                  <Smartphone className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Mobile applications</span>
                </div>
                <div className="flex items-start gap-3">
                  <MousePointer className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Online portals (payment systems, permits, records requests)</span>
                </div>
                <div className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Published documents (PDFs, Excel files, Word documents)</span>
                </div>
                <div className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Multimedia content (video captions, audio descriptions)</span>
                </div>
                <div className="flex items-start gap-3">
                  <MousePointer className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-gray-600 text-lg">Interactive elements (forms, maps, calendars, search functions)</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg font-semibold mt-8">
                WCAG 2.1 Level AA requires that all digital content be Perceivable, Operable, Understandable, and Robust—the four foundational principles of web accessibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Business Case */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <TrendingUp className="w-4 h-4" aria-hidden="true" />
                The Business Case
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-16">
            {/* Left Column: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
                Accessibility Is Also a Strategic Advantage
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-8">
              {/* Market Reach */}
              <div>
                <h3 className="text-2xl text-[#001957] mb-3 font-[DM_Sans] flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#3366FF]" aria-hidden="true" />
                  Market Reach
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Approximately 1.3 billion people worldwide experience significant disability, according to the World Health Organization. In the United States, 1 in 5 individuals is diagnosed with a neurodiversity or disability. An inaccessible website effectively excludes up to 20% of your potential audience.
                </p>
              </div>

              {/* Search Performance */}
              <div>
                <h3 className="text-2xl text-[#001957] mb-3 font-[DM_Sans] flex items-center gap-3">
                  <Search className="w-6 h-6 text-[#3366FF]" aria-hidden="true" />
                  Search Performance
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Websites that are not accessible are penalized by search engines and advertising platforms. Organizations with inaccessible sites spend up to 18% more on SEO and SEM to achieve the same visibility as accessible competitors.
                </p>
              </div>

              {/* Brand & Reputation */}
              <div>
                <h3 className="text-2xl text-[#001957] mb-3 font-[DM_Sans] flex items-center gap-3">
                  <Award className="w-6 h-6 text-[#3366FF]" aria-hidden="true" />
                  Brand & Reputation
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  For public entities, accessibility demonstrates a commitment to serving every member of the community. For enterprises, it signals corporate responsibility and inclusive design thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Three Steps to Compliance Readiness */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Tagline */}
          <div className="mb-6">
            <div className="inline-block">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                What You Should Do Now
              </span>
            </div>
          </div>

          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-12 text-center">
            Three Steps to Compliance Readiness
          </h2>

          {/* Stepper */}
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#3366FF] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl text-[#001957] mb-2 font-[DM_Sans] font-semibold">
                  Know where you stand.
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Start with an accessibility audit or monitoring service to establish your baseline score and identify your highest-risk issues.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#3366FF] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl text-[#001957] mb-2 font-[DM_Sans] font-semibold">
                  Build your remediation plan.
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Use the audit findings to prioritize fixes by severity and impact. Focus on Extreme and High severity issues first.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm flex items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-[#3366FF] text-white flex items-center justify-center text-xl font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl text-[#001957] mb-2 font-[DM_Sans] font-semibold">
                  Remediate and maintain.
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Execute the fixes—either with your internal team or ours—and implement ongoing monitoring to ensure compliance is sustained.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <a
              href="#demo"
              className="inline-block bg-[#3366FF] text-white px-8 py-4 rounded-full hover:bg-[#2952CC] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Get Your Free Compliance Assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}