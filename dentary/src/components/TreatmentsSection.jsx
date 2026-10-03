const specialists = [
  {
    name: 'Dr. Alejandro Martinez',
    specialty: 'Implantología y Cirugía Oral',
    description:
      'Especialista en implantes dentales y cirugía oral con más de 12 años de experiencia.',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=900&q=80',
    stats: [
      { label: 'Experiencia', value: '12+' },
      { label: 'Pacientes', value: '2,500+' },
      { label: 'Certificado', value: 'Sí' },
    ],
  },
  {
    name: 'Dra. Laura Sánchez',
    specialty: 'Ortodoncia',
    description:
      'Experta en ortodoncia y estética dental, acompañando a cada paciente con dedicación.',
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=80',
    stats: [
      { label: 'Experiencia', value: '10+' },
      { label: 'Pacientes', value: '1,800+' },
      { label: 'Certificado', value: 'Sí' },
    ],
  },
  {
    name: 'Dr. Ricardo Gómez',
    specialty: 'Endodoncia',
    description:
      'Especialista en tratamientos de conductos con enfoque en comodidad y resultados duraderos.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    stats: [
      { label: 'Experiencia', value: '9+' },
      { label: 'Pacientes', value: '1,500+' },
      { label: 'Certificado', value: 'Sí' },
    ],
  },
]

export default function TreatmentsSection() {
  return (
    <section id="tratamientos" className="container-shell py-8 md:py-12">
      <div className="mb-12 text-center">
        <p className="section-kicker">Conoce a nuestros especialistas</p>
        <h2 className="section-title mt-3 text-3xl md:text-5xl">
          Profesionales que cuidan tu sonrisa
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 md:text-lg">
          Contamos con un equipo altamente capacitado y con experiencia para brindar la mejor
          atención para ti y tu familia.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {specialists.map((person) => (
          <article
            key={person.name}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white p-3 shadow-[0_10px_30px_rgba(15,23,42,0.05)]"
          >
            <div className="overflow-hidden rounded-[22px] bg-slate-200">
              <img src={person.image} alt={person.name} className="h-80 w-full object-cover" />
            </div>

            <div className="px-2 pb-2 pt-5">
              <h3 className="text-2xl font-bold text-slate-900">{person.name}</h3>
              <p className="mt-1 text-base text-slate-600">{person.specialty}</p>

              <p className="mt-4 text-sm leading-6 text-slate-500">{person.description}</p>

              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {person.stats.map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-slate-50 px-2 py-3">
                    <div className="text-sm font-bold text-[var(--dentary-blue)]">{stat.value}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
