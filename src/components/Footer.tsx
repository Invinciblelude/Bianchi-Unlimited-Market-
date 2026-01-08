import { motion } from 'framer-motion'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <motion.div 
        className="footer-content"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="footer-brand">
          <h3 className="footer-logo">Bianchi-Tillett</h3>
          <p className="footer-tagline">Construction Development Corporation</p>
          <span className="footer-badge">Syndicate Level • $1B Run Rate</span>
        </div>

        <div className="footer-links">
          <a href="https://invinciblelude.github.io/Bianchi-Master-list-projects/" className="main-site-link">
            <span>←</span> View All Projects
          </a>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bianchi-Tillett Development Corporation
          </p>
          <p className="footer-note">
            Financial projections for strategic planning purposes
          </p>
        </div>
      </motion.div>
    </footer>
  )
}
