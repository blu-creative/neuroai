import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#001957] text-white py-16 px-6" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        {/* Logo */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <img src="/images/logo-white.png" alt="NeuroCompliance" className="h-12 brightness-0 invert" />
            <img src="/images/blu-white.png" alt="Blü AI" className="h-12" />
          </div>
        </div>

        {/* Four Column Layout */}
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-8 lg:gap-x-16 mb-12">
          {/* Column 1: Services */}
          <div className="flex-1 lg:flex-none lg:w-auto text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/monitoring" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Website Accessibility Monitoring
                </Link>
              </li>
              <li>
                <Link to="/services/audit" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Accessibility Remediation Audit
                </Link>
              </li>
              <li>
                <Link to="/services/web-remediation" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Website Accessibility Remediation
                </Link>
              </li>
              <li>
                <Link to="/services/document-remediation" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Document Accessibility Remediation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div className="flex-1 lg:flex-none lg:w-auto text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 text-sm hover:text-white transition-colors">
                  About Blü AI
                </Link>
              </li>
              <li>
                <Link to="/contracts" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Contracts & Procurement
                </Link>
              </li>
              {/* <li>
                <Link to="/resources" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Resources
                </Link>
              </li> */}
              <li>
                <Link to="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="flex-1 lg:flex-none lg:w-auto text-center md:text-left">
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/platform" className="text-gray-300 text-sm hover:text-white transition-colors">
                  NeuroCompliance Dashboard
                </Link>
              </li>
              <li>
                <Link to="/platform" className="text-gray-300 text-sm hover:text-white transition-colors">
                  NeuroAI Automation
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="flex-1 lg:flex-none lg:w-auto lg:ml-auto">
            <h3 className="font-semibold text-white mb-4 text-center md:text-left">Contact</h3>
            <div className="space-y-3 text-sm flex flex-col items-center md:items-start">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#69BCFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-gray-300">
                  <p className="font-medium text-white">Blü AI USA</p>
                  <p>150 SE 2nd Ave, Suite 901</p>
                  <p>Miami, FL 33131</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#69BCFF] flex-shrink-0" aria-hidden="true" />
                <a href="tel:1-855-937-3726" className="text-gray-300 hover:text-white transition-colors">
                  1-855-937-3726
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Row */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Copyright and Links */}
            <div className="text-gray-400 text-sm text-center">
              <p>
                © 2026 Blü AI Digital Technologies. All rights reserved. |{' '}
                <a href="#privacy" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">
                  Privacy Policy
                </a>{' '}
                |{' '}
                <a href="#terms" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">
                  Terms of Service
                </a>{' '}
                |{' '}
                <a href="#accessibility" className="hover:text-white transition-colors focus:outline-none focus:text-white focus:underline">
                  Accessibility Statement
                </a>
              </p>
            </div>

            {/* Trust Badges */}
            <div className="text-gray-400 text-sm text-center">
              <p className="flex flex-wrap items-center justify-center gap-3">
                <span className="whitespace-nowrap">TIPS Awarded Vendor</span>
                <span className="text-gray-600">•</span>
                <span className="whitespace-nowrap">NCSA Contracted</span>
                <span className="text-gray-600">•</span>
                <span className="whitespace-nowrap">Gold Stevie Award Winner</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}