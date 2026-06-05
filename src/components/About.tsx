const pills = [
    "Physician Recruitment",
    "Rehabilitation Professionals",
    "Mental Health Practitioners",
    "International Recruitment",
    "Contract & Permanent Staffing",
    "Senior Management Search",
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-cream">
            <div className="max-w-[1120px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                {/* Photo */}
                <div className="relative">
                    <img
                        src="/profile/alex-specialists.webp"
                        alt="Alex Warne — Health Care Recruiter, President of Alex Warne & Associates"
                        className="w-full rounded-[10px] block shadow-photo object-cover"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-gold rounded-lg px-6 py-5 text-center shadow-badge">
                        <div className="font-display text-[2rem] font-bold text-white leading-tight">40+</div>
                        <div className="text-[0.7rem] text-white/85 uppercase tracking-[0.08em] mt-1">Years in Health Care</div>
                    </div>
                </div>

                {/* Copy */}
                <div className="pt-8 md:pt-0">
                    <div className="rule" />
                    <h2 className="text-3xl md:text-4xl font-bold text-teal-dark tracking-[-0.025em] leading-[1.15] mb-2">Canada's Health Care Recruiter</h2>
                    <p className="text-ink-mid text-sm mb-6 tracking-wide uppercase">President, Alex Warne &amp; Associates &nbsp;·&nbsp; Consultant to Executive Solutions Ltd.</p>
                    <p className="text-ink-mid leading-[1.75] mb-4">
                        Alex Warne is a leading health care recruiter and President of Alex Warne &amp; Associates, based in Burlington, Ontario. As a former clinical
                        physiotherapist with over 25 years in senior management with national healthcare organizations — including CBI Health and Lifemark Health — Alex brings
                        unmatched clinical insight to every search.
                    </p>
                    <p className="text-ink-mid leading-[1.75] mb-4">
                        Alex also consults to Executive Solutions Ltd., extending her reach across Canada's healthcare sector. Known as a connector, she recruits{" "}
                        <em>"the right candidate for the right opportunity at the right time"</em> — whether that's a family physician, a physiotherapist, or a psychiatrist.
                    </p>
                    <p className="text-ink-mid leading-[1.75] mb-8">
                        Beyond recruitment, Alex served on the Burlington Inclusivity Advisory Committee and Burlington Accessability Advisory Committee, coaches a dragon boat cancer
                        survivor team, and fundraises annually for SickKids Hospital.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {pills.map((p) => (
                            <span key={p} className="pill">
                                {p}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
