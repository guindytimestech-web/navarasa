import React from "react";
import { Link } from "react-router-dom";
import { GT } from "../config/constants"; // Import constants
import Meta from "../components/Meta"; // For setting page title
import { Puzzle } from "lucide-react"; // Icon

// Reusable PageWrapper and ContentCard (keep or import)
const PageWrapper = ({ children, title }) => (
  // Using max-w-6xl for potentially wider content like Sudoku grid
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
   { sign: "♐ SAGITTARIUS", text: "\"Adventure\" is just code for \"irresponsible\"" }, // Fixed quote escaping
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
    [6, 0, 0, 8, 0, 4, 2, 9, 0], // Corrected middle row based on visual PDF
    [0, 0, 0, 0, 0, 0, 0, 0, 7], // Corrected 6th row
    [0, 0, 4, 0, 0, 3, 0, 0, 0],
    [6, 1, 0, 0, 8, 0, 0, 0, 0],
    [8, 0, 0, 0, 0, 3, 0, 0, 0], // Corrected last row
];
// Note: Sudoku numbers were visually transcribed, double-check if needed.


export default function Fun() {
  return (
    <PageWrapper title="Fun Corner">
       <Meta title={`Fun Corner - ${GT.TITLE}`} description={`Comics, horoscopes, and puzzles from the ${GT.TITLE} ${GT.SUBTITLE} edition.`} />

      <div className="space-y-10">
        {/* Comic Corner */}
        <ContentCard className="border-t-4 border-red-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            COMIC CORNER
          </h3>
           {/* Basic Comic Representation */}
          <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
             <div className="p-4 border-b-2 border-gray-200 bg-gray-50">
               <p className="text-xs text-gray-500 mb-2 italic">Invigilator sees Tukka staring at his blank paper</p>
               <div className="flex justify-between items-center text-sm mb-2">
                 <span>👨‍🏫 INVIGILATOR: "Tukka! Start writing!"</span>
                 <span>😫 TUKKA</span>
                 <span>🧞 RAAGA</span>
               </div>
               <p className="text-right text-sm font-semibold text-blue-700 bg-blue-100 p-2 rounded-md inline-block ml-auto">
                 TUKKA: "Yes, sir! I already know everything in my head!"
               </p>
             </div>
             <div className="p-4 bg-gray-50">
                <div className="flex justify-between items-center text-sm mb-2">
                 <span>😁 TUKKA: "See? I've answered all questions!"</span>
                 <span>🧞‍♂️ RAAGA</span>
               </div>
               <p className="text-right text-sm font-semibold text-purple-700 bg-purple-100 p-2 rounded-md inline-block ml-auto">
                 RAAGA: "At this rate, you'll pass as a motivational poster!"
               </p>
             </div>
           </div>
        </ContentCard>

        {/* Horoscopes */}
        <ContentCard className="border-t-4 border-red-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Syllabus of Destiny
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {horoscopes.map((h, index) => (
              <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-100 text-center">
                 {/* Increased font size for sign */}
                <p className={`font-bold text-base text-[${GT.RED}] mb-1`}>{h.sign}</p>
                 {/* Increased font size for text */}
                <p className="text-sm text-gray-700">{h.text}</p>
              </div>
            ))}
          </div>
        </ContentCard>

        {/* Sudoku */}
        <ContentCard className="border-t-4 border-red-200">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center md:text-left" style={{ fontFamily: "'Montserrat', sans-serif" }}>
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
        </ContentCard>
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
