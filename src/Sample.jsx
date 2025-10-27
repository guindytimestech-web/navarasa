import React, { useState } from "react";
import {
  Menu, X, BookOpen, Film, Feather, Calendar, Laugh, Sparkles,
  Award, FileText, Puzzle, Camera 
} from "lucide-react";

// --- Google Font Setup ---
// For this theme to work, add this to your public/index.html <head>
/*
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
*/

// --- Guindy Times Official Color ---
const GT_NAV_COLOR = "bg-[#B30000]";
const GT_ACCENT_TEXT = "text-[#B30000]";
const GT_ACCENT_BORDER = "border-[#B30000]";
const GT_ACCENT_BG = "bg-[#B30000]";

// --- All Sections from the PDF ---
const sections = [
  { id: "home", name: "Home", icon: Sparkles },
  { id: "articles", name: "Articles", icon: BookOpen },
  { id: "reviews", name: "Reviews", icon: Film },
  { id: "poetry", name: "Poetry", icon: Feather },
  { id: "innovation", name: "Innovation", icon: Award },
  { id: "events", name: "Events", icon: Calendar },
  { id: "tamil", name: "Tamil", icon: FileText },
  { id: "fun", name: "Fun Corner", icon: Puzzle },
  { id: "photos", name: "Photo Corner", icon: Camera },
];

// --- Page Components (Styled for GT Light Theme) ---

const HomePage = () => (
  <div className="min-h-screen bg-gray-100 text-gray-800">
    {/* Hero Section */}
    <div className="relative bg-white text-gray-900 py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="inline-block border border-gray-300 px-6 py-2 rounded-full mb-6">
          <span className="text-sm font-medium text-gray-600 tracking-wide">30 Years of The Guindy Times</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
          NAVARASA
        </h1>
        <p className="text-2xl md:text-3xl mb-2 text-gray-700" style={{fontFamily: "'Montserrat', sans-serif"}}>
          Nine Feelings, Infinite Insights
        </p>
        <p className="text-xl text-gray-500">Edition No. 1 - 24/09/2021</p>
        
        <div className={`${GT_ACCENT_BG} text-white rounded-lg p-8 mt-12`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Laugh className="w-12 h-12" />
            <h2 className="text-4xl font-bold" style={{fontFamily: "'Montserrat', sans-serif"}}>HASYA (Laughter)</h2>
          </div>
          <p className="text-center text-xl font-medium text-gray-100">
            Exploring the universal language of joy and connection
          </p>
        </div>
      </div>
    </div>

    {/* Feature Quote */}
    <div className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className={`text-3xl md:text-4xl font-light italic mb-4 ${GT_ACCENT_TEXT}`}>
          "Laughter is not a mere sound; it is a connection made audible."
        </p>
        <p className="text-xl text-gray-300">- A. Mrithula, Architecture, 3rd Year</p>
      </div>
    </div>

    {/* Quick Stats */}
    <div className="bg-gray-100 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className={`text-5xl font-bold ${GT_ACCENT_TEXT} mb-2`}>43</div>
          <p className="text-gray-700">Muscles work when you laugh</p>
        </div>
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className={`text-5xl font-bold ${GT_ACCENT_TEXT} mb-2`}>10,000+</div>
          <p className="text-gray-700">Students & Alumni reach</p>
        </div>
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className={`text-5xl font-bold ${GT_ACCENT_TEXT} mb-2`}>30</div>
          <p className="text-gray-700">Years of publishing excellence</p>
        </div>
      </div>
    </div>
  </div>
);

const ArticlesPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        Featured Articles
      </h2>
      
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
          When Laughter Becomes Contagious
        </h3>
        <p className="text-gray-600 mb-6 italic">By A. Mrithula - Architecture, 3rd Year</p>
        
        <div className="prose max-w-none text-gray-700 space-y-4 text-lg">
          <p>Laughter is one of the few things in life that needs no explanation...</p>
          <p>This strange and wonderful reaction does not happen by chance...</p>
          <div className={`bg-red-50 border-l-4 ${GT_ACCENT_BORDER} p-6 rounded-lg my-6`}>
            <p className={`text-xl font-semibold ${GT_ACCENT_TEXT} italic`}>
              "Laughter does more than just entertain; it builds invisible bridges between people..."
            </p>
          </div>
          <p>In a world that often takes itself too seriously... laughter? It echoes.</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>
          Laughter: The Music of the Soul
        </h3>
        <p className="text-gray-600 mb-6 italic">By Muni Chandrasekar Reddy K - Geo Informatics, 3rd Year</p>
        
        <div className="prose max-w-none text-gray-700 space-y-4 text-lg">
          <p>Charlie Chaplin famously said, "A day without laughter is a day wasted."...</p>
          <p>In this world full of hustle and bustle... it's becoming a rarer commodity.</p>
          <div className={`bg-red-50 border-l-4 ${GT_ACCENT_BORDER} p-6 rounded-lg my-6`}>
            <p className={`text-xl font-semibold ${GT_ACCENT_TEXT} italic`}>
              "Learning to laugh is incredibly rewarding; it transforms embarrassment into a memorable story..."
            </p>
          </div>
          <p>At the end of the day, laughter isn't just about jokes or comedy... keep living!</p>
        </div>
      </div>
    </div>
  </div>
);

const ReviewsPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        GT REVIEWS
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gray-800 p-6">
            <Film className={`w-12 h-12 ${GT_ACCENT_TEXT} mb-2`} />
            <h3 className="text-3xl font-bold text-white" style={{fontFamily: "'Montserrat', sans-serif"}}>
              LOOT CASE (2020)
            </h3>
            <p className="text-gray-400">Review by GAYATHRI - CIVIL 3RD YEAR</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">If you think comedy today is all loud jokes...
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">Kunal Khemu delivers a standout performance...
            </p>
            <div className={`bg-red-50 border-l-4 ${GT_ACCENT_BORDER} p-4 rounded-lg mt-4`}>
              <p className={`${GT_ACCENT_TEXT} font-semibold`}>
                A feel-good film that'll make you laugh till your cheeks hurt!
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-gray-800 p-6">
            <BookOpen className={`w-12 h-12 ${GT_ACCENT_TEXT} mb-2`} />
            <h3 className="text-3xl font-bold text-white" style={{fontFamily: "'Montserrat', sans-serif"}}>
              GOOD OMENS
            </h3>
            <p className="text-gray-400">Review by HARINI - CHEMICAL 3RD YEAR</p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">If the end of the world were real... the Apocalypse—with jokes.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">There's an angel (Aziraphale) who loves rare books...
            </p>
            <div className={`bg-red-50 border-l-4 ${GT_ACCENT_BORDER} p-4 rounded-lg mt-4`}>
              <p className={`${GT_ACCENT_TEXT} font-semibold`}>
                The humour isn't loud but sneaks up in clever lines and awkward situations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PoetryPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        Poetry Corner
      </h2>
      
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-8 border-t-4 ${GT_ACCENT_BORDER}">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold text-gray-900" style={{fontFamily: "'Montserrat', sans-serif"}}>
            Edge of Silence, Laughter
          </h3>
          <Feather className={`w-8 h-8 ${GT_ACCENT_TEXT}`} />
        </div>
        <p className="text-gray-600 mb-6 italic">By Viswa S - Ceramic, 3rd Year (IRAVIL RAVANAN)</p>
        
        <div className="space-y-6 text-gray-700 leading-relaxed font-serif text-lg">
          <p className="italic">Laughter is not a sound alone... a nameless song every heart has known.</p>
          <p className="italic">It hides in shadows, waiting still... Like a harvest grown from a tiny seed.</p>
          <div className={`bg-red-50 border-l-4 ${GT_ACCENT_BORDER} p-6 rounded-lg my-6`}>
            <p className={`italic font-semibold ${GT_ACCENT_TEXT}`}>
              It is thunder disguised as a child's cheer... grief's pillow when the heart seeks rest.
            </p>
          </div>
          <p className="italic">It borrows breath, then gives it back... a positive light on the darkest track.</p>
          <p className="italic">It speaks in whispers, it roars in crowds... proof that the moment refused to quit.</p>
          <p className="italic">And when the world grows stressed... stealing the tears from forgotten eyes.</p>
          <p className="italic">It teaches the dying to love the breath... But echoes of laughter forever speak.</p>
          <p className={`italic font-bold text-xl ${GT_ACCENT_TEXT}`}>
            So laugh, not lightly, but fierce, but deep,<br/>
            Let it rattle the cage where your sorrows sleep.
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TamilPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen" style={{fontFamily: 'system-ui'}}>
    <div className="max-w-4xl mx-auto space-y-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        Tamil Section
      </h2>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: "'Montserrat', sans-serif"}}>
          சிரிப்பின் சக்தி
        </h3>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p>அருண் அண்ணா பல்கலைக்கழகத்தில் மூன்றாம் ஆண்டு படிக்கிறான்...</p>
          <div className={`bg-red-50 p-6 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">வகுப்பறையில் – ஆசிரியரின் சொல்</h4>
            <p className={`mt-4 font-semibold ${GT_ACCENT_TEXT}`}>
              "மூன்று நிமிஷம் சிரிச்சா, நம்ம உடம்பில் 43 தசைகள் வேலை செய்கிறது..."
            </p>
          </div>
          <div className={`bg-red-50 p-6 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">பரிட்சைக்காலம் – நண்பனின் அறிவுரை</h4>
            <p className={`mt-4 font-semibold ${GT_ACCENT_TEXT}`}>
              "டா, உலக சுகாதார நிறுவனம் கூட சொல்றாங்க. சிரிப்பு தான் மனஅழுத்தத்துக்கு சிறந்த மருந்து."
            </p>
          </div>
          <div className={`bg-red-50 p-6 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h4 className="text-2xl font-bold mb-4 text-gray-900">செமினார் – மருத்துவரின் அறிவுரை</h4>
            <p className={`mt-4 font-semibold ${GT_ACCENT_TEXT}`}>
              "இப்போ சமூக வலைத்தளங்களில் போலிச் சிரிப்பு அதிகம்... உண்மையான சிரிப்புதான் மனநிலையையும் வாழ்நாளையும் மேம்படுத்தும்."
            </p>
          </div>
          <div className={`${GT_ACCENT_BG} text-white p-8 rounded-lg mt-8`}>
            <p className="text-2xl font-bold text-center">
              வாய் விட்டு சிரித்தால், நோய் விட்டு போகும்.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
          சிரிப்பு கவிதை
        </h3>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-center">
          <p className={`text-xl font-semibold ${GT_ACCENT_TEXT}`}>
            ஆம், உண்மை தானே—<br/>
            மனிதனின் வாழ்வியலில்<br/>
            ஒரு முக்கிய மூலகூரான உணர்வு நகை.
          </p>
          <div className={`bg-red-50 p-6 rounded-lg my-6`}>
            <p className={`text-xl font-bold ${GT_ACCENT_TEXT}`}>
              சிரிப்பு—<br/>
              மெய்யிற்கும் மனத்திற்கும்<br/>
              புத்துணர்ச்சி தரும் ஓர் அரிய மருந்து.
            </p>
          </div>
          <div className="space-y-2">
            <p>உடன் இருப்பேன் என்று ஒருவர் உரைத்த பின்— பெருமூச்சு சிரிப்பு அழகு.</p>
            <p>கூச்சத்தில், வெட்கச் சிரிப்பு அழகு.</p>
            <p>சாதனை பிறகு, பெருமிதச் சிரிப்பு அழகு.</p>
            <p>அன்பு மிகுந்த, காதல் சிரிப்பு அழகு.</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg mt-8`}>
            <p className="text-2xl font-bold text-gray-900 text-center mb-4">
              சிரிப்பே மானுடனின் அழகு...<br/>
              அதற்கு இல்ளை ஓர் அளவு…!
            </p>
          </div>
          <p className={`text-3xl font-bold ${GT_ACCENT_TEXT} mt-6`}>
            சிரித்து மகிழுங்கள் மக்களே…!!!
          </p>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
          இருள்
        </h3>
        <p className="text-gray-600 mb-8 text-center italic text-lg">- இஷ்வா</p>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
          <p className="font-semibold text-gray-900">நடுநிசி நேரம்...</p>
          <p>வானின் இருட்டை, கிழித்து மழை சோவெனத கொட்டித் தீர்ந்தது...</p>
          <div className={`bg-red-50 p-6 rounded-lg my-6 border-l-4 ${GT_ACCENT_BORDER}`}>
            <p>அறிவழகள் நடுத்தர குறிப்ப்றதைச் சேரத்தவன்...</p>
          </div>
          <p>...அங்கே அவ்வீட்டு கேட்டின் நாழப்பாளில் இரத்தக்கறை படிந்திருந்தது.</p>
        </div>
      </div>
    </div>
  </div>
);

const EventsPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-5xl font-bold text-gray-900 mb-12 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        Campus Events & Updates
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3" style={{fontFamily: "'Montserrat', sans-serif"}}>
            <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
            What You Might've Missed
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <p className="font-semibold text-gray-800">Sept 16</p>
              <p className="text-gray-600">Society of Industrial Engineers inauguration</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <p className="font-semibold text-gray-800">Sept 17</p>
              <p className="text-gray-600">SAP Investiture + Manufacturing Dept. inauguration & freshers'</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <p className="font-semibold text-gray-800">Sept 18</p>
              <p className="text-gray-600">Geo Informatics freshers' day Aurora</p>
            </div>
            <div className="border-l-4 border-gray-400 pl-4 py-2">
              <p className="font-semibold text-gray-800">Sept 18</p>
              <p className="text-gray-600">SAP Coffee Club inauguration</p>
            </div>
          </div>
        </div>

        <div className={`${GT_ACCENT_BG} rounded-lg shadow-xl p-8 text-white`}>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3" style={{fontFamily: "'Montserrat', sans-serif"}}>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            What's Coming Up
          </h3>
          <p className="text-sm mb-4 text-gray-100">(as of 23rd Sept, 2025)</p>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="font-semibold">Oct 10-11</p>
              <p className="text-gray-100">EEE Symposium Ripples</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="font-semibold">Oct 14-15 (tentative)</p>
              <p className="text-gray-100">Textile Symposium Texplosion & Festido</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="font-semibold">Oct 14-15 (tentative)</p>
              <p className="text-gray-100">Geo Informatics Symposium Celestia</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <p className="font-semibold">Oct 14-15 (tentative)</p>
              <p className="text-gray-100">National Space Week celebrations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const InnovationPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-10 md:p-14 border-t-4 ${GT_ACCENT_BORDER}">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
          Where Does Anna University Stand in Today's Technology Landscape?
        </h2>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed italic font-semibold">
          Anna University is fast emerging as a hub of innovation...
        </p>
        <p className="text-gray-600 text-sm mb-10">By Kaamila Maisarah M, Chemical Engineering, 3rd year</p>
        
        <div className="space-y-8">
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚁 Aerospace Innovation</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...advanced drone landing system...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💊 Pharmaceuticals</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...stable drug-delivery composition...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🧵 Textiles</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...fibre-based filters and advanced drafting systems...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">⚙️ Mechanical & Manufacturing</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...pneumatic cutters, accident-detection systems...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">📡 Electronics & Communication</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...5G antenna designs, filtennas...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💻 Computing & Deep Tech</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...IoT-integrated EV charging, digital twin frameworks...</p>
          </div>
          <div className={`bg-red-50 p-8 rounded-lg border-l-4 ${GT_ACCENT_BORDER}`}>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🔋 Clean Energy & Water</h3>
            <p className="text-gray-700 text-lg leading-relaxed">...pioneering lithium-sulphur batteries...</p>
          </div>
        </div>
        
        <div className={`${GT_ACCENT_BG} text-white p-10 rounded-lg mt-12`}>
          <p className="text-xl leading-relaxed font-semibold">
            Collectively, these innovations highlight Anna University's expanding role...
          </p>
        </div>
      </div>
    </div>
  </div>
);

const FunCornerPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-6xl mx-auto space-y-12">
      <h2 className="text-5xl font-bold text-gray-900 mb-4 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
        Fun Corner
      </h2>
      
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Montserrat', sans-serif"}}>
          COMIC CORNER
        </h3>
        <div className="border-4 border-gray-200 rounded-lg">
          <div className="p-6 border-b-4 border-gray-200">
            <p className="text-sm font-bold text-gray-500 mb-4">Invigilator sees Tukka staring at his blank paper</p>
            <div className="flex justify-between items-center gap-4">
              <div className="text-center"><p className="text-3xl">👨‍🏫</p><p className="font-bold">INVIGILATOR</p></div>
              <p className="bg-gray-100 p-4 rounded-lg font-semibold text-lg">"Tukka! Start writing!"</p>
              <div className="text-center"><p className="text-3xl">😫</p><p className="font-bold">TUKKA</p></div>
              <div className="text-center"><p className="text-3xl">🧞</p><p className="font-bold">RAAGA</p></div>
            </div>
            <p className="text-right bg-blue-500 text-white p-3 rounded-lg font-semibold mt-4 w-1/2 ml-auto">
              "Yes, sir! I already know everything in my head!"
            </p>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center gap-4">
              <div className="text-center"><p className="text-3xl">😁</p><p className="font-bold">TUKKA</p></div>
              <p className="bg-gray-100 p-4 rounded-lg font-semibold text-lg">"See? I've answered all questions!"</p>
              <div className="text-center"><p className="text-3xl">🧞‍♂️</p><p className="font-bold">RAAGA</p></div>
            </div>
            <p className="text-right bg-blue-500 text-white p-3 rounded-lg font-semibold mt-4 w-1/2 ml-auto">
              "At this rate, you'll pass as a motivational poster!"
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: "'Montserrat', sans-serif"}}>
          Syllabus of Destiny
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♈ ARIES</p><p className="text-sm mt-1 text-gray-700">Human alarm clock...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♉ TAURUS</p><p className="text-sm mt-1 text-gray-700">Expert in napping...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♊ GEMINI</p><p className="text-sm mt-1 text-gray-700">Two personalities...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♋ CANCER</p><p className="text-sm mt-1 text-gray-700">Crying at commercials...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♌ LEO</p><p className="text-sm mt-1 text-gray-700">Born to shine...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♍ VIRGO</p><p className="text-sm mt-1 text-gray-700">Obsessively correcting...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♎ LIBRA</p><p className="text-sm mt-1 text-gray-700">Can't pick a side...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♏ SCORPIO</p><p className="text-sm mt-1 text-gray-700">Intense, mysterious...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♐ SAGITTARIUS</p><p className="text-sm mt-1 text-gray-700">"Adventure" is just code...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♑ CAPRICORN</p><p className="text-sm mt-1 text-gray-700">Climbing the ladder...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♒ AQUARIUS</p><p className="text-sm mt-1 text-gray-700">Too weird to care...</p></div>
          <div className="bg-gray-100 p-4 rounded-lg"><p className={`font-bold ${GT_ACCENT_TEXT}`}>♓ PISCES</p><p className="text-sm mt-1 text-gray-700">Lost in dreams...</p></div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h3 className="text-4xl font-bold text-gray-900 mb-8" style={{fontFamily: "'Montserrat', sans-serif"}}>
          SUDOKU
        </h3>
        <table className="border-collapse border-4 border-gray-300 mx-auto mt-6 bg-white text-black">
          {/* Sudoku Table */}
          <tbody>
            <tr className="border-b-2 border-black"><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">9</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">6</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">8</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">3</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr className="border-b-2 border-black"><td className="w-12 h-12 text-center border border-gray-400 font-bold">9</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">3</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">2</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">4</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">8</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">2</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">4</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">7</td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">3</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">1</td></tr>
            <tr className="border-t-2 border-black border-b-2"><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">5</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">9</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr><td className="w-12 h-12 text-center border border-gray-400 font-bold">6</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">8</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">5</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">4</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">2</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">9</td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr className="border-b-2 border-black"><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">6</td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">8</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-1s-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">7</td></tr>
            <tr><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">4</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">3</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr className="border-t-2 border-black"><td className="w-12 h-12 text-center border border-gray-400 font-bold">6</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">1G</td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">8</td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr><td className="w-12 h-12 text-center border border-gray-400 font-bold">8</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">3</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td></tr>
            <tr><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">1</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">4</td><td className="w-12 h-12 text-center border-r-2 border-black font-bold">9</td><td className="w-12 h-12 text-center border border-gray-400 font-bold">2</td><td className="w-12 h-12 text-center border border-gray-400"></td><td className="w-12 h-12 text-center border border-gray-400 font-bold">7</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const PhotoCornerPage = () => (
  <div className="bg-gray-100 py-16 px-6 min-h-screen">
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 ${GT_ACCENT_BORDER}">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center" style={{fontFamily: "'Montserrat', sans-serif"}}>
          PHOTO CORNER
        </h2>
        <div className="w-full">
          <img 
            src="https://i.imgur.com/g8L9qZf.png" // Placeholder from Page 1
            alt="Students from NAVARASA magazine" 
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  </div>
);

