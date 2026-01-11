import React from 'react';
import { Section } from './Section';
import type { Award } from '../types/cv';
import { Trophy } from 'lucide-react';

interface AwardsProps {
  awards: Award[];
}

export const Awards: React.FC<AwardsProps> = ({ awards }) => {
  return (
    <Section title="Awards & Honors">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
              <Trophy size={24} className="text-yellow-500 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {award.title}
                </h3>
                <p className="text-blue-600">{award.issuer}</p>
                <p className="text-gray-600">{award.date}</p>
                {award.description && (
                  <p className="text-gray-700 mt-2 text-sm">
                    {award.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};