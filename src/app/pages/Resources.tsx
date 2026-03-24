import { BookOpen, FileCheck, FileText, Newspaper, TrendingUp, Download, Filter, Mail, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

type ResourceType = 'all' | 'legal' | 'technical' | 'guides' | 'case-studies';

interface Resource {
  id: string;
  type: ResourceType;
  tagline: string;
  title: string;
  description: string;
  isGated: boolean;
  ctaText: string;
  ctaLink?: string;
  icon: typeof BookOpen;
}

export function Resources() {
  const [activeFilter, setActiveFilter] = useState<ResourceType>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [email, setEmail] = useState('');

  const resources: Resource[] = [
    {
      id: 'ada-deadline-guide',
      type: 'guides',
      tagline: 'Guide (Gated PDF Download)',
      title: 'The ADA Title II Compliance Deadline: What Public Entities Need to Know Before April 2026',
      description: "A comprehensive guide covering the DOJ's final rule, what's required, who's affected, the compliance timeline, and a step-by-step action plan. This is the primary lead magnet for the site.",
      isGated: true,
      ctaText: 'Download Guide',
      icon: BookOpen
    },
    {
      id: 'wcag-checklist',
      type: 'guides',
      tagline: 'Checklist (Gated PDF Download)',
      title: 'WCAG 2.1 Level AA Compliance Checklist for Government Websites',
      description: 'A practical, printable checklist that IT and compliance teams can use to assess their current state. Organized by WCAG principle (Perceivable, Operable, Understandable, Robust) with plain-language explanations.',
      isGated: true,
      ctaText: 'Download Checklist',
      icon: FileCheck
    },
    {
      id: 'overlay-widgets-article',
      type: 'technical',
      tagline: 'Blog Article',
      title: 'Why Overlay Widgets Are Not Enough for ADA Compliance',
      description: "An educational article explaining why the DOJ and accessibility advocates have made clear that JavaScript overlays and automated widgets do not meet the substantive requirements of ADA Title II. Positions NeuroCompliance's services-led approach as the alternative.",
      isGated: false,
      ctaText: 'Read Article',
      ctaLink: '/services/web-remediation',
      icon: Newspaper
    },
    {
      id: 'document-accessibility-guide',
      type: 'guides',
      tagline: 'Guide',
      title: 'Document Accessibility 101: Making Your PDFs, Excel, and Word Files Compliant',
      description: 'A practical guide for non-technical stakeholders explaining why document accessibility matters, what the common failures are, and how to create accessible documents going forward.',
      isGated: false,
      ctaText: 'Read Guide',
      ctaLink: '/services/document-remediation',
      icon: FileText
    },
    {
      id: 'case-study-90-days',
      type: 'case-studies',
      tagline: 'Case Study',
      title: 'How [Client Name] Achieved Full WCAG AA Compliance in 90 Days',
      description: 'A detailed case study showing the before/after accessibility score, the remediation process, and the business outcomes.',
      isGated: false,
      ctaText: 'Read Case Study',
      ctaLink: '/why-accessibility',
      icon: TrendingUp
    }
  ];

  const filters = [
    { id: 'all' as ResourceType, label: 'All Resources' },
    { id: 'legal' as ResourceType, label: 'Legal' },
    { id: 'technical' as ResourceType, label: 'Technical' },
    { id: 'guides' as ResourceType, label: 'Guides' },
    { id: 'case-studies' as ResourceType, label: 'Case Studies' }
  ];

  const filteredResources = activeFilter === 'all' 
    ? resources 
    : resources.filter(r => r.type === activeFilter);

  const handleResourceClick = (resource: Resource) => {
    if (resource.isGated) {
      setSelectedResource(resource);
      setIsModalOpen(true);
    }
  };

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the email to your backend
    console.log('Email submitted:', email);
    alert(`Thanks! Your download "${selectedResource?.title}" will begin shortly. Check your email at ${email} for the link.`);
    setIsModalOpen(false);
    setEmail('');
  };

  return (
    <div className="pb-16">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-gradient-to-br from-[#F0F5FF] via-white to-[#E6F4FF]">
        {/* Background Decorations */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-[#3366FF]/20 to-[#69BCFF]/20 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#69BCFF]/15 to-transparent rounded-full blur-3xl" aria-hidden="true"></div>
        
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Tagline with Icon */}
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
              <BookOpen className="w-4 h-4" aria-hidden="true" />
              Content & Resources
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Recommended Launch Content
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Expert insights, practical guides, and proven strategies to help your organization achieve web accessibility compliance
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-6 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-gray-500" aria-hidden="true" />
            {filters.map(filter => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-[#3366FF] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredResources.map(resource => {
              const IconComponent = resource.icon;
              return (
                <div
                  key={resource.id}
                  className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#3366FF]/10 to-[#69BCFF]/10 rounded-xl flex items-center justify-center mb-6">
                    <IconComponent className="w-7 h-7 text-[#3366FF]" aria-hidden="true" />
                  </div>

                  {/* Tagline Badge */}
                  <div className="inline-block mb-4">
                    <span className="px-3 py-1 bg-white text-[#3366FF] rounded-full text-xs font-medium border border-[#3366FF]/20">
                      {resource.tagline.replace(/\s*\([^)]*\)/g, '')}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl text-[#001957] mb-4 font-[DM_Sans] leading-tight">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {resource.description}
                  </p>

                  {/* CTA Button */}
                  {resource.isGated ? (
                    <button
                      onClick={() => handleResourceClick(resource)}
                      className="inline-flex items-center gap-2 bg-[#3366FF] text-white px-6 py-3 rounded-full hover:bg-[#001957] transition-colors font-semibold shadow-md hover:shadow-lg"
                    >
                      <Download className="w-4 h-4" aria-hidden="true" />
                      {resource.ctaText}
                    </button>
                  ) : (
                    <Link
                      to={resource.ctaLink || '#'}
                      className="inline-flex items-center gap-2 text-[#3366FF] hover:text-[#001957] font-semibold transition-colors"
                    >
                      {resource.ctaText}
                      <span aria-hidden="true">→</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* No Results Message */}
          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-6 bg-gradient-to-br from-[#F0F5FF] to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white text-[#3366FF] rounded-full text-sm font-medium border border-[#3366FF]/20 inline-flex items-center gap-2">
                <Mail className="w-4 h-4" aria-hidden="true" />
                Stay Informed
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#001957] leading-[1.1] font-[DM_Sans] mb-4">
              Accessibility Compliance Updates
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">Subscribe to receive the latest accessibility resources, regulatory updates, and deadline reminders directly to your inbox.</p>
          </div>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-5 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
              aria-label="Email address for newsletter"
              required
            />
            <button 
              type="submit"
              className="bg-[#3366FF] text-white px-8 py-4 rounded-full hover:bg-[#001957] transition-colors font-semibold whitespace-nowrap shadow-lg hover:shadow-xl"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Gated Content Modal */}
      {isModalOpen && selectedResource && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-[#3366FF]/10 to-[#69BCFF]/10 rounded-xl flex items-center justify-center mb-4">
                <Download className="w-7 h-7 text-[#3366FF]" aria-hidden="true" />
              </div>
              <h3 className="text-2xl text-[#001957] mb-3 font-[DM_Sans]">
                Download Your Resource
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {selectedResource.title}
              </p>
            </div>

            {/* Email Form */}
            <form onSubmit={handleDownload} className="space-y-4">
              <div>
                <label htmlFor="gated-email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  id="gated-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@organization.gov"
                  className="w-full px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3366FF] text-white px-6 py-3 rounded-full hover:bg-[#001957] transition-colors font-semibold shadow-lg hover:shadow-xl"
              >
                Download Now
              </button>

              <p className="text-xs text-gray-500 text-center">
                By downloading, you agree to receive occasional updates about accessibility compliance. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}