// --- Main App Component ---

export default function NavarasaGT() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // GT Logo Component
  const Logo = () => (
    <img
      src="https://guindytimes.com/static/mainsite/images/gttrans.png"
      alt="GT Logo"
      className="h-10 w-auto" // h-10 is 40px
    />
  );

  // Desktop Nav Button
  const NavBtn = ({ section }) => {
    const Icon = section.icon;
    const isActive = active === section.id;
    return (
      <button
        onClick={() => setActive(section.id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition ${
          isActive 
            ? `${GT_ACCENT_BG} text-white shadow-md` 
            : "text-gray-600 hover:bg-gray-100 hover:text-black"
        }`}
        style={{fontFamily: "'Roboto', sans-serif"}}
      >
        <Icon className="w-5 h-5" />
        {section.name}
      </button>
    );
  };

  // Mobile Nav Button
  const MobileNavBtn = ({ section }) => {
    const Icon = section.icon;
    const isActive = active === section.id;
    return (
      <button
        onClick={() => {
          setActive(section.id);
          setMobileMenuOpen(false);
        }}
        className={`flex items-center gap-4 px-4 py-3 rounded-lg text-base font-semibold transition w-full ${
          isActive 
            ? `${GT_ACCENT_BG} text-white shadow-lg` 
            : "text-gray-600 hover:bg-gray-100"
        }`}
        style={{fontFamily: "'Roboto', sans-serif"}}
      >
        <Icon className="w-6 h-6" />
        {section.name}
      </button>
    );
  };

  // Mobile Menu Overlay
  const MobileMenu = () => (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden" onClick={() => setMobileMenuOpen(false)}>
      <div 
        className="fixed top-0 left-0 w-80 h-full bg-white shadow-2xl p-6"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className={`text-2xl font-bold ${GT_ACCENT_TEXT}`} style={{fontFamily: "'Montserrat', sans-serif"}}>
            NAVARASA
          </h2>
          <button onClick={() => setMobileMenuOpen(false)}>
            <X className="w-7 h-7 text-gray-500" />
          </button>
        </div>
        <div className="space-y-3">
          {sections.map((s) => (
            <MobileNavBtn key={s.id} section={s} />
          ))}
        </div>
      </div>
    </div>
  );

  // Helper to render the correct page
  const renderSection = () => {
    switch (active) {
      case 'home': return <HomePage />;
      case 'articles': return <ArticlesPage />;
      case 'reviews': return <ReviewsPage />;
      case 'poetry': return <PoetryPage />;
      case 'events': return <EventsPage />;
      case 'innovation': return <InnovationPage />;
      case 'tamil': return <TamilPage />;
      case 'fun': return <FunCornerPage />;
      case 'photos': return <PhotoCornerPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900" style={{fontFamily: "'Roboto', sans-serif"}}>
      {/* Primary Red Navbar */}
      <nav className={`${GT_NAV_COLOR} text-white shadow-lg sticky top-0 z-40`} style={{height: '72px'}}>
        <div className="max-w-7xl mx-auto px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Logo />
            <h1 className="font-extrabold text-xl tracking-wide" style={{fontFamily: "'Montserrat', sans-serif"}}>
              NAVARASA
            </h1>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(true)}>
            <Menu className="w-7 h-7 text-white" />
          </button>
        </div>
      </nav>

      {/* Secondary White Sub-Navbar (Desktop) */}
      <nav className="hidden md:flex bg-white shadow-md sticky top-[72px] z-30 justify-center">
        <div className="max-w-7xl px-6 py-2 flex gap-4">
          {sections.map((s) => (
            <NavBtn key={s.id} section={s} />
          ))}
        </div>
      </nav>

      {/* Mobile Menu (conditionally rendered) */}
      {mobileMenuOpen && <MobileMenu />}

      {/* Page Content */}
      <main>
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className={`${GT_ACCENT_BG} text-white py-12 px-6`}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Logo />
            <h3 className="text-3xl font-bold" style={{fontFamily: "'Montserrat', sans-serif"}}>
              NAVARASA
            </h3>
          </div>
          <p className="text-gray-200 mb-2">The Official Magazine of CEG, ACT, SAP</p>
          <p className="text-gray-300 text-sm mb-6">30 Years of The Guindy Times</p>
          
          <div className="border-t border-red-400 pt-6">
            <p className="text-gray-200 text-sm italic">
              "Want your department's flagship events featured? Contact us to reach 10,000+ students and alumni"
            </p>
            <p className="text-gray-300 text-xs mt-4">
              © 2025 NAVARASA Magazine. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}