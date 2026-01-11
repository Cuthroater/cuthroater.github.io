import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, GraduationCap } from 'lucide-react';

interface HeaderProps {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
    googleScholar?: string;
    orcid?: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ name, title, contact }) => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-12 rounded-lg shadow-lg">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{name}</h1>
        <h2 className="text-xl mb-6 text-blue-100">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href={`mailto:${contact.email}`} className="hover:text-blue-200">
              {contact.email}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <a href={`tel:${contact.phone}`} className="hover:text-blue-200">
              {contact.phone}
            </a>
          </div>
          
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{contact.location}</span>
          </div>
          
          {contact.linkedin && (
            <div className="flex items-center gap-2">
              <Linkedin size={16} />
              <a
                href={`https://${contact.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                LinkedIn
              </a>
            </div>
          )}
          
          {contact.github && (
            <div className="flex items-center gap-2">
              <Github size={16} />
              <a
                href={`https://${contact.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                GitHub
              </a>
            </div>
          )}
          
          {contact.googleScholar && (
            <div className="flex items-center gap-2">
              <GraduationCap size={16} />
              <a
                href={`https://${contact.googleScholar}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                Google Scholar
              </a>
            </div>
          )}
          
          {contact.orcid && (
            <div className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M256 128c0 70.7-57.3 128-128 128S0 198.7 0 128 57.3 0 128 0s128 57.3 128 128zM86.3 186.2H70.9V79.1h15.4v107.1zM108.9 79.1h41.6c39.6 0 57 28.3 57 53.6 0 27.5-21.5 53.6-56.8 53.6h-41.8V79.1zm15.4 93.3h24.5c34.9 0 42.9-26.5 42.9-39.7C191.7 111.2 178 93 148 93h-23.7v79.4zM71.3 54.8c0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4c0 5.2-4.2 9.4-9.4 9.4s-9.4-4.2-9.4-9.4z"/>
              </svg>
              <a
                href={`https://orcid.org/${contact.orcid}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-200"
              >
                ORCID
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};