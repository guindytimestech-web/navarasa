import React from "react";
import { Link } from "react-router-dom";
// Use the ARTICLES array from content.js which should contain the innovation article
import { ARTICLES } from "../data/content"; 
import { GT } from "../config/constants"; 
import Meta from "../components/Meta"; 
import { Award, ArrowLeft, TrendingUp, Sparkles } from "lucide-react"; // Added TrendingUp, Sparkles

// Reusable PageWrapper (keep or import)
const PageWrapper = ({ children }) => (
  // Use max-w-4xl for better article readability
  <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">{children}</main> 
);

// Styled ContentCard component with hover animation
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </article>
);

export default function Innovation() {
  // Find the innovation article by ID
  const article = ARTICLES.find(a => a.id === 'au-innovation');

  // Handle case where article might not be found
  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
         <Meta title={`Innovation Article Not Found - ${GT.TITLE}`} />
         <div className="text-center p-10 bg-white rounded-lg shadow-md max-w-lg mx-auto">
             <h2 className="text-2xl font-bold mb-4 text-red-600">Article Not Found</h2>
             <p className="text-gray-600 mb-6">
               Sorry, the innovation article could not be found. It might be missing from the data source.
             </p>
             <Link
               to="/articles"
               className={`inline-block px-5 py-2 rounded-md font-medium text-white bg-[${GT.RED}] hover:bg-red-700 transition`}
             >
               Back to Articles
             </Link>
         </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50"> {/* Light gray background */}
       <Meta title={`Innovation at AU - ${GT.TITLE}`} description={article.excerpt} />

       {/* Hero Header */}
       <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mb-12">
         {/* Decorative elements */}
         <div className="absolute inset-0 opacity-10 z-0">
           <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
           <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
         </div>
         {/* Content */}
        <div className="relative max-w-6xl mx-auto z-10 animate-fade-in text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5 text-sm">
            <TrendingUp className="w-4 h-4" />
            <span className="font-semibold">Innovation Spotlight</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            AU Technology Landscape
          </h1>
           {/* Use excerpt for subtitle */}
          <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto"> 
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <PageWrapper>
        <ContentCard className="border-t-4 border-[#B30000]">
           {/* Article Header */}
          <div className="mb-6 pb-4 border-b border-gray-200">
             <h1 className={`text-3xl font-extrabold mb-2 text-[#B30000]`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
               {article.title}
             </h1>
             <p className="text-sm text-gray-500 italic">By {article.author}</p>
          </div>

          {/* Introduction Quote/Highlight */}
          <blockquote className={`border-l-4 border-[#B30000] pl-4 italic text-lg text-gray-800 font-semibold my-6 py-2 bg-red-50 rounded-r-md`}>
             "Anna University is fast emerging as a hub of innovation, with patents and funded projects spanning a wide spectrum of technologies that promise real-world impact."
          </blockquote>

          {/* Article Content */}
           {/* Ensure content.js HTML is well-structured */}
           {/* Example: Use <h4> for section titles and <p> for text */}
           {/* <div class="innovation-section"><h4>🚁 Aerospace</h4><p>Details...</p></div> */}
          <div
            className="prose prose-sm md:prose-base max-w-none text-gray-700 space-y-5 mt-6 mb-8" 
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Concluding Highlight Box */}
           <div className={`bg-[#B30000] text-white p-6 rounded-lg mt-8 shadow-inner`}>
             <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-red-100 flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg leading-relaxed font-semibold text-red-50">
                  Collectively, these innovations highlight Anna University's expanding role... positioning the institution at the forefront of India's intellectual property and innovation.
                </p>
             </div>
           </div>

           {/* Back Link */}
           <div className="mt-8 pt-6 border-t border-gray-200">
             <Link
               to="/articles" // Link back to the main articles list if appropriate
               className={`text-sm font-semibold text-[#B30000] hover:underline inline-flex items-center gap-1 group`}
             >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
               Back to Articles 
             </Link>
           </div>
        </ContentCard>
      </PageWrapper>
    </main>
  );
}