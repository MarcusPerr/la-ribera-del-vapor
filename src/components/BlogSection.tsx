import { useState } from "react";
import { posts, categories, type BlogPost } from "../data/posts";

interface BlogSectionProps {
  onSelectPost: (post: BlogPost) => void;
}

export default function BlogSection({ onSelectPost }: BlogSectionProps) {
  const [activeCategory, setActiveCategory] = useState("todos");

  const filteredPosts =
    activeCategory === "todos"
      ? posts
      : posts.filter((p) => p.category.toLowerCase() === activeCategory);

  const featuredPosts = posts.filter((p) => p.featured);

  return (
    <section id="articulos" className="py-20 dot-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary-400 font-medium text-sm tracking-wider uppercase">
            Nuestro Blog
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
            Artículos y Publicaciones
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Guías, análisis, ciencia y actualidad legal sobre vaporización de hierbas secas, cannabis y CBD.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat.slug
                  ? "bg-primary-700 text-white shadow-lg shadow-primary-700/30"
                  : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Featured Posts */}
        {activeCategory === "todos" && featuredPosts.length > 0 && (
          <div className="mb-16">
            <h3 className="font-display text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <svg className="w-5 h-5 text-primary-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Destacados
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <FeaturedCard key={post.id} post={post} onClick={() => onSelectPost(post)} />
              ))}
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts
            .filter((p) => activeCategory !== "todos" || !p.featured)
            .map((post) => (
              <BlogCard key={post.id} post={post} onClick={() => onSelectPost(post)} />
            ))}
          {activeCategory === "todos" &&
            featuredPosts.map((post) => (
              <BlogCard key={`reg-${post.id}`} post={post} onClick={() => onSelectPost(post)} />
            ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No hay artículos en esta categoría todavía.</p>
          </div>
        )}
      </div>
    </section>
  );
}

function FeaturedCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-dark-700/50 rounded-2xl overflow-hidden border border-white/5 hover:border-primary-700/30 card-hover backdrop-blur-sm"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700 via-transparent to-transparent" />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold text-white bg-primary-700/90 backdrop-blur-sm">
          ⭐ {post.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime} lectura</span>
          </div>
          <span className="text-primary-400 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Leer más
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </button>
  );
}

function BlogCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group text-left bg-dark-700/30 rounded-xl overflow-hidden border border-white/5 hover:border-primary-700/20 card-hover backdrop-blur-sm"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-700/80 via-transparent to-transparent" />
        <span className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${post.categoryColor}/90 backdrop-blur-sm`}>
          {post.category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
          <svg className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </button>
  );
}
