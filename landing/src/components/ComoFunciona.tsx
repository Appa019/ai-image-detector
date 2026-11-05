import { Upload, Cpu, GitMerge, Sliders, Microscope, CheckSquare, ArrowRight } from 'lucide-react'

const passos = [
  {
    icone: Upload,
    titulo: 'Upload',
    descricao: 'Imagem ou vídeo via drag-and-drop ou URL',
    cor: '#6366f1',
    corBg: '#1e1b4b',
    corBorder: '#312e81',
  },
  {
    icone: Cpu,
    titulo: 'Pré-processamento',
    descricao: 'Normalização, resize e extração de frames',
    cor: '#14b8a6',
    corBg: 'rgba(20,184,166,0.1)',
    corBorder: 'rgba(20,184,166,0.3)',
  },
  {
    icone: GitMerge,
    titulo: 'Ensemble',
    descricao: '9 modelos em paralelo na GPU',
    cor: '#818cf8',
    corBg: '#1e1b4b',
    corBorder: '#312e81',
  },
  {
    icone: Sliders,
    titulo: 'Calibração',
    descricao: 'Temperature scaling + bootstrap CI',
    cor: '#f59e0b',
    corBg: 'rgba(245,158,11,0.1)',
    corBorder: 'rgba(245,158,11,0.3)',
  },
  {
    icone: Microscope,
    titulo: 'Análise Forense',
    descricao: 'GradCAM, ELA, FFT, Noise Print, EXIF',
    cor: '#22c55e',
    corBg: 'rgba(34,197,94,0.1)',
    corBorder: 'rgba(34,197,94,0.3)',
  },
  {
    icone: CheckSquare,
    titulo: 'Resultado',
    descricao: 'Score calibrado com evidências visuais',
    cor: '#ef4444',
    corBg: 'rgba(239,68,68,0.1)',
    corBorder: 'rgba(239,68,68,0.3)',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" style={{ padding: '96px 0', backgroundColor: '#09090b' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabeçalho */}
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6366f1',
            marginBottom: '12px',
          }}>
            Pipeline
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#fafafa',
            margin: '0 0 16px 0',
          }}>
            Como Funciona
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#71717a',
            maxWidth: '440px',
            lineHeight: 1.6,
            margin: '0 auto',
          }}>
            De arquivo bruto a laudo forense em menos de 6 segundos.
          </p>
        </div>

        {/* Pipeline — layout responsivo */}
        <div className="fade-in fade-in-delay-1">
          {/* Desktop: linha horizontal */}
          <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0',
            overflowX: 'auto',
            paddingBottom: '8px',
          }}>
            {passos.map((passo, i) => {
              const Icon = passo.icone
              return (
                <div
                  key={passo.titulo}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flex: '1 1 0',
                    minWidth: '120px',
                  }}
                >
                  {/* Card do passo */}
                  <div style={{ flex: 1, textAlign: 'center', padding: '0 8px' }}>
                    {/* Número + ícone */}
                    <div style={{
                      position: 'relative',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}>
                      <div style={{
                        width: '52px',
                        height: '52px',
                        borderRadius: '12px',
                        backgroundColor: passo.corBg,
                        border: `1px solid ${passo.corBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <Icon size={20} color={passo.cor} />
                      </div>
                      {/* Número */}
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        width: '18px',
                        height: '18px',
                        borderRadius: '50%',
                        backgroundColor: '#09090b',
                        border: `1px solid ${passo.corBorder}`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <span style={{
                          fontFamily: 'JetBrains Mono, monospace',
                          fontSize: '9px',
                          fontWeight: 600,
                          color: passo.cor,
                        }}>
                          {i + 1}
                        </span>
                      </div>
                    </div>
                    <h3 style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#fafafa',
                      margin: '0 0 6px 0',
                    }}>
                      {passo.titulo}
                    </h3>
                    <p style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      color: '#71717a',
                      lineHeight: 1.55,
                      margin: 0,
                    }}>
                      {passo.descricao}
                    </p>
                  </div>

                  {/* Seta entre passos */}
                  {i < passos.length - 1 && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      paddingTop: '16px',
                      color: '#3f3f46',
                      flexShrink: 0,
                    }}>
                      <ArrowRight size={14} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Nota de tempo */}
        <div className="fade-in fade-in-delay-2" style={{
          marginTop: '48px',
          textAlign: 'center',
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '8px',
            backgroundColor: '#18181b',
            border: '1px solid #27272a',
          }}>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#52525b' }}>
              tempo médio por análise:
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '14px', fontWeight: 600, color: '#22c55e' }}>
              ~5.8s
            </span>
            <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '12px', color: '#52525b' }}>
              NVIDIA RTX 2070 SUPER · FP16
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
