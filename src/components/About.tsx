const pills = [
  'Physician Recruitment',
  'Rehabilitation Professionals',
  'Mental Health Practitioners',
  'International Recruitment',
  'Contract Staffing',
  'Senior Management Search',
]

export default function About() {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Photo */}
        <div className="relative">
          <img
            src="/profile/alex-specialists.webp"
            alt="Alex Warne — Senior Director of Health Care Recruitment"
            className="w-full rounded-[10px] block shadow-photo object-cover"
          />
          <div className="absolute -bottom-6 -right-6 bg-gold rounded-lg px-6 py-5 text-center shadow-badge">
            <div className="font-display text-[2rem] font-bold text-white leading-tight">25+</div>
            <div className="text-[0.7rem] text-white/85 uppercase tracking-[0.08em] mt-1">Years in Healthcare</div>
          </div>
        </div>

        {/* Copy */}
        <div className="pt-8 md:pt-0">
          <div className="rule" />
          <h2 className="text-3xl md:text-4xl font-bold text-teal-dark tracking-[-0.025em] leading-[1.15] mb-6">
            A Connector Who Understands the Clinic
          </h2>
          <p className="text-ink-mid leading-[1.75] mb-4">
            Alex Warne is Senior Director of Health Care Recruitment at Executive Solutions, based in Burlington, Ontario with reach across the Greater Toronto Area and beyond. As a former clinical physiotherapist and past president of Alex Warne &amp; Associates, she brings over 25 years of senior management experience with national healthcare organizations including CBI Health and Lifemark Health.
          </p>
          <p className="text-ink-mid leading-[1.75] mb-4">
            Alex is known as a connector — recruiting "the right candidate for the right opportunity at the right time." Her deep national network of clinical professionals and business leaders means faster, better-fit placements for both employers and candidates.
          </p>
          <p className="text-ink-mid leading-[1.75] mb-8">
            Beyond the desk, she serves on the Burlington Inclusivity Advisory Committee, coaches a dragon boat cancer survivor team, and fundraises annually for SickKids Hospital.
          </p>
          <div className="flex flex-wrap gap-2">
            {pills.map(p => <span key={p} className="pill">{p}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
