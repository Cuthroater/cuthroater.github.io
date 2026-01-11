import React from 'react';
import { Section } from './Section';
import type { ResearchProject } from '../types/cv';
import { FlaskConical, Users } from 'lucide-react';

interface ResearchProjectsProps {
  projects: ResearchProject[];
}

export const ResearchProjects: React.FC<ResearchProjectsProps> = ({ projects }) => {
  return (
    <Section title="Research Projects">
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                  <FlaskConical size={20} className="text-blue-600" />
                  {project.title}
                </h3>
                <p className="text-blue-600">{project.role}</p>
                <p className="text-gray-600">{project.period}</p>
              </div>
              {project.funding && (
                <div className="text-right text-gray-600">
                  Funding: {project.funding}
                </div>
              )}
            </div>
            <p className="text-gray-700 mb-4">{project.description}</p>
            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
            {project.collaborators && (
              <div className="flex items-center gap-2 text-gray-600">
                <Users size={16} />
                <span>Collaborators: {project.collaborators.join(', ')}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
};