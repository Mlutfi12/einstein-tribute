import React from 'react'

const Timeline = () => {
  const events = [
    {
      year: '1879',
      title: 'Born in Ulm',
      description: 'Albert Einstein is born on March 14 in Ulm, Kingdom of Württemberg, German Empire.',
      icon: '👶',
      side: 'left'
    },
    {
      year: '1884',
      title: 'The Compass',
      description: 'At age 5, Einstein receives a compass from his father, sparking his lifelong fascination with invisible forces.',
      icon: '🧭',
      side: 'right'
    },
    {
      year: '1896',
      title: 'ETH Zurich',
      description: 'Enters the Swiss Federal Polytechnic School in Zurich to study mathematics and physics.',
      icon: '🎓',
      side: 'left'
    },
    {
      year: '1902',
      title: 'Patent Office',
      description: 'Begins working as a technical examiner at the Swiss Patent Office in Bern.',
      icon: '📋',
      side: 'right'
    },
    {
      year: '1905',
      title: 'Annus Mirabilis',
      description: 'The Miracle Year: Publishes four groundbreaking papers on photoelectric effect, Brownian motion, special relativity, and mass-energy equivalence (E=mc²).',
      icon: '💡',
      side: 'left'
    },
    {
      year: '1915',
      title: 'General Relativity',
      description: 'Completes the general theory of relativity, revolutionizing our understanding of gravity.',
      icon: '🌌',
      side: 'right'
    },
    {
      year: '1919',
      title: 'Fame Arrives',
      description: 'British expedition confirms Einstein\'s prediction of light bending during a solar eclipse, making him world-famous.',
      icon: '🌟',
      side: 'left'
    },
    {
      year: '1921',
      title: 'Nobel Prize',
      description: 'Awarded the Nobel Prize in Physics for his explanation of the photoelectric effect.',
      icon: '🏆',
      side: 'right'
    },
    {
      year: '1933',
      title: 'Emigration to America',
      description: 'Flees Nazi Germany and accepts a position at the Institute for Advanced Study in Princeton, New Jersey.',
      icon: '✈️',
      side: 'left'
    },
    {
      year: '1939',
      title: 'Letter to Roosevelt',
      description: 'Signs the famous letter to President Roosevelt warning about Nazi Germany\'s potential atomic bomb development.',
      icon: '✉️',
      side: 'right'
    },
    {
      year: '1945',
      title: 'Post-War Advocacy',
      description: 'Becomes a vocal advocate for nuclear disarmament and world government.',
      icon: '☮️',
      side: 'left'
    },
    {
      year: '1955',
      title: 'Final Days',
      description: 'Albert Einstein passes away on April 18 in Princeton, New Jersey, at the age of 76.',
      icon: '⭐',
      side: 'right'
    },
  ]

  return (
    <section id="timeline" className="py-24 px-4 relative overflow-hidden">
      {/* Background Equation Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-20 text-9xl">E = mc²</div>
        <div className="absolute bottom-20 right-20 text-8xl">ℏ = h/2π</div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="text-3xl text-gold-accent mb-4">❧</div>
          <h2 className="section-title">Journey Through Time</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto" />
          <p className="font-serif text-lg text-sepia-light mt-6 italic">
            The remarkable life of a scientific revolutionary
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="timeline-line h-full" style={{ height: `${events.length * 200}px` }} />

          {/* Timeline Events */}
          <div className="relative">
            {events.map((event, index) => (
              <div
                key={index}
                className={`flex items-center mb-12 ${
                  event.side === 'left' ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Side */}
                <div className={`w-1/2 ${event.side === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="vintage-card inline-block max-w-md">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{event.icon}</span>
                      <span className="text-gold-accent font-bold text-2xl font-serif">{event.year}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-sepia mb-2">
                      {event.title}
                    </h3>
                    <p className="font-serif text-ink leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Center Point */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gold-accent rounded-full border-4 border-sepia shadow-lg z-10" />

                {/* Empty Side */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>

        {/* Timeline End Ornament */}
        <div className="text-center mt-16">
          <div className="text-4xl text-gold-accent">❧ ❧ ❧</div>
          <p className="font-serif text-sepia-light italic mt-4">
            A legacy that lives on forever
          </p>
        </div>
      </div>
    </section>
  )
}

export default Timeline
