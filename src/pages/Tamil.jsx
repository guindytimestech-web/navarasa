import React from "react";
import { Link } from "react-router-dom";
import { TAMIL_STORIES, POETRY } from "../data/content"; // Import Tamil data
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { FileText } from "lucide-react"; // Icon

// Reusable PageWrapper and ContentCard (keep or import)
const PageWrapper = ({ children, title }) => (
  // Using max-w-4xl for better readability of Tamil text
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
     {title && (
        // Added text-center here as well for the main page title
        <h2 className={`text-4xl font-extrabold mb-8 text-center text-[${GT.RED}]`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {title}
        </h2>
      )}
    {children}
  </div>
);

const ContentCard = ({ children, className = "" }) => (
  // Added specific font style for Tamil content within the card
  <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${className}`} style={{ fontFamily: 'system-ui', lineHeight: '1.9' }}>
    {children}
  </div>
);

export default function Tamil() {
  // Find the specific content items by ID
  const story1 = TAMIL_STORIES.find(s => s.id === 'siripin-sakthi');
  const poem = POETRY.find(p => p.id === 'sirippu-kavidhai');
  const story2 = TAMIL_STORIES.find(s => s.id === 'irul');

  return (
    <PageWrapper title="தமிழ் Features">
       <Meta title={`Tamil Section - ${GT.TITLE}`} description={`Tamil stories and poetry from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

      <div className="space-y-10">
        {/* Story 1: சிரிப்பின் சக்தி */}
        {story1 && (
          <ContentCard className="border-t-4 border-red-200">
             {/* Added text-center */}
            <h3 className={`text-3xl font-bold mb-4 text-[${GT.RED}] text-center`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {story1.title}
            </h3>
            {/* Author if available */}
            {/* <p className="text-sm text-gray-500 mb-4 italic">By {story1.author}</p> */}
            <div
              className="prose prose-sm max-w-none text-gray-800 space-y-4"
              dangerouslySetInnerHTML={{ __html: story1.content }}
            />
          </ContentCard>
        )}

        {/* Poem: சிரிப்பு கவிதை */}
        {poem && (
           <ContentCard className="border-t-4 border-red-200 text-center">
             {/* Already text-center due to parent div, but added for explicit clarity */}
            <h3 className={`text-3xl font-bold mb-6 text-[${GT.RED}] text-center`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {poem.title}
            </h3>
             {/* Author if available */}
             {/* <p className="text-sm text-gray-500 mb-6 italic">By {poem.author}</p> */}
            <div
              // Parent div already has text-center
              className="prose prose-sm max-w-none text-gray-800 space-y-5 text-center leading-relaxed"
              dangerouslySetInnerHTML={{ __html: poem.content }}
            />
          </ContentCard>
        )}

        {/* Story 2: இருள் */}
        {story2 && (
          <ContentCard className="border-t-4 border-red-200">
             {/* Added text-center */}
            <h3 className={`text-3xl font-bold mb-2 text-[${GT.RED}] text-center`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
              {story2.title}
            </h3>
             {/* Centered author */}
            <p className="text-sm text-gray-500 mb-4 italic text-center">By {story2.author}</p>
            <div
              className="prose prose-sm max-w-none text-gray-800 space-y-4"
              dangerouslySetInnerHTML={{ __html: story2.content }}
            />
          </ContentCard>
        )}

        {/* Show message if content is missing */}
        {!story1 && !poem && !story2 && (
             <ContentCard>
                <p className="text-center text-gray-600">Tamil content could not be loaded.</p>
             </ContentCard>
        )}
      </div>

       {/* Optional Back Link */}
       <div className="mt-10 text-center md:text-left">
           <Link
             to="/"
             className={`text-sm font-semibold text-[${GT.RED}] hover:underline`}
           >
             ← Back to Home
           </Link>
       </div>
    </PageWrapper>
  );
}