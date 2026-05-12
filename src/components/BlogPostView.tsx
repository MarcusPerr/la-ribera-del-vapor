import type { BlogPost } from "../data/posts";
import { posts } from "../data/posts";

interface BlogPostViewProps {
  post: BlogPost;
  onBack: () => void;
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogPostView({ post, onBack, onSelectPost }: BlogPostViewProps) {
  return (
    <div className="min-h-screen bg-dark-900 pt-20 fade-in">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Volver al blog
        </button>
      </div>

      {/* Hero Image */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/30 to-transparent" />
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-dark-800/80 backdrop-blur-sm rounded-2xl border border-white/5 p-6 sm:p-10 md:p-14">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${post.categoryColor}`}>
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="text-gray-600">·</span>
            <span className="text-gray-500 text-sm">{post.readTime} de lectura</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
            {post.title}
          </h1>

          {/* Excerpt */}
          <div className="bg-primary-900/20 border-l-4 border-primary-600 rounded-r-lg p-4 mb-10">
            <p className="text-primary-200/80 text-sm sm:text-base italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          {/* Content */}
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Disclaimer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">⚖️</span>
                <div>
                  <p className="text-amber-200/80 text-sm leading-relaxed">
                    <strong className="text-amber-300">Aviso Legal:</strong> Este artículo tiene fines exclusivamente informativos y educativos. No constituye asesoramiento legal ni médico. La legislación sobre cannabis y CBD varía según comunidad autónoma. Consulta siempre la normativa vigente y a profesionales cualificados.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="font-display text-xl font-bold text-white mb-6">Artículos Relacionados</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {posts
                .filter((p) => p.id !== post.id && (p.category === post.category || p.featured))
                .slice(0, 4)
                .map((related) => (
                  <button
                    key={related.id}
                    onClick={() => {
                      onSelectPost(related);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-left bg-dark-700/50 rounded-xl border border-white/5 hover:border-primary-700/20 p-4 transition-all group"
                  >
                    <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold text-white ${related.categoryColor} mb-2`}>
                      {related.category}
                    </span>
                    <h4 className="font-display text-sm font-semibold text-white group-hover:text-primary-300 transition-colors line-clamp-2">
                      {related.title}
                    </h4>
                    <p className="text-gray-500 text-xs mt-1">{related.readTime} · {related.date}</p>
                  </button>
                ))}
            </div>
          </div>

          {/* Share & Back */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 bg-primary-700 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg shadow-primary-800/30"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Más artículos
            </button>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>Compartir:</span>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              <button className="p-2 rounded-lg hover:bg-white/10 transition-colors" title="Copiar enlace">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Spacer */}
      <div className="h-20" />
    </div>
  );
}
