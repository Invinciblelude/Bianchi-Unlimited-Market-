import { motion } from 'framer-motion'
import { useState } from 'react'
import './BudgetAllocation.css'

interface BudgetCategory {
  name: string
  amount: number
  percentage: number
  color: string
  description: string
  items: string[]
}

const budgetData: BudgetCategory[] = [
  {
    name: 'Distribution & Media',
    amount: 25,
    percentage: 36,
    color: '#D4AF37',
    description: 'Premium placement across luxury channels',
    items: ['JamesEdition, Sotheby\'s, Christie\'s', 'Paid advertising (Google, Meta, LinkedIn)', 'Print (Robb Report, AD, WSJ Mansion)', 'Out-of-home billboards', 'PR and media relations'],
  },
  {
    name: 'Brand & Content',
    amount: 20,
    percentage: 29,
    color: '#C9A961',
    description: 'AI-powered content and premium production',
    items: ['AI avatar production & maintenance', 'Cinematic video/photo shoots', 'Visual Spaces Lab content', 'Website, VR/AR experiences', 'Social media production'],
  },
  {
    name: 'Events & Experiences',
    amount: 10,
    percentage: 14,
    color: '#8B7355',
    description: 'High-touch client engagement',
    items: ['VIP site tours & investor events', 'Luxury brand partnerships', 'Sponsorships (golf, equestrian)', 'Client entertainment'],
  },
  {
    name: 'Technology & Data',
    amount: 8,
    percentage: 11,
    color: '#A08050',
    description: 'Infrastructure and intelligence',
    items: ['CRM & marketing automation', 'Analytics & attribution', 'AI/ML targeting tools', 'Website infrastructure'],
  },
  {
    name: 'Capital Raise Marketing',
    amount: 5,
    percentage: 7,
    color: '#6B5B45',
    description: 'Investor acquisition and relations',
    items: ['Pitch materials & data rooms', 'Roadshows & family office outreach', 'Crowdfunding platform fees', 'Legal/compliance'],
  },
  {
    name: 'Partnerships & Co-Marketing',
    amount: 2,
    percentage: 3,
    color: '#5A4A3A',
    description: 'Strategic alliance investments',
    items: ['Realtor co-op advertising', 'Builder/developer associations', 'Strategic partnerships'],
  },
]

export function BudgetAllocation() {
  const [activeCategory, setActiveCategory] = useState<number>(0)
  const totalBudget = 70

  return (
    <section className="budget-section">
      <div className="budget-container">
        <motion.div 
          className="budget-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="budget-eyebrow">$70M ANNUAL ALLOCATION</span>
          <h2 className="budget-title">Marketing Budget Distribution</h2>
          <p className="budget-description">
            Strategic allocation at 7% of $1B gross revenue
          </p>
        </motion.div>

        <div className="budget-content">
          <motion.div 
            className="budget-chart"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <svg viewBox="0 0 400 400" className="donut-chart">
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              {budgetData.map((category, index) => {
                const startAngle = budgetData
                  .slice(0, index)
                  .reduce((sum, c) => sum + c.percentage, 0) * 3.6
                const endAngle = startAngle + category.percentage * 3.6
                const largeArc = category.percentage > 50 ? 1 : 0
                
                const startRad = (startAngle - 90) * (Math.PI / 180)
                const endRad = (endAngle - 90) * (Math.PI / 180)
                
                const x1 = 200 + 140 * Math.cos(startRad)
                const y1 = 200 + 140 * Math.sin(startRad)
                const x2 = 200 + 140 * Math.cos(endRad)
                const y2 = 200 + 140 * Math.sin(endRad)
                
                const innerX1 = 200 + 80 * Math.cos(startRad)
                const innerY1 = 200 + 80 * Math.sin(startRad)
                const innerX2 = 200 + 80 * Math.cos(endRad)
                const innerY2 = 200 + 80 * Math.sin(endRad)

                const isActive = activeCategory === index

                return (
                  <motion.path
                    key={category.name}
                    d={`M ${x1} ${y1} A 140 140 0 ${largeArc} 1 ${x2} ${y2} L ${innerX2} ${innerY2} A 80 80 0 ${largeArc} 0 ${innerX1} ${innerY1} Z`}
                    fill={category.color}
                    stroke={isActive ? '#fff' : 'var(--bg-void)'}
                    strokeWidth={isActive ? 2 : 1}
                    style={{ cursor: 'pointer' }}
                    filter={isActive ? 'url(#glow)' : undefined}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: isActive ? 1 : 0.7,
                      scale: isActive ? 1.02 : 1,
                    }}
                    whileHover={{ opacity: 1, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveCategory(index)}
                  />
                )
              })}
              <circle cx="200" cy="200" r="70" fill="var(--bg-surface)" />
              <text x="200" y="190" textAnchor="middle" fill="var(--text-muted)" fontSize="12" fontFamily="var(--font-body)">
                TOTAL
              </text>
              <text x="200" y="220" textAnchor="middle" fill="var(--text-primary)" fontSize="28" fontFamily="var(--font-display)" fontWeight="600">
                ${totalBudget}M
              </text>
            </svg>
          </motion.div>

          <div className="budget-details">
            {budgetData.map((category, index) => (
              <motion.div
                key={category.name}
                className={`budget-item ${activeCategory === index ? 'active' : ''}`}
                onClick={() => setActiveCategory(index)}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="budget-item-header">
                  <div className="budget-item-color" style={{ backgroundColor: category.color }} />
                  <div className="budget-item-info">
                    <span className="budget-item-name">{category.name}</span>
                    <span className="budget-item-desc">{category.description}</span>
                  </div>
                  <div className="budget-item-values">
                    <span className="budget-item-amount">${category.amount}M</span>
                    <span className="budget-item-percent">{category.percentage}%</span>
                  </div>
                </div>
                {activeCategory === index && (
                  <motion.div 
                    className="budget-item-details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul>
                      {category.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
