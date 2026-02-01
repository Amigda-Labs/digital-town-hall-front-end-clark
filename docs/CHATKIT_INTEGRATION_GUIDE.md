# ChatKit UI Integration Guide

**For beginners who vibe-coded their website**

This guide will help you integrate OpenAI's ChatKit UI into your website. Don't worry if you're not a super experienced developer - we'll walk through every step together!

---

## What is ChatKit?

ChatKit is OpenAI's drop-in chat widget. Instead of building your own chat interface from scratch, ChatKit gives you a beautiful, ready-to-use chat UI that connects to your AI agent backend hosted on OpenAI.

**Think of it like this:** You already have an AI agent brain (your workflow on OpenAI). ChatKit is the mouth and ears - it handles all the user interface stuff so you don't have to.

---

## Prerequisites

Before you start, make sure you have:

- [ ] Your website code ready and working locally
- [ ] A GitHub account with your project uploaded
- [ ] An OpenAI account with API access
- [ ] Your workflow ID from Agent Builder: `wf_691b576d09708190bb2a95e9568bce680b5b0785153c4a49`
- [ ] Your OpenAI API secret key (starts with `sk-...`)

---

## IMPORTANT: Complete These Steps BEFORE ChatKit Integration

ChatKit requires your website to be deployed and whitelisted in OpenAI. **Do NOT skip this section!**

---

## Step 1: Deploy Your Website to Vercel (Without ChatKit First) [Recommended]

Before adding ChatKit, you need to deploy your website to Vercel so you can get your domain and add it to OpenAI's allowlist.

### 1.1 Push Your Code to GitHub (if not already)

Make sure your website code is on GitHub:

