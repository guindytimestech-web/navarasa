import React from "react";
import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
      <div className="text-sm text-gray-600 mb-4">{article.author}</div>
      <p className="text-gray-700 mb-4">{article.excerpt}</p>
      <Link to={`/articles/${article.id}`} className="text-gtred font-semibold">Read full article →</Link>
    </div>
  );
}
