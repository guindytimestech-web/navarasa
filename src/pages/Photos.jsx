import React from "react";
import { Link } from "react-router-dom";
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { Camera } from "lucide-react"; // Icon

// Reusable PageWrapper and ContentCard (keep or import)
const PageWrapper = ({ children, title }) => (
  // Using max-w-4xl, adjust if needed for image size
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
     {title && (
        <h2 className={`text-4xl font-extrabold mb-8 text-center md:text-left text-[${GT.RED}]`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
          {title}
        </h2>
      )}
    {children}
  </div>
);

const ContentCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default function Photos() {
  // Image source from the PDF (page 1)
  const photoUrl = "https://i.imgur.com/g8L9qZf.png";

  return (
    <PageWrapper title="Photo Corner">
       <Meta title={`Photo Corner - ${GT.TITLE}`} description={`Featured photo from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

      <ContentCard className="border-t-4 border-red-200">
        <div className="flex items-center gap-3 mb-6">
           <Camera className={`w-7 h-7 text-[${GT.RED}]`} />
           <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
             Featured Photo
           </h3>
         </div>

        {/* Display the image */}
        <div className="mb-4">
           
           <img
             src={photoUrl}
             // You can add your images from public/assets like below
             // src="/assets/photo1.jpg" 
             alt="Featured scene from the Navarasa magazine edition"
             className="w-full h-auto object-cover rounded-lg shadow-md"
             // Add error handling for images
             onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/CCCCCC/FFFFFF?text=Image+Not+Found"; }}
           />
        </div>
         <p className="text-xs text-gray-500 text-center italic">
            Uncaptioned photo from the NAVARASA Sep-Oct 2021 edition.
         </p>

      </ContentCard>

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
