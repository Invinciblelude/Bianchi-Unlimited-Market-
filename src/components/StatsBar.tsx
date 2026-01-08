import { motion } from 'framer-motion'
import './StatsBar.css'

const stats = [
  { value: '$1B', label: 'Gross Revenue' },
  { value: '$70M', label: 'Marketing Budget' },
  { value: '7%', label: 'Marketing Rate' },
  { value: '100+', label: 'Properties' },
  { value: '$10M', label: 'Avg. Value' },
  { value: 'UHNW', label: 'Target Market' },
]

export function StatsBar() {
  return (
    <motion.div 
      className="stats-bar"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {stats.map((stat, index) => (
        <div key={stat.label} className="stat">
          <motion.span 
            className="stat-value"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            {stat.value}
          </motion.span>
          <span className="stat-label">{stat.label}</span>
        </div>
      ))}
    </motion.div>
  )
}
