import React from 'react';
import { Section } from './Section';
import type { Publication } from '../types/cv';
import { BookOpen, Link } from 'lucide-react';

interface PublicationsProps {
  publications: Publication[];
}

export const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <Section title="Publications">
      <div className="space-y-6">
        {publications.map((pub, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <BookOpen size={20} className="text-blue-600" />
                  {pub.title}
                </h3>
                <p className="text-gray-600 mt-2">
                  {pub.authors.join(', ')}
                </p>
                <p className="text-blue-600 mt-1">
                  {pub.journal || pub.conference} ({pub.year})
                </p>
                {pub.impact_factor && (
                  <p className="text-gray-600 mt-1">
                    Impact Factor: {pub.impact_factor}
                  </p>
                )}
                {pub.citations && (
                  <p className="text-gray-600">
                    Citations: {pub.citations}
                  </p>
                )}
                {pub.abstract && (
                  <p className="text-gray-700 mt-2 text-sm">
                    {pub.abstract}
                  </p>
                )}
              </div>
              {pub.doi && (
                <a
                  href={`https://doi.org/${pub.doi}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <Link size={16} />
                  DOI
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};