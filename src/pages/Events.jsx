import React from "react";
import { Link } from "react-router-dom";
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { CalendarCheck, CalendarClock } from "lucide-react"; // Icons for events

// Reusable PageWrapper and ContentCard (keep or import)
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

const ContentCard = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-lg p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

// Data extracted from the PDF
const pastEvents = [
  { date: "Sept 16", title: "Society of Industrial Engineers inauguration" },
  { date: "Sept 17", title: "SAP Investiture + Manufacturing Dept. inauguration & freshers'" },
  { date: "Sept 18", title: "Geo Informatics freshers' day Aurora" },
  { date: "Sept 18", title: "SAP Coffee Club inauguration" },
];

const upcomingEvents = [
  // Corrected years based on PDF context
  { date: "Oct 10-11, 2025", title: "EEE Symposium Ripples" }, 
  { date: "Oct 14-15, 2025 (tentative)", title: "Textile Symposium Texplosion & Festido" },
  { date: "Oct 14-15, 2025 (tentative)", title: "Geo Informatics Symposium Celestia" },
  { date: "Oct 14-15, 2025 (tentative)", title: "National Space Week celebrations" },
];


export default function Events() {
  return (
    <PageWrapper title="Campus Events & Updates">
       <Meta title={`Campus Events - ${GT.TITLE}`} description={`Past and upcoming events at Anna University featured in ${GT.TITLE}.`} />

      {/* Grid layout for Past and Upcoming Events */}
      <div className="grid md:grid-cols-2 gap-8 mb-10">
        
        {/* Past Events Card */}
        <ContentCard className="border-t-4 border-gray-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 flex items-center gap-3" style={{fontFamily: "'Montserrat', sans-serif"}}>
             <CalendarCheck className="w-6 h-6 text-gray-500" />
             What You Might've Missed
          </h3>
          <div className="space-y-4">
            {pastEvents.map((event, index) => (
              <div key={index} className="border-l-4 border-gray-300 pl-4 py-1.5 bg-gray-50 rounded-r-md">
                <p className="font-semibold text-gray-700 text-sm">{event.date}</p>
                <p className="text-gray-600 text-sm">{event.title}</p>
              </div>
            ))}
          </div>
        </ContentCard>

        {/* Upcoming Events Card */}
        <div className={`bg-[${GT.RED}] rounded-lg shadow-lg p-6 md:p-8 text-white`}>
          <h3 className="text-2xl font-bold mb-5 flex items-center gap-3" style={{fontFamily: "'Montserrat', sans-serif"}}>
            <CalendarClock className="w-6 h-6 text-white" />
             What's Coming Up
          </h3>
           <p className="text-xs mb-5 text-red-100">(as of 23rd Sept, 2025)</p>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border-l-4 border-white/50">
                <p className="font-semibold text-sm">{event.date}</p>
                <p className="text-sm text-red-50">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Note */}
      <ContentCard className="bg-red-50 border border-red-200 text-center">
         <p className={`text-sm text-[${GT.RED}] italic`}>
            "Want your department's flagship events to reach 10,000+ students and alumni? Contact us and we'll feature them in our newsletter."
         </p>
         <a href="mailto:contact@guindytimes.com" className={`mt-3 inline-block px-4 py-1.5 text-xs rounded-md font-medium text-white bg-[${GT.RED}] hover:bg-red-700 transition`}>
            Contact GT
         </a>
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
