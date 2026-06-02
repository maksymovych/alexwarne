const steps = [
  { num: '1', title: 'Discovery Call',       body: 'We discuss your needs, timeline, setting, and ideal candidate profile in detail.',                        gold: false },
  { num: '2', title: 'Candidate Search',     body: 'I tap my active network and source qualified, vetted therapists matched to your criteria.',               gold: false },
  { num: '3', title: 'Interview & Select',   body: 'You interview shortlisted candidates and choose the best fit for your team and culture.',                  gold: false },
  { num: '4', title: 'Placement & Support',  body: 'I coordinate onboarding and remain your contact throughout the contract duration.',                        gold: true  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 bg-warm-white">
      <div className="max-w-[1120px] mx-auto px-6">
        <div className="text-center mb-14">
          <div className="rule rule-center" />
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark tracking-[-0.025em] mb-3">How It Works</h2>
          <p className="text-lg text-ink-mid leading-[1.7] max-w-[480px] mx-auto">
            A simple, transparent process from first conversation to first day on the job.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map(s => (
            <div key={s.num} className="text-center">
              <div
                className={[
                  'w-[60px] h-[60px] rounded-full flex items-center justify-center mx-auto mb-4',
                  'font-display text-[1.3rem] font-bold text-white',
                  s.gold ? 'bg-gold shadow-gold-circle' : 'bg-teal shadow-teal',
                ].join(' ')}
              >
                {s.num}
              </div>
              <h4 className="text-base font-bold text-teal-dark mb-2">{s.title}</h4>
              <p className="text-[0.85rem] text-ink-mid leading-[1.65]">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
