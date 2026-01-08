import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { BudgetAllocation } from './components/BudgetAllocation'
import { ROIBreakdown } from './components/ROIBreakdown'
import { ScaleComparison } from './components/ScaleComparison'
import { Footer } from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <main className="main-content">
        <Hero />
        <StatsBar />
        <BudgetAllocation />
        <ROIBreakdown />
        <ScaleComparison />
        <Footer />
      </main>
    </div>
  )
}

export default App
