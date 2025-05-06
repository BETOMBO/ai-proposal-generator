'use client';

import React from "react";

interface ProposalResultProps {
  proposal: string;
  isLoading: boolean;
}

export default function ProposalResult({ proposal, isLoading }: ProposalResultProps) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-sm h-full p-6">
        <div className="space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="bg-white rounded-lg shadow-sm h-full p-6 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 mb-4 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No Proposal Generated Yet</h3>
        <p className="text-sm text-gray-500 max-w-sm">
          Fill in the form and click "Generate Proposal" to create your personalized proposal
        </p>
      </div>
    );
  }

  // Split the proposal into paragraphs and format them
  const formattedProposal = proposal.split('\n\n').map((paragraph, index) => (
    <p key={index} className="mb-4 last:mb-0">
      {paragraph}
    </p>
  ));

  return (
    <div className="bg-white rounded-lg shadow-sm h-full p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Generated Proposal</h2>
        <button
          onClick={() => navigator.clipboard.writeText(proposal)}
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
        >
          <svg className="h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
          </svg>
          Copy
        </button>
      </div>
      <div className="prose max-w-none">
        <div className="bg-gray-50 rounded-lg p-6">
          <div className="text-gray-700 text-base leading-relaxed space-y-4">
            {formattedProposal}
          </div>
        </div>
      </div>
    </div>
  );
} 