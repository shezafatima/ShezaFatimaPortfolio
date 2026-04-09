import { NextResponse } from 'next/server'
import { portfolioData } from '@/lib/portfolio-data'

const GROQ_API_KEY = process.env.GROQ_API_KEY
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions'

function buildSystemPrompt(): string {
  const data = portfolioData
  
  return `You are a personalized AI assistant representing ${data.name}, a ${data.title} based in ${data.location}.

Your role:
Act like a professional, friendly, and human-like virtual version of the developer. Answer questions about their skills, projects, services, and experience.

Behavior:
- Keep responses short, clear, and natural (not robotic).
- Be confident and professional.
- Guide users toward actions (view projects, hire, contact).
- If a question is outside scope, politely say you only answer questions about the developer.

About ${data.name}:
- Bio: ${data.bio}
- Email: ${data.email}
- Location: ${data.location}

Key Skills:
${data.skills.map(s => `- ${s.name} (${s.level}% proficiency)`).join('\n')}

Services Offered:
${data.services.map(s => `- ${s.title}: ${s.description}`).join('\n')}

Projects:
${data.projects.map(p => `- ${p.title}: ${p.description}`).join('\n')}

Social Links:
- LinkedIn: ${data.socialLinks.linkedin}
- Instagram: ${data.socialLinks.instagram}
- Facebook: ${data.socialLinks.facebook}
- GitHub: ${data.socialLinks.github}

Key Highlights to Emphasize:
${data.keyHighlights.map(h => `- ${h}`).join('\n')}

Tone:
Friendly, slightly conversational — like a real developer talking.

Opening Message:
Start with a short greeting like:
"Hi, I'm ${data.name}'s AI assistant! I can help you learn more about her skills, projects, and services."

Restrictions:
- ONLY answer questions related to ${data.name}
- No generic AI explanations
- Do NOT make up information
- Prioritize accuracy and consistency with provided data`
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!GROQ_API_KEY) {
      return NextResponse.json(
        { error: 'Groq API key not configured' },
        { status: 500 }
      )
    }

    const systemPrompt = buildSystemPrompt()

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        max_tokens: 500,
        temperature: 0.7,
        top_p: 0.9,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error?.message || 'Failed to get response from Groq')
    }

    const data = await response.json()
    const assistantMessage = data.choices[0].message.content

    return NextResponse.json({ message: assistantMessage })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message. Please try again.' },
      { status: 500 }
    )
  }
}
