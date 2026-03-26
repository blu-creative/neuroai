import { ArrowRight, AlertTriangle } from 'lucide-react';

export function UrgencyBanner() {
  return (
    <section className="px-6 py-[40px]" aria-labelledby="urgency-heading">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#001957] to-[#002a7a] rounded-2xl px-[24px] py-[40px] shadow-2xl border-2 border-yellow-400 relative overflow-hidden">
        {/* Animated pulse effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" aria-hidden="true"></div>
        
        <div className="flex flex-col items-center md:items-start gap-6 max-w-3xl mx-auto md:mx-0 px-0 md:pl-[80px] md:pr-[0px] py-[0px] relative z-10">
          {/* Icon and Message */}
          <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
            <div className="flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full">
              <AlertTriangle className="w-7 h-7 text-yellow-300" aria-hidden="true" />
              <span id="urgency-heading" className="text-yellow-300 font-bold text-base tracking-wide">URGENT: DEADLINE APPROACHING</span>
            </div>
            <p className="text-white text-sm md:text-base leading-relaxed font-medium">
              The DOJ has set April 24, 2026 as the ADA Title II compliance date for public entities serving 50,000+ residents. After this date, non-compliant organizations lose safe harbor protection from legal action.
            </p>
          </div>
          
          {/* CTA Button */}
          <div>
            <a 
              href="#why-accessibility"
              className="group bg-yellow-300 text-[#001957] px-6 py-3 rounded-full hover:bg-yellow-200 transition-all flex items-center gap-2 font-bold text-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-[#001957]"
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