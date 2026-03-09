import { useState, useEffect } from 'react'

// Navigation Component
function Navigation({ activeSection, setActiveSection }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'contributions', label: 'Contributions' },
    { id: 'quotes', label: 'Quotes' },
    { id: 'gallery', label: 'Gallery' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-sepia/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span className="text-4xl">⚛️</span>
            <span
              className={`font-serif text-2xl font-bold tracking-wider ${
                isScrolled ? 'text-parchment' : 'text-sepia'
              }`}
            >
              EINSTEIN
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`font-medium text-sm tracking-wide transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-gold-accent border-b-2 border-gold-accent'
                    : isScrolled
                    ? 'text-parchment/80 hover:text-parchment'
                    : 'text-sepia/80 hover:text-sepia'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`text-2xl ${isScrolled ? 'text-parchment' : 'text-sepia'}`}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-sepia/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className={`block w-full text-left py-3 px-4 ${
                  activeSection === item.id
                    ? 'text-gold-accent bg-sepia/10'
                    : 'text-sepia hover:bg-sepia/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

// Hero Section
function HeroSection({ setActiveSection }) {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden equation-bg"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 parchment-texture opacity-50" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl opacity-10 animate-float">
        𝐸 = 𝑚𝑐²
      </div>
      <div className="absolute bottom-40 right-10 text-5xl opacity-10 animate-float" style={{ animationDelay: '2s' }}>
        𝜆 = ℎ/𝑝
      </div>
      <div className="absolute top-40 right-20 text-4xl opacity-10 animate-float" style={{ animationDelay: '4s' }}>
        ∇·𝐸 = 𝜌/𝜀₀
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Portrait Frame */}
        <div className="mb-8 relative inline-block">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-gold-accent shadow-2xl mx-auto">
            <img
              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=400"
              alt="Albert Einstein"
              className="w-full h-full object-cover sepia"
            />
          </div>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-sepia text-parchment px-6 py-2 rounded-full text-sm font-medium">
            1879 — 1955
          </div>
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-sepia mb-4 animate-fade-in">
          Albert Einstein
        </h1>
        <p className="font-serif text-xl md:text-2xl text-sepia-light mb-8 italic">
          Theoretical Physicist • Nobel Laureate • Visionary
        </p>

        {/* Famous Quote */}
        <blockquote className="max-w-3xl mx-auto mb-12">
          <p className="font-serif text-2xl md:text-4xl text-ink leading-relaxed italic">
            "Imagination is more important than knowledge. 
            Knowledge is limited. Imagination encircles the world."
          </p>
          <footer className="mt-6 font-script text-xl text-gold-accent">
            — Albert Einstein
          </footer>
        </blockquote>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-gold-accent text-3xl">❧</span>
          <span className="text-gold-accent text-2xl">◇</span>
          <span className="text-gold-accent text-3xl">❧</span>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => setActiveSection('biography')}
          className="inline-flex items-center gap-2 px-8 py-4 bg-sepia text-parchment font-medium rounded-lg 
                     hover:bg-sepia-light transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Explore His Legacy
          <span>↓</span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-sepia text-2xl">⌄</span>
      </div>
    </section>
  )
}

