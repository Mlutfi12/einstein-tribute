import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Star, Heart, Share2, Calendar, MapPin, BookOpen, Mail, Phone, Download, ZoomIn, ArrowLeft } from 'lucide-react'
import quotesData from './data/quotes.json'
import timelineData from './data/timeline.json'
import theoriesData from './data/theories.json'
import type { Quote, TimelineEvent, Theory } from './types'

// ============ COMMON COMPONENTS ============

// Cosmos Background Component
function CosmosBackground({ density = 'medium', animate = true }: { density?: 'low' | 'medium' | 'high', animate?: boolean }) {
  const starCount = { low: 50, medium: 150, high: 300 }[density]
  const stars = Array.from({ length: starCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    delay: Math.random() * 4,
  }))

  return (
    <div className="absolute inset-0 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-star-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.8,
            animation: animate ? `twinkle ${2 + Math.random() * 3}s ease-in-out infinite` : 'none',
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// Vintage Frame Component
function VintageFrame({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={`relative bg-parchment-100 border-3 double-sepia-600 p-6 shadow-vintage ${className}`}>
      <div className="absolute inset-0 border border-sepia-400 pointer-events-none" style={{ margin: '-4px' }} />
      {children}
    </div>
  )
}

// Ornamental Divider
function OrnamentalDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <span className="text-goldAccent text-2xl">❧</span>
      <span className="text-goldAccent text-xl">◇</span>
      <span className="text-goldAccent text-2xl">❧</span>
    </div>
  )
}

