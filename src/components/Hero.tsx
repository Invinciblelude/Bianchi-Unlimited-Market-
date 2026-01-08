import { motion } from 'framer-motion'
import { Building2, TrendingUp, Award } from 'lucide-react'
import './Hero.css'

export function Hero() {
  return (
    <section className="hero">
      <motion.div 
        className="hero-badge"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Award size={14} />
        <span>SYNDICATE LEVEL ACHIEVED</span>
      </motion.div>

      <motion.h1 
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="hero-title-line">BIANCHI</span>
        <span className="hero-title-accent">TILLETT</span>
      </motion.h1>

      <motion.div 
        className="hero-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <span className="hero-tagline-text">CONSTRUCTION DEVELOPMENT CORPORATION</span>
      </motion.div>

      <motion.div 
        className="hero-revenue"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div className="revenue-label">GROSS REVENUE RUN RATE</div>
        <div className="revenue-amount">
          <span className="revenue-dollar">$</span>
          <motion.span 
            className="revenue-number"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1 }}
          >
            1,000,000,000
          </motion.span>
        </div>
        <div className="revenue-suffix">USD ANNUALLY</div>
      </motion.div>

      <motion.div 
        className="hero-stats"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="hero-stat">
          <Building2 className="hero-stat-icon" />
          <div className="hero-stat-content">
            <span className="hero-stat-value">100+</span>
            <span className="hero-stat-label">Luxury Properties</span>
          </div>
        </div>
        <div className="hero-stat-divider" />
        <div className="hero-stat">
          <TrendingUp className="hero-stat-icon" />
          <div className="hero-stat-content">
            <span className="hero-stat-value">$10M</span>
            <span className="hero-stat-label">Avg. Property Value</span>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="hero-scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <div className="scroll-line" />
        <span>SCROLL TO EXPLORE</span>
      </motion.div>
    </section>
  )
}

