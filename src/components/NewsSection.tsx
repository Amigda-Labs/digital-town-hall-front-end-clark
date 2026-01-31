'use client';

import Image from 'next/image';
import { useState } from 'react';

const news = [
  {
    id: 1,
    title: 'Clark International Airport Expansion Project Reaches New Milestone',
    excerpt: 'The new passenger terminal building is now 85% complete, with full operations expected to begin by Q3 2026.',
    date: 'January 28, 2026',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
    category: 'Infrastructure',
  },
  {
    id: 2,
    title: 'New Eco-Tourism Trail Opens at Clark Wetland',
    excerpt: 'Experience nature like never before with the newly opened 5-kilometer eco-trail featuring observation decks and bird watching stations.',
    date: 'January 25, 2026',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=80',
    category: 'Tourism',
  },
  {
    id: 3,
    title: 'Clark Freeport Zone Records 15% Increase in Business Locators',
    excerpt: 'The economic zone continues to attract investments with 50 new companies registering in the past quarter alone.',
    date: 'January 22, 2026',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
    category: 'Business',
  },
];

const categoryColors: Record<string, string> = {
  Infrastructure: 'bg-blue-100 text-blue-700',
  Tourism: 'bg-green-100 text-green-700',
  Business: 'bg-purple-100 text-purple-700',
};

export default function NewsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (newsId: number) => {
    setImageErrors(prev => ({ ...prev, [newsId]: true }));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Infrastructure: 'from-blue-400 to-blue-600',
      Tourism: 'from-green-400 to-green-600',
      Business: 'from-purple-400 to-purple-600',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <span className="inline-block px-4 py-1 bg-[#8B7355]/10 text-[#8B7355] rounded-full text-sm font-medium mb-4">
              Stay Informed
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2C3E2D]">
              Latest News & Updates
            </h2>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-[#2D5A3D] font-medium hover:gap-3 transition-all"
          >
            View all news
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                {imageErrors[item.id] ? (
                  <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(item.category)} flex items-center justify-center`}>
                    <div className="text-center text-white p-4">
                      <div className="w-12 h-12 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium mb-1">{item.category}</p>
                      <p className="text-xs opacity-80">Latest Update</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(item.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category]}`}>
                  {item.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <time className="text-sm text-[#5A6B5C] mb-2 block">{item.date}</time>
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-3 group-hover:text-[#2D5A3D] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#2D5A3D] font-medium text-sm hover:gap-3 transition-all"
                >
                  Read more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[#FDF8F0] rounded-3xl p-8 md:p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2C3E2D] mb-4">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-[#5A6B5C] mb-8">
              Get the latest updates on events, news, and announcements delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-full border border-[#D4C4A8] focus:outline-none focus:ring-2 focus:ring-[#2D5A3D] focus:border-transparent"
              />
              <button
                type="submit"
                className="btn-primary whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
