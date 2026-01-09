import { motion } from 'framer-motion'
import './Footer.css'

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <motion.div 
          className="footer-brand"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="footer-logo">
            <span>BIANCHI</span>
            <span className="footer-logo-accent">TILLETT</span>
          </h3>
          <p className="footer-tagline">Construction Development Corporation</p>
          <p className="footer-status">SYNDICATE LEVEL • $1B RUN RATE</p>
        </motion.div>

        <motion.div 
          className="footer-divider"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="footer-copyright">
            © {new Date().getFullYear()} Bianchi-Tillett Development Corporation. All rights reserved.
          </p>
          <p className="footer-note">
            Financial projections and marketing benchmarks for strategic planning purposes.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
