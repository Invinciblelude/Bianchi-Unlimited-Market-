import { motion } from 'framer-motion'
import { Home, MapPin, Building2, Calculator } from 'lucide-react'
import './ROIBreakdown.css'

const scenarios = [
  {
    icon: Home,
    title: '100 Luxury Homes',
    subtitle: '$10M Average',
    revenue: '$1B',
    marketingCost: '$700K',
    cpa: '7%',
    note: 'Acceptable for ultra-HNW global targeting',
    highlight: true,
  },
  {
    icon: Building2,
    title: '500 Premium Homes',
    subtitle: '$2M Average',
    revenue: '$1B',
    marketingCost: '$140K',
    cpa: '7%',
    note: 'Aggressive but viable in luxury markets',
    highlight: false,
  },
  {
    icon: MapPin,
    title: '200 Estate Lots',
    subtitle: '$5M Average',
    revenue: '$1B',
    marketingCost: '$350K',
    cpa: '7%',
    note: 'Reasonable for entitled land with infrastructure',
    highlight: false,
  },
]

export function ROIBreakdown() {
  return (
    <section className="roi-section">
      <div className="roi-container">
        <motion.div 
          className="roi-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="roi-eyebrow">MARKETING ROI ANALYSIS</span>
          <h2 className="roi-title">Cost Per Acquisition Scenarios</h2>
          <p className="roi-description">
            At 7% marketing spend ($70M), here's the CPA breakdown by property type
          </p>
        </motion.div>

        <div className="roi-scenarios">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.title}
              className={`roi-card ${scenario.highlight ? 'highlight' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {scenario.highlight && <div className="roi-card-badge">PRIMARY MODEL</div>}
              <div className="roi-card-icon">
                <scenario.icon />
              </div>
              <h3 className="roi-card-title">{scenario.title}</h3>
              <span className="roi-card-subtitle">{scenario.subtitle}</span>
              
              <div className="roi-card-stats">
                <div className="roi-stat">
                  <span className="roi-stat-label">Total Revenue</span>
                  <span className="roi-stat-value">{scenario.revenue}</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-label">Marketing/Unit</span>
                  <span className="roi-stat-value">{scenario.marketingCost}</span>
                </div>
                <div className="roi-stat">
                  <span className="roi-stat-label">CPA Rate</span>
                  <span className="roi-stat-value accent">{scenario.cpa}</span>
                </div>
              </div>
              
              <p className="roi-card-note">{scenario.note}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="roi-callout"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Calculator className="roi-callout-icon" />
          <div className="roi-callout-content">
            <h4>Key Insight</h4>
            <p>
              Marketing isn't a cost—it's <strong>revenue acceleration</strong>. At $1B scale, 
              $70M in marketing drives faster sales, premium pricing, and shorter sales cycles, 
              paying for itself <span className="highlight-text">10x over</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
