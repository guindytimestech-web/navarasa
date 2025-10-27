import React from "react";
import { GT } from "../config/constants"; // Assuming GT.LOGO is defined here

export default function Footer() {
  return (
    // Changed bg-gtred to bg-black
    <footer className="bg-black text-white py-12 mt-12"> 
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img src={GT.LOGO} alt="GT logo" className="h-8" />
          <div className="text-2xl font-bold">NAVARASA</div>
        </div>
        <p className="text-gray-200 mb-2">The Official Magazine of CEG, ACT, SAP</p>
        <p className="text-gray-300 text-sm mb-6">30 Years of The Guindy Times</p>
        <div className="border-t border-gray-700 pt-6 text-gray-200 text-sm italic"> {/* Adjusted border color for contrast */}
          "Want your department's flagship events featured? Contact us to reach 10,000+ students and alumni"
        </div>
        <div className="text-xs text-gray-400 mt-4">© 2025 NAVARASA Magazine. All rights reserved.</div> {/* Adjusted copyright text color */}
      </div>
    </footer>
  );
}
