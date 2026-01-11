import React from 'react';
import { Section } from './Section';
import type { Experience as ExperienceType } from '../types/cv';

interface ExperienceProps {
  experiences: ExperienceType[];
}

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section title="Professional Experience">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.position}</h3>
                <p className="text-blue-600">{exp.company}</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">{exp.location}</p>
                <p className="text-gray-500">{exp.period}</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="ml-4">{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};