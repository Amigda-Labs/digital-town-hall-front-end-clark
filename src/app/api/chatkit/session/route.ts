import { NextResponse } from 'next/server';

// Your workflow ID from OpenAI Agent Builder
const WORKFLOW_ID = 'wf_691b576d09708190bb2a95e9568bce680b5b0785153c4a49';

export async function POST(request: Request) {
  try {
    // Get the user's device ID (optional - for tracking conversations)
    const body = await request.json().catch(() => ({}));
    const deviceId = body.deviceId || `user_${Date.now()}`;

    // Create a ChatKit session via OpenAI API
    const response = await fetch('https://api.openai.com/v1/chatkit/sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'chatkit_beta=v1',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        workflow: { id: WORKFLOW_ID },
        user: deviceId,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to create ChatKit session' },
        { status: response.status }
      );
    }

    const data = await response.json();
    
    // Return the client secret to the frontend
    return NextResponse.json({ client_secret: data.client_secret });
    
  } catch (error) {
    console.error('Session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}