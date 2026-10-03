const testimonials = [
  {
    quote:
      'Excelente atención y muy profesionales. Me explicaron todo el proceso y el resultado fue increíble.',
    author: 'Ana G.',
  },
  {
    quote:
      'El trato fue amable y las instalaciones son modernas. Me hicieron sentir muy segura durante el tratamiento.',
    author: 'Carlos M.',
  },
  {
    quote:
      'Llevé a mi hija para una cita y la atención fue excelente. Sin duda volveremos.',
    author: 'Laura T.',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="container-shell py-20">
      <div className="mb-12 text-center">
        <p className="section-kicker">Testimonios</p>
        <h2 className="section-title mt-4 text-3xl md:text-5xl">Lo que dicen nuestros pacientes</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article
            key={item.author}
            className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_16px_34px_rgba(15,23,42,0.04)]"
          >
            <div className="mb-4 text-4xl leading-none text-[var(--dentary-blue)]">“</div>
            <p className="text-base leading-7 text-slate-600">{item.quote}</p>
            <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
              <span className="font-semibold text-slate-800">{item.author}</span>
              <div className="text-[var(--dentary-blue)]">★★★★★</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
