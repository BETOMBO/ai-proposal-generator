'use client';

import { useState } from 'react';
import ProposalForm from '../components/ProposalForm';
import ProposalResult from '../components/ProposalResult';

export default function Home() {
  const [proposal, setProposal] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateProposal = async (formData: {
    jobDescription: string;
    name: string;
    role: string;
    yearsOfExperience: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate proposal');
      }

      const data = await response.json();
      setProposal(data.proposal);
    } catch (error) {
      console.error('Error generating proposal:', error);
      alert('Failed to generate proposal. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          AI Proposal Generator
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          <ProposalForm onSubmit={handleGenerateProposal} isLoading={isLoading} />
          <ProposalResult proposal={proposal} isLoading={isLoading} />
        </div>
      </div>
    </main>
  );
} 