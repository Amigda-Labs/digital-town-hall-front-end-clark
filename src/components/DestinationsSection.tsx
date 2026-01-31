'use client';

import Image from 'next/image';
import { useState } from 'react';

const destinations = [
  {
    id: 1,
    name: 'Nayong Pilipino',
    description: 'A cultural theme park showcasing the rich heritage and traditions of the Philippines through miniature replicas and exhibits.',
    image: 'https://images.unsplash.com/photo-1652585437758-483608991368?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Culture',
  },
  {
    id: 2,
    name: 'Mimosa Clark Pampanga',
    description: 'A premier leisure and lifestyle destination in Clark featuring a championship golf course, hotels, dining spots, and entertainment venues set in a lush, resort-style environment.',
    image: 'https://images.unsplash.com/photo-1709525616662-8d9f9a995ceb?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'History',
  },
  {
    id: 3,
    name: 'Mt. Pinatubo Crater',
    description: 'Trek to the stunning crater lake of Mt. Pinatubo, formed after its historic 1991 eruption.',
    image: 'https://images.unsplash.com/photo-1502907059731-cc843cbd4922?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Adventure',
  },
  {
    id: 4,
    name: 'Dinosaurs Island',
    description: 'A family-friendly theme park featuring life-sized animatronic dinosaurs and interactive exhibits.',
    image: 'https://images.unsplash.com/photo-1589519659882-3eb28ebc769f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Family',
  },
  {
    id: 5,
    name: 'El Kabayo',
    description: 'Horseback riding trails that wind through open spaces, offering a calm and refreshing outdoor experience.',
    image: 'https://images.unsplash.com/photo-1765987461952-58c9da4d38c8?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Trail',
  },
  {
    id: 6,
    name: 'Clark Picnic Grounds',
    description: 'Beautiful parks and green spaces perfect for family outings, picnics, and outdoor activities.',
    image: 'https://images.unsplash.com/photo-1578359968130-76b59bb5af13?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Nature',
  },
];

const categoryColors: Record<string, string> = {
  Culture: 'bg-purple-100 text-purple-700',
  History: 'bg-amber-100 text-amber-700',
  Adventure: 'bg-orange-100 text-orange-700',
  Family: 'bg-pink-100 text-pink-700',
  Recreation: 'bg-blue-100 text-blue-700',
  Nature: 'bg-green-100 text-green-700',
};

export default function DestinationsSection() {
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleImageError = (destinationId: number) => {
    setImageErrors(prev => ({ ...prev, [destinationId]: true }));
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Culture: 'from-purple-400 to-purple-600',
      History: 'from-amber-400 to-amber-600',
      Adventure: 'from-orange-400 to-orange-600',
      Family: 'from-pink-400 to-pink-600',
      Recreation: 'from-blue-400 to-blue-600',
      Nature: 'from-green-400 to-green-600',
    };
    return colors[category] || 'from-gray-400 to-gray-600';
  };

  return (
    <section id="destinations" className="py-20 md:py-28 bg-gradient-to-b from-[#FDFCFA] to-[#F0F7F1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">
            Explore Clark
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E2D] mb-4">
            Popular Destinations
          </h2>
          <p className="text-[#5A6B5C] max-w-2xl mx-auto text-lg">
            Discover the most visited attractions and hidden gems in the Clark Freeport Zone and surrounding areas.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <article
              key={destination.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                {imageErrors[destination.id] ? (
                  <div className={`w-full h-full bg-gradient-to-br ${getCategoryColor(destination.category)} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-2 bg-white/20 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm font-medium">{destination.name}</p>
                      <p className="text-xs opacity-80">{destination.category}</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={() => handleImageError(destination.id)}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${categoryColors[destination.category]}`}>
                  {destination.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C3E2D] mb-2 group-hover:text-[#2D5A3D] transition-colors">
                  {destination.name}
                </h3>
                <p className="text-[#5A6B5C] text-sm leading-relaxed mb-4">
                  {destination.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#2D5A3D] font-medium text-sm hover:gap-3 transition-all"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 btn-secondary"
          >
            View All Destinations
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
