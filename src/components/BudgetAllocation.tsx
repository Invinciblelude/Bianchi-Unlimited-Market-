import { motion } from 'framer-motion'
import { useState } from 'react'
import './BudgetAllocation.css'

interface BudgetCategory {
  name: string
  amount: number
  percentage: number
  description: string
  items: string[]
}

const budgetData: BudgetCategory[] = [
  {
    name: 'Distribution & Media',
    amount: 25,
    percentage: 36,
    description: 'Premium placement across luxury channels',
    items: ['JamesEdition, Sotheby\'s, Christie\'s', 'Paid advertising (Google, Meta, LinkedIn)', 'Print (Robb Report, AD, WSJ Mansion)', 'Out-of-home billboards', 'PR and media relations'],
  },
  {
    name: 'Brand & Content',
    amount: 20,
    percentage: 29,
    description: 'AI-powered content and premium production',
    items: ['AI avatar production & maintenance', 'Cinematic video/photo shoots', 'Visual Spaces Lab content', 'Website, VR/AR experiences', 'Social media production'],
  },
  {
    name: 'Events & Experiences',
    amount: 10,
    percentage: 14,
    description: 'High-touch client engagement',
    items: ['VIP site tours & investor events', 'Luxury brand partnerships', 'Sponsorships (golf, equestrian)', 'Client entertainment'],
  },
  {
    name: 'Technology & Data',
    amount: 8,
    percentage: 11,
    description: 'Infrastructure and intelligence',
    items: ['CRM & marketing automation', 'Analytics & attribution', 'AI/ML targeting tools', 'Website infrastructure'],
  },
  {
    name: 'Capital Raise Marketing',
    amount: 5,
    percentage: 7,
    description: 'Investor acquisition and relations',
    items: ['Pitch materials & data rooms', 'Roadshows & family office outreach', 'Crowdfunding platform fees', 'Legal/compliance'],
  },
  {
    name: 'Partnerships',
    amount: 2,
    percentage: 3,
    description: 'Strategic alliance investments',
    items: ['Realtor co-op advertising', 'Builder/developer associations', 'Strategic partnerships'],
  },
]

export function BudgetAllocation() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section id="budget" className="section">
      <div className="section-header">
        <span className="section-badge">$70M Annual</span>
        <h2 className="section-title">Marketing Budget Allocation</h2>
        <span className="section-count">7% of $1B Gross Revenue</span>
      </div>

      <div className="budget-grid">
        {budgetData.map((category, index) => (
          <motion.div
            key={category.name}
            className={`budget-card ${activeCategory === index ? 'active' : ''}`}
            onClick={() => setActiveCategory(activeCategory === index ? null : index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
          >
            <div className="card-header">
              <div className="card-logo">{category.percentage}%</div>
              <div className="card-roi">${category.amount}M</div>
            </div>
            <h3 className="card-title">{category.name}</h3>
            <p className="card-location">{category.description}</p>
            
            {activeCategory === index && (
              <motion.div 
                className="card-details"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
              >
                <ul>
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            )}
            
            <span className="card-arrow">
              {activeCategory === index ? '↑ Less' : '↓ Details'} →
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
