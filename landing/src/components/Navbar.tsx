import { useState, useEffect } from 'react'
import { ScanSearch, Menu, X } from 'lucide-react'

const links = [
  { href: '#demo', label: 'Demonstração' },
  { href: '#recursos', label: 'Recursos' },
  { href: '#forense', label: 'Análise Forense' },
  { href: '#modelos', label: 'Modelos' },
  { href: '#como-funciona', label: 'Como Funciona' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'background 0.3s, border-color 0.3s',
        backgroundColor: scrolled ? 'rgba(9,9,11,0.85)' : 'transparent',
        borderBottom: scrolled ? '1px solid #27272a' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px' }}>
          {/* Logo */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
            <div style={{
              width: '32px', height: '32px',
              backgroundColor: '#6366f1',
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <ScanSearch size={18} color="#fff" />
            </div>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '15px', color: '#fafafa', letterSpacing: '-0.02em' }}>
              Detector de IA
            </span>
          </a>

          {/* Links desktop */}
          <div style={{ display: 'flex', gap: '2px' }} className="hidden md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#a1a1aa',
                  textDecoration: 'none',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  transition: 'color 0.15s, background 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = '#fafafa'
                  ;(e.target as HTMLAnchorElement).style.backgroundColor = '#27272a'
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = '#a1a1aa'
                  ;(e.target as HTMLAnchorElement).style.backgroundColor = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="hidden md:flex">
            <a
              href="#demo"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#fafafa',
                textDecoration: 'none',
                padding: '7px 16px',
                borderRadius: '7px',
                backgroundColor: '#6366f1',
                border: '1px solid #6366f1',
                transition: 'background 0.15s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#818cf8'
                ;(e.target as HTMLAnchorElement).style.borderColor = '#818cf8'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.backgroundColor = '#6366f1'
                ;(e.target as HTMLAnchorElement).style.borderColor = '#6366f1'
              }}
            >
              Analisar Agora
            </a>
          </div>

          {/* Botão menu mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: '#a1a1aa', padding: '4px',
            }}
            className="md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Menu mobile */}
        {menuOpen && (
          <div style={{
            borderTop: '1px solid #27272a',
            paddingBottom: '16px',
          }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#a1a1aa',
                  textDecoration: 'none',
                  padding: '10px 0',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '8px',
                fontFamily: 'Inter, sans-serif',
                fontSize: '13px',
                fontWeight: 500,
                color: '#fafafa',
                textDecoration: 'none',
                padding: '8px 20px',
                borderRadius: '7px',
                backgroundColor: '#6366f1',
              }}
            >
              Analisar Agora
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
