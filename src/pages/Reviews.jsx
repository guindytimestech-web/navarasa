import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for Back Button
import { Film, BookOpen, Star, ArrowLeft, Filter, ThumbsUp, Eye, Sparkles, ChevronDown, ChevronUp } from "lucide-react"; // Added ChevronDown/Up
import Meta from "../components/Meta"; // Assuming Meta component exists
import { GT } from "../config/constants"; // Assuming GT constants are imported
// Removed external REVIEWS import if you have one, using inline definition based on previous context.
// If your main data source is content.js, import { REVIEWS } from "../data/content"; instead

// Mock constants (keep if not importing from constants.js)
// const GT = {
//   RED: "#B30000",
//   LOGO: "https://guindytimes.com/static/mainsite/images/gttrans.png",
//   TITLE: "NAVARASA",
//   SUBTITLE: "Nine Feelings, Infinite Insights"
// };

// --- Reviews Data based on PDF ---
const REVIEWS = [
  {
    id: 'lootcase-2020', // Use string ID
    title: "Lootcase",
    category: "Movie",
    year: "2020",
    author: "GAYATHRI - CIVIL 3RD YEAR", // Author from PDF
    rating: 4.5, // Example rating
    genre: "Comedy",
    excerpt: "If you think comedy today is all loud jokes and slapstick, Lootcase will surprise you.",
    content: `<p>If you think comedy today is all loud jokes and slapstick, Lootcase will surprise you. This Hindi film follows Nandan, an ordinary printing press employee, whose life changes overnight when he finds an abandoned suitcase filled with cash. What begins as a stroke of luck soon spirals into chaos, drawing him into a hilarious web of gangsters, politicians, and police officers.</p>
    <p>Kunal Khemu delivers a standout performance, portraying Nandan's simplicity and confusion with ease. The film's strength lies in its clever writing, sharp dialogues, and situational humor, which feels grounded and relatable.</p>
    <p>Lootcase is not just a comedy film; it's a reminder of how a simple story with smart humor can stand out without flashy effects or over-the-top drama. If you want a feel-good film that'll make you laugh till your cheeks hurt, then Lootcase is the perfect choice.</p>`, // Full HTML content
    featured: true // Or false depending on your logic
  },
   {
    id: 'good-omens-book', // Use string ID
    title: "Good Omens",
    category: "Book",
    author: "HARINI - CHEMICAL 3RD YEAR", // Author from PDF
    authors: "Neil Gaiman & Terry Pratchett", // Specific authors of the work
    rating: 5, // Example rating
    genre: "Fantasy Comedy",
    excerpt: "If the end of the world were real, I'd expect chaos, fire, and maybe a few professors handing out assignments until the last second.",
    content: `<p>If the end of the world were real, I'd expect chaos, fire, and maybe a few professors handing out assignments until the last second. But Good Omens imagines it differently: the Apocalypse—with jokes.</p>
    <p>Neil Gaiman and Terry Pratchett take the most serious themes, like Heaven vs. Hell, Good vs. Evil, and give them the most unserious treatment. There's an angel (Aziraphale) who loves rare books and food, a demon (Crowley) who drives too fast and secretly cares for humans, and together they form the strangest yet most relatable pair of "friends." Their mission? Stop the Antichrist from ending the world. The twist? The Antichrist just wants to play with his dog and enjoy childhood.</p>
    <p>The humour isn't loud but sneaks up in clever lines and awkward situations. Beneath it all, the book asks: are we really "good" or "bad," or just people surviving Mondays? Maybe the end of the world isn't as scary as the thought of losing people who truly understand oneself.</p>`, // Full HTML content
    featured: true // Or false depending on your logic
  }
];

// Reusable PageWrapper (keep or import)
const PageWrapper = ({ children, title }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
     {title && (
        <h2 className={`text-4xl font-extrabold mb-8 text-center md:text-left text-[${GT.RED}]`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {title}
        </h2>
      )}
    {children}
  </div>
);

// Styled ContentCard component with hover animation
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </article>
);

