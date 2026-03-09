import React from 'react'

const Biography = () => {
  return (
    <section id="biography" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-3xl text-gold-accent mb-4">❧</div>
          <h2 className="section-title">Biography</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto" />
          <p className="font-serif text-lg text-sepia-light mt-6 max-w-3xl mx-auto italic">
            The life and times of the man who changed our understanding of the universe
          </p>
        </div>

        {/* Biography Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image/Portrait Placeholder */}
          <div className="vintage-card relative overflow-hidden">
            <div className="aspect-[3/4] bg-gradient-to-br from-sepia/20 to-gold-accent/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-4">👨‍🔬</div>
                <p className="font-serif text-sepia italic">Portrait of Genius</p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-center">
              <p className="text-xs text-sepia-light italic">Albert Einstein in his prime</p>
            </div>
          </div>

          {/* Right Column - Biography Text */}
          <div className="space-y-6">
            <div className="vintage-card">
              <h3 className="font-serif text-2xl font-bold text-sepia mb-4 flex items-center">
                <span className="text-gold-accent mr-3">✦</span>
                Early Life
              </h3>
              <p className="font-serif text-lg text-ink leading-relaxed">
                Born on March 14, 1879, in Ulm, Germany, Albert Einstein showed early signs of 
                extraordinary curiosity. Though he struggled with the rigid German school system, 
                his independent thinking and fascination with mathematics and physics set him apart. 
                A compass given to him at age five sparked a lifelong wonder about the invisible forces 
                governing the universe.
              </p>
            </div>

            <div className="vintage-card">
              <h3 className="font-serif text-2xl font-bold text-sepia mb-4 flex items-center">
                <span className="text-gold-accent mr-3">✦</span>
                The Miracle Year
              </h3>
              <p className="font-serif text-lg text-ink leading-relaxed">
                In 1905, while working as a patent clerk in Bern, Switzerland, Einstein published 
                four groundbreaking papers that would revolutionize physics. His theory of special 
                relativity, encapsulated in the famous equation E=mc², changed our understanding of 
                space, time, and energy forever.
              </p>
            </div>

            <div className="vintage-card">
              <h3 className="font-serif text-2xl font-bold text-sepia mb-4 flex items-center">
                <span className="text-gold-accent mr-3">✦</span>
                Later Years & Legacy
              </h3>
              <p className="font-serif text-lg text-ink leading-relaxed">
                After fleeing Nazi Germany in 1933, Einstein settled at Princeton University in America. 
                He spent his later years searching for a unified field theory. Beyond physics, he was 
                a passionate advocate for civil rights, pacifism, and education. He passed away on 
                April 18, 1955, leaving behind a legacy that continues to inspire scientists and 
                dreamers worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <h3 className="font-serif text-3xl font-bold text-sepia text-center mb-10">
            Key Achievements
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⚛️', title: 'Special Relativity', year: '1905', desc: 'Revolutionized space-time understanding' },
              { icon: '🌌', title: 'General Relativity', year: '1915', desc: 'Theory of gravitation' },
              { icon: '💡', title: 'Photoelectric Effect', year: '1905', desc: 'Nobel Prize in Physics 1921' },
              { icon: '🔬', title: 'Brownian Motion', year: '1905', desc: 'Proved existence of atoms' },
            ].map((achievement, index) => (
              <div key={index} className="vintage-card text-center hover:transform hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-3">{achievement.icon}</div>
                <h4 className="font-serif text-lg font-bold text-sepia mb-1">{achievement.title}</h4>
                <p className="text-gold-accent font-bold mb-2">{achievement.year}</p>
                <p className="font-serif text-sm text-ink">{achievement.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Biography
