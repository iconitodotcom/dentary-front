const services = [
  {
    title: 'Limpieza Dental',
    description: 'Mantén tu boca sana con una limpieza profesional que elimina placa y sarro.',
    icon: '🦷',
  },
  {
    title: 'Implantes Dentales',
    description: 'Recupera la funcionalidad y la confianza con soluciones permanentes y seguras.',
    icon: '🦷',
  },
  {
    title: 'Ortodoncia',
    description: 'Corrige la posición de tus dientes con tratamientos modernos y precisos.',
    icon: '🦷',
  },
  {
    title: 'Blanqueamiento',
    description: 'Logra una sonrisa más brillante y natural con resultados visibles.',
    icon: '✨',
  },
  {
    title: 'Endodoncia',
    description: 'Protege y salva tus dientes con procedimientos de precisión y comodidad.',
    icon: '🩺',
  },
]

export default function ServicesSection() {
  return (
    <section id="servicios" className="container-shell py-20">
      <div className="mb-10 text-center">
        <p className="section-kicker">Nuestros servicios</p>
        <h2 className="section-title mt-3 text-3xl md:text-5xl">Soluciones para cada necesidad</h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
        {services.map((service) => (
          <article
            key={service.title}
            className="group rounded-[26px] border border-slate-200 bg-white p-6 text-center shadow-[0_8px_30px_rgba(15,23,42,0.04)] transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_38px_rgba(10,155,214,0.12)]"
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--dentary-blue-soft)] bg-[var(--dentary-blue-soft)] text-3xl shadow-inner shadow-white">
              {service.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-slate-800">{service.title}</h3>
            <p className="mb-5 text-sm leading-6 text-slate-600">{service.description}</p>
            <button className="inline-flex items-center gap-2 text-sm font-bold text-[var(--dentary-blue)] transition group-hover:gap-3">
              Ver más <span aria-hidden="true">→</span>
            </button>
          </article>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button className="btn-primary px-7 py-3.5 text-sm hover:translate-y-[-1px]">
          Ver todos los servicios
        </button>
      </div>
    </section>
  )
}
