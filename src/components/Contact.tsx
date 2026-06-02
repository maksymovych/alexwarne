import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' })
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  return (
    <section id="contact" className="relative noise-layer contact-gradient py-24 px-6 overflow-hidden">
      <div className="blob blob-gold-sm w-[560px] h-[560px] -top-[160px] -right-[80px]" />
      <div className="blob blob-white w-[320px] h-[320px] -bottom-[80px] -left-[60px]" />

      <div className="relative z-10 max-w-[680px] mx-auto text-center">
        <div className="rule rule-center" />
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.025em] mb-3">
          Let's Find the Right Fit
        </h2>
        <p className="text-lg text-white/72 leading-[1.72] mb-10">
          Whether you're hiring or exploring your next clinical opportunity, Alex is ready to connect.
        </p>

        <div className="glass p-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input className="glass-input" type="text"  placeholder="Your Name"     value={form.name}  onChange={set('name')} />
            <input className="glass-input" type="email" placeholder="Email Address" value={form.email} onChange={set('email')} />
          </div>
          <input
            className="glass-input block mb-4"
            type="text" placeholder="Organization / Clinic"
            value={form.org} onChange={set('org')}
          />
          <textarea
            className="glass-input block mb-6 resize-none"
            rows={3} placeholder="Tell Alex about your needs..."
            value={form.message} onChange={set('message')}
          />
          <button type="submit" className="btn-gold w-full justify-center tracking-[0.1em]">
            Send Message
          </button>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-8">
          <ExternalLink href="tel:19055707456" icon={<PhoneIcon />}>
            1.905.570.7456
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/alexwarne/" icon={<LinkedInIcon />}>
            LinkedIn Profile
          </ExternalLink>
          <ExternalLink href="https://executivesolutions.ca/healthcare-recruitment/" icon={<GlobeIcon />}>
            Executive Solutions
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}

function ExternalLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm text-white/78 no-underline hover:opacity-60 transition-opacity duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:rounded-sm"
    >
      {icon}{children}
    </a>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.17h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 6.29 6.29l1.53-1.53a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
