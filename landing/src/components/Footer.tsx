import { ScanSearch } from 'lucide-react'

const tecnologias = [
  { label: 'PyTorch', cor: '#ef4444' },
  { label: 'HuggingFace', cor: '#f59e0b' },
  { label: 'FastAPI', cor: '#22c55e' },
  { label: 'React', cor: '#6366f1' },
  { label: 'NVIDIA CUDA', cor: '#14b8a6' },
  { label: 'OpenCV', cor: '#818cf8' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid #18181b',
      backgroundColor: '#09090b',
      padding: '48px 0 32px',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Linha superior */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '32px',
          justifyContent: 'space-between',
          marginBottom: '40px',
        }}>
          {/* Branding */}
          <div style={{ maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{
                width: '30px', height: '30px',
                backgroundColor: '#6366f1',
                borderRadius: '7px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <ScanSearch size={16} color="#fff" />
              </div>
              <span style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '14px',
                fontWeight: 600,
                color: '#fafafa',
                letterSpacing: '-0.02em',
              }}>
                Detector de IA
              </span>
            </div>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px',
              color: '#52525b',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Detecção forense de conteúdo gerado por inteligência artificial.
              Ensemble de modelos de deep learning, acelerado por GPU.
            </p>
          </div>

          {/* Stack de tecnologias */}
          <div>
            <p style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#3f3f46',
              margin: '0 0 14px 0',
            }}>
              Tecnologias
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {tecnologias.map((t) => (
                <span
                  key={t.label}
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 500,
                    padding: '4px 10px',
                    borderRadius: '5px',
                    backgroundColor: '#18181b',
                    border: '1px solid #27272a',
                    color: t.cor,
                    transition: 'border-color 0.15s',
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #18181b',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div />
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            <div style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              backgroundColor: '#22c55e',
              boxShadow: '0 0 6px rgba(34,197,94,0.6)',
            }} />
            <span style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '11px',
              color: '#52525b',
            }}>
              API online · GPU ativa
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
