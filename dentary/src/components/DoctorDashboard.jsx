const appointments = [
  { time: '09:00 AM', patient: 'María González', specialty: 'Limpieza dental', status: 'Consulta' },
  { time: '10:30 AM', patient: 'Carlos Ramírez', specialty: 'Revisión + Rayos X', status: 'En espera' },
  { time: '12:00 PM', patient: 'Ana López', specialty: 'Ortodoncia', status: 'Pendiente' },
  { time: '02:00 PM', patient: 'José Torres', specialty: 'Endodoncia', status: 'Pendiente' },
  { time: '04:30 PM', patient: 'Valeria Sánchez', specialty: 'Control', status: 'Pendiente' },
]

const topStats = [
  { value: '8', label: 'Pacientes hoy' },
  { value: '5', label: 'En consulta' },
  { value: '3', label: 'Pendientes' },
  { value: '2', label: 'Nuevos' },
]

const treatmentCounts = [
  { label: 'Limpieza', value: 37, color: 'bg-sky-400' },
  { label: 'Ortodoncia', value: 22, color: 'bg-cyan-400' },
  { label: 'Endodoncia', value: 16, color: 'bg-emerald-400' },
  { label: 'Implantes', value: 12, color: 'bg-amber-400' },
  { label: 'Otros', value: 13, color: 'bg-slate-400' },
]

const monthSummary = [
  { value: 128, label: 'Pacientes atendidos', trend: '+12%' },
  { value: 96, label: 'Satisfacción del paciente', trend: '+8%' },
  { value: 12, label: 'Nuevos pacientes', trend: '+20%' },
]

const recentPatients = [
  { name: 'María González', specialty: 'Limpieza dental', status: 'Completado', date: '26 May 2025', avatar: 'MG' },
  { name: 'Carlos Ramírez', specialty: 'Resina dental', status: 'En proceso', date: '26 May 2025', avatar: 'CR' },
  { name: 'Ana López', specialty: 'Ortodoncia', status: 'En seguimiento', date: '24 May 2025', avatar: 'AL' },
  { name: 'José Torres', specialty: 'Endodoncia', status: 'Completado', date: '22 May 2025', avatar: 'JT' },
]

const notifications = [
  'Paciente Ana López requiere cita de control en 3 meses.',
  'Revisar disponibilidad de implantes para el paciente José Torres.',
  'Enviar recordatorio de limpieza a 5 pacientes.',
  'Actualizar expediente de María González.',
]

