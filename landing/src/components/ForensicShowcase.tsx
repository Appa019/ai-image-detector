import { useState } from 'react'

const casos = [
  {
    id: 'retrato',
    label: 'Retrato Tradicional',
    sublabel: 'Score: 73% — Provavelmente IA',
    analises: [
      {
        id: 'gradcam',
        label: 'GradCAM',
        tag: 'ViT · Atenção',
        imagem: '/screenshots/retrato-gradcam.png',
        descricao: 'Mapa de calor sobre bordas de cabelo, íris e pele — regiões onde o ViT detectou artefatos de geração.',
      },
      {
        id: 'ela',
        label: 'ELA',
        tag: 'Forense · JPEG',
        imagem: '/screenshots/retrato-ela.png',
        descricao: 'Padrões anômalos de inconsistência de compressão — assinatura de conteúdo gerado por IA.',
      },
      {
        id: 'fft',
        label: 'FFT/DCT',
        tag: 'Frequência · DCT',
        imagem: '/screenshots/retrato-fft.png',
        descricao: 'Padrões em grade no espectro 2D — típicos de upsampling por redes de difusão.',
      },
    ],
  },
  {
    id: 'praia',
    label: 'Cena de Praia',
    sublabel: 'Score: 37% — Possivelmente Real',
    analises: [
      {
        id: 'gradcam',
        label: 'GradCAM',
        tag: 'ViT · Atenção',
        imagem: '/screenshots/praia-gradcam.png',
        descricao: 'Ativação distribuída uniformemente — sem concentração em regiões específicas, consistente com fotografia real.',
      },
      {
        id: 'ela',
        label: 'ELA',
        tag: 'Forense · JPEG',
        imagem: '/screenshots/praia-ela.png',
        descricao: 'Distribuição uniforme de erro após recompressão JPEG — sem anomalias típicas de manipulação.',
      },
      {
        id: 'fft',
        label: 'FFT/DCT',
        tag: 'Frequência · DCT',
        imagem: '/screenshots/praia-fft.png',
        descricao: 'Espectro de frequência natural sem picos periódicos — ausência de artefatos de upsampling neural.',
      },
      {
        id: 'estatisticas',
        label: 'Estatísticas de Pixel',
        tag: 'Análise · RGB',
        imagem: '/screenshots/praia-estatisticas.png',
        descricao: 'Histogramas por canal RGB e estatísticas de ruído — distribuição consistente com sensor de câmera real.',
      },
    ],
  },
]

export default function ForensicShowcase() {
  const [casoAtivo, setCasoAtivo] = useState('retrato')
  const caso = casos.find((c) => c.id === casoAtivo)!

  return (
    <section id="forense" style={{ padding: '96px 0', backgroundColor: '#09090b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabeçalho */}
        <div className="fade-in" style={{ marginBottom: '48px' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6366f1',
            marginBottom: '12px',
          }}>
            Análise Forense
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#fafafa',
            margin: '0 0 16px 0',
          }}>
            Evidências Visuais em Múltiplos Domínios
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#71717a',
            maxWidth: '520px',
            lineHeight: 1.6,
          }}>
            Cada imagem é analisada no domínio espacial, de frequência e de compressão.
            Todas as evidências visuais são geradas automaticamente pelo pipeline.
          </p>
        </div>

        {/* Seletor de caso */}
        <div className="fade-in fade-in-delay-1" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '32px',
        }}>
          {casos.map((c) => (
            <button
              key={c.id}
              onClick={() => setCasoAtivo(c.id)}
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer',
                padding: '8px 20px',
                borderRadius: '8px',
                border: '1px solid',
                transition: 'all 0.2s',
                borderColor: casoAtivo === c.id ? '#6366f1' : '#3f3f46',
                backgroundColor: casoAtivo === c.id ? '#1e1b4b' : 'transparent',
                color: casoAtivo === c.id ? '#818cf8' : '#71717a',
              }}
            >
              {c.label}
            </button>
          ))}
          <span style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            color: '#3f3f46',
            marginLeft: '8px',
          }}>
            {caso.sublabel} · {caso.analises.length} análises
          </span>
        </div>

        {/* Grid de análises forenses */}
        <div className="fade-in fade-in-delay-2" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {caso.analises.map((a, i) => (
            <div
              key={a.id}
              className={`fade-in fade-in-delay-${(i % 4) + 1}`}
              style={{
                borderRadius: '10px',
                border: '1px solid #27272a',
                backgroundColor: '#18181b',
                overflow: 'hidden',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3f3f46'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#27272a'
              }}
            >
              {/* Screenshot */}
              <img
                src={a.imagem}
                alt={`${a.label} — ${caso.label}`}
                style={{ width: '100%', display: 'block' }}
              />
              {/* Info */}
              <div style={{ padding: '16px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '8px',
                }}>
                  <h3 style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#fafafa',
                    margin: 0,
                  }}>
                    {a.label}
                  </h3>
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#1e1b4b',
                    border: '1px solid #312e81',
                    color: '#818cf8',
                    whiteSpace: 'nowrap',
                  }}>
                    {a.tag}
                  </span>
                </div>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#71717a',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {a.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
