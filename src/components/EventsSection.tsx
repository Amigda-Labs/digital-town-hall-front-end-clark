'use client';

import Image from 'next/image';
import { useState } from 'react';

const events = [
  {
    id: 1,
    title: 'Clark Hot Air Balloon Festival',
    date: 'February 8-10, 2026',
    time: '5:00 AM - 10:00 AM',
    location: 'Clark Parade Grounds',
    description: 'The biggest hot air balloon festival in Southeast Asia featuring colorful balloons from around the world.',
    image: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&q=80',
    category: 'Festival',
    featured: true,
  },
  {
    id: 2,
    title: 'Pampanga Food Festival',
    date: 'March 15-17, 2026',
    time: '10:00 AM - 9:00 PM',
    location: 'SM Clark Outdoor Arena',
    description: 'Celebrate the culinary capital of the Philippines with dishes from the best local chefs.',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
    category: 'Food',
    featured: false,
  },
  {
    id: 3,
    title: 'Clark International Marathon',
    date: 'April 5, 2026',
    time: '4:00 AM',
    location: 'Clark Freeport Zone',
    description: 'Join thousands of runners in this annual marathon through the scenic roads of Clark.',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80',
    category: 'Sports',
    featured: false,
  },
  {
    id: 4,
    title: 'Philippine International Motor Show',
    date: 'May 20-25, 2026',
    time: '9:00 AM - 8:00 PM',
    location: 'Clark Expo Amphitheater',
    description: 'Experience the latest automotive innovations and classic car exhibitions.',
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80',
    category: 'Exhibition',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Festival: 'bg-purple-500',
  Food: 'bg-orange-500',
  Sports: 'bg-blue-500',
  Exhibition: 'bg-emerald-500',
};

export default function EventsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (eventId: number) => {
    setImageErrors(prev => ({ ...prev, [eventId]: true }));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Festival: 'from-purple-400 to-purple-600',
      Food: 'from-orange-400 to-orange-600',
      Sports: 'from-blue-400 to-blue-600',
      Exhibition: 'from-emerald-400 to-emerald-600',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  const featuredEvent = events.find(e => e.featured);
  const regularEvents = events.filter(e => !e.featured);

  return (
    <section id="events" className="py-20 md:py-28 section-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#E07C3E]/10 text-[#E07C3E] rounded-full text-sm font-medium mb-4">
            What&apos;s Happening
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E2D] mb-4">
            Upcoming Events
          </h2>
          <p className="text-[#5A6B5C] max-w-2xl mx-auto text-lg">
            Stay updated with the latest events, festivals, and activities happening in and around Clark.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Event */}
          {featuredEvent && (
            <div className="lg:row-span-2">
              <article className="group h-full bg-white rounded-3xl overflow-hidden shadow-xl card-hover">
                <div className="relative h-64 lg:h-80">
                  {imageErrors[featuredEvent.id] ? (
                    <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(featuredEvent.category)} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-lg font-bold mb-1">{featuredEvent.title}</p>
                        <p className="text-sm opacity-80">{featuredEvent.category}</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(featuredEvent.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className={`px-3 py-1 ${categoryColors[featuredEvent.category]} text-white text-xs font-medium rounded-full`}>
                      {featuredEvent.category}
                    </span>
                    <span className="px-3 py-1 bg-[#E07C3E] text-white text-xs font-medium rounded-full animate-pulse">
                      Featured
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">{featuredEvent.title}</h3>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <p className="text-[#5A6B5C] mb-6 leading-relaxed">
                    {featuredEvent.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-[#2C3E2D]">
                      <svg className="w-5 h-5 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{featuredEvent.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#2C3E2D]">
                      <svg className="w-5 h-5 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{featuredEvent.time}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#2C3E2D]">
                      <svg className="w-5 h-5 text-[#2D5A3D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{featuredEvent.location}</span>
                    </div>
                  </div>
                  <button className="w-full btn-primary">
                    Learn More & Register
                  </button>
                </div>
              </article>
            </div>
          )}

          {/* Regular Events */}
          <div className="space-y-6">
            {regularEvents.map((event) => (
              <article
                key={event.id}
                className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
              >
                <div className="relative w-full sm:w-48 h-40 sm:h-auto flex-shrink-0">
                  {imageErrors[event.id] ? (
                    <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(event.category)} flex items-center justify-center`}>
                      <div className="text-center text-white p-4">
                        <div className="w-8 h-8 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs font-medium">{event.category}</p>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImageError(event.id)}
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                  <span className={`absolute top-3 left-3 px-2 py-1 ${categoryColors[event.category]} text-white text-xs font-medium rounded-full`}>
                    {event.category}
                  </span>
                </div>
                <div className="p-5 flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-[#2C3E2D] mb-2 group-hover:text-[#2D5A3D] transition-colors">
                    {event.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-[#5A6B5C]">
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}

            {/* View All Events */}
            <a
              href="#"
              className="flex items-center justify-center gap-2 p-4 bg-[#F0F7F1] rounded-2xl text-[#2D5A3D] font-medium hover:bg-[#E5F0E7] transition-colors"
            >
              View All Events
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