// Biography Section
function BiographySection() {
  return (
    <section id="biography" className="py-24 equation-bg parchment-texture">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ornament text-4xl">❦</span>
          <h2 className="section-title">A Life of Genius</h2>
          <span className="ornament text-4xl">❦</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="vintage-card">
            <img
              src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=600"
              alt="Einstein at work"
              className="w-full h-96 object-cover sepia rounded-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="font-serif text-lg leading-relaxed text-ink">
              Albert Einstein was born on March 14, 1879, in Ulm, in the Kingdom of Württemberg 
              in the German Empire. From a young age, Einstein showed an extraordinary curiosity 
              about the natural world, particularly fascinated by a compass his father showed him, 
              which led him to ponder the invisible forces of nature.
            </p>
            <p className="font-serif text-lg leading-relaxed text-ink">
              His revolutionary theories transformed our understanding of space, time, gravity, 
              and the universe itself. Despite initial struggles with the rigid educational 
              system, Einstein's independent thinking and creative approach to problems would 
              become his greatest strengths.
            </p>
            <p className="font-serif text-lg leading-relaxed text-ink">
              In 1905, often called his "Annus Mirabilis" or "Miracle Year," Einstein published 
              four groundbreaking papers that would change physics forever. These included his 
              special theory of relativity and the famous equation E = mc².
            </p>
            <p className="font-serif text-lg leading-relaxed text-ink">
              Einstein was awarded the Nobel Prize in Physics in 1921 for his explanation of 
              the photoelectric effect, which laid the foundation for quantum theory. He 
              continued his work until his death on April 18, 1955, in Princeton, New Jersey.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-parchment-dark/30 rounded-lg">
                <p className="font-serif text-3xl font-bold text-gold-accent">76</p>
                <p className="text-sm text-sepia-light">Years of Life</p>
              </div>
              <div className="text-center p-4 bg-parchment-dark/30 rounded-lg">
                <p className="font-serif text-3xl font-bold text-gold-accent">300+</p>
                <p className="text-sm text-sepia-light">Scientific Papers</p>
              </div>
              <div className="text-center p-4 bg-parchment-dark/30 rounded-lg">
                <p className="font-serif text-3xl font-bold text-gold-accent">1</p>
                <p className="text-sm text-sepia-light">Nobel Prize</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Timeline Section
function TimelineSection() {
  const events = [
    { year: '1879', title: 'Birth', description: 'Born in Ulm, Kingdom of Württemberg, German Empire on March 14.' },
    { year: '1896', title: 'Education', description: 'Renounced German citizenship and enrolled at ETH Zurich.' },
    { year: '1905', title: 'Miracle Year', description: 'Published four revolutionary papers including special relativity and E=mc².' },
    { year: '1915', title: 'General Relativity', description: 'Completed the general theory of relativity, revolutionizing gravity.' },
    { year: '1919', title: 'Fame', description: 'Eddington\'s eclipse expedition confirmed his predictions, making him world-famous.' },
    { year: '1921', title: 'Nobel Prize', description: 'Awarded Nobel Prize in Physics for the photoelectric effect.' },
    { year: '1933', title: 'Emigration', description: 'Emigrated to the United States, joining Institute for Advanced Study, Princeton.' },
    { year: '1939', title: 'Letter to Roosevelt', description: 'Signed letter warning about potential atomic bombs, initiating Manhattan Project.' },
    { year: '1955', title: 'Death', description: 'Passed away on April 18 in Princeton, New Jersey, at age 76.' },
  ]

  return (
    <section id="timeline" className="py-24 bg-parchment-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ornament text-4xl">❦</span>
          <h2 className="section-title">Timeline of a Genius</h2>
          <span className="ornament text-4xl">❦</span>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-accent via-sepia to-gold-accent md:-translate-x-1/2" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                  <div className="vintage-card inline-block">
                    <span className="font-serif text-4xl font-bold text-gold-accent">{event.year}</span>
                    <h3 className="font-serif text-xl font-bold text-sepia mt-2">{event.title}</h3>
                    <p className="text-ink mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold-accent rounded-full border-4 border-parchment md:-translate-x-1/2 z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Scientific Contributions Section
function ContributionsSection() {
  const contributions = [
    {
      title: 'Theory of Relativity',
      icon: '🌌',
      description: 'Revolutionized our understanding of space and time. Special relativity (1905) showed that space and time are interwoven into spacetime, while general relativity (1915) described gravity as the curvature of spacetime caused by mass and energy.',
      equation: 'Gμν + Λgμν = 8πGTμν',
    },
    {
      title: 'Mass-Energy Equivalence',
      icon: '⚡',
      description: 'The famous equation E = mc² demonstrated that mass and energy are interchangeable. This simple yet profound relationship underlies nuclear energy and has countless applications in modern physics.',
      equation: 'E = mc²',
    },
    {
      title: 'Photoelectric Effect',
      icon: '☀️',
      description: 'Explained how light can eject electrons from metal surfaces, proposing that light consists of discrete packets of energy called photons. This work earned him the Nobel Prize and helped establish quantum theory.',
      equation: 'E = hf - Φ',
    },
    {
      title: 'Quantum Theory',
      icon: '⚛️',
      description: 'Made foundational contributions to quantum mechanics, though he famously debated its probabilistic nature. His work on stimulated emission laid the groundwork for the laser.',
      equation: 'A₂₁/A₁₂ = 8πhν³/c³',
    },
    {
      title: 'Brownian Motion',
      icon: '🔬',
      description: 'Provided empirical evidence for the existence of atoms by explaining the random motion of particles suspended in fluid. This work helped establish atomic theory on firm experimental ground.',
      equation: '⟨x²⟩ = 2Dt',
    },
    {
      title: 'Bose-Einstein Statistics',
      icon: '❄️',
      description: 'Collaborated with Satyendra Nath Bose to develop quantum statistics for particles with integer spin. Predicted the Bose-Einstein condensate, a state of matter achieved at near absolute zero.',
      equation: 'nᵢ = 1/(e^(εᵢ-μ)/kT - 1)',
    },
  ]

  return (
    <section id="contributions" className="py-24 equation-bg parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ornament text-4xl">❦</span>
          <h2 className="section-title">Scientific Contributions</h2>
          <p className="font-serif text-xl text-sepia-light mt-4">
            Revolutionary discoveries that changed physics forever
          </p>
          <span className="ornament text-4xl">❦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((contribution, index) => (
            <div
              key={contribution.title}
              className="vintage-card group hover:border-gold-accent/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl mb-4">{contribution.icon}</div>
              <h3 className="font-serif text-2xl font-bold text-sepia mb-3">
                {contribution.title}
              </h3>
              <p className="text-ink leading-relaxed mb-4">
                {contribution.description}
              </p>
              <div className="mt-4 p-3 bg-parchment-dark/50 rounded border border-sepia/20">
                <code className="font-serif text-lg text-gold-accent italic">
                  {contribution.equation}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Quotes Section
function QuotesSection() {
  const quotes = [
    {
      text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
      context: "On the importance of creativity in science",
    },
    {
      text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
      context: "On the value of curiosity",
    },
    {
      text: "Try not to become a man of success, but rather try to become a man of value.",
      context: "On personal character",
    },
    {
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      context: "On perseverance",
    },
    {
      text: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.",
      context: "On changing perspectives",
    },
    {
      text: "Logic will get you from A to B. Imagination will take you everywhere.",
      context: "On creative thinking",
    },
    {
      text: "A person who never made a mistake never tried anything new.",
      context: "On learning from failure",
    },
    {
      text: "Science without religion is lame, religion without science is blind.",
      context: "On science and spirituality",
    },
  ]

  return (
    <section id="quotes" className="py-24 bg-parchment-dark/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ornament text-4xl">❦</span>
          <h2 className="section-title">Words of Wisdom</h2>
          <p className="font-serif text-xl text-sepia-light mt-4">
            Timeless insights from a brilliant mind
          </p>
          <span className="ornament text-4xl">❦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="vintage-card relative overflow-hidden"
            >
              <div className="absolute top-4 left-4 text-6xl text-gold-accent/20 font-serif">"</div>
              <blockquote className="relative z-10">
                <p className="font-serif text-lg text-ink leading-relaxed italic mb-4">
                  {quote.text}
                </p>
                <footer className="flex items-center gap-4">
                  <div className="flex-1 h-px bg-sepia/30" />
                  <span className="font-script text-sepia-light text-sm">
                    {quote.context}
                  </span>
                  <div className="flex-1 h-px bg-sepia/30" />
                </footer>
              </blockquote>
              <div className="absolute bottom-4 right-4 text-6xl text-gold-accent/20 font-serif rotate-180">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Gallery Section
function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null)
  
  const images = [
    { src: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=600', caption: 'Portrait, 1947' },
    { src: 'https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=600', caption: 'At work' },
    { src: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600', caption: 'Lecturing' },
    { src: 'https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=600', caption: 'Thoughtful' },
    { src: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600', caption: 'With colleagues' },
    { src: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', caption: 'Contemplating' },
    { src: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600', caption: 'In his study' },
    { src: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=600', caption: 'Later years' },
  ]

  return (
    <section id="gallery" className="py-24 equation-bg parchment-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="ornament text-4xl">❦</span>
          <h2 className="section-title">Visual Legacy</h2>
          <p className="font-serif text-xl text-sepia-light mt-4">
            Moments captured through time
          </p>
          <span className="ornament text-4xl">❦</span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-lg ${
                index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.src}
                alt={image.caption}
                className="w-full h-full object-cover aspect-square sepia group-hover:sepia-0 transition-all duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-sepia/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-parchment font-serif text-lg">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-parchment text-4xl hover:text-gold-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="max-w-4xl max-h-screen" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.caption}
                className="max-w-full max-h-[80vh] object-contain"
              />
              <p className="text-parchment font-serif text-xl text-center mt-4">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-sepia text-parchment py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">⚛️</span>
            <span className="font-serif text-2xl font-bold tracking-wider">EINSTEIN</span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="text-gold-accent text-2xl">❧</span>
            <span className="text-gold-accent text-xl">◇</span>
            <span className="text-gold-accent text-2xl">❧</span>
          </div>

          <p className="font-serif text-parchment/80 mb-4">
            "The important thing is not to stop questioning."
          </p>
          
          <p className="text-parchment/60 text-sm">
            A tribute to one of history's greatest minds.
          </p>
          
          <p className="text-parchment/40 text-xs mt-8">
            © 2026 Einstein Tribute. Built with React + TailwindCSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Main App Component
function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'biography', 'timeline', 'contributions', 'quotes', 'gallery']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-parchment">
      <Navigation activeSection={activeSection} setActiveSection={scrollToSection} />
      <main>
        <HeroSection setActiveSection={scrollToSection} />
        <BiographySection />
        <TimelineSection />
        <ContributionsSection />
        <QuotesSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}

export default App
