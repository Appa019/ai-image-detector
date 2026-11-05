import { Cpu } from 'lucide-react'

const modelos = [
  {
    nome: 'ViT Espacial',
    tamanho: '250 MB',
    descricao: 'Análise de texturas e padrões espaciais via Vision Transformer. Especialista em artefatos de geração local.',
    peso: '20%',
    tipo: 'ViT',
    status: 'ativo',
  },
  {
    nome: 'SDXL Detector',
    tamanho: '1.7 GB',
    descricao: 'Baseado em CLIP, especialista em imagens de difusão (SDXL, SD 1.5, Midjourney). O modelo mais pesado do ensemble.',
    peso: '20%',
    tipo: 'CLIP',
    status: 'ativo',
  },
  {
    nome: 'AI Image Detector',
    tamanho: '280 MB',
    descricao: 'Treinado especificamente contra Midjourney, Stable Diffusion e DALL-E 3. Alta sensibilidade a geradores comerciais.',
    peso: '20%',
    tipo: 'ViT-H',
    status: 'ativo',
  },
  {
    nome: 'SigLIP AI vs Human',
    tamanho: '180 MB',
    descricao: 'Detector binário SigLIP fine-tuned. Treinado em dataset balanceado de imagens reais e sintéticas.',
    peso: '20%',
    tipo: 'SigLIP',
    status: 'ativo',
  },
  {
    nome: 'Analisador de Frequência',
    tamanho: '50 MB',
    descricao: 'Análise FFT/DCT própria. Detecta artefatos periódicos no domínio da frequência sem dependência de GPU.',
    peso: '10%',
    tipo: 'FFT',
    status: 'ativo',
  },
  {
    nome: 'EfficientNet-B4',
    tamanho: '150 MB',
    descricao: 'Especialista em vídeo deepfake. Processa frames com MTCNN para detecção de faces e análise temporal.',
    peso: '10%',
    tipo: 'Video',
    status: 'ativo',
  },
]

const tipoCores: Record<string, { bg: string; text: string; border: string }> = {
  ViT:   { bg: 'rgba(99,102,241,0.1)',  text: '#818cf8', border: 'rgba(99,102,241,0.3)' },
  CLIP:  { bg: 'rgba(20,184,166,0.1)',  text: '#14b8a6', border: 'rgba(20,184,166,0.3)' },
  'ViT-H': { bg: 'rgba(99,102,241,0.1)', text: '#818cf8', border: 'rgba(99,102,241,0.3)' },
  SigLIP: { bg: 'rgba(245,158,11,0.1)', text: '#f59e0b', border: 'rgba(245,158,11,0.3)' },
  FFT:   { bg: 'rgba(34,197,94,0.1)',   text: '#22c55e', border: 'rgba(34,197,94,0.3)' },
  Video: { bg: 'rgba(239,68,68,0.1)',   text: '#ef4444', border: 'rgba(239,68,68,0.3)' },
}

export default function ModelCards() {
  return (
    <section id="modelos" style={{ padding: '96px 0', backgroundColor: '#0d0d10' }}>
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
            Modelos Ativos
          </p>
          <h2 style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: 'clamp(24px, 4vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#fafafa',
            margin: '0 0 16px 0',
          }}>
            9 Modelos. Um Veredicto.
          </h2>
          <p style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '15px',
            color: '#71717a',
            maxWidth: '480px',
            lineHeight: 1.6,
          }}>
            Cada modelo contribui com um peso específico para o score final calibrado.
          </p>
        </div>

        {/* Grid de modelos */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '16px',
        }}>
          {modelos.map((m, i) => {
            const cor = tipoCores[m.tipo] ?? tipoCores['ViT']
            return (
              <div
                key={m.nome}
                className={`fade-in fade-in-delay-${(i % 6) + 1}`}
                style={{
                  borderRadius: '10px',
                  border: '1px solid #27272a',
                  backgroundColor: '#18181b',
                  padding: '20px 22px',
                  transition: 'border-color 0.25s, background 0.25s, box-shadow 0.25s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = cor.border
                  el.style.backgroundColor = '#1f1f23'
                  el.style.boxShadow = `0 4px 20px ${cor.bg}`
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#27272a'
                  el.style.backgroundColor = '#18181b'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Header do card */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '40px', height: '40px',
                      borderRadius: '10px',
                      backgroundColor: cor.bg,
                      border: `1px solid ${cor.border}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Cpu size={17} color={cor.text} />
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'Inter, sans-serif',
                        fontSize: '14px',
                        fontWeight: 600,
                        color: '#fafafa',
                        margin: 0,
                      }}>
                        {m.nome}
                      </h3>
                      <span style={{
                        fontFamily: 'JetBrains Mono, monospace',
                        fontSize: '11px',
                        color: '#52525b',
                      }}>
                        {m.tamanho} · FP16
                      </span>
                    </div>
                  </div>
                  {/* Tag tipo */}
                  <span style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    fontWeight: 500,
                    padding: '3px 8px',
                    borderRadius: '4px',
                    backgroundColor: cor.bg,
                    border: `1px solid ${cor.border}`,
                    color: cor.text,
                    whiteSpace: 'nowrap',
                  }}>
                    {m.tipo}
                  </span>
                </div>

                <p style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '12px',
                  color: '#71717a',
                  lineHeight: 1.65,
                  margin: '0 0 16px 0',
                }}>
                  {m.descricao}
                </p>

                {/* Peso no ensemble */}
                <div style={{
                  paddingTop: '12px',
                  borderTop: '1px solid #27272a',
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '8px',
                  }}>
                    <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: '#52525b' }}>
                      peso no ensemble
                    </span>
                    <span style={{
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '13px',
                      fontWeight: 600,
                      color: cor.text,
                    }}>
                      {m.peso}
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '4px',
                    borderRadius: '2px',
                    backgroundColor: '#27272a',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      width: m.peso,
                      height: '100%',
                      borderRadius: '2px',
                      backgroundColor: cor.bg,
                    }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