// Individual Review Item Component with theme colors and alignment fix
const ReviewItem = ({ review }) => {
  const [expanded, setExpanded] = useState(false);
  const Icon = review.category === "Movie" ? Film : BookOpen;
  // Use GT Red for icon background consistently
  const iconBgColor = `bg-[${GT.RED}]`;
  // Use GT Red for border consistently
  const borderColor = `border-[${GT.RED}]`;

  return (
    <ContentCard className={`border-t-4 ${borderColor}`}>
      {/* Header Section */}
      <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 md:p-8 border-b border-gray-100">
        <div className="flex items-start gap-4"> {/* Use items-start for alignment */}
          <div className={`w-14 h-14 ${iconBgColor} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
            {/* Centered icon */}
            <Icon className="w-7 h-7 text-white" />
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              {/* Category tag using GT Red */}
              <span className={`inline-flex items-center gap-1 bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-bold`}>
                 {review.category} {review.year ? `(${review.year})` : ''}
              </span>
              {review.featured && (
                <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
            </div>

             {/* Title aligned with icon due to flex items-start */}
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {review.title}
            </h3>
             {/* Display specific author if available */}
             <p className="text-sm text-gray-600 font-medium">
               {review.category === "Book" && review.authors ? `By ${review.authors}` : ''}
             </p>
          </div>
        </div>

        {/* Rating Stars */}
        {review.rating && (
          <div className="flex items-center gap-2 mt-4">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.floor(review.rating ?? 0) ? 'text-yellow-400 fill-yellow-400' : (i < (review.rating ?? 0) ? 'text-yellow-400' : 'text-gray-300')}`}
                   fill={i < (review.rating ?? 0) ? 'currentColor' : 'none'}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-gray-800">{review.rating?.toFixed(1)}</span>
            <span className="text-xs text-gray-500">/ 5</span>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4 text-xs">
          <span className="flex items-center gap-1 text-gray-600 font-medium">
            <Eye className="w-3.5 h-3.5" />
            {review.genre || 'General'}
          </span>
          <span className="text-gray-300 hidden sm:inline">•</span>
           {/* Display actual reviewer from PDF data */}
          <span className="text-gray-500">Reviewed by {review.author}</span>
        </div>

        {/* Excerpt */}
        <blockquote className="text-base text-gray-700 font-medium italic mb-6 leading-relaxed border-l-4 border-red-200 pl-4 py-1">
          "{review.excerpt}"
        </blockquote>

        {/* Review Content */}
        <div className={`prose prose-sm max-w-none text-gray-700 ${expanded ? '' : 'line-clamp-5'}`}>
          <div dangerouslySetInnerHTML={{ __html: review.content }} />
        </div>

        {/* Expand/Collapse Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 inline-flex items-center gap-1 text-red-600 font-bold hover:text-red-700 transition-colors text-sm group"
        >
          {expanded ? 'Show Less' : 'Read Full Review'}
           {expanded ? <ChevronUp className="w-4 h-4 transition-transform"/> : <ChevronDown className="w-4 h-4 transition-transform"/> }
        </button>

        {/* Like Button & Footer */}
        <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
          <button className="inline-flex items-center gap-1.5 text-gray-500 hover:text-red-600 transition-colors group text-sm">
            <ThumbsUp className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Helpful</span>
          </button>
          <span className="text-xs text-gray-400 font-medium bg-gray-100 px-2 py-0.5 rounded">
            {review.genre || 'General'}
          </span>
        </div>
      </div>
    </ContentCard>
  );
};

// Main Reviews Page Component
export default function Reviews() {
  const [filter, setFilter] = useState("All");

  // Dynamic categories based on imported data
  const categories = ["All", ...new Set(REVIEWS.map(r => r.category).filter(Boolean))];

  const filteredReviews = filter === "All"
    ? REVIEWS
    : REVIEWS.filter(r => r.category === filter);

  return (
    <main className="min-h-screen bg-gray-50"> {/* Use light gray bg */}
        <Meta title={`Reviews - ${GT.TITLE}`} description={`Movie and book reviews from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mb-12">
        {/* Decorative elements */}
         <div className="absolute inset-0 opacity-10 z-0">
           <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
         </div>
         {/* Content - Centered */}
        <div className="relative max-w-6xl mx-auto z-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5 text-sm">
            <Star className="w-4 h-4" />
            <span className="font-semibold">GT Reviews</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Reviews & Critiques
          </h1>
          <p className="text-lg sm:text-xl text-red-100 max-w-2xl mx-auto"> {/* Added mx-auto */}
            Exploring laughter through cinema and literature—honest reviews from the NAVARASA community.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <PageWrapper> {/* Use PageWrapper for consistent padding */}
        {/* Filter Bar */}
        <div className="mb-10 p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-500 flex-shrink-0" />
              <span className="text-sm font-semibold text-gray-700 mr-2">Filter by:</span>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-sm ${
                      filter === cat
                        ? `bg-red-600 text-white ring-2 ring-offset-1 ring-red-400`
                        : 'bg-white text-gray-600 border border-gray-300 hover:border-red-500 hover:text-red-600'
                    }`}
                  >
                    {cat || 'Uncategorized'}
                  </button>
                ))}
              </div>
            </div>
             <p className="text-xs text-gray-500 text-right shrink-0">
               Showing <span className="font-bold text-red-600">{filteredReviews.length}</span> review{filteredReviews.length !== 1 ? 's' : ''}
             </p>
           </div>
        </div>

        {/* Reviews List */}
        {filteredReviews.length > 0 ? (
          <div className="space-y-8"> {/* Display reviews vertically */}
            {filteredReviews.map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
        ) : (
           // No Results Message
           <div className="text-center py-16">
            <Film className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No reviews found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filter.</p>
            <button
              onClick={() => setFilter("All")}
              className={`inline-flex items-center gap-2 bg-[${GT.RED}] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm`}
            >
              Show All Reviews
            </button>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-16 bg-gradient-to-r from-red-50 to-white border-l-4 border-red-600 p-6 rounded-r-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-2" style={{fontFamily: "'Montserrat', sans-serif"}}>Why Reviews Matter</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            In the HASYA edition, we explore how comedy and laughter transcend mediums—from the silver screen to the printed page.
            Each review celebrates works that remind us of the universal power of humor and human connection.
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link to="/"
             className="inline-flex items-center gap-2 text-gray-600 hover:text-[#B30000] font-semibold transition-colors group text-sm">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </div>
      </PageWrapper>
    </main>
  );
}