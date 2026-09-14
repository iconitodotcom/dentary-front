import DentaryBtn from "./buttons/dentaryBtn"

const navItems = ['Inicio', 'Nosotros', 'Tratamientos', 'Testimonios', 'Contacto']

export default function Header() {
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

                <DentaryBtn>
                    Iniciar sesión
                </DentaryBtn>
            </div>
        </header>
    )
}
