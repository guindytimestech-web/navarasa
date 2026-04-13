import React from "react";
import { Link } from "react-router-dom";
import { TAMIL_STORIES, POETRY } from "../data/content"; // Import Tamil data
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { FileText, BookOpen, ArrowLeft } from "lucide-react"; // Import new icons

// Reusable PageWrapper: Now just for layout
const PageWrapper = ({ children }) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
    {children}
  </div>
);

// Reusable ContentCard: Styled as the outer shell
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </article>
);

export default function Tamil() {
  // Find the specific content items by ID
  const story1 = TAMIL_STORIES.find(s => s.id === 'siripin-sakthi');
  const poem = POETRY.find(p => p.id === 'sirippu-kavidhai');
  const story2 = TAMIL_STORIES.find(s => s.id === 'irul');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Meta title={`Tamil Section - ${GT.TITLE}`} description={`Tamil stories and poetry from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

        {/* Hero Header */}
        <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-16 sm:py-20 px-4 sm:px-6 overflow-hidden mb-12">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10 z-0">
            <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          {/* Content */}
         <div className="relative max-w-4xl mx-auto z-10 animate-fade-in text-center">
           <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-5 text-sm">
             <BookOpen className="w-4 h-4" />
             <span className="font-semibold">தமிழ் பிரிவு (Tamil Section)</span>
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
             தமிழ் Features
           </h1>
           <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
             Stories and poetry from the HASYA edition.
           </p>
         </div>
       </section>
      
      <PageWrapper>
        <div className="space-y-10">
          {/* Story 1: சிரிப்பின் சக்தி */}
          {story1 && (
            <ContentCard className="border-t-4 border-red-600">
              <div className="p-6 md:p-8" style={{ fontFamily: 'system-ui', lineHeight: '1.9' }}>
                <h3 className={`text-3xl font-bold mb-4 text-[${GT.RED}] text-center`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {story1.title}
                </h3>
                {/* <p className="text-sm text-gray-500 mb-4 italic">By {story1.author}</p> */}
                <div
                  className="prose prose-sm max-w-none text-gray-800 space-y-4"
                  dangerouslySetInnerHTML={{ __html: story1.content }}
                />
              </div>
            </ContentCard>
          )}

          {/* Story 2: இருள் */}
          {story2 && (
            <ContentCard className="border-t-4 border-red-600">
              <div className="p-6 md:p-8" style={{ fontFamily: 'system-ui', lineHeight: '1.9' }}>
                <h3 className={`text-3xl font-bold mb-2 text-[${GT.RED}] text-center`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {story2.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4 italic text-center">By {story2.author}</p>
                <div
                  className="prose prose-sm max-w-none text-gray-800 space-y-4"
                  dangerouslySetInnerHTML={{ __html: story2.content }}
                />
              </div>
            </ContentCard>
          )}

          {/* Show message if content is missing */}
          {!story1 && !poem && !story2 && (
              <ContentCard>
                <div className="p-6 md:p-8">
                  <p className="text-center text-gray-600">Tamil content could not be loaded.</p>
                </div>
              </ContentCard>
          )}
        </div>

        {/* Optional Back Link */}
        <div className="mt-12 text-center">
            <Link
              to="/"
              className={`inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors group`}
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
        </div>
      </PageWrapper>
    </main>
  );
}