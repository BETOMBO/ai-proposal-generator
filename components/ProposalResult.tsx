'use client';

interface ProposalResultProps {
  proposal: string;
  isLoading: boolean;
}

export default function ProposalResult({ proposal, isLoading }: ProposalResultProps) {
  if (isLoading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm h-full">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm h-full flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Your generated proposal will appear here
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm h-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">Generated Proposal</h2>
      <div className="prose max-w-none">
        <pre className="whitespace-pre-wrap font-sans text-gray-700">{proposal}</pre>
      </div>
    </div>
  );
} 