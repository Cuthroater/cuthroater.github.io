import React from 'react';
import { Section } from './Section';
import type { Skill } from '../types/cv';

interface SkillsProps {
  skills: Skill[];
  languages?: string[];
}

export const Skills: React.FC<SkillsProps> = ({ skills, languages }) => {
  return (
    <Section title="Skills & Languages">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skillGroup, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
        
        {languages && languages.length > 0 && (
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};