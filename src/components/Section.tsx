import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-6 md:mb-8">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 pb-2 border-b-2 border-blue-600">
        {title}
      </h2>
      {children}
    </section>
  );
};