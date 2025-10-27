import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import {
  Menu, X, BookOpen, Film, Feather, Calendar, Laugh, Sparkles
} from "lucide-react";

/**
 * NAVARASA - Guindy Times themed subsite
 * - Uses GT red (#B30000) and simple card-based layouts
 * - Logo: https://guindytimes.com/static/mainsite/images/gttrans.png
 *
 * Tailwind required.
 */

/* ---------- Constants ---------- */
const GT_RED = "#B30000";
const GT_LOGO = "https://guindytimes.com/static/mainsite/images/gttrans.png";

/* ---------- Utility components ---------- */
const IconLabel = ({ Icon, label }) => (
  <div className="flex items-center gap-3">
    <Icon className="w-5 h-5 text-gray-700" />
    <span className="font-medium text-gray-800">{label}</span>
  </div>
);

/* ---------- Navbar ---------- */
function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "Home", icon: Sparkles },
    { to: "/articles", label: "Articles", icon: BookOpen },
    { to: "/reviews", label: "Reviews", icon: Film },
    { to: "/poetry", label: "Poetry", icon: Feather },
    { to: "/events", label: "Events", icon: Calendar },
    { to: "/tamil", label: "தமிழ்", icon: Laugh },
  ];

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-white/95 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={GT_LOGO} alt="Guindy Times" className="h-10 w-auto" />
            <div>
              <div style={{ color: GT_RED }} className="font-extrabold tracking-wide text-xl">GUINDY TIMES</div>
              <div className="text-xs text-gray-600">presents</div>
              <div className="font-bold text-lg">NAVARASA</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((n) => (
              <NavLink
                to={n.to}
                key={n.to}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium ${isActive ? "text-white" : "text-gray-700"}`
                }
                style={({ isActive }) => (isActive ? { background: `linear-gradient(90deg, ${GT_RED}, #ff6a6a)` } : {})}
              >
                <div className="flex items-center gap-2">
                  <n.icon className="w-4 h-4" />
                  <span>{n.label}</span>
                </div>
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              className="p-2 rounded-md border"
              onClick={() => setMobileOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden px-4 pb-4">
            <div className="space-y-2">
              {navItems.map((n) => (
                <Link
                  to={n.to}
                  key={n.to}
                  className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <n.icon className="w-5 h-5" />
                  <span className="font-medium">{n.label}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- Home Page ---------- */
function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Hero */}
      <section className="bg-white rounded-2xl shadow-lg overflow-hidden grid md:grid-cols-2">
        <div className="p-8">
          <div className="inline-block px-3 py-1 rounded-full border text-sm text-gray-600 mb-4">Edition No. 1 • Sept–Oct 2024</div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4" style={{ color: GT_RED }}>NAVARASA — HASYA</h1>
          <p className="text-lg text-gray-700 mb-6">
            Nine Feelings, Infinite Insights — The Laughter Edition. The Official Magazine of CEG, ACT, SAP.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link to="/articles" className="px-4 py-2 rounded-md border font-medium">Read Articles</Link>
            <Link to="/poetry" className="px-4 py-2 rounded-md border font-medium">Poetry Corner</Link>
            <Link to="/tamil" className="px-4 py-2 rounded-md border font-medium">தமிழ் Section</Link>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#FF6A00" }}>43</div>
              <div className="text-sm text-gray-600 mt-1">Muscles work when you laugh</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#FF4D8D" }}>10,000+</div>
              <div className="text-sm text-gray-600 mt-1">Students & Alumni reach</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <div className="text-3xl font-bold" style={{ color: "#6B46C1" }}>30</div>
              <div className="text-sm text-gray-600 mt-1">Years of publishing excellence</div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
          <div className="w-64 h-64 rounded-lg border overflow-hidden flex flex-col items-center justify-center">
            <div className="text-lg font-semibold mb-2">HASYA</div>
            <div className="text-sm text-gray-600">The Laughter Edition</div>
            <div className="mt-4 text-xs text-gray-500">Edition cover preview</div>
          </div>
        </div>
      </section>

      {/* Quick Previews */}
      <section className="mt-10 grid lg:grid-cols-3 gap-6">
        <article className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Featured Article</h3>
          <p className="text-gray-700 mb-4 font-medium">When Laughter Becomes Contagious</p>
          <p className="text-sm text-gray-600">
            Laughter is one of the few things in life that needs no explanation. From our very first giggle as infants...
          </p>
          <div className="mt-4">
            <Link to="/articles" className="text-sm font-semibold" style={{ color: GT_RED }}>Read full article →</Link>
          </div>
        </article>

        <article className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Poetry Corner</h3>
          <p className="text-gray-700 mb-4 font-medium">Edge of Silence, Laughter — Viswa S</p>
          <p className="text-sm text-gray-600">A lyrical exploration of laughter as resistance and joy. Stanzas preserved from the edition.</p>
          <div className="mt-4">
            <Link to="/poetry" className="text-sm font-semibold" style={{ color: GT_RED }}>Read poetry →</Link>
          </div>
        </article>

        <article className="bg-white shadow rounded-lg p-6">
          <h3 className="text-xl font-bold mb-2">Tamil Features</h3>
          <p className="text-gray-700 mb-4 font-medium">சிரிப்பின் சக்தி • இருள் • கவிதை</p>
          <p className="text-sm text-gray-600">Stories and poems in Tamil with native line breaks and rhythm.</p>
          <div className="mt-4">
            <Link to="/tamil" className="text-sm font-semibold" style={{ color: GT_RED }}>Open தமிழ் →</Link>
          </div>
        </article>
      </section>

      {/* Footer CTA */}
      <section className="mt-10 p-6 rounded-lg border bg-white">
        <h4 className="font-bold">Want your department's flagship events featured?</h4>
        <p className="text-sm text-gray-600 mt-2">Contact us to reach 10,000+ students and alumni.</p>
      </section>
    </div>
  );
}

/* ---------- Articles Page ---------- */
function Articles() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>Featured Articles</h2>

      {/* Article: When Laughter Becomes Contagious */}
      <article className="bg-white rounded-2xl shadow p-8 mb-8">
        <div className="flex items-start gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2">When Laughter Becomes Contagious</h3>
            <div className="text-sm text-gray-600 mb-4">By A. Mrithula — Architecture, 3rd Year</div>

            <p className="text-gray-700 leading-relaxed mb-4">
              Laughter is one of the few things in life that needs no explanation. From our very first giggle as infants,
              it has the uncanny ability to draw others in, turning a single moment of amusement into a shared wave of joy.
              It is almost impossible to resist.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4 italic border-l-4 pl-4">
              This strange and wonderful reaction does not happen by chance. Hidden deep within our brains are mirror neurons—tiny
              cells that make us mimic the emotions we see. When we hear laughter, they light up, nudging us to laugh along.
            </p>

            <div className="mt-6 text-sm text-gray-600">
              <strong>Pull quote:</strong> Laughter does more than just entertain; it builds invisible bridges between people, softening hearts and dissolving walls of tension.
            </div>
          </div>

          <div className="w-48">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500">Edition</div>
              <div className="text-lg font-bold">HASYA</div>
              <div className="text-xs text-gray-500 mt-2">Sept–Oct 2024</div>
            </div>
          </div>
        </div>
      </article>

      {/* Article: Laughter: The Music of the Soul */}
      <article className="bg-white rounded-2xl shadow p-8">
        <h3 className="text-2xl font-bold mb-2">Laughter: The Music of the Soul</h3>
        <div className="text-sm text-gray-600 mb-4">By Muni Chandrasekar Reddy K — Geo Informatics, 3rd Year (Edited by Kaamila Maisarah M)</div>

        <p className="text-gray-700 mb-4">
          Charlie Chaplin famously said, "A day without laughter is a day wasted." Laughter is a pure and innocent emotion, difficult to fake or suppress.
        </p>

        <p className="text-gray-700 mb-4">
          In this world full of hustle and bustle, we often take life too seriously than it is. After a stressful day, there's nothing quite like genuinely laughing with friends or family...
        </p>
      </article>
    </div>
  );
}

/* ---------- Reviews Page ---------- */
function Reviews() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>GT Reviews</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Lootcase */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-lg text-white mb-4">
            <h3 className="text-xl font-bold">Lootcase (2020)</h3>
            <div className="text-sm">Hindi Comedy Film</div>
          </div>

          <p className="text-gray-700 mb-4">
            If you think comedy today is all loud jokes and slapstick, Lootcase will surprise you. This Hindi film follows Nandan, an ordinary printing press employee, whose life changes overnight when he finds an abandoned suitcase filled with cash.
          </p>

          <div className="bg-yellow-50 p-3 rounded-md">
            <div className="font-semibold">A feel-good film that'll make you laugh till your cheeks hurt!</div>
          </div>
        </div>

        {/* Good Omens */}
        <div className="bg-white rounded-2xl shadow p-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-lg text-white mb-4">
            <h3 className="text-xl font-bold">Good Omens</h3>
            <div className="text-sm">by Neil Gaiman & Terry Pratchett</div>
          </div>

          <p className="text-gray-700 mb-4">
            If the end of the world were real, I'd expect chaos, fire, and maybe a few professors handing out assignments until the last second. But Good Omens imagines it differently: the Apocalypse—with jokes.
          </p>

          <div className="bg-purple-50 p-3 rounded-md">
            <div className="font-semibold">The humour isn't loud but sneaks up in clever lines and awkward situations.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Poetry Page ---------- */
function Poetry() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>Poetry Corner</h2>

      <article className="bg-white rounded-2xl shadow p-8 mb-6">
        <div className="flex items-center gap-4 mb-4">
          <Feather className="w-6 h-6 text-pink-500" />
          <h3 className="text-xl font-bold">Edge of Silence, Laughter</h3>
        </div>

        <div className="prose max-w-none text-gray-800">
          <p><em>Laughter is not a sound alone, it is a kingdom, a crown, a throne.</em></p>
          <p><em>It blooms in silence, it cracks the tone, a nameless song every heart has known.</em></p>

          <div className="bg-gradient-to-r from-pink-100 to-orange-100 p-4 rounded-lg my-4">
            <p className="italic font-semibold">It is thunder disguised as a child's cheer, A sword that cuts through fear.</p>
          </div>

          <p className="italic">So laugh, not lightly, but fierce, but deep, Let it rattle the cage where your sorrows sleep.</p>
        </div>
      </article>

      <article className="bg-white rounded-2xl shadow p-8">
        <h4 className="font-bold mb-2">Tamil Poetry Preview</h4>
        <div className="bg-gradient-to-r from-orange-400 to-pink-500 text-white p-6 rounded-lg">
          <p className="font-semibold">சிரிப்பே மானுடனின் அழகு... அதற்கு இல்லை ஓர் அளவு!</p>
        </div>
      </article>
    </div>
  );
}

