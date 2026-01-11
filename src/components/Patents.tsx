import React from 'react';
import { Section } from './Section';
import type { Patent } from '../types/cv';
import { Award, Calendar } from 'lucide-react';

interface PatentsProps {
  patents: Patent[];
}

export const Patents: React.FC<PatentsProps> = ({ patents }) => {
  return (
    <Section title="Patents">
      <div className="space-y-6">
        {patents.map((patent, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <Award size={20} className="text-blue-600" />
                  {patent.title}
                </h3>
                <div className="mt-2 space-y-1">
                  <p className="text-gray-600">
                    Inventors: {patent.inventors.join(', ')}
                  </p>
                  <p className="text-blue-600">
                    Patent Number: {patent.patentNumber}
                  </p>
                  <div className="flex items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      Filed: {patent.filingDate}
                    </span>
                    {patent.issueDate && (
                      <span className="flex items-center gap-1">
                        <Calendar size={16} />
                        Issued: {patent.issueDate}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600">
                    Status: <span className={`font-semibold ${
                      patent.status === 'Granted' ? 'text-green-600' :
                      patent.status === 'Pending' ? 'text-yellow-600' :
                      'text-blue-600'
                    }`}>{patent.status}</span>
                  </p>
                  {patent.abstract && (
                    <p className="text-gray-700 mt-2 text-sm">
                      {patent.abstract}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};