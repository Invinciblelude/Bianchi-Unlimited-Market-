import { motion } from 'framer-motion'
import './Hero.css'

export function Hero() {
  return (
    <header className="hero">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="hero-title">Bianchi-Tillett Development</h1>
        <p className="hero-subtitle">$1B Gross Revenue Run Rate | Syndicate Level Achieved</p>
      </motion.div>

      <motion.nav 
        className="hero-nav"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <a href="#overview" className="nav-link active">Overview</a>
        <a href="#budget" className="nav-link">Budget Allocation</a>
        <a href="#roi" className="nav-link">ROI Analysis</a>
        <a href="#scale" className="nav-link">Scale Comparison</a>
      </motion.nav>
    </header>
  )
}
