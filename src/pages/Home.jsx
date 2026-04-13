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
<section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-red-50 to-white overflow-hidden">
        {/* Subtle animated background elements */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-20 right-20 w-64 h-64 bg-red-200 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-100 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-50 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 lg:py-20 w-full">
          
          {/* Main Masthead with staggered animation */}
          <div className="text-center mb-10 animate-fade-in-up" style={{animationDelay: '200ms'}}>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black mb-4 text-gray-900 leading-none tracking-tight animate-scale-in" style={{ fontFamily: "'Playfair Display', 'Georgia', serif", animationDelay: '300ms' }}>
              <span className="inline-block hover:text-red-600 transition-colors duration-500 cursor-default">
                {GT.TITLE}
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-5 animate-fade-in" style={{animationDelay: '500ms'}}>
              <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-red-600 animate-expand-right"></div>
              <p className="text-xl sm:text-2xl font-serif italic text-gray-700 hover:text-red-600 transition-colors duration-300">
                {GT.SUBTITLE}
              </p>
              <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-red-600 animate-expand-left"></div>
            </div>
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-semibold animate-fade-in" style={{animationDelay: '700ms'}}>
              The Official Magazine of CEG, ACT, SAP
            </p>
          </div>

          {/* Featured Edition - REDESIGNED Card */}
          <div className="max-w-4xl mx-auto mb-10 animate-fade-in-up" style={{animationDelay: '800ms'}}>
            <div className="relative group perspective-1000">
              {/* Glowing border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-2xl opacity-75 group-hover:opacity-100 blur group-hover:blur-md transition duration-500 animate-gradient-x"></div>
              
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                {/* Background Image Placeholder (replace with actual image if desired) */}
                {/* For example: style={{ backgroundImage: "url('/path/to/your-magazine-cover.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-white opacity-40 z-0"></div>
                
                <div className="relative z-10 p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                  
                  {/* "Celebrating 30 Years" badge moved here */}
<div className="flex items-center justify-center mb-8 animate-slide-down">
  <div className="group inline-flex items-center gap-2 bg-white border-2 border-red-600 px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    {/* REMOVED 'animate-pulse-slow' and ADDED 'group-hover:scale-110' for a professional hover effect */}
    <Award className="w-5 h-5 text-red-600 transition-transform duration-300 group-hover:scale-110" />
    <span className="text-red-600 font-bold text-sm uppercase tracking-wider">Celebrating 30 Years</span>
  </div>
</div>

                  <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight bg-gradient-to-r from-red-700 to-red-900 bg-clip-text text-transparent" style={{fontFamily: "'Montserrat', sans-serif"}}>
                    HASYA
                  </h2>
                  <p className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                    The Laughter Edition
                  </p>
                  <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 max-w-2xl">
                    Exploring the universal language of joy and connection through 43 muscles that light up when we laugh. Featuring scientific research, poetry, cultural stories, and the neuroscience of happiness.
                  </p>
                  
                  {/* Mini tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold hover:bg-red-100 transition-colors">
                      <Sparkles className="w-3 h-3" />
                      Science
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold hover:bg-red-100 transition-colors">
                      <Feather className="w-3 h-3" />
                      Poetry
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold hover:bg-red-100 transition-colors">
                      <FileText className="w-3 h-3" />
                      Culture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons with consistent hover effects */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in-up" style={{animationDelay: '1000ms'}}>
            <Link 
              to="/articles" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <BookOpen className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Read Articles</span>
              <ChevronRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            
            <Link 
              to="/poetry" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl border-2 border-red-600 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <Feather className="w-5 h-5 relative z-10 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Browse Poetry</span>
            </Link>
            
            <Link 
              to="/tamil" 
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 font-bold rounded-xl border-2 border-red-600 shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1" // Same style as poetry button
            >
              <div className="absolute inset-0 bg-red-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <FileText className="w-5 h-5 relative z-10 group-hover:text-white group-hover:rotate-12 transition-all duration-300" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">தமிழ் Section</span>
            </Link>
          </div>

          {/* Quick Stats with counter animation */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-5xl mx-auto pt-6 border-t-2 border-gray-200 animate-fade-in-up" style={{animationDelay: '1200ms'}}>
            {[
              { number: "43", label: "Muscles Engaged", delay: "0ms" },
              { number: "10k+", label: "Readers", delay: "100ms" },
              { number: "30", label: "Years Strong", delay: "200ms" },
              { number: "9", label: "Rasas Explored", delay: "300ms" }
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="group text-center p-4 bg-white rounded-xl border-2 border-gray-100 hover:border-red-600 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{animationDelay: stat.delay}}
              >
                <div className="text-3xl lg:text-4xl font-black text-red-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-semibold group-hover:text-red-600 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- Inline Styles for Animations (Keep or move to CSS/Tailwind config) --- */}
      <style>{`
        /* Keyframe Definitions */
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes expand-right {
          from { width: 0; }
          to { width: 5rem; } /* 5rem = w-20 */
        }
        @keyframes expand-left {
          from { width: 0; }
          to { width: 5rem; } /* 5rem = w-20 */
        }
        @keyframes gradient-x {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(-10%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.2; }
          80% { transform: scale(2); opacity: 0; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Animation Utility Classes */
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-slide-down { animation: slide-down 0.6s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.7s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .animate-expand-right { animation: expand-right 0.8s 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        .animate-expand-left { animation: expand-left 0.8s 0.5s cubic-bezier(0.25, 1, 0.5, 1) forwards; }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-blob {
          animation: blob 7s infinite ease-in-out;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Animation Delays */
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Perspective for 3D hover */
        .perspective-1000 { perspective: 1000px; }

        /* Initial animation state */
        .animate-fade-in,
        .animate-fade-in-up,
        .animate-slide-down,
        .animate-scale-in {
          opacity: 0;
          animation-fill-mode: forwards;
        }
        .animate-expand-right,
        .animate-expand-left {
          width: 0;
          animation-fill-mode: forwards;
        }
      `}</style>

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

