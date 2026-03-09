// Quote Types
export interface Quote {
  id: string
  text: string
  source: string
  publication?: string
  date?: string
  year?: number
  category: string
  tags: string[]
  verified: boolean
  featured: boolean
  favorites: number
}

export type QuoteCategory = string

// Timeline Types
export interface TimelineEvent {
  id: string
  year: number
  month?: number
  day?: number
  title: string
  description: string
  type: string
  location?: string
  imageUrl?: string
  imageCaption?: string
  sources: string[]
  order: number
}

export type EventType = string

// Gallery Types
export interface GalleryImage {
  id: string
  title: string
  description?: string
  category: ImageCategory
  year?: number
  photographer?: string
  location?: string
  credit?: string
  license?: string
  urls: {
    thumbnail: string
    small: string
    medium: string
    large: string
    original: string
  }
  dimensions: {
    width: number
    height: number
    aspectRatio: string
  }
}

export type ImageCategory = 
  | 'portraits'
  | 'documents'
  | 'locations'
  | 'memorabilia'
  | 'illustrations'
  | 'family'
  | 'colleagues'

// Theory Types
export interface Theory {
  id: string
  title: string
  year: number
  summary: string
  description: string
  keyConcepts: string[]
  equations: Equation[]
  visualizations: string[]
  difficulty: string
  readTime: number
}

export interface Equation {
  latex: string
  description: string
  variables: Variable[]
}

export interface Variable {
  symbol: string
  name: string
  description: string
  unit?: string
}

// Resource Types
export interface Resource {
  id: string
  title: string
  type: ResourceType
  gradeLevel?: string
  duration?: string
  description: string
  objectives: string[]
  materials: string[]
  standards: string[]
  author?: string
  reviewedBy?: string
  downloads: number
  rating: number
  ratingCount: number
  fileUrls: {
    [key: string]: string
  }
  published: boolean
}

export type ResourceType = 
  | 'lesson-plan'
  | 'worksheet'
  | 'video'
  | 'reading'
  | 'activity'
  | 'assessment'

// Contact Types
export interface ContactMessage {
  id: string
  name: string
  email: string
  subject: string
  message: string
  category: 'general' | 'educational' | 'technical' | 'other'
  status: 'pending' | 'read' | 'replied' | 'archived'
  createdAt: string
}

// Navigation Types
export interface NavItem {
  id: string
  label: string
  path: string
}

// Component Props
export interface CosmosBackgroundProps {
  density?: 'low' | 'medium' | 'high'
  animate?: boolean
  showNebulae?: boolean
  parallax?: boolean
}

export interface TimelineNodeProps {
  event: TimelineEvent
  position: 'left' | 'right'
  isActive: boolean
  onClick: (id: string) => void
}

export interface TimeDilationVizProps {
  velocity: number
  showEquation?: boolean
}

export interface SpacetimeCurvatureProps {
  mass: number
  rotationSpeed?: number
  showGrid?: boolean
  showLightPath?: boolean
}

export interface Emc2CalculatorProps {
  defaultUnit?: 'kg' | 'g' | 'amu'
  showComparisons?: boolean
}

export interface QuoteCardProps {
  quote: Quote
  variant?: 'featured' | 'standard' | 'compact'
  onShare?: (quote: Quote) => void
  onFavorite?: (id: string) => void
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  meta?: {
    lastUpdated?: string
    version?: string
  }
  pagination?: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// Utility Types
export interface EnergyComparison {
  label: string
  value: string
}

export interface TimeDilationResult {
  dilatedTime: number
  gamma: number
}
