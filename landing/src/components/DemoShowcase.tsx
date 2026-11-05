import { useState } from 'react'
import { Clock, CheckCircle2, AlertTriangle } from 'lucide-react'

const demos = [
  {
    id: 'praia',
    label: 'Cena de Praia',
    original: '/images/praia-original.png',
    resultado: '/screenshots/praia-resultado.png',
    score: 37,
    scoreLabel: 'Possivelmente Real',
    scoreColor: '#14b8a6',
    scoreBg: 'rgba(20,184,166,0.1)',
    scoreBorder: 'rgba(20,184,166,0.3)',
    tempo: '5.6s',
    modelos: 9,
  },
  {
    id: 'retrato',
    label: 'Retrato Tradicional',
    original: '/images/retrato-original.png',
    resultado: '/screenshots/retrato-resultado.png',
    score: 73,
    scoreLabel: 'Provavelmente IA',
    scoreColor: '#f59e0b',
    scoreBg: 'rgba(245,158,11,0.1)',
    scoreBorder: 'rgba(245,158,11,0.3)',
    tempo: '6.0s',
    modelos: 9,
  },
]

export default function DemoShowcase() {
  const [ativo, setAtivo] = useState('praia')
  const demo = demos.find((d) => d.id === ativo)!

  return (
    <section id="demo" style={{ padding: '96px 0', backgroundColor: '#09090b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabeçalho */}
        <div className="fade-in" style={{ marginBottom: '48px', textAlign: 'center' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6366f1',
            marginBottom: '12px',
          }}>
            Demonstração
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#fafafa',
            margin: 0,
          }}>
            Veja o Detector em Ação
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#71717a',
            marginTop: '12px',
          }}>
            Dois casos reais. Resultados em segundos.
          </p>
        </div>

        {/* Seletores */}
        <div className="fade-in fade-in-delay-1" style={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'center',
          marginBottom: '40px',
        }}>
          {demos.map((d) => (
            <button
              key={d.id}
              onClick={() => setAtivo(d.id)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '8px 20px',
                borderRadius: '8px',
                border: '1px solid',
                transition: 'all 0.2s',
                borderColor: ativo === d.id ? '#6366f1' : '#3f3f46',
                backgroundColor: ativo === d.id ? '#1e1b4b' : 'transparent',
                color: ativo === d.id ? '#818cf8' : '#71717a',
              }}
            >
              {d.label}
            </button>
          ))}
        </div>

        {/* Conteúdo do demo */}
        <div className="fade-in fade-in-delay-2">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'start',
          }}>
            {/* Card imagem original */}
            <div style={{
              borderRadius: '12px',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '14px 16px',
                borderBottom: '1px solid #27272a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#71717a',
                }}>
                  Imagem Original
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Clock size={12} color="#71717a" />
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#71717a' }}>
                    {demo.tempo}
                  </span>
                </div>
              </div>
              <img
                src={demo.original}
                alt={`Imagem original — ${demo.label}`}
                style={{ width: '100%', display: 'block', aspectRatio: '4/3', objectFit: 'cover' }}
              />
              <div style={{ padding: '16px' }}>
                {/* Score badge */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  backgroundColor: demo.scoreBg,
                  border: `1px solid ${demo.scoreBorder}`,
                  marginBottom: '12px',
                }}>
                  {demo.score >= 50
                    ? <AlertTriangle size={13} color={demo.scoreColor} />
                    : <CheckCircle2 size={13} color={demo.scoreColor} />
                  }
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: demo.scoreColor,
                  }}>
                    {demo.score}% — {demo.scoreLabel}
                  </span>
                </div>
                {/* Barra de score */}
                <div style={{
                  height: '4px',
                  backgroundColor: '#27272a',
                  borderRadius: '2px',
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${demo.score}%`,
                    backgroundColor: demo.scoreColor,
                    borderRadius: '2px',
                    transition: 'width 0.8s ease-out',
                  }} />
                </div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '6px',
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#52525b' }}>Real</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#52525b' }}>IA</span>
                </div>
              </div>
            </div>

            {/* Screenshot do resultado */}
            <div style={{
              borderRadius: '12px',
              border: '1px solid #27272a',
              backgroundColor: '#18181b',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '14px 16px',
                borderBottom: '1px solid #27272a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#71717a',
                }}>
                  Resultado Completo
                </span>
                <span style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  color: '#52525b',
                }}>
                  {demo.modelos} modelos
                </span>
              </div>
              <img
                src={demo.resultado}
                alt={`Resultado da análise — ${demo.label}`}
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