export default function DoctorDashboard() {
  return (
    <div className="min-h-screen bg-[#edf5ff] px-4 py-6 text-slate-800">
      <div className="mx-auto flex max-w-[1440px] overflow-hidden rounded-[28px] border border-slate-200 bg-[#f3f8ff] shadow-[0_25px_70px_rgba(15,23,42,0.08)]">
        <aside className="flex w-[250px] flex-col justify-between border-r border-slate-200 bg-[#f5f9ff] p-5">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9f0ff] text-xl text-[#0b7ac9]">🦷</div>
              <div>
                <div className="text-2xl font-black leading-none tracking-tight text-[#0f172a]">Dentary<span className="text-[#1d94d6]">Plus</span></div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Odontología Especializada</div>
              </div>
            </div>

            <nav className="space-y-2 text-sm font-medium text-slate-600">
              {['Inicio', 'Pacientes', 'Agenda', 'Expedientes', 'Tratamientos', 'Reportes', 'Herramientas', 'Configuración'].map((item, index) => (
                <button
                  key={item}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${index === 0 ? 'bg-[#1f9ce7] text-white shadow-md' : 'hover:bg-white'}`}
                >
                  <span className="text-base">{['🏠', '👥', '📅', '📁', '🦷', '📊', '⚙️', '⚙️'][index]}</span>
                  {item}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-500"></div>
            <div>
              <div className="text-sm font-semibold text-slate-800">Dr. Alejandro Martínez</div>
              <div className="text-xs text-slate-500">Odontología general</div>
            </div>
          </div>
        </aside>

        <main className="flex-1 bg-[#eef5ff] p-6">
          <header className="mb-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-800">Hola, Dr. Martínez</h1>
              <p className="mt-1 text-sm text-slate-500">Aquí tienes un resumen de tu jornada y tus pacientes.</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl shadow-sm">🔔</button>
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-300 to-slate-500"></div>
            </div>
          </header>

          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            <div className="space-y-6">
              <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">🦷</div>
                  <h2 className="text-2xl font-bold text-slate-800">Tu día en un vistazo</h2>
                </div>

                <div className="grid grid-cols-4 gap-3">
                  {topStats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-slate-200 bg-[#f9fbff] p-4 text-center">
                      <div className="text-3xl font-extrabold text-slate-800">{stat.value}</div>
                      <div className="mt-1 text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </section>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">📅</div>
                      <h3 className="text-2xl font-bold text-slate-800">Próximas citas</h3>
                    </div>
                    <button className="text-sm font-semibold text-[#1a8ad9]">Ver agenda completa →</button>
                  </div>

                  <div className="space-y-3">
                    {appointments.map((item) => (
                      <div key={item.time} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-[#f9fbff] p-3">
                        <div className="flex items-center gap-3">
                          <div className="w-16 text-sm font-bold text-slate-500">{item.time}</div>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-slate-300 to-slate-500"></div>
                            <div>
                              <div className="font-semibold text-slate-800">{item.patient}</div>
                              <div className="text-xs text-slate-500">{item.specialty}</div>
                            </div>
                          </div>
                        </div>
                        <button className="rounded-xl bg-[#eaf5ff] px-3 py-1.5 text-xs font-semibold text-[#1387d7]">{item.status}</button>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">📈</div>
                      <h3 className="text-2xl font-bold text-slate-800">Pacientes por tratamiento</h3>
                    </div>
                  </div>

                  <div className="flex justify-center py-4">
                    <div className="relative flex h-36 w-36 items-center justify-center rounded-full bg-[conic-gradient(#60a5fa_0_37%,#7dd3fc_37%_59%,#34d399_59%_75%,#fbbf24_75%_87%,#94a3b8_87%_100%)]">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-700">32</div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    {treatmentCounts.map((item) => (
                      <div key={item.label} className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-1.5">
                        <div className="flex items-center gap-2">
                          <span className={`inline-block h-3 w-3 rounded-full ${item.color}`}></span>
                          <span className="text-slate-600">{item.label}</span>
                        </div>
                        <span className="font-semibold text-slate-700">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">📌</div>
                      <h3 className="text-2xl font-bold text-slate-800">Casos recientes</h3>
                    </div>
                    <button className="text-sm font-semibold text-[#1a8ad9]">Ver todos →</button>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {recentPatients.map((patient) => (
                      <div key={patient.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-[#f9fbff]">
                        <div className="flex h-24 items-center justify-center bg-gradient-to-br from-slate-200 to-slate-300 text-lg font-bold text-slate-700">
                          {patient.avatar}
                        </div>
                        <div className="p-3">
                          <div className="font-semibold text-slate-800">{patient.name}</div>
                          <div className="text-xs text-slate-500">{patient.specialty}</div>
                          <div className="mt-2 inline-flex rounded-full bg-[#eaf5ff] px-2 py-1 text-[10px] font-medium text-[#1a8ad9]">{patient.status}</div>
                          <div className="mt-2 text-[11px] text-slate-400">{patient.date}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">🔔</div>
                      <h3 className="text-2xl font-bold text-slate-800">Notificaciones</h3>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {notifications.map((note, index) => (
                      <div key={note} className="flex items-start gap-2 rounded-xl bg-slate-50 p-2 text-sm text-slate-700">
                        <span className="mt-0.5 text-[#1a8ad9]">{index % 2 === 0 ? '✓' : '•'}</span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-4 w-full rounded-xl bg-[#1f9ce7] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-105">Agregar nota +</button>
                </section>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">🩺</div>
                  <h3 className="text-2xl font-bold text-slate-800">La salud bucal también es prevención.</h3>
                </div>
                <div className="overflow-hidden rounded-[20px] bg-[#dfefff] p-2">
                  <div className="h-44 rounded-[16px] bg-gradient-to-br from-sky-100 to-sky-200" />
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-600">Un recordatorio para pacientes puede hacer la diferencia. Revisa el calendario para reforzar la atención preventiva.</p>
                <button className="mt-4 rounded-xl bg-[#1f9ce7] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:brightness-105">Ver recordatorios</button>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-white p-4 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#ecf7ff] text-xl text-[#1a8ad9]">📊</div>
                    <h3 className="text-2xl font-bold text-slate-800">Resumen del mes</h3>
                  </div>
                  <button className="text-sm font-semibold text-[#1a8ad9]">Ver reportes →</button>
                </div>

                <div className="space-y-4">
                  {monthSummary.map((item, idx) => (
                    <div key={item.label} className="rounded-2xl bg-[#f7fbff] p-3">
                      <div className="flex items-end justify-between">
                        <div className="text-3xl font-extrabold text-slate-800">{item.value}</div>
                        <div className={`text-xs font-semibold ${idx === 0 ? 'text-emerald-600' : idx === 1 ? 'text-emerald-500' : 'text-orange-500'}`}>{item.trend}</div>
                      </div>
                      <div className="mt-1 text-sm text-slate-600">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-6 rounded-[26px] bg-gradient-to-r from-[#6ebff6] to-[#1e9ae7] p-6 text-white shadow-[0_16px_38px_rgba(30,154,231,0.3)]">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-3xl">🦷</div>
                <div>
                  <div className="text-3xl font-black">Tecnología y experiencia</div>
                  <div className="text-xl font-medium text-sky-100">para una mejor sonrisa.</div>
                </div>
              </div>
              <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-2xl text-white">→</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
