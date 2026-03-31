// src/app/blog/%5BId%5D/articles.tsx

'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // install lucide-react if not already

const articles = [
  {
    id: 1,
    date: 'Jan 15, 2025',
    title: 'NeuralMindAtlas Raises $5M Seed Round to Scale Responsible AI',
    summary:
      'Led by AI Impact Fund, the round will accelerate product development and expansion into the healthcare sector.',
  },
  {
    id: 2,
    date: 'Jan 15, 2025',
    title: 'NeuralMindAtlas Raises $5M Seed Round to Scale Responsible AI',
    summary:
      'Led by AI Impact Fund, the round will accelerate product development and expansion into the healthcare sector.',
  },
  {
    id: 3,
    date: 'Jan 15, 2025',
    title: 'NeuralMindAtlas Raises $5M Seed Round to Scale Responsible AI',
    summary:
      'Led by AI Impact Fund, the round will accelerate product development and expansion into the healthcare sector.',
  },
];

const RelatedArticles: React.FC = () => {

  return (
    <section className="w-full px-4 py-12 bg-brand-indigo dark:bg-black">
      <div className="container mx-auto">
        <h2 className="mb-8 text-2xl font-semibold text-center md:text-3xl">Related Articles</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
            <div key={article.id} className='bg-blue-vertical p-[2px] rounded-md'>
              <div
                key={idx}
                className="p-6 transition bg-white dark:bg-black border border-blue-200 rounded-md shadow-sm hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-2 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{article.title}</h3>
                <p className="mb-4 text-sm">{article.summary}</p>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 transition border border-blue-600 rounded hover:bg-blue-600 hover:text-white">
                  Read more
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4v1.5h5.293l-11.146 11.146 1.06 1.06L18.354 6.56V12H20V4z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
