import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GT } from "../config/constants"; // Assumes GT.LOGO, GT.TITLE are defined

const SECTIONS = [
  { path: "/", label: "Home" },
  { path: "/articles", label: "Articles" },
  { path: "/reviews", label: "Reviews" },
  { path: "/poetry", label: "Poetry" },
  { path: "/innovation", label: "Innovation" },
  { path: "/events", label: "Events" },
  { path: "/tamil", label: "தமிழ்" },
  { path: "/fun", label: "Fun" },
  { path: "/photos", label: "Photos" }
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      {/* --- Single Sticky Navigation Bar with Red Background --- */}
      {/* Use the custom Tailwind color class 'bg-gtred' */}
      <header className="sticky top-0 z-50 bg-[#B30000] text-white shadow-lg"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">

            {/* Logo and Title */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img src={GT.LOGO} alt="GT Logo" className="h-9 w-auto" />
              <div>
                <div className="text-xs text-red-100 font-medium">GUINDY TIMES presents</div>
                <div className="font-extrabold text-lg leading-tight text-white" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {GT.TITLE || 'NAVARASA'}
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5">
              {SECTIONS.map(s => (
                <NavLink
                  key={s.path}
                  to={s.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'bg-white text-gtred' // Active: White bg, Red text
                        : 'text-white hover:text-white hover:bg-red-700' // Default: White text, Darker red bg on hover
                    }`
                  }
                 style={({ isActive }) => isActive ? { color: GT.RED } : {}} // Ensure red text color for active
                >
                  {s.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" // White icon
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
         // Same mobile drawer code as before...
         <div
          className="fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 ease-in-out md:hidden" 
          onClick={() => setOpen(false)}
          aria-hidden="true" 
        >
          <aside 
            className="fixed left-0 top-0 h-full w-72 bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out transform translate-x-0" 
            onClick={(e) => e.stopPropagation()}
            role="dialog" 
            aria-modal="true"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="font-bold text-xl text-gtred" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                 {GT.TITLE || 'NAVARASA'} Menu
              </div>
              <button onClick={() => setOpen(false)} className="p-1 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800">
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="space-y-1"> 
              {SECTIONS.map(s => (
                <NavLink 
                  key={s.path} 
                  to={s.path} 
                  onClick={() => setOpen(false)} 
                  className={({ isActive }) => 
                    `block px-3 py-2 rounded-md text-base font-medium transition-colors duration-150 ${
                      isActive 
                        ? 'text-gtred bg-red-50 border-l-4 border-gtred' // Active mobile style
                        : 'text-gray-700 hover:bg-gray-100 hover:text-black'
                    }`
                  }
                  style={({ isActive }) => isActive ? { color: GT.RED, borderLeftColor: GT.RED } : {}} // Ensure red color for active
                >
                  {s.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  );
}

// Ensure constants.js has GT.RED
/*
export const GT = {
  RED: "#B30000", 
  LOGO: "https://guindytimes.com/static/mainsite/images/gttrans.png",
  TITLE: "NAVARASA", 
  // ... other constants
};
*/