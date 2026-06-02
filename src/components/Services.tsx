const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
    iconClass: 'bg-teal/10 text-teal',
    title: 'Physician Recruitment',
    body: 'Primary care and specialist physicians, including internationally trained doctors from the US, UK, Ireland, Australia/New Zealand, and South Africa.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    iconClass: 'bg-gold/10 text-gold',
    title: 'Rehabilitation Professionals',
    body: 'Physiotherapists, occupational therapists, chiropractors, and speech-language pathologists placed in clinics, hospitals, and community settings.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    iconClass: 'bg-teal/10 text-teal',
    title: 'Mental Health Practitioners',
    body: 'Psychiatrists, psychologists, and psychology associates for healthcare organizations prioritizing comprehensive mental health programs.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-warm-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="rule rule-center" />
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark tracking-[-0.025em] mb-3">What I Offer</h2>
          <p className="text-lg text-ink-mid leading-[1.7] max-w-[500px] mx-auto">
            Full-spectrum healthcare recruitment across clinical disciplines and seniority levels.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title} className="card p-8">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${s.iconClass}`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-teal-dark mb-3">{s.title}</h3>
              <p className="text-ink-mid leading-[1.72] text-[0.9rem]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
