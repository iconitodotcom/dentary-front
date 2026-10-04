import { useState } from 'react'
import DentaryBtn from './buttons/dentaryBtn'
import DentaryHambBtn from './buttons/DentaryHambBtn'

const navItems = ['Inicio', 'Nosotros', 'Tratamientos', 'Testimonios', 'Contacto']

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
            <div className="container-shell flex items-center justify-between py-2">
                <div className="flex items-center gap-3">
                    <div>
                        <div className="font-dentary leading-none">
                            <h1 className="text-[3rem] font-black">Dentary</h1>
                            <p className="text-xs tracking-[-0.06em]">Odontología Especializada <span className="text-dentary-blue-dark">Plus</span></p>
                        </div>
                    </div>
                </div>

                <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-700 lg:flex">
                    {navItems.map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="relative transition hover:text-dentary-blue
                            after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0
                            after:bg-dentary-blue after:transition-all after:duration-300
                            hover:after:w-full">
                            {item}
                        </a>
                    ))}
                </nav>

                <div className="hidden lg:block">
                    <DentaryBtn>
                        Iniciar sesión
                    </DentaryBtn>
                </div>

                <div className="lg:hidden">
                    <DentaryHambBtn
                        isOpen={menuOpen}
                        onClick={() => setMenuOpen((prev) => !prev)}
                    />
                </div>
            </div>

            <div className={`overflow-hidden transition-all duration-300 lg:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="container-shell border-t border-slate-200 bg-white/95 px-5 py-4 shadow-md">
                    <nav className="flex flex-col gap-2 text-sm font-semibold text-slate-700">
                        {navItems.map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setMenuOpen(false)}
                                className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-dentary-blue"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="mt-4 border-t border-slate-200 pt-4">
                        <DentaryBtn>
                            Iniciar sesión
                        </DentaryBtn>
                    </div>
                </div>
            </div>
        </header>
    )
}