/* ---------- Tamil Page ---------- */
function Tamil() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>தமிழ் — Features</h2>

      {/* Example story: சிரிப்பின் சக்தி (excerpt and formatting preserved) */}
      <article className="bg-white rounded-2xl shadow p-8 mb-6">
        <h3 className="text-2xl font-bold mb-2">சிரிப்பின் சக்தி</h3>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
          {`இைவயால அவன் எப்ேபாதும் சீரியஸாகத்தான் இருந்தான். ஒருநாள் ேகன்டீனில் உட்கார்ந்து ேகாண்டிருந்த ேபாது, நண்பன் சுேரஷ் அவைன பார்த்து ெசான்னான்:
"டா, உன் முகம் எப்பவ�ம் சீரியஸா இருக்ேக. ச�ரிச்சுப் பாரு, ெகாஞ்சம் ைலட்டா இரு."
அந்தச் ெசால் அருணின் மனத�ல் பத�ந்து விட்டது.`}
        </div>
      </article>

      {/* Tamil poem */}
      <article className="bg-white rounded-2xl shadow p-8">
        <h4 className="font-bold mb-2">சிரிப்பு கவிதை — இருள் (excerpt)</h4>
        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
{`Laughter is not a mere sound; it is a connection made audible.
This is preserved and presented bilingually for readers.`}
        </div>
      </article>
    </div>
  );
}

