import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Target, Rocket } from 'lucide-react'
import './ScaleComparison.css'

const currentScale = {
  revenue: '$20M',
  properties: '10',
  avgValue: '$2M',
  marketingSpend: '$2-3M',
  marketingRate: '10-15%',
  phase: 'Growth',
}

const targetScale = {
  revenue: '$1B',
  properties: '100',
  avgValue: '$10M',
  marketingSpend: '$70-100M',
  marketingRate: '7-10%',
  phase: 'Syndicate',
}

const currentBudgetAllocation = [
  { category: 'Brand & Content', amount: '$600K' },
  { category: 'Distribution', amount: '$700K' },
  { category: 'Events', amount: '$300K' },
  { category: 'Technology', amount: '$200K' },
  { category: 'Capital Raise', amount: '$150K' },
  { category: 'Partnerships', amount: '$50K' },
]

export function ScaleComparison() {
  return (
    <section className="scale-section">
      <div className="scale-container">
        <motion.div 
          className="scale-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="scale-eyebrow">GROWTH TRAJECTORY</span>
          <h2 className="scale-title">Scale Comparison</h2>
          <p className="scale-description">
            From current operations to billion-dollar syndicate status
          </p>
        </motion.div>

        <div className="scale-comparison">
          <motion.div 
            className="scale-card current"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="scale-card-badge">
              <Target size={14} />
              <span>CURRENT SCALE</span>
            </div>
            <div className="scale-card-header">
              <span className="scale-card-phase">{currentScale.phase} Phase</span>
              <span className="scale-card-revenue">{currentScale.revenue}</span>
              <span className="scale-card-sublabel">Annual Gross Revenue</span>
            </div>
            <div className="scale-card-metrics">
              <div className="scale-metric">
                <span className="scale-metric-label">Properties/Year</span>
                <span className="scale-metric-value">{currentScale.properties}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Avg. Value</span>
                <span className="scale-metric-value">{currentScale.avgValue}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Marketing Spend</span>
                <span className="scale-metric-value">{currentScale.marketingSpend}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Marketing Rate</span>
                <span className="scale-metric-value">{currentScale.marketingRate}</span>
              </div>
            </div>
            <div className="scale-card-allocation">
              <h4>Sample $2M Annual Budget</h4>
              <ul>
                {currentBudgetAllocation.map((item) => (
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
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <div className="scale-arrow-content">
              <Rocket className="scale-arrow-icon" />
              <span>50x</span>
              <span className="scale-arrow-label">GROWTH</span>
            </div>
            <ArrowRight className="scale-arrow-chevron" />
          </motion.div>

          <motion.div 
            className="scale-card target"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="scale-card-badge gold">
              <Sparkles size={14} />
              <span>TARGET SCALE</span>
            </div>
            <div className="scale-card-header">
              <span className="scale-card-phase gold">{targetScale.phase} Level</span>
              <span className="scale-card-revenue gold">{targetScale.revenue}</span>
              <span className="scale-card-sublabel">Annual Gross Revenue</span>
            </div>
            <div className="scale-card-metrics">
              <div className="scale-metric">
                <span className="scale-metric-label">Properties/Year</span>
                <span className="scale-metric-value gold">{targetScale.properties}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Avg. Value</span>
                <span className="scale-metric-value gold">{targetScale.avgValue}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Marketing Spend</span>
                <span className="scale-metric-value gold">{targetScale.marketingSpend}</span>
              </div>
              <div className="scale-metric">
                <span className="scale-metric-label">Marketing Rate</span>
                <span className="scale-metric-value gold">{targetScale.marketingRate}</span>
              </div>
            </div>
            <div className="scale-card-features">
              <h4>Syndicate Capabilities</h4>
              <ul>
                <li>AI-powered 24/7 brand systems</li>
                <li>Global UHNW distribution network</li>
                <li>Premium media syndication</li>
                <li>Institutional capital access</li>
                <li>Market timing optimization</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="scale-quote"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote>
            "The question isn't 'Can we afford $4.5M in marketing?'—it's 
            <span className="quote-highlight">'Can we afford not to?'</span>"
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
