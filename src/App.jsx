import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Articles from "./pages/Articles";
import ArticleDetail from "./pages/ArticleDetail";
import Reviews from "./pages/Reviews";
import Poetry from "./pages/Poetry";
import Tamil from "./pages/Tamil";
import Innovation from "./pages/Innovation";
import Events from "./pages/Events";
import Fun from "./pages/Fun";
import Photos from "./pages/Photos";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:articleId" element={<ArticleDetail />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/poetry" element={<Poetry />} />
        <Route path="/tamil" element={<Tamil />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/events" element={<Events />} />
        <Route path="/fun" element={<Fun />} />
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <Footer />
    </div>
  );
}