/* ---------- Events Page ---------- */
function Events() {
  const past = [
    { date: "Sept 16", title: "Society of Industrial Engineers inauguration" },
    { date: "Sept 17", title: "SAP Investiture + Manufacturing Dept. inauguration & freshers'" },
    { date: "Sept 18", title: "Geo Informatics freshers' day Aurora" },
  ];
  const upcoming = [
    { date: "Oct 10-11", title: "EEE Symposium Ripples" },
    { date: "Oct 14-15 (tentative)", title: "Textile Symposium Texplosion & Festido" },
    { date: "Oct 14-15 (tentative)", title: "Geo Informatics Symposium Celestia" },
    { date: "Oct 14-15 (tentative)", title: "National Space Week celebrations" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>Campus Events</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h4 className="font-bold mb-3">What You Might've Missed</h4>
          <div className="space-y-3">
            {past.map((p) => (
              <div key={p.date} className="border-l-4 border-green-500 pl-4">
                <div className="text-sm font-semibold">{p.date}</div>
                <div className="text-gray-600">{p.title}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl shadow p-6 text-white">
          <h4 className="font-bold mb-3">What's Coming Up</h4>
          <div className="space-y-3">
            {upcoming.map((u) => (
              <div key={u.date} className="bg-white/10 p-3 rounded-md">
                <div className="font-semibold">{u.date}</div>
                <div className="text-sm">{u.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AU Innovation */}
      <div className="mt-8 bg-white rounded-2xl shadow p-6">
        <h4 className="font-bold mb-3">Where Does Anna University Stand in Today's Technology Landscape?</h4>
        <p className="text-gray-700 mb-4">
          Anna University is fast emerging as a hub of innovation, with patents and funded projects spanning a wide spectrum of technologies that promise real-world impact.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold">Aerospace</h5>
            <p className="text-sm text-gray-600">Advanced drone landing system for UAVs—breakthrough for defense and disaster management</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold">Energy Storage</h5>
            <p className="text-sm text-gray-600">Pioneering lithium-sulphur batteries and hybrid supercapacitors for clean energy</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold">Electronics</h5>
            <p className="text-sm text-gray-600">5G antenna designs and rapid bacterial growth monitoring devices for health-tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- PhotoCorner & Comics ---------- */
function PhotoCorner() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-extrabold mb-6" style={{ color: GT_RED }}>Photo Corner</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">Photo 1</div>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">Photo 2</div>
        <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">Photo 3</div>
      </div>

      <h3 className="mt-8 font-bold">Comic Corner</h3>
      <div className="bg-white rounded-lg p-4 mt-2">
        <div className="text-sm text-gray-700">Tukka comic — small strip text and fun illustration placeholder.</div>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <img src={GT_LOGO} alt="GT logo" className="h-8" />
          <div className="text-xl font-bold">NAVARASA</div>
        </div>
        <p className="text-sm text-gray-300">The Official Magazine of CEG, ACT, SAP — 30 Years of Excellence</p>
        <p className="text-xs text-gray-500 mt-4">© 2024 NAVARASA Magazine. All rights reserved.</p>
      </div>
    </footer>
  );
}

/* ---------- Root App ---------- */
export default function App() {
  return (
    <Router basename="/navarasa">
      <div className="min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/poetry" element={<Poetry />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tamil" element={<Tamil />} />
          <Route path="/photocorner" element={<PhotoCorner />} />
          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>

        <SiteFooter />
      </div>
    </Router>
  );
}
