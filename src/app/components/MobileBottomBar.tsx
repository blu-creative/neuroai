import { Phone } from 'lucide-react';

export function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Phone Number */}
        <a 
          href="tel:1-855-937-3726" 
          className="flex items-center gap-2 text-[#001957] hover:text-[#3366FF] transition-colors"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span className="text-sm font-medium">1-855-937-3726</span>
        </a>
        
        {/* Request a Demo Button */}
        <a 
          href="https://tidycal.com/team/blu-ai-bizdev/neuroai-demo"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3366FF] text-white px-6 py-2.5 rounded-full hover:bg-[#001957] transition-colors whitespace-nowrap text-sm font-medium"
        >
          Request a Demo
        </a>
      </div>
    </div>
  );
}