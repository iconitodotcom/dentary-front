import DentaryLogo from "./Logo/DentaryLogo"

export default function ContactSection() {
  return (
    <section id="contacto" className="container-shell py-20">
      <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#0ea5e9,#0b7bd6)] px-6 py-10 text-white shadow-[0_24px_60px_rgba(14,165,233,0.3)] md:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-inner shadow-white/10">
              🦷
            </div>
            <h2 className="text-3xl font-black tracking-[-0.06em] md:text-5xl">
              ¡Listo para tu mejor sonrisa?
            </h2>
            <p className="mt-4 text-base text-blue-50">
              Agenda tu cita hoy mismo y recibe atención personalizada en un ambiente cálido y
              profesional.
            </p>
          </div>

          <button className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-[var(--dentary-blue)] shadow-[0_18px_32px_rgba(15,23,42,0.15)] transition hover:scale-[1.01]">
            Agenda tu cita ahora
          </button>
        </div>
      </div>

      <footer className="mt-16 pb-10">
        <div className="grid gap-10 border-t border-slate-200 pt-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <DentaryLogo></DentaryLogo>
            <p className="max-w-xs text-sm leading-6 text-slate-600 mt-2">
              Cuidamos tu sonrisa con atención profesional, tecnología avanzada y un trato humano.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-800">Enlaces rápidos</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#inicio" className="hover:text-[var(--dentary-blue)]">Inicio</a></li>
              <li><a href="#nosotros" className="hover:text-[var(--dentary-blue)]">Nosotros</a></li>
              <li><a href="#servicios" className="hover:text-[var(--dentary-blue)]">Servicios</a></li>
              <li><a href="#tratamientos" className="hover:text-[var(--dentary-blue)]">Tratamientos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-800">Servicios</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>Limpieza Dental</li>
              <li>Implantes Dentales</li>
              <li>Ortodoncia</li>
              <li>Blanqueamiento</li>
              <li>Endodoncia</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-bold text-slate-800">Contacto</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li>📞 (55) 1234 5678</li>
              <li>✉️ info@dentaryplus.com</li>
              <li>📍 Av. Sonrisas 123, CDMX</li>
              <li>🕒 Lunes - Viernes: 9:00 - 7:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row">
          <p>© 2024 Dentary Plus. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[var(--dentary-blue)]">Términos y condiciones</a>
            <a href="#" className="hover:text-[var(--dentary-blue)]">Privacidad</a>
          </div>
        </div>
      </footer>
    </section>
  )
}
