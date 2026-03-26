import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';

export function Header() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const serviceItems = [
    { name: 'Website Accessibility Monitoring', path: '/services/website-monitoring' },
    { name: 'Accessibility Remediation Audit', path: '/services/remediation-audit' },
    { name: 'Website Accessibility Remediation', path: '/services/website-remediation' },
    { name: 'Document Accessibility Remediation', path: '/services/document-remediation' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    }

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isServicesOpen]);

  return (
    <header className="fixed top-0 md:top-[40px] left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-6 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" aria-label="NeuroCompliance Home">
              <img src="/images/Logo.png" alt="NeuroCompliance" className="h-8" />
            </Link>
          </div>
          
          {/* Navigation - Center */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2" aria-label="Main navigation">
            {/* Services Dropdown */}
            <div 
              ref={dropdownRef}
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}>
              <Link
                to="/services"
                className="flex items-center gap-1 text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1"
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 overflow-hidden" role="menu">
                  {serviceItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-[#001957] hover:bg-[#F0F5FF] hover:text-[#3366FF] transition-colors focus:outline-none focus:bg-[#F0F5FF] focus:text-[#3366FF]"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/platform" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              Platform
            </Link>
            <Link to="/why-accessibility" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1 whitespace-nowrap">Why Accessibility</Link>
            <Link to="/about" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              About
            </Link>
            <Link to="/contracts" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              Contracts
            </Link>
            <Link to="/resources" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              Resources
            </Link>
            <Link to="/checker" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              Checker
            </Link>
            <Link to="/contact" className="text-[#001957] hover:text-[#3366FF] transition-colors text-[14px] focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:ring-offset-2 rounded-md px-2 py-1">
              Contact
            </Link>
          </nav>
          
          {/* CTA Button - Right */}
          <div className="hidden lg:flex items-center">
            <a 
              href="#demo" 
              className="bg-[#3366FF] text-white px-6 py-2.5 rounded-full hover:bg-[#001957] transition-colors whitespace-nowrap text-[14px] focus:outline-none focus:ring-4 focus:ring-[#69BCFF] focus:ring-offset-2"
            ><span className="">Request a Demo</span></a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-[#001957] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4" aria-label="Mobile navigation">
            <div className="flex flex-col gap-4">
              <div>
                <button 
                  className="flex items-center gap-1 text-[#001957] w-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  aria-expanded={isServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {serviceItems.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="text-gray-600 hover:text-[#3366FF] focus:outline-none focus:text-[#3366FF] focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/platform" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Platform</Link>
              <Link to="/why-accessibility" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Why Accessibility</Link>
              <Link to="/about" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">About</Link>
              <Link to="/contracts" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Contracts</Link>
              <Link to="/resources" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Resources</Link>
              <Link to="/checker" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Checker</Link>
              <Link to="/contact" className="text-[#001957] hover:text-[#3366FF] focus:outline-none focus:ring-2 focus:ring-[#3366FF] rounded-md px-2 py-1">Contact</Link>
              
              {/* Request a Demo Button */}
              <a 
                href="#demo" 
                className="bg-[#3366FF] text-white px-6 py-3 rounded-full hover:bg-[#001957] transition-colors text-center font-medium mt-2"
              >
                Request a Demo
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}