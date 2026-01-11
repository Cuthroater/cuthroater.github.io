import React, { useState } from 'react';
import { defaultCV } from './data/cv';
import { Header } from './components/Header';
import { Summary } from './components/Summary';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Publications } from './components/Publications';
import { Patents } from './components/Patents';
import { ResearchProjects } from './components/ResearchProjects';
import { Awards } from './components/Awards';
import { Tabs } from './components/Tabs';
import {
  Briefcase,
  GraduationCap,
  BookOpen,
  Award,
  FlaskConical,
  Trophy,
  Layout,
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('professional');

  const tabs = [
    { id: 'professional', label: 'Professional', icon: <Briefcase size={16} /> },
    { id: 'academic', label: 'Academic', icon: <GraduationCap size={16} /> },
    { id: 'research', label: 'Research', icon: <FlaskConical size={16} /> },
    { id: 'publications', label: 'Publications', icon: <BookOpen size={16} /> },
    { id: 'patents', label: 'Patents', icon: <Award size={16} /> },
    { id: 'awards', label: 'Awards', icon: <Trophy size={16} /> },
    { id: 'complete', label: 'Complete CV', icon: <Layout size={16} /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'professional':
        return (
          <>
            <Summary summary={defaultCV.summary} />
            <Experience experiences={defaultCV.experience} />
            <Skills skills={defaultCV.skills} languages={defaultCV.languages} />
          </>
        );
      case 'academic':
        return (
          <>
            <Education education={defaultCV.education} />
            {defaultCV.certifications && defaultCV.certifications.length > 0 && (
              <Section title="Certifications">
                {/* Add certifications component */}
              </Section>
            )}
          </>
        );
      case 'research':
        return <ResearchProjects projects={defaultCV.researchProjects} />;
      case 'publications':
        return <Publications publications={defaultCV.publications} />;
      case 'patents':
        return <Patents patents={defaultCV.patents} />;
      case 'awards':
        return <Awards awards={defaultCV.awards} />;
      case 'complete':
        return (
          <>
            <Summary summary={defaultCV.summary} />
            <Experience experiences={defaultCV.experience} />
            <Education education={defaultCV.education} />
            <ResearchProjects projects={defaultCV.researchProjects} />
            <Publications publications={defaultCV.publications} />
            <Patents patents={defaultCV.patents} />
            <Awards awards={defaultCV.awards} />
            <Skills skills={defaultCV.skills} languages={defaultCV.languages} />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto p-4 space-y-6">
        <Header
          name={defaultCV.name}
          title={defaultCV.title}
          contact={defaultCV.contact}
        />
        
        <Tabs
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        <main className="space-y-8">
          {renderContent()}
        </main>
        
        <footer className="text-center text-gray-500 py-8">
          <p>© {new Date().getFullYear()} {defaultCV.name}. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;