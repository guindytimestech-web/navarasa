import React, { useState } from "react";
import { Feather, Quote, Heart, BookOpen, ArrowLeft, Sparkles, Languages } from "lucide-react";

// Mock constants
const GT = {
  RED: "#B30000",
  TITLE: "NAVARASA",
  SUBTITLE: "Nine Feelings, Infinite Insights"
};

// Sample poetry based on PDF content
const POETRY = [
  {
    id: 'edge-of-silence',
    title: "Edge of Silence, Laughter",
    author: "Viswa S",
    department: "Ceramic",
    year: "3rd year",
    lang: "en",
    excerpt: "Laughter is not a sound alone, it is a kingdom, a crown, a throne.",
    content: `<p>Laughter is not a sound alone,<br/>
it is a kingdom, a crown, a throne.<br/>
It blooms in silence, it cracks the tone,<br/>
a nameless song every heart has known.</p>

<p>It hides in shadows, waiting still,<br/>
to rise like dawn over sorrow's hill.<br/>
It leaps from lips when the soul is freed,<br/>
Like a harvest grown from a tiny seed.</p>

<p>It is thunder disguised as a child's cheer,<br/>
A sword that cuts through fear.<br/>
It is rain that falls in the desert's chest,<br/>
grief's pillow when the heart seeks rest.</p>

<p>It borrows breath, then gives it back,<br/>
a positive light on the darkest track.<br/>
It is the river that bends the land,<br/>
Yet slips through fingers like desert sand.</p>

<p>In travels where strangers meet,<br/>
In places filled with folded feet,<br/>
The markets, schools, and even broken lands,<br/>
Laughter still blooms in a million hands.</p>

<p>It speaks in whispers, it roars in crowds,<br/>
it hides in silence, then bursts out loud....<br/>
A joke remembered, a smile pit<br/>
proof that the moment refused to quit.</p>

<p>And when the world grows stressed<br/>
The nights are short and mornings pressed,<br/>
laughter arrives like a thief in disguise,<br/>
stealing the tears from forgotten eyes.</p>

<p>It teaches the dying to love the breath,<br/>
It tricks the grave, it cheats with death.<br/>
For years bones crumble, & tongues grow weak,<br/>
But echoes of laughter forever speak.</p>

<p>It moves through time, it carves through space,<br/>
An ageless traveler no dark can chase.<br/>
So laugh, not lightly, but fierce, but deep,<br/>
Let it rattle the cage where your sorrows sleep.</p>`,
    featured: true
  },
  {
    id: 'sirippu-kavidhai',
    title: "சிரிப்பு கவிதை (Laughter Poetry)",
    author: "இஷ்வா (Ishva)",
    department: "Various",
    year: "Multiple Years",
    lang: "ta",
    excerpt: "சிரிப்பே மானுடனின் அழகு... அதற்கு இல்லை ஓர் அளவு…!",
    content: `<p>வாய் விட்டு சிரித்தால்,<br/>
நோய் விட்டு போகும்.</p>

<p>ஆம், உண்மை தானே—<br/>
மனிதனின் வாழ்வியலில்<br/>
ஒரு முக்கிய மூலகூறான உணர்வு நகை.</p>

<p>மற்ற உணர்வுகளைக் காட்டிலும்<br/>
சிரிப்பு என்றது,<br/>
இணை இருக்கும் பல உணர்வுகளுடன்<br/>
இணைந்து வருவது யதார்த்தமே…!</p>

<p>சிரிப்பு—<br/>
மெய்யிற்கும் மனத்திற்கும்<br/>
பத்துணர்ச்சி தரும் ஓர் அரிய மருந்து.</p>`,
    featured: false
  }
];

const ContentCard = ({ children, className = "" }) => (
  <article className={`bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl ${className}`}>
    {children}
  </article>
);

