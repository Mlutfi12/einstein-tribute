import React from 'react'

const Home = ({ onNavigate }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-8xl opacity-5 animate-float">
          E = mc²
        </div>
        <div className="absolute bottom-40 right-20 text-6xl opacity-5 animate-float" style={{ animationDelay: '2s' }}>
          ℏ
        </div>
        <div className="absolute top-1/2 left-1/4 text-7xl opacity-5 animate-float" style={{ animationDelay: '4s' }}>
          ∇
        </div>
        <div className="absolute bottom-20 left-1/3 text-5xl opacity-5 animate-float" style={{ animationDelay: '1s' }}>
          λ
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Ornamental Top */}
        <div className="text-4xl text-gold-accent mb-6 animate-fade-in">
          ❧ ❧ ❧
        </div>

        {/* Main Title */}
        <h1 className="font-serif text-6xl md:text-8xl font-bold text-sepia mb-4 tracking-wide animate-fade-in text-shadow">
          Albert Einstein
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-2xl md:text-3xl text-sepia-light italic mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          1879 — 1955
        </p>

        {/* Decorative Line */}
        <div className="w-48 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-8" />

        {/* Quote */}
        <blockquote className="font-serif text-xl md:text-2xl text-ink italic mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button
            onClick={() => onNavigate('biography')}
            className="px-8 py-4 bg-sepia text-parchment font-serif text-lg rounded-lg shadow-lg hover:bg-sepia-light hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore His Life
          </button>
          <button
            onClick={() => onNavigate('timeline')}
            className="px-8 py-4 border-2 border-sepia text-sepia font-serif text-lg rounded-lg hover:bg-sepia/10 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Timeline
          </button>
        </div>

        {/* Ornamental Bottom */}
        <div className="text-4xl text-gold-accent mt-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          ❧ ❧ ❧
        </div>

        {/* Atom Symbol */}
        <div className="mt-16 text-6xl opacity-20 animate-float" style={{ animationDelay: '3s' }}>
          ⚛️
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-sepia/50 rounded-full flex justify-center pt-2">
          <div className="w-2 h-3 bg-sepia rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}

export default Home
