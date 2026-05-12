interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 hero-gradient" />
      {/* Secondary overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-dark-900/60" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary-500/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary-700/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-900/40 border border-primary-700/30 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
            <span className="text-primary-300 text-sm font-medium">
              Blog especializado en vaporización
            </span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            La Ribera{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-primary-400 to-emerald-400">
              del Vapor
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-4 max-w-2xl">
            Tu guía de referencia sobre{" "}
            <strong className="text-white">vaporización de hierbas secas</strong>, cannabis y CBD. 
            Información rigurosa, guías prácticas y análisis imparciales sobre el mundo del vapor.
          </p>

          <p className="text-sm text-gray-400 mb-10 max-w-xl">
            Compromiso con la información veraz, responsable y dentro del marco legal vigente. 
            Todo lo que necesitas saber para una experiencia segura y consciente.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onExplore}
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary-800/30 hover:shadow-primary-600/40"
            >
              Explorar Artículos
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                const el = document.getElementById("legal-section");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all backdrop-blur-sm"
            >
              <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Info Legal
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/10 max-w-lg">
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-white">50+</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Artículos</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-white">8</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Guías</p>
            </div>
            <div>
              <p className="font-display text-2xl sm:text-3xl font-bold text-white">100%</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">Legal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