// Quote Card Component
function QuoteCard({ quote, variant = 'standard' }: { quote: Quote, variant?: 'featured' | 'standard' | 'compact' }) {
  const [isFavorite, setIsFavorite] = useState(false)

  if (variant === 'compact') {
    return (
      <div className="p-4 bg-parchment-100 border border-sepia-300 rounded">
        <p className="font-body text-sm italic text-sepia-700 line-clamp-2">"{quote.text}"</p>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="quote-card"
    >
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <span className="px-3 py-1 bg-sepia-200 text-sepia-700 text-xs font-medium rounded capitalize">
            {quote.category}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className={`p-2 rounded-full transition-colors ${isFavorite ? 'text-red-500' : 'text-sepia-400 hover:text-red-400'}`}
            >
              <Heart className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
            </button>
            <button className="p-2 text-sepia-400 hover:text-sepia-600 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <blockquote className="mb-4">
          <p className="font-body text-lg leading-relaxed text-sepia-800 italic">"{quote.text}"</p>
        </blockquote>
        
        <footer className="flex items-center gap-2 text-sm text-sepia-600">
          <span className="font-heading font-medium">— {quote.source}</span>
          {quote.year && <span className="text-sepia-400">• {quote.year}</span>}
        </footer>
      </div>
    </motion.div>
  )
}

// Timeline Node Component
function TimelineNode({ event, position, isActive, onClick }: { event: TimelineEvent, position: 'left' | 'right', isActive: boolean, onClick: (id: string) => void }) {
  const typeColors: Record<string, string> = {
    personal: 'bg-sepia-500',
    scientific: 'bg-goldAccent',
    professional: 'bg-sepia-700',
    historical: 'bg-nebula-blue',
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`relative flex items-center gap-8 mb-12 ${position === 'right' ? 'md:flex-row-reverse' : ''}`}
    >
      <div className={`flex-1 ml-12 md:ml-0 ${position === 'left' ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
        <div
          onClick={() => onClick(event.id)}
          className={`vintage-card cursor-pointer transition-all ${isActive ? 'ring-2 ring-goldAccent scale-105' : ''}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className={`w-3 h-3 rounded-full ${typeColors[event.type]}`} />
            <span className="font-heading text-3xl font-bold text-goldAccent">{event.year}</span>
          </div>
          <h3 className="font-heading text-xl font-bold text-sepia-800 mb-2">{event.title}</h3>
          <p className="font-body text-sepia-700">{event.description}</p>
          {event.location && (
            <div className="flex items-center gap-2 mt-3 text-sm text-sepia-500">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          )}
        </div>
      </div>

      <div className={`absolute left-4 md:left-1/2 w-5 h-5 rounded-full border-4 border-parchment-100 ${typeColors[event.type]} md:-translate-x-1/2 z-10 shadow-lg`} />
    </motion.div>
  )
}

// ============ LAYOUT COMPONENTS ============

// Header Component
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'biography', label: 'Biography', path: '/biography' },
    { id: 'theories', label: 'Theories', path: '/theories' },
    { id: 'quotes', label: 'Quotes', path: '/quotes' },
    { id: 'gallery', label: 'Gallery', path: '/gallery' },
    { id: 'resources', label: 'Resources', path: '/resources' },
    { id: 'contact', label: 'Contact', path: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-sepia-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-4xl">⚛️</span>
            <span className={`font-heading text-2xl font-bold tracking-wider ${isScrolled ? 'text-parchment-50' : 'text-sepia-800'}`}>
              EINSTEIN
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className={`font-medium text-sm tracking-wide transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'text-goldAccent border-b-2 border-goldAccent'
                    : isScrolled
                    ? 'text-parchment-200/80 hover:text-parchment-50'
                    : 'text-sepia-700/80 hover:text-sepia-800'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-parchment-50' : 'text-sepia-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-parchment-50' : 'text-sepia-800'}`} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden py-4 border-t border-sepia-200"
            >
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 ${
                    location.pathname === item.path
                      ? 'text-goldAccent bg-sepia-100'
                      : 'text-sepia-700 hover:bg-sepia-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-sepia-900 text-parchment-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚛️</span>
              <span className="font-heading text-2xl font-bold">EINSTEIN</span>
            </div>
            <p className="font-body text-parchment-200/80 text-sm leading-relaxed">
              A tribute to one of history's greatest minds. Celebrating the life, work, and legacy of Albert Einstein.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-goldAccent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/biography" className="text-parchment-200 hover:text-parchment-50 transition-colors">Biography</Link></li>
              <li><Link to="/theories" className="text-parchment-200 hover:text-parchment-50 transition-colors">Theories</Link></li>
              <li><Link to="/quotes" className="text-parchment-200 hover:text-parchment-50 transition-colors">Quotes</Link></li>
              <li><Link to="/gallery" className="text-parchment-200 hover:text-parchment-50 transition-colors">Gallery</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-goldAccent">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/resources" className="text-parchment-200 hover:text-parchment-50 transition-colors">Lesson Plans</Link></li>
              <li><Link to="/resources" className="text-parchment-200 hover:text-parchment-50 transition-colors">Worksheets</Link></li>
              <li><Link to="/resources" className="text-parchment-200 hover:text-parchment-50 transition-colors">Videos</Link></li>
              <li><a href="#" className="text-parchment-200 hover:text-parchment-50 transition-colors">Timeline</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-goldAccent">Connect</h4>
            <p className="font-body text-parchment-200/80 text-sm mb-4">Subscribe for updates and educational content.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 bg-sepia-800 border border-sepia-600 text-parchment-50 placeholder-parchment-400/50 rounded focus:outline-none focus:border-goldAccent"
              />
              <button className="px-4 py-2 bg-goldAccent hover:bg-goldAccent/80 transition-colors rounded">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <OrnamentalDivider />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-parchment-400">
          <p>© 2026 Einstein Tribute. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-parchment-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-parchment-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-parchment-200 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ============ PAGE COMPONENTS ============

// Home Page
function HomePage() {
  const navigate = useNavigate()
  const featuredQuote = quotesData.quotes.find(q => q.featured) || quotesData.quotes[0]
  const featuredTheories = theoriesData.theories.slice(0, 3)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center cosmos-bg equation-bg">
        <CosmosBackground density="high" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-goldAccent shadow-2xl mx-auto mb-8 sepia"
          >
            <img
              src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?w=400"
              alt="Albert Einstein"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl font-bold text-parchment-50 mb-4"
          >
            Albert Einstein
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-xl md:text-2xl text-parchment-200 mb-8 italic"
          >
            Theoretical Physicist • Nobel Laureate • Visionary
          </motion.p>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <p className="font-heading text-2xl md:text-4xl text-parchment-100 leading-relaxed italic">
              "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
            </p>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button onClick={() => navigate('/biography')} className="btn-primary">
              Explore His Legacy
            </button>
            <button onClick={() => navigate('/theories')} className="btn-secondary border-parchment-200 text-parchment-200 hover:bg-parchment-200 hover:text-sepia-900">
              Discover Theories
            </button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-parchment-200 text-3xl"
        >
          ⌄
        </motion.div>
      </section>

      {/* Featured Quote Section */}
      <section className="py-24 parchment-texture">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <OrnamentalDivider />
          <div className="text-center mb-12">
            <h2 className="section-title">Words of Wisdom</h2>
          </div>
          {featuredQuote && <QuoteCard quote={featuredQuote} variant="featured" />}
        </div>
      </section>

      {/* Theory Preview Section */}
      <section className="py-24 bg-parchment-50 equation-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Revolutionary Theories</h2>
            <p className="font-body text-lg text-sepia-600 mt-4">Discover the ideas that changed physics forever</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTheories.map((theory, index) => (
              <motion.div
                key={theory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="vintage-card cursor-pointer group"
                onClick={() => navigate(`/theories/${theory.id}`)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-12 h-12 bg-goldAccent/20 rounded-full flex items-center justify-center text-goldAccent font-bold">
                    {index + 1}
                  </span>
                  <span className="font-heading text-2xl font-bold text-sepia-800">{theory.title}</span>
                </div>
                <p className="font-body text-sepia-700 mb-4">{theory.summary}</p>
                <div className="flex items-center gap-2 text-goldAccent font-medium">
                  <span>Learn More</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate('/theories')} className="btn-primary">
              View All Theories
            </button>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-24 parchment-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: 'Biography', desc: 'Life story of a genius', path: '/biography' },
              { icon: Star, title: 'Quotes', desc: 'Timeless wisdom', path: '/quotes' },
              { icon: Calendar, title: 'Timeline', desc: 'Key moments in history', path: '/biography#timeline' },
              { icon: ZoomIn, title: 'Gallery', desc: 'Historical photographs', path: '/gallery' },
              { icon: Download, title: 'Resources', desc: 'Educational materials', path: '/resources' },
              { icon: Mail, title: 'Contact', desc: 'Get in touch', path: '/contact' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(item.path)}
                className="vintage-card cursor-pointer group text-center"
              >
                <item.icon className="w-12 h-12 text-goldAccent mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl font-bold text-sepia-800 mb-2">{item.title}</h3>
                <p className="font-body text-sepia-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Biography Page
function BiographyPage() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null)
  const events = timelineData.events

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      {/* Hero */}
      <section className="relative py-24 cosmos-bg">
        <CosmosBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-parchment-50 mb-6"
          >
            A Life of Genius
          </motion.h1>
          <p className="font-body text-xl text-parchment-200 max-w-3xl mx-auto">
            From humble beginnings in Ulm to becoming one of the most influential scientists in history
          </p>
        </div>
      </section>

      {/* Biography Content */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VintageFrame>
                <img
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e63?w=600"
                  alt="Einstein at work"
                  className="w-full h-96 object-cover sepia rounded"
                />
              </VintageFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="section-title">The Story</h2>
              <p className="font-body text-lg leading-relaxed text-sepia-800">
                Albert Einstein was born on March 14, 1879, in Ulm, in the Kingdom of Württemberg in the German Empire. 
                From a young age, Einstein showed an extraordinary curiosity about the natural world.
              </p>
              <p className="font-body text-lg leading-relaxed text-sepia-800">
                His revolutionary theories transformed our understanding of space, time, gravity, and the universe itself. 
                In 1905, his "Annus Mirabilis" or "Miracle Year," Einstein published four groundbreaking papers that would change physics forever.
              </p>
              <p className="font-body text-lg leading-relaxed text-sepia-800">
                Einstein was awarded the Nobel Prize in Physics in 1921 for his explanation of the photoelectric effect. 
                He continued his work until his death on April 18, 1955, in Princeton, New Jersey.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center p-4 bg-parchment-200 rounded">
                  <p className="font-heading text-3xl font-bold text-goldAccent">76</p>
                  <p className="text-sm text-sepia-600">Years of Life</p>
                </div>
                <div className="text-center p-4 bg-parchment-200 rounded">
                  <p className="font-heading text-3xl font-bold text-goldAccent">300+</p>
                  <p className="text-sm text-sepia-600">Scientific Papers</p>
                </div>
                <div className="text-center p-4 bg-parchment-200 rounded">
                  <p className="font-heading text-3xl font-bold text-goldAccent">1</p>
                  <p className="text-sm text-sepia-600">Nobel Prize</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Timeline */}
          <div id="timeline" className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-goldAccent via-sepia-600 to-goldAccent md:-translate-x-1/2" />
            
            <div className="text-center mb-16">
              <h2 className="section-title">Timeline</h2>
              <p className="font-body text-lg text-sepia-600">Key moments in Einstein's life</p>
            </div>

            {events.map((event, index) => (
              <TimelineNode
                key={event.id}
                event={event}
                position={index % 2 === 0 ? 'left' : 'right'}
                isActive={activeEvent === event.id}
                onClick={setActiveEvent}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Theories Page
function TheoriesPage() {
  const navigate = useNavigate()
  const { id } = useParams()
  const theories = theoriesData.theories
  const selectedTheory = theories.find(t => t.id === id)

  if (selectedTheory) {
    return <TheoryDetail theory={selectedTheory} onBack={() => navigate('/theories')} />
  }

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      {/* Hero */}
      <section className="py-24 cosmos-bg">
        <CosmosBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-parchment-50 mb-6"
          >
            Revolutionary Theories
          </motion.h1>
          <p className="font-body text-xl text-parchment-200 max-w-3xl mx-auto">
            Explore the groundbreaking ideas that transformed our understanding of the universe
          </p>
        </div>
      </section>

      {/* Theories Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {theories.map((theory, index) => (
              <motion.div
                key={theory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => navigate(`/theories/${theory.id}`)}
                className="vintage-card cursor-pointer group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-goldAccent/20 text-goldAccent text-sm font-medium rounded">
                    {theory.year}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded capitalize ${
                    theory.difficulty === 'beginner' ? 'bg-success/20 text-success' :
                    theory.difficulty === 'intermediate' ? 'bg-warning/20 text-warning' :
                    'bg-error/20 text-error'
                  }`}>
                    {theory.difficulty}
                  </span>
                </div>
                <h3 className="font-heading text-2xl font-bold text-sepia-800 mb-3 group-hover:text-goldAccent transition-colors">
                  {theory.title}
                </h3>
                <p className="font-body text-sepia-700 mb-4">{theory.summary}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {theory.keyConcepts.slice(0, 3).map((concept) => (
                    <span key={concept} className="px-2 py-1 bg-parchment-200 text-sepia-600 text-xs rounded">
                      {concept}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-sepia-500">
                  <span className="flex items-center gap-1">
                    <BookOpen className="w-4 h-4" />
                    {theory.readTime} min read
                  </span>
                  <span className="flex items-center gap-1 text-goldAccent group-hover:translate-x-1 transition-transform">
                    Learn More <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Theory Detail Component
function TheoryDetail({ theory, onBack }: { theory: Theory, onBack: () => void }) {
  return (
    <div className="pt-20 min-h-screen parchment-texture">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={onBack} className="flex items-center gap-2 text-sepia-600 hover:text-goldAccent transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Theories
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="vintage-card"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="px-4 py-2 bg-goldAccent/20 text-goldAccent font-medium rounded">
              {theory.year}
            </span>
            <span className="flex items-center gap-2 text-sepia-500">
              <BookOpen className="w-5 h-5" />
              {theory.readTime} min read
            </span>
          </div>

          <h1 className="font-heading text-4xl md:text-5xl font-bold text-sepia-800 mb-6">
            {theory.title}
          </h1>

          <p className="font-body text-xl leading-relaxed text-sepia-700 mb-8">
            {theory.description}
          </p>

          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-sepia-800 mb-4">Key Concepts</h2>
            <div className="flex flex-wrap gap-3">
              {theory.keyConcepts.map((concept) => (
                <span key={concept} className="px-4 py-2 bg-parchment-200 text-sepia-700 rounded-lg">
                  {concept}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="font-heading text-2xl font-bold text-sepia-800 mb-4">Equations</h2>
            {theory.equations.map((eq, index) => (
              <div key={index} className="mb-6 p-6 bg-parchment-50 rounded-lg border border-sepia-300">
                <p className="font-math text-2xl text-sepia-800 mb-4">{eq.latex}</p>
                <p className="font-body text-sepia-600 mb-3">{eq.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eq.variables.map((v) => (
                    <div key={v.symbol} className="flex gap-3">
                      <span className="font-math font-bold text-goldAccent">{v.symbol}</span>
                      <div>
                        <p className="font-medium text-sepia-700">{v.name}</p>
                        <p className="text-sm text-sepia-500">{v.description}{v.unit && ` (${v.unit})`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="btn-primary">
              Explore Visualization
            </button>
            <button className="btn-secondary">
              Download PDF
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Quotes Page
function QuotesPage() {
  const [filter, setFilter] = useState<string>('all')
  const quotes = quotesData.quotes
  
  const filteredQuotes = filter === 'all' 
    ? quotes 
    : quotes.filter(q => q.category === filter)

  const categories = ['all', ...new Set(quotes.map(q => q.category))]

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      {/* Hero */}
      <section className="py-24 bg-parchment-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-sepia-800 mb-6"
          >
            Words of Wisdom
          </motion.h1>
          <p className="font-body text-xl text-sepia-600 max-w-3xl mx-auto">
            Timeless insights from one of history's greatest minds
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === cat
                    ? 'bg-goldAccent text-parchment-50'
                    : 'bg-parchment-100 text-sepia-700 hover:bg-parchment-200'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Grid */}
      <section className="py-12 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredQuotes.map((quote, index) => (
              <motion.div
                key={quote.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <QuoteCard quote={quote} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Gallery Page
function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  
  const images = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    src: `https://images.unsplash.com/photo-${1532074205216 + i}?w=600`,
    caption: `Historical Photo ${i + 1}`,
    year: 1920 + (i % 35),
  }))

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      {/* Hero */}
      <section className="py-24 cosmos-bg">
        <CosmosBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-parchment-50 mb-6"
          >
            Visual Legacy
          </motion.h1>
          <p className="font-body text-xl text-parchment-200 max-w-3xl mx-auto">
            A photographic journey through Einstein's life and times
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedImage(index)}
                className={`relative group cursor-pointer overflow-hidden rounded-lg shadow-vintage ${
                  index === 0 || index === 5 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
              >
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover aspect-square sepia group-hover:sepia-0 transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-sepia-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-parchment-50">
                    <p className="font-heading text-lg">{image.caption}</p>
                    <p className="text-sm">{image.year}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-sepia-900/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-parchment-50 text-4xl hover:text-goldAccent transition-colors"
          >
            ✕
          </button>
          
          <button
            onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
            className="absolute left-6 text-parchment-50 text-3xl hover:text-goldAccent"
          >
            ‹
          </button>
          
          <div className="max-w-4xl max-h-screen" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedImage].src}
              alt={images[selectedImage].caption}
              className="max-w-full max-h-[80vh] object-contain"
            />
            <p className="text-parchment-50 font-heading text-xl text-center mt-4">
              {images[selectedImage].caption} • {images[selectedImage].year}
            </p>
          </div>
          
          <button
            onClick={() => setSelectedImage(Math.min(images.length - 1, selectedImage + 1))}
            className="absolute right-6 text-parchment-50 text-3xl hover:text-goldAccent"
          >
            ›
          </button>
        </div>
      )}
    </div>
  )
}

// Resources Page
function ResourcesPage() {
  const resources = [
    { title: 'Special Relativity Lesson Plan', type: 'Lesson Plan', grade: '9-12', duration: '90 min' },
    { title: 'E=mc² Worksheet', type: 'Worksheet', grade: '10-12', duration: '45 min' },
    { title: 'Timeline of Discoveries', type: 'Activity', grade: '8-12', duration: '60 min' },
    { title: 'Quantum Theory Video Series', type: 'Video', grade: '11-12', duration: '120 min' },
  ]

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      <section className="py-24 bg-parchment-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-sepia-800 mb-6"
          >
            Educational Resources
          </motion.h1>
          <p className="font-body text-xl text-sepia-600 max-w-3xl mx-auto">
            Teaching materials and activities for educators and students
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="vintage-card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-sepia-800 mb-2">{resource.title}</h3>
                    <div className="flex gap-4 text-sm text-sepia-600">
                      <span className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        Grade {resource.grade}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {resource.duration}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-goldAccent/20 text-goldAccent text-sm font-medium rounded">
                    {resource.type}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-goldAccent font-medium hover:gap-3 transition-all">
                  <Download className="w-5 h-5" />
                  Download Resource
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

// Contact Page
function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for your message! We will respond soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="pt-20 min-h-screen parchment-texture">
      <section className="py-24 bg-parchment-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-sepia-800 mb-6"
          >
            Get in Touch
          </motion.h1>
          <p className="font-body text-xl text-sepia-600 max-w-3xl mx-auto">
            Have questions or suggestions? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <VintageFrame>
                <h2 className="font-heading text-2xl font-bold text-sepia-800 mb-6">Send a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-sepia-700 mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-sepia-300 rounded-lg focus:border-goldAccent focus:outline-none bg-parchment-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sepia-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-sepia-300 rounded-lg focus:border-goldAccent focus:outline-none bg-parchment-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sepia-700 mb-2">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-sepia-300 rounded-lg focus:border-goldAccent focus:outline-none bg-parchment-50"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-sepia-700 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-3 border-2 border-sepia-300 rounded-lg focus:border-goldAccent focus:outline-none bg-parchment-50 resize-none"
                      required
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </VintageFrame>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-2xl font-bold text-sepia-800 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goldAccent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-goldAccent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sepia-800 mb-1">Email</h3>
                      <p className="text-sepia-600">info@einstein-tribute.com</p>
                      <p className="text-sepia-600">education@einstein-tribute.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goldAccent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-goldAccent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sepia-800 mb-1">Phone</h3>
                      <p className="text-sepia-600">+1 (555) 123-4567</p>
                      <p className="text-sepia-500 text-sm">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-goldAccent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-goldAccent" />
                    </div>
                    <div>
                      <h3 className="font-medium text-sepia-800 mb-1">Address</h3>
                      <p className="text-sepia-600">Institute for Advanced Study</p>
                      <p className="text-sepia-600">Princeton, NJ 08540</p>
                    </div>
                  </div>
                </div>
              </div>

              <VintageFrame>
                <h3 className="font-heading text-lg font-bold text-sepia-800 mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/faq" className="text-sepia-600 hover:text-goldAccent transition-colors">FAQ</Link></li>
                  <li><Link to="/press" className="text-sepia-600 hover:text-goldAccent transition-colors">Press Kit</Link></li>
                  <li><Link to="/partnerships" className="text-sepia-600 hover:text-goldAccent transition-colors">Educational Partnerships</Link></li>
                </ul>
              </VintageFrame>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

// Not Found Page
function NotFoundPage() {
  return (
    <div className="pt-20 min-h-screen parchment-texture flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-9xl font-bold text-sepia-300 mb-4">404</h1>
        <h2 className="font-heading text-3xl font-bold text-sepia-800 mb-4">Page Not Found</h2>
        <p className="font-body text-sepia-600 mb-8">The page you're looking for seems to have vanished into spacetime.</p>
        <Link to="/" className="btn-primary">Return Home</Link>
      </div>
    </div>
  )
}

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-parchment-100">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<BiographyPage />} />
            <Route path="/theories" element={<TheoriesPage />} />
            <Route path="/theories/:id" element={<TheoriesPage />} />
            <Route path="/quotes" element={<QuotesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
