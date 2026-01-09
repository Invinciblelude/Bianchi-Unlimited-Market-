import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Globe, Shield } from 'lucide-react'
import './StatusBanner.css'

const statusItems = [
  { icon: CheckCircle2, label: 'Syndicate Status', value: 'ACHIEVED' },
  { icon: Zap, label: 'Growth Phase', value: 'SCALE-UP' },
  { icon: Globe, label: 'Market Reach', value: 'GLOBAL' },
  { icon: Shield, label: 'Brand Position', value: 'ULTRA-PREMIUM' },
]

export function StatusBanner() {
  return (
    <section className="status-banner">
      <div className="status-banner-inner">
        {statusItems.map((item, index) => (
          <motion.div
            key={item.label}
            className="status-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <item.icon className="status-item-icon" />
            <div className="status-item-content">
              <span className="status-item-label">{item.label}</span>
              <span className="status-item-value">{item.value}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
