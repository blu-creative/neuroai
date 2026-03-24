import { Lightbulb, Building2, Trophy, Phone, Mail, Globe, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';

export function About() {
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
              <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
              About Blü AI
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Accessibility Compliance Services, Powered by AI
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Blü AI is a digital technology company specializing in accessibility compliance for government agencies, school boards, and enterprises. Our flagship product, NeuroCompliance, combines human expertise with AI-powered technology to help organizations achieve, verify, and sustain digital accessibility compliance at institutional scale.
          </p>
        </div>
      </section>

      {/* Section 1: Our Mission */}
      <section className="bg-white px-[24px] pt-[64px] pb-[24px]">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[400px_1fr] gap-8 bg-gradient-to-br from-[#F0F5FF] to-[#E6F4FF] p-10 rounded-2xl border border-[#3366FF]/10">
            {/* Left Column: Title */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans]">
                Our Mission
              </h2>
            </div>

            {/* Right Column: Content */}
            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed text-lg">
                We believe accessibility should be manageable, not overwhelming. The regulatory landscape is complex—WCAG standards, ADA Title II, Section 508, and a growing web of state and international requirements. Most organizations know they need to be compliant. They just don't know where to start or how to stay there.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg">
                That's what we solve. NeuroCompliance provides the monitoring to track your compliance posture, the auditing to identify every gap, the remediation expertise to fix what's broken, and the technology to make the entire process visible and sustainable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why We're Different */}
      <section className="px-[24px] pt-[64px] pb-[24px]">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-12">
            Why We're Different
          </h2>

          {/* Three boxes */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Services First */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#3366FF] hover:-translate-y-1">
              <Lightbulb className="w-10 h-10 text-[#3366FF] mb-4" aria-hidden="true" />
              <h3 className="text-xl text-[#001957] mb-3 font-[DM_Sans] font-semibold">
                Services First, Technology Behind
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We are not an overlay widget. We are not a tool that generates a report and leaves you to figure out the rest. We are an accessibility compliance partner that provides hands-on services—backed by an intelligent monitoring platform—to deliver compliance outcomes.
              </p>
            </div>

            {/* Built for Institutional Scale */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#3366FF] hover:-translate-y-1">
              <Building2 className="w-10 h-10 text-[#3366FF] mb-4" aria-hidden="true" />
              <h3 className="text-xl text-[#001957] mb-3 font-[DM_Sans] font-semibold">
                Built for Institutional Scale
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our platform and services are designed for organizations with complex digital footprints: thousands of pages, hundreds of documents, multiple stakeholders, and strict procurement requirements. We hold pre-approved contracts through TIPS and NCSA so public entities can procure our services without issuing a formal RFP.
              </p>
            </div>

            {/* Award-Winning Innovation */}
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-[#3366FF] hover:-translate-y-1">
              <Trophy className="w-10 h-10 text-[#3366FF] mb-4" aria-hidden="true" />
              <h3 className="text-xl text-[#001957] mb-3 font-[DM_Sans] font-semibold">
                Award-Winning Innovation
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Blü AI's technology has been recognized with a Gold Stevie Award for Technical Innovation in Assistive Technology (2025), the Fluxx Awards Hong Kong for Leadership in AI (2025), and the PMEMontreal Award for community impact through accessibility (2024). We were also a finalist for the CAMSC Technology Innovation Award (2025).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Our Office */}
      <section className="bg-white px-[24px] pt-[64px] pb-[24px]">
        <div className="max-w-6xl mx-auto">
          {/* Horizontal Divider */}
          <div className="w-full h-px bg-gray-200 mb-12"></div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-12">
            Our Office
          </h2>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-[auto_1fr] gap-6">
            {/* Left Column: Contact Information Box */}
            <div className="bg-[#001957] p-8 rounded-2xl shadow-sm h-fit max-w-sm">
              <h3 className="text-2xl text-white mb-6 font-[DM_Sans] font-semibold">
                Blü AI USA
              </h3>
              
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#69BCFF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-white/90 leading-relaxed">
                      150 SE 2nd Ave, Suite 901<br />
                      Miami, FL 33131
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#69BCFF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-white/90 leading-relaxed">
                      <a href="tel:1-855-937-3726" className="hover:text-[#69BCFF] transition-colors">
                        1-855-937-3726
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#69BCFF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-white/90 leading-relaxed">
                      <a href="mailto:sales@blucreative.dev" className="hover:text-[#69BCFF] transition-colors">
                        sales@blucreative.dev
                      </a>
                    </p>
                  </div>
                </div>

                {/* Websites */}
                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-[#69BCFF] flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-white/90 leading-relaxed">
                      <a href="https://www.blucreative.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#69BCFF] transition-colors block">
                        www.blucreative.dev
                      </a>
                      <a href="https://www.neurocompliance.ai" target="_blank" rel="noopener noreferrer" className="hover:text-[#69BCFF] transition-colors block">
                        www.neurocompliance.ai
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Map */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4158826890937!2d-80.19313892404623!3d25.774084577346564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b686c3a9e9e9%3A0x7c5c3e9c3e9c3e9c!2s150%20SE%202nd%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Blü AI USA Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pt-16 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#001957] via-[#1a4080] to-[#3366FF] rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl text-white mb-4 font-[DM_Sans]">Want to Talk? Request a Conversation</h2>
            <p className="text-white/90 mb-8 text-lg">
              Connect with our team to discuss your accessibility needs
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#001957] px-8 py-4 rounded-full hover:bg-[#F0F5FF] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}