1. Go to [github.com](https://github.com) and log in
2. Click the **+** button (top right) → **New repository**
3. Name your repository (e.g., `my-town-hall-website`)
4. Keep it **Public** or **Private** (your choice)
5. Click **Create repository**
6. Follow the instructions to push your existing code, or if you already have it on GitHub, you're good!

### 1.2 Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/log in (use your GitHub account for easy linking)
2. Click **"Add New..."** → **"Project"**
3. Find your GitHub repository and click **"Import"**
4. Vercel will auto-detect that it's a Next.js project
5. Click **"Deploy"** - wait for it to finish (usually 1-2 minutes)
6. Once deployed, Vercel gives you a URL like: `your-project-name.vercel.app`

**Copy this URL** - you'll need it in the next step!

### 1.3 Test Your Deployed Website

1. Visit your Vercel URL (e.g., `https://your-project-name.vercel.app`)
2. Make sure all pages work correctly
3. Navigate to your "Ask Agent" page and confirm it shows the placeholder chat

**If everything works, your `main` branch is safe and deployed!** Continue to the next step.

---

## Step 2: Add Your Domain to OpenAI's Allowlist

ChatKit will ONLY work on domains that are whitelisted in OpenAI. This is a security feature.

### 2.1 Go to OpenAI Platform Settings

1. Go to [platform.openai.com](https://platform.openai.com)
2. Log in with your OpenAI account
3. Click on **Settings** (gear icon, usually top right or in sidebar)
4. Navigate to **Security** → **Domain Allowlist**

### 2.2 Add Your Vercel Domain

1. Click **"Add Domain"**
2. Enter your Vercel project domain: `your-project-name.vercel.app`
   
   **IMPORTANT:** Use the PROJECT domain, NOT a specific deployment URL!
   - Correct: `my-town-hall.vercel.app`
   - Wrong: `my-town-hall-abc123xyz.vercel.app` (this is a deployment-specific URL)
   
3. Click **Save** or **Add**

### 2.3 (Optional) Add localhost for local testing

If you want to test ChatKit locally before deploying:
1. Also add `localhost` to the domain allowlist
2. This lets you test on `http://localhost:3000`

---

## Step 3: Understanding Vercel Deployment Environments

**Important Information About Vercel Environments:**

Before we proceed, let's clarify how Vercel handles different deployment environments. This will help you decide the best approach for your project.

### Vercel's Default Environments (FREE - No Domain Purchase Required)

Vercel provides three environments by default on all plans:

1. **Production Environment** - Your main branch (usually `main`) deploys here with your primary domain
2. **Preview Environment** - **Every branch and pull request automatically gets a preview URL** (e.g., `your-project-git-dev-username.vercel.app`)
3. **Local Development** - Your local machine with `npm run dev`

**Key Point:** You do NOT need to buy a domain to use preview branches! Vercel automatically creates preview deployments for every branch you push.

### Custom Environments (Optional - Pro/Enterprise Plans)

If you want more control (like a persistent `staging` environment with its own domain), Vercel offers **Custom Environments** on paid plans:
- **Pro Plan**: 1 custom environment per project
- **Enterprise Plan**: 12 custom environments per project

**Learn more:**
- [Vercel Environments Documentation](https://vercel.com/docs/deployments/environments)
- [Managing Deployments](https://vercel.com/docs/deployments/managing-deployments)
- [Video: Environments on Vercel](https://www.youtube.com/watch?v=nZrAgov_-D8) (older but still relevant)

### Our Approach for This Guide

**For now, we'll deploy directly to the `main` branch** to keep things simple. However, we'll document the preview branch option below so you can use it in the future if needed.

---

## Step 3 (Option A): Deploy Directly to Main (Recommended for Beginners)

**This is the simplest approach** - all changes go directly to your production site.

**Pros:**
- Simple workflow
- No branch management needed
- Immediate production deployment

**Cons:**
- Changes go live immediately
- No separate testing environment

**If you choose this option, skip to [Step 4](#step-4-understand-your-project-structure)**

---

## Step 3 (Option B): Use a Development Branch for Testing (Advanced)

**Use this approach if you want to test changes before going live.**

**Why use a separate branch?**

By creating a `dev` branch, you can:
- Test the ChatKit integration safely on a preview URL
- Keep your `main` branch working (as a backup)
- Only merge to `main` when you've confirmed everything works
- Vercel will automatically create a preview deployment at `your-project-git-dev-username.vercel.app`

### 3B.1 Create the `dev` Branch

Open your terminal, navigate to your project folder, and run these commands:

```bash
# Make sure you're on the main branch and it's up to date
git checkout main
git pull origin main

# Create a new branch called 'dev' and switch to it
git checkout -b dev

# Push the new branch to GitHub
git push -u origin dev
```

**What this does:**
1. `git checkout main` - Makes sure you're starting from your working main branch
2. `git pull origin main` - Gets the latest code from GitHub
3. `git checkout -b dev` - Creates a new branch called "dev" and switches to it
4. `git push -u origin dev` - Uploads this new branch to GitHub

### 3B.2 Verify You're on the Dev Branch

Run this command to check:

```bash
git branch
```

You should see:
```
  main
* dev    ← The asterisk (*) shows you're on the dev branch
```

### 3B.3 Vercel Preview Deployment

Once you push the `dev` branch, Vercel will automatically:
- Create a preview deployment at a URL like: `your-project-git-dev-username.vercel.app`
- Add a comment to your GitHub commits/PRs with the preview URL
- Keep your main production site unchanged

**Important:** You'll need to add BOTH your production domain AND your preview domain to OpenAI's allowlist:
- Production: `your-project.vercel.app`
- Preview: `your-project-git-dev-username.vercel.app` (or use wildcard: `*.vercel.app`)

**From now on, all your ChatKit changes will be on the `dev` branch, keeping `main` safe!**

---

## Step 4: Understand Your Project Structure

Now let's understand WHERE to put the ChatKit code in your project.

In your Next.js project, here's the important folder structure:

```
your-project/
├── src/
│   ├── app/                    ← Your pages live here
│   │   ├── layout.tsx          ← Main layout (wraps all pages)
│   │   ├── page.tsx            ← Homepage (DON'T touch this)
│   │   ├── api/                ← Backend API routes
│   │   │   └── chatkit/
│   │   │       └── session/
│   │   │           └── route.ts  ← You'll CREATE this
│   │   └── ask-agent/
│   │       └── page.tsx        ← This is where ChatKit goes!
│   └── components/             ← Reusable UI pieces
├── package.json                ← Your project dependencies
└── .env.local                  ← Secret keys go here (create if missing)
```

**Your ChatKit integration will touch these files:**
1. `package.json` - Add the ChatKit package
2. `.env.local` - Store your secret API key (create this file)
3. `src/app/api/chatkit/session/route.ts` - Backend endpoint (create this)
4. `src/app/layout.tsx` - Add the ChatKit script
5. `src/app/ask-agent/page.tsx` - Replace the placeholder chat with ChatKit

---

## Step 5: Install the ChatKit Package

Open your terminal, navigate to your project folder, and run:

```bash
npm install @openai/chatkit-react
```

This installs the ChatKit React components that you'll use in your chat page.

**How to know it worked:** After running the command, check your `package.json`. You should see `"@openai/chatkit-react"` in the dependencies section.

---

## Step 6: Set Up Your Secret Key (Local Environment)

Never put API keys directly in your code! Instead, we use environment variables.

### 6.1 Create the Environment File

**Create a file called `.env.local` in your project root** (same level as `package.json`):

```env
# Your OpenAI API Key - KEEP THIS SECRET!
OPENAI_API_KEY=sk-your-actual-api-key-here
```

**Replace `sk-your-actual-api-key-here` with your actual OpenAI API key.**

### 6.2 Make Sure It's Ignored by Git

Check your `.gitignore` file - it should already have `.env.local` listed. If not, add it:

```
# Local env files
.env.local
```

**Important:**
- Never share this key with anyone!
- Never commit this file to GitHub!

---

## Step 7: Create the Backend Endpoint

ChatKit needs a backend endpoint that creates sessions. In Next.js, we create API routes for this.

### 7.1 Create the Folder Structure

Create these folders inside `src/app/`:

```
src/
└── app/
    └── api/              ← Create this folder
        └── chatkit/      ← Create this folder
            └── session/  ← Create this folder
                └── route.ts  ← Create this file
```

### 7.2 Add the Code

**Copy this code into `src/app/api/chatkit/session/route.ts`:**

```typescript
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
```

**What this code does:**
1. Receives a request from your frontend
2. Calls OpenAI's API to create a ChatKit session
3. Uses your workflow ID to connect to your AI agent
4. Returns a `client_secret` that the frontend needs to start chatting

---

## Step 8: Add the ChatKit Script to Your Layout

We need to load the ChatKit JavaScript. The best place for this is your layout file.

**Open:** `src/app/layout.tsx`

**Add the Script import and the script tag.** Your layout should look like this:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";  // ← Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clark Pampanga Digital Town Hall",
  description: "Your gateway to the Clark Freeport Zone in Pampanga, Philippines.",
  // ... rest of your metadata
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ChatKit UI Script - loads the chat widget functionality */}
        <Script
          src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
```

**What we added:**
1. `import Script from "next/script";` at the top
2. The `<head>` section with the ChatKit script

---

## Step 9: Update the Ask Agent Page with ChatKit

Now the fun part! Let's replace your placeholder chat with the real ChatKit.

**Open:** `src/app/ask-agent/page.tsx`

**Replace the ENTIRE file with this code:**

```tsx
'use client';

import { ChatKit, useChatKit } from '@openai/chatkit-react';
import Link from 'next/link';
import { useState } from 'react';

export default function AskAgentPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize ChatKit with your backend
  const { control } = useChatKit({
    api: {
      async getClientSecret(existingSecret) {
        try {
          // If we already have a valid secret, try to refresh
          // Otherwise, get a new one
          const res = await fetch('/api/chatkit/session', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              // You can add a deviceId here for user tracking
              deviceId: localStorage.getItem('chatkit_device_id') || undefined,
            }),
          });

          if (!res.ok) {
            throw new Error('Failed to create session');
          }

          const data = await res.json();
          
          // Store device ID for future sessions
          if (!localStorage.getItem('chatkit_device_id')) {
            localStorage.setItem('chatkit_device_id', `user_${Date.now()}`);
          }

          setIsLoading(false);
          return data.client_secret;
        } catch (err) {
          console.error('ChatKit session error:', err);
          setError('Unable to connect to AI assistant. Please try again later.');
          setIsLoading(false);
          throw err;
        }
      },
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDFCFA] to-[#F0F7F1]">
      {/* Hero Header */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#2D5A3D] to-[#1E3D29] overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ask Our AI Agent
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Get instant answers about Clark Pampanga. Our AI-powered assistant is here to help you 24/7.
          </p>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error State */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-2xl flex items-start gap-3">
            <svg className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="font-semibold text-red-800">Connection Error</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* ChatKit Container */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          {/* Loading State */}
          {isLoading && (
            <div className="h-[500px] md:h-[600px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#2D5A3D] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-[#5A6B5C]">Connecting to AI Assistant...</p>
              </div>
            </div>
          )}
          
          {/* ChatKit Widget */}
          {!isLoading && !error && (
            <ChatKit
              control={control}
              className="h-[500px] md:h-[600px] w-full"
            />
          )}
        </div>

        {/* Features */}
        <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#2D5A3D] to-[#4A7C59] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">24/7 Availability</h3>
            <p className="text-sm text-[#5A6B5C]">Get answers anytime, day or night. Our AI never sleeps.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#5B9BD5] to-[#4A8BC9] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">Instant Responses</h3>
            <p className="text-sm text-[#5A6B5C]">No waiting on hold. Get immediate answers to your questions.</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-[#E07C3E] to-[#D06B2D] rounded-xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-bold text-[#2C3E2D] mb-2">Accurate Information</h3>
            <p className="text-sm text-[#5A6B5C]">Powered by official Clark data for reliable answers.</p>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-12 text-center">
          <p className="text-[#5A6B5C] mb-4">
            Need human assistance? Our team is always ready to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary">
              Contact Support
            </Link>
            <a href="tel:+6345-599-9000" className="btn-secondary flex items-center justify-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Hotline
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

## Step 10: Test Locally (Preview - Expected to Show Errors)

Now let's test your integration locally. **Note:** It probably won't fully work yet because ChatKit needs to be on a whitelisted domain, but we want to check that the code structure is correct!

### 10.1 Start Your Development Server

In your terminal:

```bash
npm run dev
```

Your site should start at `http://localhost:3000`

### 10.2 Check the Ask Agent Page

1. Open your browser and go to `http://localhost:3000/ask-agent`
2. Open the browser console (press F12, then click "Console" tab)

**What you should see:**

✅ **Good signs (structure is correct):**
- The page loads without crashing
- You see the "Connecting to AI Assistant..." loading spinner
- The page layout looks correct (header, features, etc.)

❌ **Expected errors (this is normal!):**
- Console might show: "Failed to create session" or CORS errors
- The chat widget might not load
- You might see a connection error message

**Why the errors?** ChatKit requires:
1. Your domain to be in OpenAI's allowlist (we added your Vercel domain, but `localhost` might not work unless you added it)
2. The site to be served over HTTPS (Vercel provides this, localhost doesn't by default)

### 10.3 What to Check

Even with errors, verify these things work:
- [ ] No TypeScript/build errors in the terminal
- [ ] The page doesn't crash or show a white screen
- [ ] The layout and styling look correct
- [ ] The loading state appears briefly

**If you see build errors or the page crashes:** Go back and check your code. Something might be typed incorrectly.

**If everything looks good structurally:** Continue to the next step to deploy to Vercel!

---

## Step 11: Commit Your Changes (Save to Dev Branch)

Before deploying, let's save all your changes to the `dev` branch.

In your terminal:

```bash
# Check you're on dev branch
git branch

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Add ChatKit integration"
```

**Don't push yet!** We'll do that in the next step after configuring Vercel.

---

## Step 12: Configure Vercel Deployment (Choose Your Approach)

How you configure Vercel depends on which approach you chose in Step 3:

### Option A: Deploying Directly to Main (Simple)

**If you're deploying directly to `main`, you don't need to change anything!** Vercel is already configured to deploy from `main` by default.

**Skip to [Step 13](#step-13-add-environment-variable-to-vercel)**

---

### Option B: Using Dev Branch with Preview Deployments (Advanced)

**If you created a `dev` branch and want to test on a preview URL first:**

Vercel automatically creates preview deployments for all branches, so you have two options:

#### Option B1: Use Automatic Preview Deployments (Recommended)

**No configuration needed!** When you push to `dev`, Vercel will:
- Automatically create a preview deployment
- Give you a URL like: `your-project-git-dev-username.vercel.app`
- Keep your production site (from `main` branch) unchanged

**This is the recommended approach** - you get separate environments without changing any settings.

**Continue to [Step 13](#step-13-add-environment-variable-to-vercel)**

#### Option B2: Make Dev Branch Your Production Branch (Not Recommended)

**Only use this if you want `dev` to be your main production site temporarily.**

1. Go to [vercel.com](https://vercel.com) and log in
2. Click on your project
3. Click **"Settings"** (in the top navigation)
4. Click **"Git"** in the left sidebar (under "Project Settings")
5. Scroll down to find the **"Production Branch"** section
6. Change from `main` to `dev`
7. Click **"Save"**

**What This Means:**
- **Before:** Pushing to `main` → Production deployment
- **Now:** Pushing to `dev` → Production deployment
- Your `main` branch won't auto-deploy anymore

**Important:** After testing, you'll need to change this back to `main` and merge your changes.

**Learn more:** [Manually Promoting Deployments](https://vercel.com/docs/deployments/managing-deployments#manually-promoting-to-production)

---

## Step 13: Add Environment Variable to Vercel

Your local `.env.local` file won't work on Vercel - you need to add the secret there too.

### 13.1 Go to Vercel Dashboard

1. Still in your project on Vercel
2. Go to **Settings** → **Environment Variables** (in the left sidebar)

### 13.2 Add the API Key

1. Click **"Add New"**
2. Enter:
   - **Key:** `OPENAI_API_KEY`
   - **Value:** `sk-your-actual-api-key-here` (your real API key)
3. Select which environments it applies to:
   - ✅ Check **Production**
   - ✅ Check **Preview**
   - ✅ Check **Development**
4. Click **Save**

---

## Step 14: Deploy to Vercel (Dev Branch)

Now push your changes to GitHub. Vercel will automatically deploy from the `dev` branch!

### 14.1 Push to Dev Branch

In your terminal:

```bash
# Push to GitHub (to the dev branch)
git push origin dev
```

### 14.2 Watch the Deployment

1. Go to your Vercel dashboard
2. You should see a new deployment starting for the `dev` branch
3. Wait for it to finish (usually 1-2 minutes)
4. Click on the deployment to see the URL

---

## Step 15: Test Your Integration on Vercel

Now the moment of truth! Let's test ChatKit on your deployed site.

### 15.1 Visit Your Deployed Site

1. **Visit your website:** `https://your-project-name.vercel.app/ask-agent`

2. **You should see:**
   - The chat loading indicator briefly
   - Then the ChatKit chat interface appears
   - You can type a message and get responses from your AI agent!

### 15.2 Test Thoroughly

- [ ] Ask a few different questions
- [ ] Check that responses make sense
- [ ] Test on mobile (open on your phone)
- [ ] Test on different browsers (Chrome, Safari, Firefox)
- [ ] Check the browser console (F12) - should be no errors

### 15.3 If It Doesn't Work

**Open the browser console (F12 → Console tab) and look for errors:**

Common issues:
- **"Failed to create session"** → Check your API key in Vercel environment variables
- **CORS errors** → Make sure your domain is in OpenAI's allowlist
- **"Module not found"** → The package didn't install correctly, redeploy
- **ChatKit script not loading** → Check the Network tab for `chatkit.js`

See the [Troubleshooting](#troubleshooting) section below for more help.

---

## Step 16: Going Live with Your Changes

How you go live depends on which approach you chose:

### Option A: Already Live! (If You Deployed Directly to Main)

**If you deployed directly to `main`, you're already live!** Your ChatKit integration is already on your production site.

**Congratulations! Your ChatKit integration is complete!**

Skip to the [Troubleshooting](#troubleshooting) section if you encounter any issues.

---

### Option B: Merge to Main (If You Used a Dev Branch)

Once you've confirmed that ChatKit works perfectly on your `dev` branch preview deployment, it's time to merge to `main` and make it live for everyone.

#### 16B.1 Merge Dev into Main

In your terminal:

```bash
# Switch to the main branch
git checkout main

# Pull any updates (just in case)
git pull origin main

# Merge the dev branch into main
git merge dev

# Push to GitHub
git push origin main
```

#### 16B.2 Update Vercel Production Branch (Only if You Changed It)

**Only do this if you changed the production branch to `dev` in Step 12 (Option B2).**

If you used automatic preview deployments (Option B1), skip this step.

1. Go to [vercel.com](https://vercel.com) and log in
2. Click on your project
3. Click **"Settings"** → **"Git"** (in left sidebar)
4. Find **"Production Branch"**
5. Change it from `dev` back to `main`
6. Click **"Save"**

#### 16B.3 Verify Deployment

Vercel should automatically redeploy from `main`. To verify:

1. Go to your project's **"Deployments"** tab
2. Look for the latest deployment from the `main` branch
3. Once it's complete, visit your production URL: `your-project.vercel.app`
4. Test the ChatKit integration on the live site

**Congratulations! Your ChatKit integration is now live on your main production website!**

---

## Troubleshooting

### "Failed to create session" error

**Check these things:**
1. Is your domain added to OpenAI's Domain Allowlist?
2. Is your API key correct in Vercel's environment variables?
3. Is your workflow ID correct in `route.ts`?

### ChatKit not loading

**Check these things:**
1. Open browser console (F12 → Console tab) - any red errors?
2. Is the ChatKit script loaded? Check Network tab for `chatkit.js`
3. Did you install `@openai/chatkit-react`? Check `package.json`

### "Module not found" errors

**Run these commands locally:**
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

Then commit, push, and redeploy.

### Domain not working

Make sure you added the **project domain**, not a deployment URL:
- ✅ Correct: `my-town-hall.vercel.app`
- ❌ Wrong: `my-town-hall-git-main-username.vercel.app`

### Deployment not updating

If Vercel isn't picking up your changes:
1. Check you pushed to the correct branch (`dev` or `main`)
2. Check the Production Branch setting in Vercel matches
3. Try triggering a manual redeploy from the Vercel dashboard

### Local testing not working

This is expected! ChatKit needs:
- A whitelisted domain (add `localhost` to OpenAI allowlist if you want local testing)
- HTTPS connection (Vercel provides this, localhost doesn't by default)

**Best practice:** Test the code structure locally, but test ChatKit functionality on Vercel.

---

## Optional: Customize ChatKit Appearance

ChatKit supports theming! You can customize colors to match your brand.

**Add a `theme` prop to your ChatKit component in `ask-agent/page.tsx`:**

```tsx
<ChatKit
  control={control}
  className="h-[500px] md:h-[600px] w-full"
  theme={{
    colors: {
      primary: '#2D5A3D',      // Your brand green
      background: '#FDFCFA',   // Light background
    },
  }}
/>
```

For more theming options, check out: https://platform.openai.com/docs/guides/chatkit-themes

---

## Optional: Add a Floating Chat Widget

Want the chat to appear as a floating button on every page? Here's how:

1. **Create a new component** at `src/components/ChatWidget.tsx`
2. **Import it in your `layout.tsx`** to make it appear everywhere
3. See OpenAI's widget documentation: https://platform.openai.com/docs/guides/chatkit-widgets

---

## Quick Reference

### Option A: Direct to Main (Simple)

| Step | What | Where |
|------|------|-------|
| 1 | Deploy to Vercel first (test without ChatKit) | [vercel.com](https://vercel.com) |
| 2 | Add domain to OpenAI | OpenAI Platform → Settings → Security → Domain Allowlist |
| 3 | Skip branch creation | Work directly on `main` |
| 4 | Understand project structure | Review folder layout |
| 5 | Install package | `npm install @openai/chatkit-react` |
| 6 | API Key (local) | Create `.env.local` file |
| 7 | Backend endpoint | Create `src/app/api/chatkit/session/route.ts` |
| 8 | ChatKit script | Update `src/app/layout.tsx` |
| 9 | Chat page | Update `src/app/ask-agent/page.tsx` |
| 10 | Test locally | `npm run dev` (expect errors, check structure) |
| 11 | Commit changes | `git add . && git commit -m "Add ChatKit"` |
| 12 | Skip Vercel config | Already set to `main` |
| 13 | API Key (Vercel) | Vercel → Settings → Environment Variables |
| 14 | Deploy to Vercel | `git push origin main` |
| 15 | Test on Vercel | Visit your `.vercel.app/ask-agent` URL |
| 16 | Done! | Already live |

### Option B: Using Dev Branch (Advanced)

| Step | What | Where |
|------|------|-------|
| 1 | Deploy to Vercel first (test without ChatKit) | [vercel.com](https://vercel.com) |
| 2 | Add domain to OpenAI | OpenAI Platform → Settings → Security → Domain Allowlist |
| 3 | Create `dev` branch | `git checkout -b dev && git push -u origin dev` |
| 4 | Understand project structure | Review folder layout |
| 5 | Install package | `npm install @openai/chatkit-react` |
| 6 | API Key (local) | Create `.env.local` file |
| 7 | Backend endpoint | Create `src/app/api/chatkit/session/route.ts` |
| 8 | ChatKit script | Update `src/app/layout.tsx` |
| 9 | Chat page | Update `src/app/ask-agent/page.tsx` |
| 10 | Test locally | `npm run dev` (expect errors, check structure) |
| 11 | Commit changes | `git add . && git commit -m "Add ChatKit"` |
| 12 | Vercel config (optional) | Use auto-preview or change production branch |
| 13 | API Key (Vercel) | Vercel → Settings → Environment Variables |
| 14 | Deploy to Vercel | `git push origin dev` |
| 15 | Test on preview URL | Visit `your-project-git-dev-username.vercel.app/ask-agent` |
| 16 | Merge to main | `git checkout main && git merge dev && git push` |
| 17 | Verify production | Check `your-project.vercel.app` |

**Workflow ID:** `wf_691b576d09708190bb2a95e9568bce680b5b0785153c4a49`

**Important Links:**
- [Vercel Environments](https://vercel.com/docs/deployments/environments) - Learn about preview, production, and custom environments
- [Managing Deployments](https://vercel.com/docs/deployments/managing-deployments) - Control your deployments
- [Manually Promoting Deployments](https://vercel.com/docs/deployments/managing-deployments#manually-promoting-to-production) - Advanced deployment control

---

## Summary Checklist

### Phase 1: Before Starting
- [ ] Website deployed to Vercel (without ChatKit)
- [ ] Vercel domain added to OpenAI's Domain Allowlist
- [ ] Decided on deployment approach (direct to `main` or use `dev` branch)
- [ ] If using dev branch: Created `dev` branch from `main`
- [ ] If using dev branch: Added preview domain to OpenAI allowlist (or use `*.vercel.app`)

### Phase 2: Add ChatKit Code
- [ ] Installed `@openai/chatkit-react` package
- [ ] Created `.env.local` file with `OPENAI_API_KEY`
- [ ] Created API route at `src/app/api/chatkit/session/route.ts`
- [ ] Added ChatKit script to `src/app/layout.tsx`
- [ ] Updated chat page at `src/app/ask-agent/page.tsx`

### Phase 3: Test Locally
- [ ] Ran `npm run dev` and checked for build errors
- [ ] Verified page structure looks correct
- [ ] Committed changes to your working branch

### Phase 4: Deploy & Test
- [ ] Added `OPENAI_API_KEY` to Vercel environment variables
- [ ] Pushed changes to GitHub
- [ ] Vercel deployed automatically
- [ ] Tested ChatKit on deployed URL
- [ ] ChatKit working correctly

### Phase 5: Go Live (If Using Dev Branch)
- [ ] Merged `dev` into `main` (if applicable)
- [ ] Verified production deployment
- [ ] Final testing on production URL successful

### Phase 6: Optional - Custom Environments (Pro/Enterprise)
- [ ] Created custom environment (e.g., `staging`) if needed
- [ ] Configured custom domain for environment
- [ ] Set up branch tracking
- [ ] Configured environment-specific variables

---

## Advanced: Setting Up Custom Environments (Pro/Enterprise)

If you're on a Vercel Pro or Enterprise plan and want to set up a dedicated staging environment with its own domain, here's how:

### What Are Custom Environments?

Custom environments let you create persistent, named environments (like `staging`, `QA`, `demo`) with:
- Their own domain names
- Separate environment variables
- Branch tracking for automatic deployments

**Pricing:**
- **Pro Plan**: 1 custom environment per project
- **Enterprise Plan**: 12 custom environments per project

### Creating a Custom Environment

1. Go to your **Project Settings** in the Vercel Dashboard
2. Under **Environments**, click **Create Environment**
3. Provide a name (e.g., `staging`)
4. Optionally:
   - Enable **Branch Tracking** to auto-deploy from a specific branch
   - **Attach a Domain** for a persistent URL (requires domain ownership)
   - **Import variables** from another environment

### Deploying to Custom Environments

```bash
# Deploy to your custom "staging" environment
vercel deploy --target=staging

# Pull environment variables from staging
vercel pull --environment=staging

# Add environment variables to staging
vercel env add MY_KEY staging
```

### Learn More

- [Vercel Environments Documentation](https://vercel.com/docs/deployments/environments)
- [Managing Deployments](https://vercel.com/docs/deployments/managing-deployments)
- [Manually Promoting Deployments](https://vercel.com/docs/deployments/managing-deployments#manually-promoting-to-production)
- [Video: Environments on Vercel](https://www.youtube.com/watch?v=nZrAgov_-D8) (older reference but still helpful)

---

## Need Help?

- **OpenAI ChatKit Docs:** https://platform.openai.com/docs/guides/chatkit
- **ChatKit GitHub:** https://github.com/openai/chatkit-js
- **Sample Projects:** https://github.com/openai/openai-chatkit-advanced-samples
- **Vercel Docs:** https://vercel.com/docs
- **Vercel Environments:** https://vercel.com/docs/deployments/environments
- **Vercel CLI Reference:** https://vercel.com/docs/cli

---

*Happy chatting! You got this!*
