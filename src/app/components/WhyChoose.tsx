import { FileCheck, Award, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: FileCheck,
    title: 'Pre-Approved Procurement',
    description: 'Available through TIPS (Contract #250106) and NCSA (Bid #26-05-0214). Your organization can bypass the RFP process and procure our services directly at nationally negotiated pricing.',
  },
  {
    icon: Award,
    title: 'Award-Winning Technology',
    description: [
      'Gold Stevie Award 2025 for Technical Innovation in Assistive Technology',
      'Fluxx Awards Hong Kong 2025 for Leadership in AI',
      'PMEMontreal 2024 for Community Impact'
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Compliance in US, Canada and Europe',
    description: 'We cover the complete compliance lifecycle: WCAG 2.1/2.2, ADA Title II, Section 508, ACA, AODA, and the European Accessibility Act.',
  },
];

export function WhyChoose() {
  return (
    <section className="bg-gradient-to-br from-[#E8F5E9] via-[#F1F8F4] to-[#E8F5E9] relative overflow-hidden px-[24px] py-[64px]" aria-labelledby="why-choose-heading">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#69BCFF]/10 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#3366FF]/5 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-[#69BCFF]/5 rounded-full blur-2xl" aria-hidden="true"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 shadow-sm inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Why NeuroCompliance
            </span>
          </div>
          <h2 id="why-choose-heading" className="text-3xl md:text-4xl lg:text-5xl text-[#001957] mb-4 font-[DM_Sans]">
            Trusted by Government. Built for Scale.
          </h2>
        </div>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Icon */}
                <div className="mb-6" aria-hidden="true">
                  {index === 0 ? (
                    <div className="flex items-center gap-3">
                      <img src="/images/contracts/tips-logo.png" alt="TIPS" className="h-10 w-auto object-contain" />
                      <img src="/images/contracts/ncsa-logo.png" alt="NCSA" className="h-10 w-auto object-contain" />
                      <img src="/images/contracts/ontario-logo.png" alt="Ontario" className="h-10 w-auto object-contain" />
                    </div>
                  ) : (
                    <div className="w-14 h-14 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-[#3366FF]" />
                    </div>
                  )}
                </div>
                
                {/* Title */}
                <h3 className="text-xl text-[#001957] mb-4 font-semibold">
                  {reason.title}
                </h3>
                
                {/* Description */}
                {Array.isArray(reason.description) ? (
                  <ul className="text-gray-600 leading-relaxed text-sm list-disc pl-5">
                    {reason.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {reason.description}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}