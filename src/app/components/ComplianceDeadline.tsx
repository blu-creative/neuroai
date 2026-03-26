import { Building2, GraduationCap, Scale, Bus, Globe, CalendarClock } from 'lucide-react';

const entities = [
  {
    icon: Building2,
    text: 'State and local government agencies',
  },
  {
    icon: GraduationCap,
    text: 'School districts and public universities',
  },
  {
    icon: Scale,
    text: 'Law enforcement and courts',
  },
  {
    icon: Bus,
    text: 'Public transit authorities',
  },
  {
    icon: Globe,
    text: 'Any publicly funded entity with a website or digital presence',
  },
];

export function ComplianceDeadline() {
  return (
    <section className="bg-white px-[24px] py-[64px]" aria-labelledby="compliance-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex justify-center md:justify-start mb-6">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
              <CalendarClock className="w-4 h-4" aria-hidden="true" />
              The Compliance Deadline
            </span>
          </div>
          
          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-12" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 id="compliance-heading" className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-tight font-[DM_Sans]">The Deadline Your Organization Cannot Afford to Miss</h2>
            </div>
            
            {/* Body Text */}
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                The Department of Justice has finalized its rule under ADA Title II, requiring all state and local government entities to make their websites and digital content conform to WCAG 2.1 Level AA.
              </p>
              <p>
                For entities serving populations of 50,000 or more, the compliance date is <strong className="text-[#001957]">April 24,2026</strong>. For entities serving under 50,000, the deadline extends to <strong className="text-[#001957]">April 26,2027</strong>.
              </p>
              <p>
                After these dates, the safe harbor that has historically shielded public organizations from digital accessibility lawsuits is gone. Non-compliant entities will be exposed to legal action, Department of Justice enforcement, and public complaints.
              </p>
            </div>
          </div>
        </div>

        {/* Applies To Section */}
        <div className="bg-gradient-to-br from-[#E8F0FF] to-[#F0F5FF] rounded-3xl p-8 md:p-12 mb-8 border border-[#3366FF]/10">
          <h3 className="text-2xl text-[#001957] mb-10 text-center">This applies to:</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-8" role="list">
            {entities.map((entity, index) => {
              const Icon = entity.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center" role="listitem">
                  <div className="w-14 h-14 bg-white/60 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 border border-[#3366FF]/10" aria-hidden="true">
                    <Icon className="w-6 h-6 text-[#3366FF]" />
                  </div>
                  <span className="text-gray-700 text-sm leading-snug">{entity.text}</span>
                </div>
              );
            })}
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#3366FF]/10 max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-center mb-6">
              The requirement covers websites, web applications, mobile apps, and all publicly available digital documents—including PDFs, forms, reports, and policy documents.
            </p>
            <div className="text-center">
              <a 
                href="#assessment"
                className="inline-block bg-[#3366FF] text-white px-8 py-4 rounded-full hover:bg-[#001957] transition-colors font-medium shadow-lg shadow-[#3366FF]/20 focus:outline-none focus:ring-4 focus:ring-[#69BCFF] focus:ring-offset-2"
              >
                Get Your Free Compliance Assessment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}