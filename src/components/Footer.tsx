export default function Footer() {
  return (
    <footer className="bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 2V6M12 2V6M8.5 2V6M7 8h10a2 2 0 012 2v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a2 2 0 012-2zm4 4v4m-2-2h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  La Ribera del Vapor
                </h3>
                <p className="text-[10px] text-primary-400 font-medium tracking-wider uppercase">
                  Blog de Vaporización
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Tu fuente de información de confianza sobre vaporización de hierbas secas, 
              cannabis y CBD. Contenido riguroso, responsable y actualizado.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-700/30 flex items-center justify-center text-gray-400 hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-700/30 flex items-center justify-center text-gray-400 hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-primary-700/30 flex items-center justify-center text-gray-400 hover:text-primary-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4">Secciones</h4>
            <ul className="space-y-3">
              {[
                { label: "Guías de Vaporización", href: "#" },
                { label: "Análisis de Vaporizadores", href: "#" },
                { label: "CBD", href: "#" },
                { label: "Ciencia y Salud", href: "#" },
                { label: "Legalidad", href: "#" },
                { label: "Temperaturas", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-300 text-sm transition-colors flex items-center gap-2"
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Suscríbete para recibir los últimos artículos y novedades directamente en tu correo.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-3 bg-dark-900 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
              />
              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-600 text-white px-4 py-3 rounded-xl text-sm font-semibold transition-colors"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-xs">
              © 2025 La Ribera del Vapor. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-6 text-xs text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Contacto
              </a>
            </div>
          </div>
          <p className="text-gray-600 text-[10px] mt-4 text-center">
            Este blog no promueve el consumo de sustancias ilegales. Toda la información se proporciona con fines educativos e informativos dentro del marco legal vigente.
          </p>
        </div>
      </div>
    </footer>
  );
}
