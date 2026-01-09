import { motion } from 'framer-motion'
import { DollarSign, Percent, Building, Users, TrendingUp, Target } from 'lucide-react'
import './MetricsGrid.css'

const metrics = [
  { icon: DollarSign, label: 'Annual Marketing Budget', value: '$70M', sublabel: '7% of Gross Revenue', trend: '+15%', trendUp: true },
  { icon: Percent, label: 'Marketing Spend Rate', value: '7-10%', sublabel: 'Industry Premium Tier', trend: 'Optimal', trendUp: true },
  { icon: Building, label: 'Avg. Property Value', value: '$10M', sublabel: 'Ultra-Luxury Segment', trend: '+22%', trendUp: true },
  { icon: Users, label: 'Target Clientele', value: 'UHNW', sublabel: 'Ultra High Net Worth', trend: 'Global', trendUp: true },
  { icon: TrendingUp, label: 'Revenue Growth Target', value: '25%', sublabel: 'Year-over-Year', trend: 'On Track', trendUp: true },
  { icon: Target, label: 'Cost Per Acquisition', value: '$700K', sublabel: 'Per $10M Home', trend: '7% CPA', trendUp: true },
]

export function MetricsGrid() {
  return (
    <section className="metrics-section">
      <div className="metrics-container">
        <motion.div className="metrics-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="metrics-eyebrow">FINANCIAL OVERVIEW</span>
          <h2 className="metrics-title">Key Performance Metrics</h2>
          <p className="metrics-description">Strategic marketing allocation for billion-dollar scale operations</p>
        </motion.div>
        <div className="metrics-grid">
          {metrics.map((metric, index) => (
            <motion.div key={metric.label} className="metric-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className="metric-card-header">
                <div className="metric-icon-wrapper"><metric.icon className="metric-icon" /></div>
                <span className={`metric-trend ${metric.trendUp ? 'trend-up' : ''}`}>{metric.trend}</span>
              </div>
              <div className="metric-card-body">
                <span className="metric-label">{metric.label}</span>
                <span className="metric-value">{metric.value}</span>
                <span className="metric-sublabel">{metric.sublabel}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
