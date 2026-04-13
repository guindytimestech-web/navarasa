import React from "react";
import { Link } from "react-router-dom";
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { Puzzle, Smile, ArrowLeft } from "lucide-react"; // Updated icons

// Reusable PageWrapper: Now just for layout
const PageWrapper = ({ children }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
    {children}
  </div>
);

// Reusable ContentCard: Styled as the outer shell with consistent hover
const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${className}`}>
    {children}
  </article>
);

// Horoscope data
const horoscopes = [
  { sign: "♈ ARIES", text: "Human alarm clock that never sleeps" },
  { sign: "♉ TAURUS", text: "Expert in napping, eating, and stubbornness" },
  { sign: "♊ GEMINI", text: "Two personalities, double the drama" },
  { sign: "♋ CANCER", text: "Crying at commercials since birth" },
  { sign: "♌ LEO", text: "Born to shine, annoy, and demand applause" },
  { sign: "♍ VIRGO", text: "Obsessively correcting your life choices" },
  { sign: "♎ LIBRA", text: "Can't pick a side... or a Netflix show" },
  { sign: "♏ SCORPIO", text: "Intense, mysterious, and secretly judging you" },
  { sign: "♐ SAGITTARIUS", text: "\"Adventure\" is just code for \"irresponsible\"" },
  { sign: "♑ CAPRICORN", text: "Climbing the ladder while silently judging sloths" },
  { sign: "♒ AQUARIUS", text: "Too weird to care, too smart to explain" },
  { sign: "♓ PISCES", text: "Lost in dreams... and your DMs" },
];

// Sudoku Data - Array representing the grid (0 for empty cells)
const sudokuGrid = [
  [0, 0, 0, 9, 6, 8, 3, 0, 0],
  [9, 3, 0, 0, 0, 0, 4, 0, 0],
  [0, 8, 2, 4, 7, 0, 0, 3, 1],
  [0, 0, 0, 0, 5, 9, 0, 0, 0],
  [6, 0, 0, 8, 0, 4, 2, 9, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 7],
  [0, 0, 4, 0, 0, 3, 0, 0, 0],
  [6, 1, 0, 0, 8, 0, 0, 0, 0],
  [8, 0, 0, 0, 0, 3, 0, 0, 0],
];

export default function Fun() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <Meta title={`Fun Corner - ${GT.TITLE}`} description={`Comics, horoscopes, and puzzles from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

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
             <Smile className="w-4 h-4" />
             <span className="font-semibold">Fun Corner</span>
           </div>
           <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-3 text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
             HASYA Humor & Games
           </h1>
           <p className="text-lg sm:text-xl text-red-100 max-w-3xl mx-auto">
             A dose of laughter, a sprinkle of destiny, and a brain-teaser to brighten your day!
           </p>
         </div>
       </section>
      
      <PageWrapper>
        <div className="space-y-10">
          {/* Comic Corner */}
          <ContentCard className="border-t-4 border-red-600">
            <div className="p-6 md:p-8"> {/* Inner padding for content */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                COMIC CORNER
              </h3>
              {/* Images side-by-side, responsive */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <img src="/comic1.jpg" alt="Comic 1" className="w-full sm:w-1/2 h-auto object-contain rounded-lg shadow-md" />
                <img src="/comic2.jpg" alt="Comic 2" className="w-full sm:w-1/2 h-auto object-contain rounded-lg shadow-md" />
              </div>
            </div>
          </ContentCard>

          {/* Horoscopes */}
          <ContentCard className="border-t-4 border-red-600">
            <div className="p-6 md:p-8"> {/* Inner padding for content */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Syllabus of Destiny
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {horoscopes.map((h, index) => (
                  <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-100 text-center">
                    <p className={`font-bold text-base text-[${GT.RED}] mb-1`}>{h.sign}</p>
                    <p className="text-sm text-gray-700">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>

          {/* Sudoku */}
          <ContentCard className="border-t-4 border-red-600">
            <div className="p-6 md:p-8"> {/* Inner padding for content */}
              <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                SUDOKU
              </h3>
              <div className="flex justify-center">
                <table className="border-collapse border-2 border-gray-700">
                  <tbody>
                    {sudokuGrid.map((row, i) => (
                      <tr key={i} className={`${(i + 1) % 3 === 0 && i < 8 ? 'border-b-2 border-gray-700' : ''}`}>
                        {row.map((cell, j) => (
                          <td 
                            key={`${i}-${j}`} 
                            className={`w-9 h-9 sm:w-10 sm:h-10 border border-gray-400 text-center align-middle font-semibold text-lg ${ (j + 1) % 3 === 0 && j < 8 ? 'border-r-2 border-gray-700' : '' }`}
                          >
                            {cell !== 0 ? cell : ''}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-500 text-center mt-4">Solve the puzzle! (Non-interactive)</p>
            </div>
          </ContentCard>
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
