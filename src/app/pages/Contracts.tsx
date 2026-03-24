import { FileCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router';
import { useState, useEffect, useRef } from 'react';

import tipsLogo from '/images/contracts/tips-logo.png';
import ncsaLogo from '/images/contracts/ncsa-logo.png';
import westernLogo from '/images/contracts/western-logo.png';
import ontarioLogo from '/images/contracts/ontario-logo.png';

export function Contracts() {
  const [activeContract, setActiveContract] = useState(0);
  const contractRefs = useRef<(HTMLDivElement | null)[]>([]);

  const contracts = [
    {
      id: 'tips',
      name: 'TIPS',
      fullName: 'TIPS — The Interlocal Purchasing System',
      contractNumber: '250106',
      term: 'May 31, 2025 – May 31, 2030',
      description: 'TIPS is a national purchasing cooperative that serves government entities, school districts, higher education institutions, and other public agencies across the United States. Through this contract, your organization can purchase NeuroCompliance\'s full suite of accessibility compliance services—monitoring, auditing, web remediation, and document remediation—at pre-negotiated pricing without a formal bid process.',
      logo: tipsLogo
    },
    {
      id: 'ncsa',
      name: 'NCSA',
      fullName: 'NCSA — North Carolina Sheriffs\' Association',
      contractNumber: '26-05-0214',
      term: '2025 – 2026',
      description: 'The NCSA Technology Bid provides law enforcement agencies and associated public entities with streamlined procurement access to NeuroCompliance\'s services. If your agency needs to bring its public-facing digital services into ADA compliance, this contract makes procurement straightforward.',
      logo: ncsaLogo
    },
    {
      id: 'uwo',
      name: 'UWO',
      fullName: 'University of Western Ontario',
      contractNumber: 'UWORFSQPG-1816',
      term: 'January 1, 2025 – December 1, 2028',
      description: 'Blü AI holds a Master Service Agreement with the University of Western Ontario, providing direct-to-supplier access for UWO and its divisions. Other higher education institutions may leverage this contract framework through a piggyback option, reducing the need to issue a full RFP.',
      logo: westernLogo
    },
    {
      id: 'ontario',
      name: 'Ontario',
      fullName: 'Government of Ontario — Vendor of Record',
      contractNumber: 'Vendor of Record',
      term: 'Active',
      description: 'Blü AI is a Vendor of Record with the Government of Ontario for accessibility compliance services. This designation allows Ontario government ministries and agencies to procure our services through the province\'s established vendor framework.',
      logo: ontarioLogo
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      contractRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveContract(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContract = (index: number) => {
    contractRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

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
              <FileCheck className="w-4 h-4" aria-hidden="true" />
              Contracts & Procurement
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Pre-Approved Procurement — No RFP Required
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            NeuroCompliance is available through nationally recognized purchasing agreements. Public entities can procure our accessibility compliance services directly—without issuing a formal Request for Proposal—while ensuring full compliance, transparency, and favorable pricing.
          </p>
        </div>
      </section>

      {/* Active Contracts Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-12 text-center">
            Active Contracts
          </h2>

          {/* Sticky Tab Navigation */}
          <div className="sticky top-30 bg-white z-20 py-6 mb-8 border-b border-gray-200 shadow-sm">
            <div className="flex justify-center gap-8 flex-wrap">
              {contracts.map((contract, index) => (
                <button
                  key={contract.id}
                  onClick={() => scrollToContract(index)}
                  className={`pb-3 font-semibold transition-all duration-300 border-b-2 ${
                    activeContract === index
                      ? 'text-[#3366FF] border-[#3366FF]'
                      : 'text-gray-500 border-gray-300 hover:text-[#3366FF] hover:border-gray-400'
                  }`}
                >
                  {contract.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contract Cards */}
          <div className="space-y-8">
            {contracts.map((contract, index) => (
              <div
                key={contract.id}
                ref={(el) => (contractRefs.current[index] = el)}
                className="bg-white rounded-2xl p-10 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Logo */}
                <div className="mb-8">
                  <img 
                    src={contract.logo} 
                    alt={`${contract.fullName} logo`}
                    className="w-40 h-20 object-contain object-left"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl text-[#001957] mb-6 font-[DM_Sans]">
                  {contract.fullName}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Contract Number</p>
                    <p className="text-lg text-[#001957] font-semibold">{contract.contractNumber}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Contract Term</p>
                    <p className="text-lg text-[#001957] font-semibold">{contract.term}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {contract.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#F0F5FF] to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-8 text-center">
            What This Means for Your Organization
          </h2>
          
          <p className="text-gray-600 leading-relaxed text-lg mb-8">
            If your organization is a government agency, school board, law enforcement entity, or publicly funded institution, these contracts mean you can:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
              <p className="text-[#001957] leading-relaxed text-lg font-semibold">Skip the RFP process entirely</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
              <p className="text-[#001957] leading-relaxed text-lg font-semibold">Procure at nationally negotiated pricing</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
              <p className="text-[#001957] leading-relaxed text-lg font-semibold">Maintain full procurement compliance and transparency</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-6 h-6 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
              <p className="text-[#001957] leading-relaxed text-lg font-semibold">Begin your accessibility compliance program immediately</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed text-lg mb-8 text-center">
            Simply reference the applicable contract number when contacting our team to initiate the procurement process.
          </p>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-block bg-[#3366FF] text-white px-8 py-4 rounded-full hover:bg-[#001957] transition-colors font-semibold shadow-lg hover:shadow-xl"
            >
              Contact Our Contracts Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}