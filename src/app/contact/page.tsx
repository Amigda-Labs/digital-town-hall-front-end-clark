'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-br from-[#2D5A3D] to-[#1E3D29] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Have questions about Clark Freeport Zone? We&apos;re here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {/* Location */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-[#2D5A3D] to-[#4A7C59] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-2">Visit Us</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  Clark Development Corporation<br />
                  Building 2127, E. Quirino Street<br />
                  Clark Freeport Zone, Pampanga<br />
                  Philippines 2023
                </p>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-[#5B9BD5] to-[#4A8BC9] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-2">Call Us</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  Main Line: +63 45 599 9000<br />
                  Tourism Hotline: +63 45 599 2189<br />
                  Business Inquiries: +63 45 599 2181
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 card-hover">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E07C3E] to-[#D06B2D] rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-2">Email Us</h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed">
                  General: info@clark.com.ph<br />
                  Tourism: tourism@clark.com.ph<br />
                  Support: support@clark.com.ph
                </p>
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-to-br from-[#F0F7F1] to-[#E5F0E7] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-[#5A6B5C]">Monday - Friday</span>
                    <span className="text-[#2C3E2D] font-medium">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A6B5C]">Saturday</span>
                    <span className="text-[#2C3E2D] font-medium">8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#5A6B5C]">Sunday</span>
                    <span className="text-[#2C3E2D] font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2D] mb-2">
                  Send Us a Message
                </h2>
                <p className="text-[#5A6B5C] mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-[#2C3E2D] mb-2">Message Sent!</h3>
                    <p className="text-[#5A6B5C] mb-6">
                      Thank you for reaching out. We&apos;ll respond to your inquiry within 24-48 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-[#2C3E2D] mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent transition-all"
                          placeholder="Juan Dela Cruz"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-[#2C3E2D] mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent transition-all"
                          placeholder="juan@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-[#2C3E2D] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent transition-all"
                          placeholder="+63 912 345 6789"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-[#2C3E2D] mb-2">
                          Subject *
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent transition-all bg-white"
                        >
                          <option value="">Select a subject</option>
                          <option value="general">General Inquiry</option>
                          <option value="tourism">Tourism Information</option>
                          <option value="business">Business & Investments</option>
                          <option value="events">Events & Activities</option>
                          <option value="feedback">Feedback & Suggestions</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#2C3E2D] mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent transition-all resize-none"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-[#F0F7F1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2D] mb-4">
              Find Us on the Map
            </h2>
            <p className="text-[#5A6B5C]">
              Located in the heart of the Clark Freeport Zone, easily accessible from Manila and major cities.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61589.85752099767!2d120.52960693481002!3d15.185815899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3396ea1ef7ff3b55%3A0x20aa5c12fc9d8d1e!2sClark%20Freeport%20Zone!5e0!3m2!1sen!2sph!4v1706540000000!5m2!1sen!2sph"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C3E2D] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#5A6B5C]">
              Quick answers to common questions about Clark Freeport Zone.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'How do I get to Clark Freeport Zone from Manila?',
                a: 'Clark is accessible via NLEX and SCTEX. The drive from Manila takes approximately 1.5-2 hours depending on traffic. You can also fly directly to Clark International Airport.',
              },
              {
                q: 'What are the entry requirements for visiting Clark?',
                a: 'Visitors can enter Clark Freeport Zone freely through the main gates. For business-related activities, you may need to coordinate with the Clark Development Corporation.',
              },
              {
                q: 'Is there public transportation available within Clark?',
                a: 'Yes, there are jeepneys and tricycles within Clark. Many hotels also offer shuttle services. Ride-hailing apps like Grab are also available.',
              },
              {
                q: 'Can I start a business in Clark Freeport Zone?',
                a: 'Yes! Clark offers excellent investment opportunities with various incentives. Contact our Business Development Office for more information on how to become a locator.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-[#2C3E2D] pr-4">{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-[#2D5A3D] flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-[#5A6B5C] leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-[#5A6B5C] mb-4">Still have questions?</p>
            <a href="/ask-agent" className="btn-primary inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Ask Our AI Agent
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
