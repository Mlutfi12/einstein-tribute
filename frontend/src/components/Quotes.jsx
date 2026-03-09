import React, { useState } from 'react'

const Quotes = () => {
  const [activeQuote, setActiveQuote] = useState(0)

  const quotes = [
    {
      text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      context: "On creativity and innovation",
      year: "1929"
    },
    {
      text: "Try not to become a man of success, but rather try to become a man of value.",
      context: "On personal integrity",
      year: "1955"
    },
    {
      text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      context: "On scientific inquiry",
      year: "1955"
    },
    {
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      context: "On perseverance",
      year: "1930"
    },
    {
      text: "A person who never made a mistake never tried anything new.",
      context: "On learning from failure",
      year: "Unknown"
    },
    {
      text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      context: "On consciousness and change",
      year: "Unknown"
    },
    {
      text: "Logic will get you from A to B. Imagination will take you everywhere.",
      context: "On creative thinking",
      year: "Unknown"
    },
    {
      text: "The measure of intelligence is the ability to change.",
      context: "On adaptability",
      year: "Unknown"
    },
  ]

  const nextQuote = () => {
    setActiveQuote((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setActiveQuote((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <section id="quotes" className="py-24 px-4 relative bg-parchment-dark/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-3xl text-gold-accent mb-4">❧</div>
          <h2 className="section-title">Timeless Wisdom</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto" />
          <p className="font-serif text-lg text-sepia-light mt-6 italic">
            Words that continue to inspire generations
          </p>
        </div>

        {/* Main Quote Display */}
        <div className="vintage-card relative overflow-hidden mb-12">
          {/* Decorative Quote Marks */}
          <div className="absolute top-4 left-6 text-6xl text-gold-accent/20 font-serif">"</div>
          <div className="absolute bottom-4 right-6 text-6xl text-gold-accent/20 font-serif">"</div>
          
          <div className="relative z-10 py-12 px-8">
            {/* Quote Text */}
            <blockquote className="font-serif text-2xl md:text-3xl text-sepia text-center leading-relaxed mb-8 min-h-[160px] flex items-center justify-center">
              {quotes[activeQuote].text}
            </blockquote>
            
            {/* Quote Context */}
            <div className="text-center">
              <p className="font-serif text-lg text-sepia-light italic mb-2">
                — {quotes[activeQuote].context}
              </p>
              <p className="text-gold-accent font-bold">
                {quotes[activeQuote].year !== 'Unknown' && `${quotes[activeQuote].year}`}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevQuote}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-sepia/10 hover:bg-sepia/20 flex items-center justify-center transition-all duration-300"
          >
            <svg className="w-6 h-6 text-sepia" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextQuote}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full bg-sepia/10 hover:bg-sepia/20 flex items-center justify-center transition-all duration-300"
          >
            <svg className="w-6 h-6 text-sepia" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Quote Indicators */}
        <div className="flex justify-center items-center space-x-2 mb-12">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveQuote(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeQuote
                  ? 'bg-sepia w-8'
                  : 'bg-sepia/30 hover:bg-sepia/50'
              }`}
            />
          ))}
        </div>

        {/* All Quotes Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {quotes.map((quote, index) => (
            <div
              key={index}
              onClick={() => setActiveQuote(index)}
              className={`vintage-card cursor-pointer transition-all duration-300 ${
                index === activeQuote
                  ? 'ring-2 ring-gold-accent shadow-xl'
                  : 'hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              <div className="flex items-start space-x-4">
                <span className="text-2xl text-gold-accent font-serif">❝</span>
                <div>
                  <p className="font-serif text-sepia text-sm leading-relaxed line-clamp-3">
                    {quote.text}
                  </p>
                  <p className="text-xs text-sepia-light italic mt-2">
                    — {quote.context}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Quotes
