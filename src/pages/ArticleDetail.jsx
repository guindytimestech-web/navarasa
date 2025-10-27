import React from "react";
import { useParams, Link } from "react-router-dom";
import { ARTICLES } from "../data/content"; // Make sure path is correct
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // Assuming Meta component exists

// Reusable PageWrapper and ContentCard (keep or import)
// Define them here if not imported globally or from a shared file
const PageWrapper = ({ children }) => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">{children}</div>
);

const ContentCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default function ArticleDetail() {
  const { articleId } = useParams(); // Use articleId to match App.jsx route

  // --- Add Logging ---
  console.log("--- ArticleDetail Debug ---");
  console.log("1. articleId from URL:", JSON.stringify(articleId), `(Type: ${typeof articleId})`); 
  console.log("2. Imported ARTICLES:", ARTICLES); 
  if (Array.isArray(ARTICLES)) {
     console.log("3. IDs available in ARTICLES array:", ARTICLES.map(a => JSON.stringify(a.id))); 
  } else {
     console.log("3. ARTICLES is not an array or is empty!");
  }
  // --- End Logging ---
  
  // Find article using the correct param name (articleId)
  const article = ARTICLES.find(a => a.id === articleId); 

  // --- Add Logging ---
  console.log("4. Result of ARTICLES.find():", article); 
  console.log("--------------------------");
  // --- End Logging ---

  // If article not found
  if (!article) {
    return (
      <PageWrapper>
        <ContentCard>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Article Not Found</h2>
            <p className="text-gray-600 mb-6">
              Sorry, we couldn't find the article with ID: "{articleId}". Please check the URL or the data source.
            </p>
            <Link 
              to="/articles" 
              // Use arbitrary value for GT Red
              className={`inline-block px-4 py-2 rounded-md font-medium text-white bg-[#B30000] hover:bg-red-700 transition`}
            >
              Back to Articles
            </Link>
          </div>
        </ContentCard>
      </PageWrapper>
    );
  }

  // If article is found, render it
  return (
    <PageWrapper>
      {/* Set page title using Meta component */}
      <Meta title={`${article.title} — ${GT.TITLE}`} description={article.excerpt} /> 
      
      <ContentCard className="border-t-4 border-red-200">
        {/* Article Header */}
        <div className="mb-6 pb-4 border-b border-gray-200">
           <h1 className={`text-3xl md:text-4xl font-extrabold mb-2 text-[#B30000]`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
             {article.title}
           </h1>
           <p className="text-sm text-gray-500 italic">By {article.author}</p>
        </div>

        {/* Article Content */}
        {/* Render the HTML content safely */}
        {/* Added prose classes for Tailwind typography styling */}
        <div
          // Added prose-sm for smaller text, lg:prose-base for larger screens
          className="prose prose-sm lg:prose-base max-w-none text-gray-800" 
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />
        
         {/* Back Link */}
         <div className="mt-8 pt-6 border-t border-gray-200">
           <Link 
             to="/articles" 
             // Use arbitrary value for GT Red
             className={`text-sm font-semibold text-[#B30000] hover:underline`}
           >
             ← Back to Articles
           </Link>
         </div>
      </ContentCard>
    </PageWrapper>
  );
}

// Note: For the `prose` classes to work well, you might need the Tailwind Typography plugin:
// 1. npm install -D @tailwindcss/typography
// 2. Add `require('@tailwindcss/typography')` to the plugins array in your tailwind.config.js
