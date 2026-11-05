import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DemoShowcase from './components/DemoShowcase'
import FeatureGrid from './components/FeatureGrid'
import ForensicShowcase from './components/ForensicShowcase'
import ModelCards from './components/ModelCards'
import ComoFunciona from './components/ComoFunciona'
import Footer from './components/Footer'

// Hook para ativar animações de fade-in ao rolar a página
function useFadeInOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.fade-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeInOnScroll()

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#09090b' }}>
      <Navbar />
      <main>
        <Hero />
        <DemoShowcase />
        <FeatureGrid />
        <ForensicShowcase />
        <ModelCards />
        <ComoFunciona />
      </main>
      <Footer />
    </div>
  )
}