const PoemCard = ({ poem }) => {
  const [liked, setLiked] = useState(false);
  const isTamil = poem.lang === 'ta';
  
  return (
    <ContentCard className={`${poem.featured ? 'border-t-4 border-red-600' : 'border-t-4 border-gray-300'}`}>
      {/* Header */}
      <div className={`relative p-6 md:p-8 ${poem.featured ? 'bg-gradient-to-br from-red-50 to-white' : 'bg-gradient-to-br from-gray-50 to-white'} border-b border-gray-100`}>
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              {poem.featured && (
                <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Sparkles className="w-3 h-3" />
                  Featured
                </span>
              )}
              {isTamil && (
                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-bold">
                  <Languages className="w-3 h-3" />
                  தமிழ்
                </span>
              )}
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2" style={{ fontFamily: isTamil ? 'system-ui' : "'Montserrat', sans-serif" }}>
              {poem.title}
            </h3>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">{poem.author}</span>
              {poem.department && (
                <>
                  <span className="hidden sm:inline text-gray-400">•</span>
                  <span>{poem.department}, {poem.year}</span>
                </>
              )}
            </div>
          </div>
          
          <div className={`w-14 h-14 ${poem.featured ? 'bg-red-600' : 'bg-gray-600'} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
            <Feather className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>

      {/* Excerpt Quote */}
      <div className={`p-6 md:p-8 ${poem.featured ? 'bg-red-50/30' : 'bg-gray-50/30'} border-b border-gray-100`}>
        <div className="flex gap-4">
          <Quote className={`w-10 h-10 flex-shrink-0 ${poem.featured ? 'text-red-300' : 'text-gray-300'}`} />
          <p className={`text-lg md:text-xl italic ${poem.featured ? 'text-red-900' : 'text-gray-800'} leading-relaxed`} style={{ fontFamily: isTamil ? 'system-ui' : 'Georgia, serif' }}>
            {poem.excerpt}
          </p>
        </div>
      </div>

      {/* Poem Content */}
      <div className="p-6 md:p-8">
        <div 
          className={`prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 ${isTamil ? '' : 'font-serif'}`}
          style={{ fontFamily: isTamil ? 'system-ui' : 'Georgia, serif' }}
          dangerouslySetInnerHTML={{ __html: poem.content }}
        />
      </div>

      {/* Footer Actions */}
      <div className="px-6 md:px-8 pb-6 flex items-center justify-between border-t border-gray-100 pt-6">
        <button
          onClick={() => setLiked(!liked)}
          className={`inline-flex items-center gap-2 transition-all ${
            liked 
              ? 'text-red-600' 
              : 'text-gray-600 hover:text-red-600'
          }`}
        >
          <Heart 
            className={`w-5 h-5 transition-all ${liked ? 'fill-red-600 scale-110' : ''}`}
          />
          <span className="font-semibold text-sm">
            {liked ? 'Loved!' : 'Love this poem'}
          </span>
        </button>
        
        <span className="text-xs text-gray-500">
          {isTamil ? '📝 Tamil Poetry' : '📝 English Poetry'}
        </span>
      </div>
    </ContentCard>
  );
};

export default function Poetry() {
  const englishPoems = POETRY.filter(p => p.lang === 'en');
  const tamilPoems = POETRY.filter(p => p.lang === 'ta');

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-700 text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Feather className="w-4 h-4" />
            <span className="text-sm font-semibold">Poetry Corner</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-black mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Verses of Laughter
          </h1>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Exploring the profound beauty of HASYA through poetry—words that dance between silence and sound
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {/* Introduction */}
        <div className="mb-12 text-center">
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Poetry captures what prose cannot—the essence of laughter that echoes through time, 
            the silent connection between hearts, and the courage to find joy in darkness.
          </p>
        </div>

        {/* English Poetry Section */}
        {englishPoems.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-6 h-6 text-red-600" />
              <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                English Poetry
              </h2>
            </div>
            
            <div className="space-y-8">
              {englishPoems.map(poem => (
                <PoemCard key={poem.id} poem={poem} />
              ))}
            </div>
          </section>
        )}

        {/* Tamil Poetry Section */}
        {tamilPoems.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Languages className="w-6 h-6 text-purple-600" />
              <h2 className="text-3xl font-black text-gray-900" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                தமிழ் கவிதை (Tamil Poetry)
              </h2>
            </div>
            
            <div className="space-y-8">
              {tamilPoems.map(poem => (
                <PoemCard key={poem.id} poem={poem} />
              ))}
            </div>
            
            {/* Link to Tamil Section */}
            <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-white border-l-4 border-purple-600 rounded-r-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explore More Tamil Content</h3>
              <p className="text-gray-700 mb-4">
                Discover more Tamil stories, articles, and poetry in our dedicated தமிழ் section.
              </p>
              <button className="inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all">
                Visit Tamil Section
                <span>→</span>
              </button>
            </div>
          </section>
        )}

        {/* Poetry Quote Box */}
        <div className="my-16 p-8 bg-gradient-to-br from-red-900 to-red-800 text-white rounded-2xl shadow-2xl">
          <Quote className="w-12 h-12 mb-4 text-red-300 opacity-50" />
          <p className="text-2xl md:text-3xl font-light italic mb-4 leading-relaxed">
            "Laughter moves through time, it carves through space, an ageless traveler no dark can chase."
          </p>
          <p className="text-red-200">— From "Edge of Silence, Laughter"</p>
        </div>

        {/* About Poetry in NAVARASA */}
        <div className="mb-12 bg-white p-8 rounded-xl border border-gray-200 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            Why Poetry Matters in HASYA
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            In the pursuit of understanding laughter, poetry offers a unique lens. Where articles explain 
            and reviews analyze, poetry <em>feels</em>. It captures the inexplicable moment when 43 muscles 
            engage to create a universal language of joy.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Each verse in this edition explores laughter not as a sound, but as a force—a kingdom, 
            a connection, a rebellion against darkness. Through both English and Tamil traditions, 
            our contributors prove that some truths transcend language.
          </p>
        </div>

        {/* Back to Home Link */}
        <div className="pt-8 border-t border-gray-200">
          <button className="inline-flex items-center gap-2 text-gray-600 hover:text-red-600 font-semibold transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}