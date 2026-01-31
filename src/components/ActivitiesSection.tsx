const activities = [
  {
    id: 1,
    title: 'Hot Air Balloon Rides',
    description: 'Soar above the Clark landscape and enjoy breathtaking views of Mt. Arayat and the Zambales mountains.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-sky-400 to-blue-500',
  },
  {
    id: 2,
    title: 'Golf & Country Clubs',
    description: 'Play on world-class golf courses including Mimosa and Fontana, set against scenic mountain backdrops.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M9 8h1m4 0h1m-4 4h1m-1 4h1m-5-4h.01M21 3L9 15M3 3l6 6" />
      </svg>
    ),
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 3,
    title: 'Adventure Sports',
    description: 'Experience ATV rides, zip-lining, parasailing, and off-road adventures in the rugged terrain.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 4,
    title: 'Nature & Eco Tours',
    description: 'Explore the Sacobia River, trek to Mt. Pinatubo crater, or visit the Clark Wetland and Wildlife Park.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    color: 'from-emerald-400 to-teal-500',
  },
  {
    id: 5,
    title: 'Water Activities',
    description: 'Cool off at Aqua Planet water park or enjoy resort pools, perfect for family fun and relaxation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-cyan-400 to-blue-500',
  },
  {
    id: 6,
    title: 'Cultural Experiences',
    description: 'Discover local heritage through museum visits, Kapampangan cooking classes, and traditional crafts.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    color: 'from-purple-400 to-pink-500',
  },
  {
    id: 7,
    title: 'Dining & Nightlife',
    description: 'Savor authentic Kapampangan cuisine and explore vibrant restaurants, bars, and entertainment venues.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'from-amber-400 to-orange-500',
  },
  {
    id: 8,
    title: 'Shopping',
    description: 'Browse duty-free shops, local markets, and modern malls for unique finds and great deals.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    color: 'from-rose-400 to-pink-500',
  },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" className="py-20 md:py-28 bg-gradient-to-b from-[#F0F7F1] to-[#FDFCFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-[#5B9BD5]/10 text-[#5B9BD5] rounded-full text-sm font-medium mb-4">
            Things To Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C3E2D] mb-4">
            Activities & Experiences
          </h2>
          <p className="text-[#5A6B5C] max-w-2xl mx-auto text-lg">
            From thrilling adventures to relaxing retreats, Clark offers something for everyone.
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity) => (
            <article
              key={activity.id}
              className="group relative bg-white rounded-2xl p-6 shadow-lg card-hover overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${activity.color} flex items-center justify-center text-white mb-4 group-hover:bg-white/20 transition-colors`}>
                  {activity.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-bold text-[#2C3E2D] mb-2 group-hover:text-white transition-colors">
                  {activity.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#5A6B5C] text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                  {activity.description}
                </p>
                
                {/* Arrow */}
                <div className="mt-4 flex items-center gap-2 text-[#2D5A3D] group-hover:text-white transition-colors">
                  <span className="text-sm font-medium">Explore</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2D5A3D] to-[#4A7C59] p-8 md:p-12">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Need Help Planning Your Visit?
              </h3>
              <p className="text-white/80">
                Our AI-powered assistant can help you create the perfect itinerary for your Clark adventure.
              </p>
            </div>
            <a
              href="/ask-agent"
              className="flex-shrink-0 flex items-center gap-2 bg-white text-[#2D5A3D] px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Chat with Our Agent
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
