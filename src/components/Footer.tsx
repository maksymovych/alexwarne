export default function Footer() {
  return (
    <footer className="py-6 border-t border-black/6">
      <div className="max-w-[1120px] mx-auto px-6 flex flex-wrap items-center justify-between gap-4 text-[0.8rem] text-ink-light">
        <span className="font-display text-base text-teal">Alex Warne</span>
        <span>Senior Director of Health Care Recruitment · Executive Solutions · Burlington, ON</span>
        <div className="flex items-center gap-6">
          <a href="tel:19055707456" className="text-teal no-underline hover:opacity-65 transition-opacity duration-200">
            1.905.570.7456
          </a>
          <a
            href="https://www.linkedin.com/in/alexwarne/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal no-underline hover:opacity-65 transition-opacity duration-200"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </footer>
  )
}
