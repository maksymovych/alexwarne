import { useState } from 'react'

const links = ['About', 'Services', 'Specialties', 'Process'] as const

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-[-webkit-blur(12px)] border-b border-black/5 shadow-nav">
      <div className="max-w-[1120px] mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-display text-lg text-teal no-underline tracking-tight">
          Alex Warne &amp; Associates
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-ink-mid no-underline hover:text-gold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold focus-visible:rounded-sm"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="btn-gold !py-[0.5rem] !px-5 !text-[0.75rem]">
            Let's Connect
          </a>
        </div>

        {/* Burger button */}
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden p-2 text-teal rounded focus-visible:outline-2 focus-visible:outline-gold"
        >
          {open ? <XIcon /> : <BurgerIcon />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-warm-white border-t border-black/5 px-6 py-5 flex flex-col gap-5">
          {links.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-base text-ink-mid no-underline hover:text-gold transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-gold self-start">
            Let's Connect
          </a>
        </div>
      )}
    </nav>
  )
}

function BurgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  )
}
