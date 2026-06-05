const disciplines = [
  { dot: 'bg-teal', title: 'Physicians — Primary & Specialist',           sub: 'Family Medicine · Internal Medicine · Psychiatry & more' },
  { dot: 'bg-gold', title: 'Physiotherapy & Occupational Therapy',        sub: 'Outpatient · Acute Care · Pediatrics · Home Health' },
  { dot: 'bg-teal', title: 'Speech-Language Pathology & Chiropractic',    sub: 'Clinics · Schools · Hospital-based · Community' },
  { dot: 'bg-gold', title: 'Mental Health — Psych & Psychology',          sub: 'Psychiatrists · Psychologists · Psychology Associates' },
  { dot: 'bg-teal', title: 'Internationally Trained Professionals',       sub: 'US · UK · Ireland · Australia · New Zealand · South Africa' },
]

export default function Specialties() {
  return (
    <section id="specialties" className="py-24 bg-cream">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left */}
        <div>
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark tracking-[-0.025em] leading-[1.15] mb-5">
            Disciplines &amp; Specialties
          </h2>
          <p className="text-ink-mid leading-[1.75] mb-8">
            With a national network built over 40 years, Alex places clinical professionals across every major healthcare discipline.
          </p>
          <div className="flex flex-col gap-4">
            {disciplines.map(d => (
              <div key={d.title} className="disc-row">
                <div className={`w-2 h-2 rounded-full mt-[6px] shrink-0 ${d.dot}`} />
                <div>
                  <div className="font-semibold text-teal-dark text-[0.95rem]">{d.title}</div>
                  <div className="text-[0.8rem] text-ink-light mt-0.5">{d.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-6">
          <InfoCard title="For Employers" iconBg="bg-teal/10" icon={<HouseIcon className="text-teal" />}>
            Whether you're a large national health network or an independent clinic, Alex brings her extensive connections and clinical insight to find candidates who fit your culture and deliver results from day one.
          </InfoCard>
          <InfoCard title="For Clinicians" iconBg="bg-gold/10" icon={<PersonIcon className="text-gold" />}>
            Looking for your next opportunity? Alex advocates for your goals — matching your clinical interests, career stage, and preferred region to roles where you can thrive.
          </InfoCard>
          <div className="quote-gradient rounded-[10px] p-7">
            <p className="text-base italic text-white/90 leading-[1.7] mb-4">
              "Alex is a connector — recruiting the right candidate for the right opportunity at the right time."
            </p>
            <p className="text-[0.8rem] text-white/60 uppercase tracking-[0.06em]">— Executive Solutions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, iconBg, icon, children }: { title: string; iconBg: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="card p-7">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${iconBg}`}>{icon}</div>
        <h4 className="text-base font-bold text-teal-dark">{title}</h4>
      </div>
      <p className="text-[0.875rem] text-ink-mid leading-[1.72]">{children}</p>
    </div>
  )
}

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
}

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
    </svg>
  )
}
