const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = parseInt(process.env.PORT) || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from ./dist
app.use(express.static(path.join(__dirname, 'dist')));

// Einstein's famous quotes
const quotes = [
  { id: 1, quote: "Imagination is more important than knowledge.", year: 1929, context: "Interview with The Saturday Evening Post" },
  { id: 2, quote: "The important thing is not to stop questioning.", year: 1955, context: "Life Magazine interview" },
  { id: 3, quote: "Try not to become a person of success, but rather try to become a person of value.", year: 1955, context: "Life Magazine" },
  { id: 4, quote: "Logic will get you from A to B. Imagination will take you everywhere.", year: 1946, context: "Interview" },
  { id: 5, quote: "The only source of knowledge is experience.", year: 1930, context: "Philosophical writings" },
  { id: 6, quote: "A person who never made a mistake never tried anything new.", year: 1940, context: "Speech" },
  { id: 7, quote: "Peace cannot be kept by force; it can only be achieved by understanding.", year: 1931, context: "Disarmament conference" },
  { id: 8, quote: "Science without religion is lame, religion without science is blind.", year: 1941, context: "Nature, Science, Philosophy and Religion" },
  { id: 9, quote: "The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking.", year: 1946, context: "Attributed" },
  { id: 10, quote: "In the middle of difficulty lies opportunity.", year: 1940, context: "Writings" }
];

// Biography timeline
const biography = [
  { year: 1879, event: "Born in Ulm, Germany", category: "birth" },
  { year: 1896, event: "Renounced German citizenship, began studies at ETH Zurich", category: "education" },
  { year: 1900, event: "Graduated from ETH Zurich with a diploma in teaching", category: "education" },
  { year: 1902, event: "Began working at Swiss Patent Office in Bern", category: "career" },
  { year: 1905, event: "Annus Mirabilis - Published 4 groundbreaking papers", category: "science" },
  { year: 1905, event: "Published Special Theory of Relativity", category: "science" },
  { year: 1905, event: "Published paper on Photoelectric Effect (Nobel Prize work)", category: "science" },
  { year: 1905, event: "Published paper on Brownian Motion", category: "science" },
  { year: 1905, event: "Published E=mc²", category: "science" },
  { year: 1909, event: "Appointed Associate Professor at University of Zurich", category: "career" },
  { year: 1914, event: "Moved to Berlin, became Director of Kaiser Wilhelm Institute", category: "career" },
  { year: 1915, event: "Published General Theory of Relativity", category: "science" },
  { year: 1919, event: "General Relativity confirmed by solar eclipse observations", category: "science" },
  { year: 1921, event: "Awarded Nobel Prize in Physics", category: "award" },
  { year: 1933, event: "Emigrated to United States, joined Institute for Advanced Study", category: "career" },
  { year: 1939, event: "Signed letter to Roosevelt about atomic bomb development", category: "history" },
  { year: 1952, event: "Offered presidency of Israel, declined", category: "honor" },
  { year: 1955, event: "Passed away in Princeton, New Jersey", category: "death" }
];

