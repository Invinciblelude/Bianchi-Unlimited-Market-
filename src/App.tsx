import { Hero } from './components/Hero'
import { StatusBanner } from './components/StatusBanner'
import { MetricsGrid } from './components/MetricsGrid'
import { BudgetAllocation } from './components/BudgetAllocation'
import { ROIBreakdown } from './components/ROIBreakdown'
import { ScaleComparison } from './components/ScaleComparison'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="bg-grid" />
      <div className="bg-gradient" />
      <main className="main-content">
        <Hero />
        <StatusBanner />
        <MetricsGrid />
        <BudgetAllocation />
        <ROIBreakdown />
        <ScaleComparison />
        <Footer />
      </main>
    </div>
  )
}

export default App
