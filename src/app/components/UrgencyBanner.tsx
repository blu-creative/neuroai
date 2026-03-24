import { ArrowRight, AlertCircle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <section className="px-6 py-[40px]" aria-labelledby="urgency-heading">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#001f5e] to-[#2b5bb8] rounded-2xl px-[24px] py-[40px]">
        <div className="flex flex-col items-center md:items-start gap-6 max-w-3xl mx-auto md:mx-0 px-0 md:pl-[80px] md:pr-[0px] py-[0px]">
          {/* Icon and Message */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-[#69BCFF]" aria-hidden="true" />
              <span id="urgency-heading" className="text-[#69BCFF] font-bold text-sm tracking-wide">DEADLINE APPROACHING</span>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed">
              The DOJ has set April 24, 2026 as the ADA Title II compliance date for public entities serving 50,000+ residents. After this date, non-compliant organizations lose safe harbor protection from legal action.
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <a 
              href="#why-accessibility"
              className="group bg-white text-[#001957] px-6 py-3 rounded-full hover:bg-[#F0F5FF] transition-all flex items-center gap-2 font-medium text-sm shadow-lg focus:outline-none focus:ring-4 focus:ring-[#69BCFF] focus:ring-offset-2 focus:ring-offset-[#001957]"
            >
              Learn what this means for your organization
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}