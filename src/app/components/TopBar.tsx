import { Phone, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#001957] text-white py-2 px-6 text-sm" role="banner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-center px-[8px] py-[4px] gap-1 md:gap-0">
        {/* Left side: Contact info */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-6">
          <a href="tel:1-855-937-3726" className="flex items-center gap-2 hover:text-[#69BCFF] transition-colors focus:outline-none focus:text-[#69BCFF] focus:underline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
            </svg>
            <span className="text-[13px]">1-855-937-3726</span>
          </a>
          <a href="mailto:sales@blucreative.dev" className="flex items-center gap-2 hover:text-[#69BCFF] transition-colors focus:outline-none focus:text-[#69BCFF] focus:underline">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="text-[13px]">sales@blucreative.dev</span>
          </a>
        </div>

        {/* Right side: ADA deadline notice */}
        <a 
          href="/why-accessibility" 
          className="hover:text-[#69BCFF] transition-colors hidden md:block text-[13px] focus:outline-none focus:text-[#69BCFF] focus:underline"
        ><span className="font-bold">ADA Title II Deadline: April 24, 2026</span> — Is your organization ready?</a>
      </div>
    </div>
  );
}