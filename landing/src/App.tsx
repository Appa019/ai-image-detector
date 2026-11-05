import { useEffect, useState } from 'react'
import { CASOS, REPO, type CasoId } from './casos'
import { Hero } from './components/Hero'
import { Evidencias } from './components/Evidencias'
import { Modelos } from './components/Modelos'
import { Score } from './components/Score'
import { Rodar } from './components/Rodar'

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('in')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export function App() {
  const [casoId, setCasoId] = useState<CasoId>('retrato')
  const caso = CASOS[casoId]
  useReveal()

  return (
    <div className="mx-auto max-w-[1360px] px-5 sm:px-8 lg:px-10">
      <header className="flex items-center justify-between gap-4 py-6">
        <a href="#top" className="font-bold">Detector de IA</a>
        <a href={REPO} className="link">Código no GitHub</a>
      </header>

      <main id="top">
        <Hero caso={caso} onCaso={setCasoId} />
        <Evidencias caso={caso} />
        <Modelos />
        <Score caso={caso} />
        <Rodar />
      </main>

      <footer className="mt-40 grid gap-2 pb-8 text-[15px] text-muted sm:grid-cols-[1fr_auto_1fr] sm:items-baseline sm:gap-6">
        <p>Detector de IA, licença MIT</p>
        <p className="flex gap-6">
          <a href={REPO} className="text-ink underline underline-offset-4 hover:text-accent">GitHub</a>
          <a href="https://pedropestana.dev" className="text-ink underline underline-offset-4 hover:text-accent">Pedro Pestana</a>
        </p>
        <p className="sm:text-right">2026</p>
      </footer>
    </div>
  )
}
