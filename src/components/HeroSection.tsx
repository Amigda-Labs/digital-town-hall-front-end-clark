'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-poster.jpg"
        >
          <source src="http://www.visitclark.com/pics/cdc_avp.mp4?b" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-sm font-medium">Welcome to Clark Freeport Zone</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Discover the Heart of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              Pampanga
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Experience the perfect blend of nature, culture, and modern living in the Clark Freeport Zone. 
            Your adventure in Central Luzon starts here.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/ask-agent"
              className="group flex items-center gap-2 bg-white text-[#2D5A3D] px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-green-50 hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Ask Our AI Agent
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <a
              href="#destinations"
              className="flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-white/10"
            >
              Explore Clark
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: '4,500+', label: 'Hectares of Land' },
            { number: '800+', label: 'Business Locators' },
            { number: '120K+', label: 'Visitors Monthly' },
            { number: '24/7', label: 'AI Support' },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6"
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a href="#destinations" className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
}
