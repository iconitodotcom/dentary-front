export default function DentaryHambBtn({ isOpen, onClick }) {
  return (
    <button
      type="button"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
      onClick={onClick}
      className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-dentary-blue hover:text-dentary-blue"
    >
      <span className="relative block h-5 w-5">
        <span
          className={[
            'absolute left-0 top-1 block h-0.5 w-5 rounded-full bg-current transition-all duration-200',
            isOpen ? 'translate-y-1.5 rotate-45' : 'translate-y-0 rotate-0'
          ].join(' ')}
        />
        <span
          className={[
            'absolute left-0 top-2.5 block h-0.5 w-5 rounded-full bg-current transition-all duration-200',
            isOpen ? 'opacity-0' : 'opacity-100'
          ].join(' ')}
        />
        <span
          className={[
            'absolute left-0 top-4 block h-0.5 w-5 rounded-full bg-current transition-all duration-200',
            isOpen ? '-translate-y-1.5 -rotate-45' : 'translate-y-0 rotate-0'
          ].join(' ')}
        />
      </span>
    </button>
  )
}
