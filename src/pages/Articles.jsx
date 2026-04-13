import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { BookOpen, User, Clock, ArrowLeft, Search, Filter, ChevronRight, Sparkles, Quote } from "lucide-react";
import Meta from "../components/Meta"; // Assuming Meta component exists
import { GT } from "../config/constants"; // Assuming GT constants are imported

// Sample articles based on PDF content (as provided in your content.js)
const ARTICLES = [
  {
    id: "laughter-contagious",
    title: "When Laughter Becomes Contagious",
    author: "A. Mrithula",
    department: "Architecture",
    year: "3rd year",
    excerpt: "Laughter is not a mere sound; it is a connection made audible. From our very first giggle as infants, it has the uncanny ability to draw others in...",
    readTime: "5 min read",
    category: "Science",
    featured: true
  },
  {
    id: "music-of-soul",
    title: "Laughter: The Music of the Soul",
    author: "Muni Chandrasekar Reddy K",
    department: "Geo Informatics",
    year: "3rd year",
    excerpt: "Charlie Chaplin famously said, 'A day without laughter is a day wasted.' Laughter is a pure and innocent emotion, difficult to fake or suppress...",
    readTime: "4 min read",
    category: "Philosophy",
    featured: true
  },
  {
    id: 'au-innovation',
    title: "Where Does Anna University Stand in Today's Technology Landscape?",
    author: 'Kaamila Maisarah M',
    department: 'Chemical Engineering',
    year: '3rd year',
    type: 'article',
    excerpt: 'Anna University is fast emerging as a hub of innovation with patents and funded projects spanning a wide spectrum.',
    readTime: '6 min read',
    category: 'Innovation',
    featured: false,
    content: `<p>Details about innovation...</p>` // Placeholder content
  }
];

// Styled ContentCard
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${className}`}>
    {children}
  </article>
);

// Main Articles Page Component
export default function Articles() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Derive categories dynamically from ARTICLES data, plus 'All'
  const categories = ["All", ...new Set(ARTICLES.map(a => a.category).filter(Boolean))];

  const filteredArticles = ARTICLES.filter(article => {
    // Ensure properties exist before calling toLowerCase
    const titleMatch = article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
    const authorMatch = article.author?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false;
    const matchesSearch = titleMatch || authorMatch;
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50">
      <Meta title={`Articles - ${GT.TITLE}`} description={`Read articles from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>

        <div className="relative max-w-6xl mx-auto z-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5 text-sm">
            <BookOpen className="w-4 h-4" />
            <span className="font-semibold">Insights & Analysis</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Articles
          </h1>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto">
            Exploring the depths of HASYA through science, philosophy, and lived experiences from the NAVARASA edition.
          </p>
        </div>
      </section>

      {/* Main Content Area with Padding */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

        {/* Search and Filter Bar */}
        <div className="mb-10 p-4 bg-white rounded-lg border border-gray-200 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Box */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              <input
                type="text"
                placeholder="Search articles by title or author..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="relative flex items-center border border-gray-300 rounded-lg px-3 bg-white">
              <Filter className="w-5 h-5 text-gray-400 mr-2 pointer-events-none" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="appearance-none w-full border-none focus:ring-0 text-gray-700 font-medium bg-transparent cursor-pointer py-2.5 text-sm pr-8"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat || 'Uncategorized'}</option>
                ))}
              </select>
              {/* Custom arrow indicator */}
              <ChevronRight className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none rotate-90" />
            </div>
          </div>

          {/* Results Count */}
          <p className="text-xs text-gray-500 pt-1">
            Showing <span className="font-bold text-red-600">{filteredArticles.length}</span> article{filteredArticles.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* --- Display ALL Filtered Articles using the detailed card style --- */}
        {filteredArticles.length > 0 ? (
          <section>
            <h2 className="sr-only">
              Article List
            </h2>

            {/* Grid for all articles */}
            <div className="grid md:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <ContentCard key={article.id} className="flex flex-col text-center">
                  {/* Visual Area */}
                  <div className="relative h-40 bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center rounded-t-lg -m-6 mb-6">
                    {article.featured && (
                      <div className="absolute top-2 left-2 z-10">
                        <span className="bg-red-600 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <Quote className="w-16 h-16 text-red-300 opacity-75" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow space-y-3 px-6 pb-6">
                    <div className="flex items-center justify-center flex-wrap gap-2 text-xs">
                      <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full font-semibold">
                        <BookOpen className="w-3 h-3" />
                        {article.category || 'General'}
                      </span>
                      <span className="flex items-center gap-1 text-gray-500">
                        <Clock className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 leading-tight line-clamp-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                      {article.title}
                    </h3>

                    {/* Centered Author Info */}
                    <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                      <User className="w-3.5 h-3.5" />
                      <span className="font-medium">{article.author}</span>
                      {article.department && article.year && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span>{article.department}, {article.year}</span>
                        </>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Read More Link */}
                  <div className="mt-auto pt-4 px-6 pb-6 border-t border-gray-100 text-left">
                    <Link
                      to={`/articles/${article.id}`}
                      className="group inline-flex items-center gap-1.5 text-red-600 font-bold hover:gap-2 transition-all text-sm hover:underline"
                    >
                      Read Full Article
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </ContentCard>
              ))}
            </div>
          </section>
        ) : (
          // No Results Message
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className={`inline-flex items-center gap-2 bg-[${GT.RED}] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm`}
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Back to Home Link */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}