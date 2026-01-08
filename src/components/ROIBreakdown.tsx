import { motion } from 'framer-motion'
import './ROIBreakdown.css'

const scenarios = [
  {
    code: 'LUX',
    title: '100 Luxury Homes',
    location: '$10M Average Value',
    revenue: '$1B',
    marketingCost: '$700K',
    cpa: '7%',
    note: 'Acceptable for ultra-HNW global targeting',
    badge: 'Primary Model',
    badgeClass: 'badge-owned',
  },
  {
    code: 'PRE',
    title: '500 Premium Homes',
    location: '$2M Average Value',
    revenue: '$1B',
    marketingCost: '$140K',
    cpa: '7%',
    note: 'Aggressive but viable in luxury markets',
    badge: 'Alternative',
    badgeClass: 'badge-available',
  },
  {
    code: 'EST',
    title: '200 Estate Lots',
    location: '$5M Average Value',
    revenue: '$1B',
    marketingCost: '$350K',
    cpa: '7%',
    note: 'Reasonable for entitled land with infrastructure',
    badge: 'Land Play',
    badgeClass: 'badge-entitled',
  },
]

export function ROIBreakdown() {
  return (
    <section id="roi" className="section">
      <div className="section-header">
        <span className="section-badge badge-escrow">ROI Analysis</span>
        <h2 className="section-title">Cost Per Acquisition Scenarios</h2>
        <span className="section-count">At 7% Marketing Spend ($70M)</span>
      </div>

      <div className="roi-grid">
        {scenarios.map((scenario, index) => (
          <motion.div
            key={scenario.title}
            className="project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            whileHover={{ y: -4 }}
          >
            <div className="card-header">
              <div className="card-logo">{scenario.code}</div>
              <div className={`card-roi ${scenario.badgeClass}`}>{scenario.badge}</div>
            </div>
            
            <h3 className="card-title">{scenario.title}</h3>
            <p className="card-location">{scenario.location}</p>
            
            <div className="card-stats">
              <div className="card-stat">
                <span className="card-stat-value">{scenario.revenue}</span>
                <span className="card-stat-label">Revenue</span>
              </div>
              <div className="card-stat">
                <span className="card-stat-value">{scenario.marketingCost}</span>
                <span className="card-stat-label">Marketing/Unit</span>
              </div>
              <div className="card-stat">
                <span className="card-stat-value">{scenario.cpa}</span>
                <span className="card-stat-label">CPA Rate</span>
              </div>
            </div>
            
            <p className="card-note">{scenario.note}</p>
            
            <span className="card-arrow">View Details →</span>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="insight-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="insight-icon">💡</div>
        <div className="insight-content">
          <h4>Key Insight</h4>
          <p>
            Marketing isn't a cost—it's <strong>revenue acceleration</strong>. At $1B scale, 
            $70M in marketing drives faster sales, premium pricing, and shorter sales cycles, 
            paying for itself <span className="highlight">10x over</span>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
