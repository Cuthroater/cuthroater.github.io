import React from 'react';
import { Section } from './Section';
import type { Education as EducationType } from '../types/cv';

interface EducationProps {
  education: EducationType[];
}

export const Education: React.FC<EducationProps> = ({ education }) => {
  return (
    <Section title="Education">
      <div className="space-y-4">
        {education.map((edu, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-wrap justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-blue-600">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-gray-700 mt-1"><span className="font-medium">GPA:</span> {edu.gpa}</p>
                )}
              </div>
              <div className="text-right">
                <p className="text-gray-600">{edu.location}</p>
                <p className="text-gray-500">{edu.period}</p>
              </div>
            </div>
            {edu.description && (
              <p className="mt-2 text-gray-700">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};