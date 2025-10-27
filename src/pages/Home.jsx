import React from "react";
import { Link } from "react-router-dom"; // Import Link
import Meta from "../components/Meta"; // Assuming Meta component exists
import { GT } from "../config/constants"; // Assuming GT constants are correctly imported
import { BookOpen, Feather, Sparkles, Award, ChevronRight, Quote, Calendar, FileText, Users, TrendingUp, Laugh } from "lucide-react"; // Import necessary icons

// Reusable PageWrapper (Optional - Can remove if Home is the only page using it this way)
const PageWrapper = ({ children }) => (
  <main className="w-full">{children}</main> // Simple wrapper
);

// Reusable ContentCard (Keep or import)
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
    {children}
  </article>
);


export default function Home() {
  const heroImageUrl = "https://i.imgur.com/g8L9qZf.png";

  return (
    <PageWrapper>
      <Meta title={`${GT.TITLE} — ${GT.SUBTITLE}`} description={GT.SITE_DESC} />

      {/* Hero Section - Full Height with Centering */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-red-50 to-gray-100 px-4 sm:px-6">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-200 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>

        {/* Centered Content Grid */}
        <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-12 items-center py-12"> {/* Added w-full and py-12 */}
          
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="w-4 h-4 text-red-600" />
               {/* Corrected Date from PDF */}
              <span className="text-sm font-medium text-gray-700">Edition No. 1 • September 24, 2021</span> 
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-4 text-gray-900 leading-tight" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                <span className="bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                  {GT.TITLE}
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-gray-700 mb-3" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                {GT.SUBTITLE}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Official Magazine of CEG, ACT, SAP
              </p>
            </div>

            {/* HASYA Feature Box */}
            <div className="relative bg-gradient-to-r from-red-50 to-white border-l-4 border-red-600 p-6 rounded-r-xl shadow-lg">
               {/* Decorative blur element */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full blur-2xl opacity-30 z-0"></div> 
              <div className="relative z-10"> {/* Content above blur */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                    {/* Icon updated */}
                    <Laugh className="w-6 h-6 text-white" /> 
                  </div>
                  <h2 className="text-3xl font-black text-red-600" style={{fontFamily: "'Montserrat', sans-serif"}}>
                    HASYA
                  </h2>
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  The Laughter Edition
                </p>
                <p className="text-gray-600 text-sm"> {/* Slightly smaller text */}
                  Exploring the universal language of joy and connection through 43 muscles that light up when we laugh.
                </p>
              </div>
            </div>

            {/* Guindy Times Legacy Badge */}
            <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 shadow-sm">
              <Award className="w-10 h-10 text-red-600" />
              <div>
                <p className="font-bold text-gray-900">30 Years of Excellence</p>
                <p className="text-sm text-gray-600">The Guindy Times Publishing Legacy</p>
              </div>
            </div>

            {/* CTA Links (Changed from button to Link) */}
            <div className="flex flex-wrap gap-4 pt-4">
               {/* Changed to Link */}
              <Link 
                to="/articles" 
                className="group inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <BookOpen className="w-5 h-5" />
                Explore Articles
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
               {/* Changed to Link */}
              <Link 
                to="/poetry" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold rounded-lg border-2 border-gray-300 shadow-md hover:border-red-600 hover:text-red-600 transition-all duration-300 hover:scale-105"
              >
                <Feather className="w-5 h-5" />
                Discover Poetry
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex items-center justify-center animate-fade-in-slow">
            <div className="relative">
              <div className="absolute -inset-4 bg-red-200 rounded-2xl blur-2xl opacity-30 animate-pulse"></div> {/* Adjusted blur positioning */}
              
              <img 
                src={heroImageUrl} 
                alt="Navarasa Magazine - Laughter Edition" 
                className="relative w-full max-w-lg h-auto object-contain rounded-2xl shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500" 
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/500x600/B30000/FFFFFF?text=NAVARASA+Scene"; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Other Sections --- */}
      
      {/* Feature Quote Section */}
      <section className="relative py-16 px-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        {/* Decorative elements */}
         <div className="absolute inset-0 opacity-10 z-0">
           <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl"></div>
         </div>
         {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto mb-5 text-red-400 opacity-50" />
          <blockquote className="text-3xl md:text-4xl font-light italic mb-6 text-red-50 leading-relaxed">
            "Laughter is not a mere sound; it is a connection made audible."
          </blockquote>
          <p className="text-xl text-gray-300 font-medium">
            — A. Mrithula, Architecture, 3rd Year
          </p>
        </div>
      </section>

      {/* About This Edition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            About This Edition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HASYA explores the science, emotion, and cultural significance of laughter across multiple dimensions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Changed button to Link */}
          <ContentCard className="animate-fade-in" style={{animationDelay: '100ms'}}>
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">The Science</h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Discover how mirror neurons make laughter contagious, engaging 43 muscles... Learn about endorphins...
            </p>
            <Link to="/articles" className="inline-flex items-center text-red-600 font-semibold hover:underline text-sm">
              Read Scientific Articles
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </ContentCard>

           {/* Changed button to Link */}
          <ContentCard className="animate-fade-in" style={{animationDelay: '200ms'}}>
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <Feather className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">The Poetry</h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Experience laughter through verse with "Edge of Silence, Laughter" and Tamil poetry exploring different types of smiles...
            </p>
            <Link to="/poetry" className="inline-flex items-center text-red-600 font-semibold hover:underline text-sm">
              Explore Poetic Works
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </ContentCard>

           {/* Changed button to Link */}
          <ContentCard className="animate-fade-in" style={{animationDelay: '300ms'}}>
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-7 h-7 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Cultural Stories</h3>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm">
              Follow Arun's journey discovering the power of genuine laughter in Tamil storytelling. Plus film reviews...
            </p>
            <Link to="/tamil" className="inline-flex items-center text-red-600 font-semibold hover:underline text-sm">
              Read தமிழ் Stories
              <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </ContentCard>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-br from-red-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-black text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              By the Numbers
            </h2>
            <p className="text-lg text-gray-600">The fascinating metrics behind laughter and our reach</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center transform hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="text-6xl font-black text-red-600 mb-3">43</div>
              <p className="text-lg font-bold text-gray-900 mb-2">Muscles Engaged</p>
              <p className="text-sm text-gray-600">When you laugh genuinely</p>
            </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center transform hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="text-6xl font-black text-red-600 mb-3">10k+</div>
              <p className="text-lg font-bold text-gray-900 mb-2">Audience Reach</p>
              <p className="text-sm text-gray-600">Students & Alumni network</p>
            </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center transform hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="text-6xl font-black text-red-600 mb-3">30</div>
              <p className="text-lg font-bold text-gray-900 mb-2">Years Strong</p>
              <p className="text-sm text-gray-600">The Guindy Times legacy</p>
            </div>
             <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-lg text-center transform hover:scale-105 transition-transform animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="text-6xl font-black text-red-600 mb-3">9</div>
              <p className="text-lg font-bold text-gray-900 mb-2">Rasas Explored</p>
              <p className="text-sm text-gray-600">Emotions across editions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        <div className="flex items-center justify-between mb-12 animate-fade-in">
          <div>
            <h2 className="text-4xl font-black text-gray-900 mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              What's Coming Up
            </h2>
            <p className="text-gray-600">Mark your calendars for these exciting events</p>
          </div>
           {/* Changed button to Link */}
          <Link to="/events" className="hidden md:inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
            View All Events
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { date: "Oct 10-11, 2025", title: "EEE Symposium Ripples", dept: "Electrical Engineering" },
            { date: "Oct 14-15, 2025 (Tent.)", title: "Texplosion & Festido", dept: "Textile Technology" },
            { date: "Oct 14-15, 2025 (Tent.)", title: "Celestia Symposium", dept: "Geo Informatics" }
          ].map((event, idx) => (
             // Added staggered animation
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in" style={{animationDelay: `${100 * (idx + 1)}ms`}}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-red-600 mb-1">{event.date}</p>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600">{event.dept}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
         {/* Mobile link */}
         <div className="text-center mt-8 md:hidden">
            <Link to="/events" className="inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
             View All Events
             <ChevronRight className="w-5 h-5" />
           </Link>
         </div>
      </section>

      {/* Innovation Spotlight */}
      <section className="bg-gray-900 text-white py-20 overflow-hidden"> {/* Added overflow-hidden */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Text side with animation */}
            <div className="animate-fade-in"> 
              <div className="inline-flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full mb-6">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-bold">Innovation Feature</span>
              </div>
              <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Where Does Anna University Stand in Today's Technology Landscape?
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Anna University is emerging as a hub of innovation with patents spanning aerospace, pharmaceuticals, textiles, energy storage, and AI diagnostics...
              </p>
               {/* Changed button to Link */}
              <Link to="/innovation" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-all hover:scale-105 shadow-lg">
                Explore Innovations
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
             {/* Grid side with animation */}
            <div className="grid grid-cols-2 gap-4 animate-fade-in" style={{animationDelay: '200ms'}}>
              {[
                { icon: "🚁", title: "Advanced Drone Landing", field: "Aerospace" },
                { icon: "💊", title: "Drug Delivery Systems", field: "Pharmaceuticals" },
                { icon: "🔋", title: "Lithium-Sulphur Batteries", field: "Energy Storage" },
                { icon: "🤖", title: "AI Diagnostic Platforms", field: "Healthcare Tech" }
              ].map((item, idx) => (
                <div key={idx} className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-colors transform hover:scale-105 duration-300">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-400">{item.field}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 animate-fade-in">
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-10 md:p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="absolute -inset-4 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          <div className="relative z-10">
            <Users className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-5 opacity-90" />
            <h3 className="text-3xl font-black mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
              Want Your Department's Events Featured?
            </h3>
            <p className="text-lg md:text-xl mb-8 text-red-50 max-w-2xl mx-auto">
              Contact us to reach 10,000+ students and alumni through the Guindy Times network.
            </p>
            <a 
              href="mailto:contact@guindytimes.com" 
              className="inline-flex items-center gap-2 bg-white text-red-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Contact The Guindy Times
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* --- Inline Styles for Animations (Keep or move to CSS/Tailwind config) --- */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-slow {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; animation-fill-mode: both; } /* Added fill-mode */
        .animate-fade-in-slow { animation: fade-in-slow 1.2s ease-out forwards; animation-fill-mode: both; } /* Added fill-mode */
        
        /* Ensure elements are initially hidden if animating */
         .animate-fade-in, .animate-fade-in-slow {
           opacity: 0; 
         }
      `}</style>
    </PageWrapper>
  );
}

