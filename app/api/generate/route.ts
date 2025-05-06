import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  try {
    const { jobDescription, name, role, yearsOfExperience } = await request.json();

    const prompt = `As a professional ${role} with ${yearsOfExperience} years of experience, write a compelling proposal for the following job description. The proposal should highlight relevant experience, skills, and why you're the best fit for the role. Keep it professional and concise.

Job Description:
${jobDescription}

Your name: ${name}
Your role: ${role}
Years of experience: ${yearsOfExperience}

Write a proposal that includes:
1. A brief introduction
2. Why you're interested in the role
3. Your relevant experience and skills
4. How you can add value to the project
5. A professional closing`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 1000,
    });

    const proposal = completion.choices[0]?.message?.content || 'Failed to generate proposal';

    return NextResponse.json({ proposal });
  } catch (error) {
    console.error('Error generating proposal:', error);
    return NextResponse.json(
      { error: 'Failed to generate proposal' },
      { status: 500 }
    );
  }
} 