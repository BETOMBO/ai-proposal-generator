'use client';

import { useState } from 'react';
import ProposalForm from '../components/ProposalForm';
import ProposalResult from '../components/ProposalResult';
import React from 'react';

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
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            AI Proposal Generator
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            Create professional proposals in minutes using the power of AI
          </p>
        </div>
        
        <div className="mt-12 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid gap-8 md:grid-cols-2 p-6 md:p-8">
            <div className="space-y-6">
              <ProposalForm onSubmit={handleGenerateProposal} isLoading={isLoading} />
            </div>
            <div className="space-y-6">
              <ProposalResult proposal={proposal} isLoading={isLoading} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 