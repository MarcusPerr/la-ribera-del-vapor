import { legalDisclaimer } from "../data/posts";

export default function LegalSection() {
  return (
    <section id="legal-section" className="py-20 bg-dark-800/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-amber-400 font-medium text-sm tracking-wider uppercase">
            Información Legal
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Legalidad y Responsabilidad
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Nos tomamos muy en serio el marco legal. Aquí encontrarás información actualizada sobre la normativa vigente.
          </p>
        </div>

        {/* Main Legal Info */}
        <div className="space-y-6">
          {/* Disclaimer Banner */}
          <div className="bg-amber-900/20 border border-amber-700/30 rounded-2xl p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <span className="text-3xl">⚖️</span>
              <div>
                <h3 className="font-display text-xl font-bold text-amber-200 mb-3">
                  Aviso Legal General
                </h3>
                <div
                  className="text-amber-100/70 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: legalDisclaimer }}
                />
              </div>
            </div>
          </div>

          {/* Legal Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Cannabis Recreativo */}
            <div className="bg-dark-700/50 rounded-xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-red-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white">Cannabis Recreativo</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  No legalizado en España para uso recreativo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  Consumo en vía pública: infracción administrativa (601-30.000€)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  Cultivo para autoconsumo en privado: zona gris legal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Cannabis Social Clubs: operan bajo normativa específica
                </li>
              </ul>
            </div>

            {/* CBD */}
            <div className="bg-dark-700/50 rounded-xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white">CBD y Cáñamo</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Cáñamo industrial (&lt;0.2% THC): cultivo regulado permitido
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Productos tópicos de CBD: legales como cosméticos
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Aceite de CBD oral: regulación en evolución
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Flores de CBD: venta bajo normativa específica
                </li>
              </ul>
            </div>

            {/* Vaporizadores */}
            <div className="bg-dark-700/50 rounded-xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white">Vaporizadores</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Dispositivos legales, vendidos como aromaterapia
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  La posesión del dispositivo no constituye infracción
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Uso en público: puede equipararse a consumo
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Recomendado uso en espacios privados
                </li>
              </ul>
            </div>

            {/* Uso Terapéutico */}
            <div className="bg-dark-700/50 rounded-xl border border-white/5 p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-emerald-900/30 flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-display text-lg font-bold text-white">Uso Terapéutico</h3>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Medicamentos con cannabis: requerimiento de receta
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Sativex® y Epidyolex®: aprobados en España
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Autocultivo terapéutico: sin regulación específica
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary-400 mt-1">•</span>
                  Clubes terapéuticos: iniciativas emergentes
                </li>
              </ul>
            </div>
          </div>

          {/* Final Note */}
          <div className="bg-dark-700/30 rounded-xl border border-primary-800/20 p-6 text-center">
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mx-auto">
              <strong className="text-gray-300">Nota:</strong> La información legal contenida en este blog es orientativa y se actualiza periódicamente. 
              La normativa puede variar según comunidad autónoma y está sujeta a cambios. 
              Para asesoramiento legal específico, consulta siempre con un abogado especializado. 
              Última actualización: Enero 2025.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
