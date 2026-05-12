import { useState, useCallback, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import BlogSection from "./components/BlogSection";
import BlogPostView from "./components/BlogPostView";
import LegalSection from "./components/LegalSection";
import Footer from "./components/Footer";
import { type BlogPost } from "./data/posts";

type View = "home" | "post";
type Section = "inicio" | "articulos" | "guias" | "legal" | "ciencia";

export default function App() {
  const [view, setView] = useState<View>("home");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [currentSection, setCurrentSection] = useState<Section>("inicio");
  const blogRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  const handleSelectPost = useCallback((post: BlogPost) => {
    setSelectedPost(post);
    setView("post");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleBack = useCallback(() => {
    setView("home");
    setSelectedPost(null);
    window.scrollTo({ top: 0 });
  }, []);

  const handleLogoClick = useCallback(() => {
    setView("home");
    setSelectedPost(null);
    setCurrentSection("inicio");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavigate = useCallback((section: string) => {
    setCurrentSection(section as Section);

    if (section === "inicio") {
      setView("home");
      setSelectedPost(null);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (section === "articulos") {
      setView("home");
      setSelectedPost(null);
      setTimeout(() => {
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (section === "legal") {
      setView("home");
      setSelectedPost(null);
      setTimeout(() => {
        legalRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (section === "guias") {
      setView("home");
      setSelectedPost(null);
      setTimeout(() => {
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (section === "ciencia") {
      setView("home");
      setSelectedPost(null);
      setTimeout(() => {
        blogRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, []);

  // Handle scroll to top on view change
  useEffect(() => {
    if (view === "home") {
      document.title = "La Ribera del Vapor — Blog sobre Vaporización de Hierbas Secas";
    } else if (selectedPost) {
      document.title = `${selectedPost.title} | La Ribera del Vapor`;
    }
  }, [view, selectedPost]);

  return (
    <div className="min-h-screen bg-dark-900">
      <Header
        onNavigate={handleNavigate}
        currentSection={currentSection}
        onLogoClick={handleLogoClick}
      />

      {view === "post" && selectedPost ? (
        <BlogPostView post={selectedPost} onBack={handleBack} />
      ) : (
        <>
          {/* Hero */}
          <Hero
            onExplore={() => {
              setCurrentSection("articulos");
              setTimeout(() => {
                blogRef.current?.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          />

          {/* Introduction */}
          <section className="py-16 bg-dark-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                Bienvenido a <span className="text-primary-400">La Ribera del Vapor</span>
              </h2>
              <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
                Somos un blog independiente dedicado a la difusión de información rigurosa y responsable 
                sobre la vaporización de hierbas secas. Creemos en el derecho a la información veraz y en 
                la reducción de daños como filosofía fundamental. Todos nuestros contenidos son originales, 
                revisados cuidadosamente y respetuosos con el marco legal vigente en España.
              </p>

              {/* Feature Cards */}
              <div className="grid sm:grid-cols-3 gap-6 mt-12">
                <div className="bg-dark-700/30 border border-white/5 rounded-xl p-6 hover:border-primary-700/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-display text-white font-semibold mb-2">Guías Completas</h3>
                  <p className="text-gray-400 text-sm">Desde principiantes hasta expertos, tenemos la guía que necesitas.</p>
                </div>
                <div className="bg-dark-700/30 border border-white/5 rounded-xl p-6 hover:border-primary-700/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-white font-semibold mb-2">Análisis Rigurosos</h3>
                  <p className="text-gray-400 text-sm">Comparativas y reseñas basadas en experiencia real y datos.</p>
                </div>
                <div className="bg-dark-700/30 border border-white/5 rounded-xl p-6 hover:border-primary-700/20 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-amber-900/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-white font-semibold mb-2">100% Legal</h3>
                  <p className="text-gray-400 text-sm">Compromiso total con la legalidad y la información responsable.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <div ref={blogRef}>
            <BlogSection onSelectPost={handleSelectPost} />
          </div>

          {/* CBD Highlight */}
          <section className="py-20 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-gradient-to-r from-primary-900/40 to-emerald-900/30 rounded-2xl border border-primary-700/20 p-8 sm:p-12 relative overflow-hidden">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                
                <div className="relative z-10 max-w-2xl">
                  <span className="text-primary-300 text-sm font-medium tracking-wider uppercase">
                    Especial CBD
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2 mb-4">
                    ¿Sabías que el CBD es legal en España?
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    El CBD (cannabidiol) derivado del cáñamo industrial con menos de 0.2% de THC tiene un marco legal 
                    específico en España. Los productos tópicos son legales, y el cáñamo industrial se cultiva bajo 
                    regulación europea. Sin embargo, es fundamental conocer las normativas actuales para un consumo 
                    responsable y dentro de la ley.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-white/5 rounded-lg px-4 py-3">
                      <p className="text-primary-300 font-display text-xl font-bold">&lt;0.2%</p>
                      <p className="text-gray-400 text-xs">Límite legal THC</p>
                    </div>
                    <div className="bg-white/5 rounded-lg px-4 py-3">
                      <p className="text-primary-300 font-display text-xl font-bold">20%+</p>
                      <p className="text-gray-400 text-xs">CBD en flores</p>
                    </div>
                    <div className="bg-white/5 rounded-lg px-4 py-3">
                      <p className="text-primary-300 font-display text-xl font-bold">34-46%</p>
                      <p className="text-gray-400 text-xs">Biodisponibilidad vía vaporización</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Legal Section */}
          <div ref={legalRef}>
            <LegalSection />
          </div>

          {/* Newsletter Section */}
          <section className="py-20 dot-pattern">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary-900/30 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-white mb-4">
                Mantente Informado
              </h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                Suscríbete a nuestra newsletter y recibe los últimos artículos, guías y novedades 
                del mundo de la vaporización directamente en tu correo.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="flex-1 px-5 py-3.5 bg-dark-700/50 border border-white/10 rounded-xl text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-500 hover:to-primary-600 text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-primary-800/30 whitespace-nowrap"
                >
                  Suscribirse
                </button>
              </form>
              <p className="text-gray-600 text-xs mt-4">
                Sin spam. Puedes darte de baja en cualquier momento. Respetamos tu privacidad.
              </p>
            </div>
          </section>

          {/* Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
