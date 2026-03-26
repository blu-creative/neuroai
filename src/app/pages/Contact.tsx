import { Mail, Phone, MapPin, Clock, MessageSquare, Building2, Globe } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    phone: '',
    inquiryType: '',
    organizationType: '',
    populationServed: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
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
              <MessageSquare className="w-4 h-4" aria-hidden="true" />
              Get Started
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-[#001957] leading-[1.1] font-[DM_Sans_18pt]">
            Let's Get Your Organization Compliant
          </h1>
          
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Whether you're facing the April 2026 ADA Title II deadline, responding to an accessibility complaint, or building a proactive compliance program, we're here to help. Tell us about your organization and we'll recommend the right starting point.
          </p>
        </div>
      </section>

      {/* Form and Contact Info Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm">
                <h2 className="text-2xl md:text-3xl text-[#001957] mb-2 font-[DM_Sans]">
                  Contact Our Team
                </h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Full Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                      placeholder="John Smith"
                    />
                  </div>

                  {/* Organization Name */}
                  <div>
                    <label htmlFor="organizationName" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Name *
                    </label>
                    <input
                      type="text"
                      id="organizationName"
                      name="organizationName"
                      required
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                      placeholder="City of Springfield"
                    />
                  </div>

                  {/* Email and Phone - Side by side on larger screens */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                        placeholder="john@organization.gov"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Inquiry Type Dropdown */}
                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      required
                      value={formData.inquiryType}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent bg-white"
                    >
                      <option value="">Select an inquiry type</option>
                      <option value="compliance-assessment">Free Compliance Assessment</option>
                      <option value="monitoring">Monitoring</option>
                      <option value="audit">Accessibility Audit</option>
                      <option value="web-remediation">Web Remediation</option>
                      <option value="doc-remediation">Document Remediation</option>
                      <option value="platform-demo">Platform Demo</option>
                      <option value="contracts">Procurement/Contracts</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  {/* Organization Type Dropdown */}
                  <div>
                    <label htmlFor="organizationType" className="block text-sm font-medium text-gray-700 mb-2">
                      Organization Type *
                    </label>
                    <select
                      id="organizationType"
                      name="organizationType"
                      required
                      value={formData.organizationType}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent bg-white"
                    >
                      <option value="">Select organization type</option>
                      <option value="federal">Federal Government</option>
                      <option value="state">State Government</option>
                      <option value="local">Local Government/Municipality</option>
                      <option value="school">School Board/District</option>
                      <option value="higher-ed">Higher Education</option>
                      <option value="law-enforcement">Law Enforcement</option>
                      <option value="courts">Courts/Judiciary</option>
                      <option value="enterprise">Enterprise</option>
                      <option value="nonprofit">Nonprofit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Approximate Population Served */}
                  <div>
                    <label htmlFor="populationServed" className="block text-sm font-medium text-gray-700 mb-2">
                      Approximate Population Served <span className="text-gray-500 font-normal">(optional - for government entities)</span>
                    </label>
                    <input
                      type="text"
                      id="populationServed"
                      name="populationServed"
                      value={formData.populationServed}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                      placeholder="e.g., 50,000"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message / Tell Us About Your Needs *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3366FF] focus:border-transparent"
                      placeholder="Tell us about your accessibility needs, current challenges, timeline, or any specific questions..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#3366FF] text-white px-6 py-4 rounded-full hover:bg-[#001957] transition-colors font-semibold shadow-lg hover:shadow-xl"
                  >
                    Submit Inquiry
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * Required fields
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar - Takes 1 column */}
            <div className="space-y-6">
              {/* Contact Information Card */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold text-[#001957] mb-6">Contact Information</h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-[#001957] text-sm mb-1">Blü AI USA</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        150 SE 2nd Ave, Suite 901<br />
                        Miami, FL 33131
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-[#001957] text-sm mb-1">Phone</h4>
                      <a href="tel:1-855-937-3726" className="text-gray-600 text-sm hover:text-[#3366FF] transition-colors">
                        1-855-937-3726
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#3366FF] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-semibold text-[#001957] text-sm mb-1">Websites</h4>
                      <div className="space-y-1">
                        <a 
                          href="https://www.blucreative.dev" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm hover:text-[#3366FF] transition-colors block"
                        >
                          www.blucreative.dev
                        </a>
                        <a 
                          href="https://www.neurocompliance.ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-gray-600 text-sm hover:text-[#3366FF] transition-colors block"
                        >
                          www.neurocompliance.ai
                        </a>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.4820862587327!2d-80.19343892378564!3d25.774176207414343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b68d6c1b6f1f%3A0x9e1e6e1e1e1e1e1e!2s150%20SE%202nd%20Ave%2C%20Miami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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

              {/* Quick Action Card */}
              <div className="bg-[#001957] rounded-2xl p-6 text-white">
                <h3 className="text-xl font-semibold mb-3">Need Immediate Help?</h3>
                <p className="text-white/90 text-sm mb-4 leading-relaxed">
                  For urgent accessibility issues or questions about the April 2026 deadline, call us now.
                </p>
                <a
                  href="tel:1-855-937-3726"
                  className="inline-block bg-white text-[#3366FF] px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold text-sm shadow-lg"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}