
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import TreatmentsSection from './components/TreatmentsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <div className="min-h-screen bg-[var(--dentary-bg)] text-slate-900 antialiased">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TreatmentsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
