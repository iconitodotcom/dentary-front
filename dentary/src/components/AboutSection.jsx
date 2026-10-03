const trustPoints = [
  'Profesionales altamente capacitados',
  'Tecnología moderna y segura',
  'Materiales de la más alta calidad',
  'Planes de tratamiento personalizados',
  'Ambiente cálido y confortable',
]

export default function AboutSection() {
  return (
    <section id="nosotros" className="container-shell py-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.08fr]">
        <div className="space-y-7">
          <p className="section-kicker">¿Por qué elegirnos?</p>
          <h2 className="section-title max-w-lg text-4xl md:text-5xl">
            Comprometidos con tu bienestar y confianza
          </h2>
          <p className="max-w-xl text-lg leading-8 text-slate-600">
            En Dentary Plus nos enfocamos en brindar una experiencia dental de alta calidad, con un
            enfoque humano y personalizado para cada paciente.
          </p>

          <ul className="space-y-4">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-base text-slate-700">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[var(--dentary-blue)] text-xs font-bold text-white">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>

          <button className="btn-primary px-7 py-3.5 text-sm hover:translate-y-[-1px]">
            Conoce más sobre nosotros
          </button>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-slate-100 via-white to-slate-50 p-4 shadow-[0_28px_80px_rgba(15,23,42,0.08)]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
              alt="Dental clinic treatment room"
              className="h-[500px] w-full rounded-[28px] object-cover"
            />
          </div>

          <div className="absolute -bottom-8 left-8 rounded-[24px] border border-slate-200 bg-white px-5 py-4 shadow-[0_20px_40px_rgba(15,23,42,0.1)]">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--dentary-blue-soft)] text-2xl text-[var(--dentary-blue)]">
                🦷
              </div>
              <div>
                <div className="text-sm text-slate-500">Pacientes satisfechos</div>
                <div className="text-3xl font-black text-slate-900">+2,500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
