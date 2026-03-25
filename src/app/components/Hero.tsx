import { ArrowRight, Award } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6F4FF]" aria-labelledby="hero-heading">
      {/* Background Decorations */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3366FF]/20 to-[#69BCFF]/20 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#69BCFF]/15 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Content */}
        <div className="inline-block mb-6">
          <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
            <Award className="w-4 h-4" aria-hidden="true" />
            Web Accessibility Excellence
          </span>
        </div>
        
        <h1 id="hero-heading" className="text-3xl md:text-4xl lg:text-5xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
          Accessibility Compliance, Made Manageable
        </h1>
        
        <p className="text-base md:text-lg text-gray-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          NeuroCompliance provides end-to-end accessibility services: from ongoing monitoring and comprehensive audits to hands-on remediation of your websites and documents. We help government agencies, school boards, and enterprises achieve and sustain WCAG 2.1 Level AA compliance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#assessment"
            className="group bg-[#3366FF] text-white px-8 py-4 rounded-full hover:bg-[#001957] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3366FF]/20 focus:outline-none focus:ring-4 focus:ring-[#69BCFF] focus:ring-offset-2 w-full sm:w-auto"
          >
            Get a Free Compliance Assessment
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
          <a 
            href="#services"
            className="bg-white text-[#001957] px-8 py-4 rounded-full border-2 border-[#3366FF] hover:bg-[#F0F5FF] transition-all text-center font-medium focus:outline-none focus:ring-4 focus:ring-[#69BCFF] focus:ring-offset-2 w-full sm:w-auto"
          >
            Explore Our Services
          </a>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500" role="list" aria-label="Compliance standards">
          <div className="flex items-center gap-2" role="listitem">
            <div className="w-2 h-2 bg-[#3366FF] rounded-full" aria-hidden="true"></div>
            <span>ADA Compliant</span>
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <div className="w-2 h-2 bg-[#3366FF] rounded-full" aria-hidden="true"></div>
            <span>Section 508 Certified</span>
          </div>
          <div className="flex items-center gap-2" role="listitem">
            <div className="w-2 h-2 bg-[#3366FF] rounded-full" aria-hidden="true"></div>
            <span>WCAG 2.1 AA Standard</span>
          </div>
        </div>
        
        {/* Laptop Mockup - Moved to bottom */}
        <div className="relative mt-16 max-w-3xl mx-auto">
          <div className="relative">
            {/* Glow effect behind laptop */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#3366FF]/30 to-[#69BCFF]/30 blur-3xl scale-110 rounded-3xl" aria-hidden="true"></div>
            
            {/* Laptop mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-4 border border-gray-200">
              <div className="bg-gradient-to-br from-[#F0F5FF] to-white rounded-lg overflow-hidden aspect-video">
                <img 
                  src="/images/hero-dashboard.jpg" 
                  alt="NeuroCompliance Platform Dashboard showing accessibility compliance metrics and reports"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100" role="img" aria-label="WCAG 2.1 AA compliance indicator">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full" aria-hidden="true"></div>
                <span className="text-sm font-medium text-gray-700">WCAG 2.1 AA</span>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100" role="img" aria-label="Compliance score of 98 percent">
              <div className="text-sm text-gray-600">Compliance Score</div>
              <div className="text-2xl font-bold text-[#3366FF]">98%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}