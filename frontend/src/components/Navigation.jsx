import React from 'react'

const Navigation = ({ activeSection, onNavigate, isScrolled }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'biography', label: 'Biography' },
    { id: 'quotes', label: 'Quotes' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'gallery', label: 'Gallery' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-parchment/95 backdrop-blur-sm shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="text-3xl">⚛️</div>
            <div>
              <h1 className="font-serif text-xl font-bold text-sepia tracking-wide">
                EINSTEIN
              </h1>
              <p className="text-xs text-sepia-light italic">A Tribute to Genius</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-sepia text-parchment shadow-md'
                    : 'text-sepia hover:bg-sepia/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-sepia p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold-accent to-transparent opacity-60" />
    </nav>
  )
}

export default Navigation