// Scientific contributions
const contributions = [
  {
    id: 1,
    title: "Special Theory of Relativity",
    year: 1905,
    description: "Revolutionized our understanding of space and time, showing they are interwoven into spacetime. Introduced the concept that the laws of physics are the same for all non-accelerating observers.",
    impact: "Fundamental to modern physics, GPS technology, particle accelerators",
    formula: "t' = γ(t - vx/c²)"
  },
  {
    id: 2,
    title: "Mass-Energy Equivalence (E=mc²)",
    year: 1905,
    description: "Demonstrated that mass and energy are interchangeable. This simple equation shows that a small amount of mass can be converted into a tremendous amount of energy.",
    impact: "Nuclear power, nuclear weapons, understanding stellar energy",
    formula: "E = mc²"
  },
  {
    id: 3,
    title: "Photoelectric Effect",
    year: 1905,
    description: "Explained that light consists of discrete packets of energy (photons). This work laid the foundation for quantum mechanics.",
    impact: "Solar cells, digital cameras, quantum physics",
    formula: "E = hf"
  },
  {
    id: 4,
    title: "Brownian Motion",
    year: 1905,
    description: "Provided mathematical explanation for the random movement of particles in fluid, offering empirical evidence for the existence of atoms.",
    impact: "Confirmed atomic theory, statistical mechanics",
    formula: "⟨x²⟩ = 2Dt"
  },
  {
    id: 5,
    title: "General Theory of Relativity",
    year: 1915,
    description: "Extended special relativity to include gravity, describing it as the curvature of spacetime caused by mass and energy.",
    impact: "Black holes, gravitational waves, cosmology, GPS corrections",
    formula: "Gμν + Λgμν = 8πGTμν"
  },
  {
    id: 6,
    title: "Bose-Einstein Statistics",
    year: 1924,
    description: "Developed quantum statistics for particles with integer spin (bosons), predicting the Bose-Einstein condensate state of matter.",
    impact: "Lasers, superfluidity, superconductivity",
    formula: "ni = gi / (e^(εi-μ)/kT - 1)"
  },
  {
    id: 7,
    title: "Stimulated Emission Theory",
    year: 1917,
    description: "Proposed that atoms could be stimulated to emit photons, laying the theoretical groundwork for lasers.",
    impact: "LASER technology, modern telecommunications",
    formula: "A and B coefficients"
  },
  {
    id: 8,
    title: "EPR Paradox",
    year: 1935,
    description: "Einstein-Podolsky-Rosen paradox challenged quantum mechanics completeness, introducing quantum entanglement concept.",
    impact: "Quantum computing, quantum cryptography, quantum teleportation",
    formula: "Quantum entanglement"
  }
];

// GET /api/quotes - Get Einstein's quotes
app.get('/api/quotes', (req, res) => {
  const { limit, random } = req.query;
  
  let result = quotes;
  
  if (random === 'true') {
    result = [quotes[Math.floor(Math.random() * quotes.length)]];
  }
  
  if (limit) {
    result = result.slice(0, parseInt(limit));
  }
  
  res.json({
    success: true,
    count: result.length,
    data: result
  });
});

// GET /api/biography - Get timeline data
app.get('/api/biography', (req, res) => {
  const { category, startYear, endYear } = req.query;
  
  let result = biography;
  
  if (category) {
    result = result.filter(b => b.category === category);
  }
  
  if (startYear) {
    result = result.filter(b => b.year >= parseInt(startYear));
  }
  
  if (endYear) {
    result = result.filter(b => b.year <= parseInt(endYear));
  }
  
  res.json({
    success: true,
    count: result.length,
    data: result
  });
});

// GET /api/contributions - Get scientific contributions
app.get('/api/contributions', (req, res) => {
  const { id } = req.query;
  
  let result = contributions;
  
  if (id) {
    result = contributions.filter(c => c.id === parseInt(id));
  }
  
  res.json({
    success: true,
    count: result.length,
    data: result
  });
});

// GET /health - Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    service: 'einstein-tribute-api'
  });
});

// GET / - Serve index.html or API info
app.get('/', (req, res) => {
  res.json({
    service: 'Albert Einstein Tribute API',
    version: '1.0.0',
    endpoints: {
      'GET /api/quotes': "Get Einstein's famous quotes",
      'GET /api/biography': 'Get biographical timeline',
      'GET /api/contributions': 'Get scientific contributions',
      'GET /health': 'Health check'
    },
    staticFiles: 'Served from ./dist on port ' + PORT
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🧠 Einstein Tribute API running on http://localhost:${PORT}`);
  console.log(`📁 Serving static files from: ${path.join(__dirname, 'dist')}`);
  console.log(`📝 Endpoints:`);
  console.log(`   GET /api/quotes        - Einstein's famous quotes`);
  console.log(`   GET /api/biography     - Biographical timeline`);
  console.log(`   GET /api/contributions - Scientific contributions`);
  console.log(`   GET /health            - Health check`);
});
