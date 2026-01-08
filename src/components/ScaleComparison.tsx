import { motion } from 'framer-motion'
import './ScaleComparison.css'

const currentScale = {
  code: 'NOW',
  title: 'Current Scale',
  badge: 'Growth Phase',
  badgeClass: 'badge-construction',
  revenue: '$20M',
  properties: '10',
  avgValue: '$2M',
  marketingSpend: '$2-3M',
  marketingRate: '10-15%',
}

const targetScale = {
  code: 'TGT',
  title: 'Target Scale',
  badge: 'Syndicate Level',
  badgeClass: 'badge-owned',
  revenue: '$1B',
  properties: '100',
  avgValue: '$10M',
  marketingSpend: '$70-100M',
  marketingRate: '7-10%',
}

const currentBudget = [
  { category: 'Brand & Content', amount: '$600K' },
  { category: 'Distribution', amount: '$700K' },
  { category: 'Events', amount: '$300K' },
  { category: 'Technology', amount: '$200K' },
  { category: 'Capital Raise', amount: '$150K' },
  { category: 'Partnerships', amount: '$50K' },
]

const targetCapabilities = [
  'AI-powered 24/7 brand systems',
  'Global UHNW distribution network',
  'Premium media syndication',
  'Institutional capital access',
  'Market timing optimization',
]

export function ScaleComparison() {
  return (
    <section id="scale" className="section">
      <div className="section-header">
        <span className="section-badge badge-available">50x Growth</span>
        <h2 className="section-title">Scale Comparison</h2>
        <span className="section-count">Current → Target Trajectory</span>
      </div>

      <div className="scale-grid">
        <motion.div
          className="project-card scale-card"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="card-header">
            <div className="card-logo">{currentScale.code}</div>
            <div className={`card-roi ${currentScale.badgeClass}`}>{currentScale.badge}</div>
          </div>
          
          <h3 className="card-title">{currentScale.title}</h3>
          <p className="card-location">Estimated Annual Operations</p>
          
          <div className="scale-revenue">{currentScale.revenue}</div>
          <p className="scale-revenue-label">Annual Gross Revenue</p>
          
          <div className="scale-metrics">
            <div className="scale-metric">
              <span className="metric-value">{currentScale.properties}</span>
              <span className="metric-label">Properties/Year</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value">{currentScale.avgValue}</span>
              <span className="metric-label">Avg. Value</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value">{currentScale.marketingSpend}</span>
              <span className="metric-label">Marketing</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value">{currentScale.marketingRate}</span>
              <span className="metric-label">Rate</span>
            </div>
          </div>
          
          <div className="scale-details">
            <h4>Sample $2M Budget</h4>
            <ul>
              {currentBudget.map((item) => (
                <li key={item.category}>
                  <span>{item.category}</span>
                  <span>{item.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="scale-arrow"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="arrow-content">
            <span className="arrow-value">50x</span>
            <span className="arrow-label">GROWTH</span>
          </div>
          <span className="arrow-icon">→</span>
        </motion.div>

        <motion.div
          className="project-card scale-card target"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="card-header">
            <div className="card-logo gold">{targetScale.code}</div>
            <div className={`card-roi ${targetScale.badgeClass}`}>{targetScale.badge}</div>
          </div>
          
          <h3 className="card-title">{targetScale.title}</h3>
          <p className="card-location">Syndicate Level Operations</p>
          
          <div className="scale-revenue gold">{targetScale.revenue}</div>
          <p className="scale-revenue-label">Annual Gross Revenue</p>
          
          <div className="scale-metrics">
            <div className="scale-metric">
              <span className="metric-value gold">{targetScale.properties}</span>
              <span className="metric-label">Properties/Year</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value gold">{targetScale.avgValue}</span>
              <span className="metric-label">Avg. Value</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value gold">{targetScale.marketingSpend}</span>
              <span className="metric-label">Marketing</span>
            </div>
            <div className="scale-metric">
              <span className="metric-value gold">{targetScale.marketingRate}</span>
              <span className="metric-label">Rate</span>
            </div>
          </div>
          
          <div className="scale-details">
            <h4>Syndicate Capabilities</h4>
            <ul className="capabilities">
              {targetCapabilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      <motion.blockquote 
        className="scale-quote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        "The question isn't 'Can we afford $4.5M in marketing?'—it's 
        <span className="highlight">'Can we afford not to?'</span>"
      </motion.blockquote>
    </section>
  )
}
