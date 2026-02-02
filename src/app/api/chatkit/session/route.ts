import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Validate environment variable
    const WORKFLOW_ID = process.env.WORKFLOW_ID;
    if (!WORKFLOW_ID) {
      console.error('[ChatKit] WORKFLOW_ID is not set');
      return NextResponse.json(
        { error: 'WORKFLOW_ID environment variable is not set' },
        { status: 500 }
      );
    }

    // Get the user's device ID (optional - for tracking conversations)
    const body = await request.json().catch(() => ({}));
    const deviceId = body.deviceId || `user_${Date.now()}`;

    if (!process.env.OPENAI_API_KEY) {
      console.error('[ChatKit] OPENAI_API_KEY is not set');
      return NextResponse.json(
        { error: 'OPENAI_API_KEY environment variable is not set' },
        { status: 500 }
      );
    }

    console.info('[ChatKit] Creating session', { deviceId });

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000);

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
      signal: controller.signal,
    }).finally(() => clearTimeout(timeoutId));

    if (!response.ok) {
      const errorText = await response.text();
      console.error('OpenAI API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to create ChatKit session' },
        { status: response.status }
      );
    }

    const data = await response.json();
    console.info('[ChatKit] Session created');
    
    // Return the client secret to the frontend
    return NextResponse.json({ client_secret: data.client_secret });
    
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') {
      console.error('[ChatKit] Session request timed out');
      return NextResponse.json(
        { error: 'ChatKit session request timed out' },
        { status: 504 }
      );
    }

    console.error('Session creation error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}