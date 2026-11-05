import { Layers, Search, Zap, Target, Video, BarChart3 } from 'lucide-react'

const recursos = [
  {
    icon: Layers,
    titulo: 'Ensemble de Modelos',
    descricao: '9 modelos especializados: ViT espacial, CLIP, SigLIP, EfficientNet-B4 e análise FFT/DCT. Cada um contribui com um peso calibrado para o score final.',
    delay: '1',
  },
  {
    icon: Search,
    titulo: 'Análise Forense Completa',
    descricao: 'GradCAM, ELA (Error Level Analysis), Wavelet, FFT/DCT, Noise Print e extração de metadados EXIF. Evidências visuais para cada detecção.',
    delay: '2',
  },
  {
    icon: Zap,
    titulo: 'Acelerado por GPU',
    descricao: 'Todos os modelos em FP16 na NVIDIA RTX. Inferência paralela com gerenciamento automático de VRAM. Análise completa em menos de 6 segundos.',
    delay: '3',
  },
  {
    icon: Target,
    titulo: 'Score Calibrado',
    descricao: 'Temperature scaling pós-treinamento para scores bem-calibrados. Intervalo de confiança de 95% gerado via bootstrap ensemble.',
    delay: '4',
  },
  {
    icon: Video,
    titulo: 'Detecção de Deepfake',
    descricao: 'Análise frame-a-frame com MTCNN para detecção de faces. Timeline temporal com regiões suspeitas e score por segmento do vídeo.',
    delay: '5',
  },
  {
    icon: BarChart3,
    titulo: 'Explicabilidade Total',
    descricao: 'Mapas de calor interativos, espectros de frequência, histogramas de ruído e visualização do ensemble. Você entende cada decisão.',
    delay: '6',
  },
]

export default function FeatureGrid() {
  return (
    <section id="recursos" style={{ padding: '96px 0', backgroundColor: '#0d0d10' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Cabeçalho */}
        <div className="fade-in" style={{ marginBottom: '56px' }}>
          <p style={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6366f1',
            marginBottom: '12px',
          }}>
            Recursos
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#fafafa',
            margin: '0 0 16px 0',
            maxWidth: '560px',
          }}>
            Tudo que você precisa para uma análise definitiva
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#71717a',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            Não é um único modelo. É um sistema forense completo, construído para precisão real.
          </p>
        </div>

        {/* Grid de cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1px',
          backgroundColor: '#27272a',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid #27272a',
        }}>
          {recursos.map((r) => {
            const Icon = r.icon
            return (
              <div
                key={r.titulo}
                className={`fade-in fade-in-delay-${r.delay}`}
                style={{
                  backgroundColor: '#18181b',
                  padding: '32px 28px',
                  transition: 'background 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#1f1f23'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.backgroundColor = '#18181b'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  backgroundColor: '#1e1b4b',
                  border: '1px solid #312e81',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <Icon size={18} color="#818cf8" />
                </div>
                <h3 style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: '#fafafa',
                  margin: '0 0 10px 0',
                  letterSpacing: '-0.01em',
                }}>
                  {r.titulo}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  color: '#71717a',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {r.descricao}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
