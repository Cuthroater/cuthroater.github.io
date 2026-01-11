import React from 'react';
import { Section } from './Section';

interface SummaryProps {
  summary: string;
}

export const Summary: React.FC<SummaryProps> = ({ summary }) => {
  return (
    <Section title="Professional Summary">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <p className="text-gray-700 leading-relaxed">{summary}</p>
      </div>
    </Section>
  );
};