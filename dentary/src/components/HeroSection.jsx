import heroImg from '../assets/dentary_hero.png'
import DentaryBtn from './buttons/dentaryBtn'
import DentaryBorderBtn from './buttons/DentaryBorderBtn'

const quickBadges = [
  { label: 'Tecnología de vanguardia', icon: '◎' },
  { label: 'Profesionales especializados', icon: '✦' },
  { label: 'Atención personalizada', icon: '☼' },
  { label: 'Ambiente cómodo', icon: '◌' },
]

export default function HeroSection(){
    return (
        <section className="relative overflow-hidden bg-[#f3f7ff] pb-12 pt-8 md:pb-16 md:pt-10">
            <div className="container-shell px-5 md:px-8 md:py-6">
                {/* Imagen de fondo */}
                <img 
                    src={heroImg}
                    alt="Paciente sonriendo en consulta con dentista"
                    className="hidden absolute right-0 top-0 h-full w-[65%] object-cover object-center
                    opacity-20 md:block md:w-[65%] md:opacity-100"
                />
                {/* Capa que mezcla la imagen con el fondo */}
                <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#f3f7ff] via-[#f3f7ff]/40 via-20% to-transparent"></div>
                {/* Contenido del Hero */}
                <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 xl:max-w-7xl">
                    <div className="max-w-xl xl:max-w-2xl"> 
                        <p className="tracking-[0.22rem] text-[0.8rem] font-extrabold uppercase text-dentary-blue-dark"> Sonrisas que transforman </p>
                        <div className="space-y-5 pt-3 md:pt-5">
                            <h1 className="max-w-2xl text-4xl font-black leading-[0.96] tracking-[-0.07em] rext-slate-900 md:text-[4.15rem]">
                                Tu salud bucal <br /> 
                                en las <span className="text-dentary-blue-dark">mejores manos</span>
                            </h1>
                           <p className="max-w-lg text-lg leading-8 text-slate-600">
                                En Dentary Plus cuidamos tu sonrisa con technologia avanzada, tratamientos 
                                especializados y un trato humano que te hará sentir en confianza.
                           </p>
                        </div>
                       
                        <div className="flex flex-wrap item-center gap-4 pt-3 md:pt-5">
                            <DentaryBtn> Agenda tu cita </DentaryBtn>
                            <DentaryBorderBtn> Conoce más </DentaryBorderBtn>
                        </div>

                        <div className="flex flex-wrap gap-3 pt-3 md:pt-5">
                            {quickBadges.map((badge) => (
                                <div className="flex">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-[15px] font-semibold text-slate-600">
                                        <span className="text-dentary-blue-dark">{badge.icon}</span>
                                    </div>
                                    <p className="text-sm ps-4 content-center">{badge.label}</p>
                               </div>
                            ))}
                        </div>

                    </div>
                </div>

                <div className="absolute bottom-5 right-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-9 backdrop-blur-sm shadow-xl/30">
                    <div className="flex w-12 item-center justify-center rounded-flull bg-[var(--dentary-blue-soft)] text-xl font-bold text-[var(--dentary-blue)]">
                    ✓
                    </div>
                    <div>
                        <div className="text-lg font-bold text-slate-800">Más de 10 años</div>
                        <div className="text-[10px] uppercase tracking-[0.18rem] text-slate-500 ">Cuidando sonrisas</div>
                    </div>
                </div>
            </div>
        </section>
    )
}


//             <div className="absolute -bottom-5 right-6 flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 px-5 py-3 shadow-[0_18px_35px_rgba(15,23,42,0.08)] backdrop-blur-sm">
//               <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--dentary-blue-soft)] text-xl font-bold text-[var(--dentary-blue)]">
//                 ✓
//               </div>
//               <div>
//                 <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Más de 10 años</div>
//                 <div className="text-lg font-bold text-slate-800">Cuidando sonrisas</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
