# AI Proposal Generator

A Next.js application that helps freelancers generate professional proposals using AI. The application uses OpenAI's GPT model to create tailored proposals based on job descriptions and personal details.

## Features

- Clean and modern UI with responsive layout
- Input fields for personal details and job description
- AI-powered proposal generation
- Real-time loading states
- Mobile-friendly design

## Prerequisites

- Node.js 18.x or later
- OpenAI API key

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd proposal-generator-ai
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your OpenAI API key:
```
OPENAI_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

1. Enter your name, role, and years of experience
2. Paste the job description in the text area
3. Click "Generate Proposal"
4. Wait for the AI to generate your proposal
5. Copy the generated proposal and use it for your application

## Deployment

The application can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Add your OpenAI API key in the environment variables
4. Deploy!

## Technologies Used

- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- OpenAI GPT API
- TypeScript

## License

MIT 