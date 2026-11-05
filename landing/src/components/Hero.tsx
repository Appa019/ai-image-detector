import { ScanSearch, ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '80px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Fundo com gradiente radial sutil */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      {/* Grid pattern sutil */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '64px',
          alignItems: 'center',
        }}>
          {/* Coluna de texto */}
          <div>
            {/* Badge */}
            <div className="fade-in" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              backgroundColor: '#1e1b4b',
              border: '1px solid #312e81',
              borderRadius: '999px',
              padding: '4px 12px',
              marginBottom: '24px',
            }}>
              <ScanSearch size={12} color="#818cf8" />
              <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#818cf8', letterSpacing: '0.05em' }}>
                Ensemble · 9 Modelos · GPU FP16
              </span>
            </div>

            {/* Título */}
            <h1 className="fade-in fade-in-delay-1" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              color: '#fafafa',
              margin: '0 0 20px 0',
            }}>
              Detecte Conteúdo{' '}
              <span style={{ color: '#818cf8' }}>Gerado por IA</span>{' '}
              com Precisão Forense
            </h1>

            {/* Subtítulo */}
            <p className="fade-in fade-in-delay-2" style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              lineHeight: 1.65,
              color: '#a1a1aa',
              margin: '0 0 36px 0',
              maxWidth: '480px',
            }}>
              Ensemble de 9 modelos de deep learning — ViT, CLIP, SigLIP, EfficientNet e análise FFT/DCT —
              acelerado por GPU NVIDIA com FP16. Análise forense completa com GradCAM, ELA, Wavelet e Noise Print.
            </p>

            {/* CTAs */}
            <div className="fade-in fade-in-delay-3" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="#demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#fafafa',
                  textDecoration: 'none',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  backgroundColor: '#6366f1',
                  border: '1px solid #6366f1',
                  transition: 'background 0.2s, transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = '#818cf8'
                  el.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.backgroundColor = '#6366f1'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Analisar Agora <ArrowRight size={14} />
              </a>
              <a
                href="#demo"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#a1a1aa',
                  textDecoration: 'none',
                  padding: '10px 22px',
                  borderRadius: '8px',
                  backgroundColor: 'transparent',
                  border: '1px solid #3f3f46',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#6366f1'
                  el.style.color = '#fafafa'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.borderColor = '#3f3f46'
                  el.style.color = '#a1a1aa'
                }}
              >
                <Play size={14} /> Ver Demonstração
              </a>
            </div>

            {/* Métricas */}
            <div className="fade-in fade-in-delay-4" style={{
              display: 'flex',
              gap: '32px',
              marginTop: '48px',
              paddingTop: '24px',
              borderTop: '1px solid #27272a',
            }}>
              {[
                { valor: '9', label: 'Modelos' },
                { valor: '97%', label: 'Precisão' },
                { valor: '<6s', label: 'Por análise' },
              ].map((m) => (
                <div key={m.label}>
                  <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '22px', fontWeight: 600, color: '#fafafa' }}>
                    {m.valor}
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#71717a', marginTop: '2px' }}>
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Coluna da imagem — mockup browser */}
          <div className="fade-in fade-in-delay-2" style={{ position: 'relative' }}>
            {/* Brilho por trás */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.2) 0%, transparent 70%)',
              zIndex: 0,
              borderRadius: '24px',
              filter: 'blur(20px)',
            }} />
            {/* Frame do browser */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '12px',
              border: '1px solid #3f3f46',
              backgroundColor: '#18181b',
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(99,102,241,0.25), 0 24px 64px rgba(0,0,0,0.6)',
            }}>
              {/* Barra do browser */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '10px 16px',
                borderBottom: '1px solid #27272a',
                backgroundColor: '#1f1f23',
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3f3f46' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3f3f46' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#3f3f46' }} />
                <div style={{
                  flex: 1,
                  marginLeft: '8px',
                  backgroundColor: '#27272a',
                  borderRadius: '4px',
                  padding: '3px 10px',
                }}>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '11px', color: '#52525b' }}>
                    localhost:5173 — Detector de IA
                  </span>
                </div>
              </div>
              {/* Screenshot */}
              <img
                src="/screenshots/retrato-resultado.png"
                alt="Interface do Detector de IA — resultado da análise de retrato"
                style={{ width: '100%', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
