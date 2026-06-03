const stats = [
  { value: '25+',  label: 'Years in Health Care' },
  { value: 'CA',   label: 'Burlington, Ontario' },
  { value: 'PT·OT', label: 'SLP · Psych · MD' },
  { value: 'AWA',  label: 'Alex Warne & Associates' },
]

export default function Hero() {
  return (
    <section className="relative noise-layer hero-gradient min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="blob blob-gold w-[640px] h-[640px] -top-[220px] -right-[80px]" />
      <div className="blob blob-white w-[400px] h-[400px] -bottom-[120px] -left-[60px]" />

      <div className="relative z-10 max-w-[1120px] mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center w-full">
        {/* Copy */}
        <div>
          <p className="au text-[0.72rem] tracking-[0.16em] uppercase text-gold mb-4">
            President · Alex Warne &amp; Associates
          </p>
          <h1 className="au au-d1 text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] tracking-[-0.03em] mb-4">
            Alex<br />Warne
          </h1>
          <p className="au au-d1 text-xl font-display text-white/80 mb-6 tracking-wide">
            Health Care Recruiter
          </p>
          <p className="au au-d2 text-lg text-white/75 leading-[1.72] max-w-[460px] mb-10">
            25+ years connecting Canadian healthcare organizations with exceptional physicians, therapists, and mental health professionals — the right candidate, the right opportunity, the right time.
          </p>
          <div className="au au-d3 flex flex-wrap gap-4">
            <a href="#contact" className="btn-gold">Work With Alex</a>
            <a href="#about"   className="btn-ghost">Learn More</a>
          </div>
        </div>

        {/* Stats card — hidden on mobile */}
        <div className="hidden md:block">
          <div className="glass p-2">
            <div className="grid grid-cols-2">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={[
                    'text-center p-5',
                    i % 2 === 0 ? 'border-r border-white/10' : '',
                    i < 2      ? 'border-b border-white/10' : '',
                  ].join(' ')}
                >
                  <div className="font-display text-4xl font-bold text-white leading-tight">{s.value}</div>
                  <div className="text-[0.8rem] text-white/60 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
