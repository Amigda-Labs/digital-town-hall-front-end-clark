# Building a Website with ChatKit UI: A Beginner's Guide

**From Zero to AI-Powered Chat Interface**

This guide is for beginners who want to create a website with an AI chat feature using OpenAI's ChatKit UI. We'll explain the "why" behind every decision before diving into the "how."

---

## Table of Contents

1. [Understanding the Big Picture](#understanding-the-big-picture)
2. [What You're Actually Building](#what-youre-actually-building)
3. [Choosing Your Tech Stack](#choosing-your-tech-stack)
4. [Website Structure Explained](#website-structure-explained)
5. [Understanding Key Concepts](#understanding-key-concepts)
6. [Setting Up Your Project](#setting-up-your-project)
7. [What to Consider Before You Start](#what-to-consider-before-you-start)
8. [Common Pitfalls and How to Avoid Them](#common-pitfalls-and-how-to-avoid-them)

---

## Understanding the Big Picture

### What is a "Website" Anyway?

Before we dive in, let's clarify what we're building. A modern website has two main parts:

```
┌─────────────────────────────────────────────────────────────┐
│                        YOUR WEBSITE                         │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────┐          ┌─────────────────────────┐  │
│   │    FRONTEND     │   ←→     │        BACKEND          │  │
│   │ (What users see)│          │ (What runs on servers)  │  │
│   ├─────────────────┤          ├─────────────────────────┤  │
│   │ • HTML pages    │          │ • API endpoints         │  │
│   │ • Styling (CSS) │          │ • Database connections  │  │
│   │ • Interactions  │          │ • Secret key storage    │  │
│   │ • Chat UI       │          │ • Business logic        │  │
│   └─────────────────┘          └─────────────────────────┘  │
│                                                             │
│           ↓                              ↓                  │
│   Runs in the user's            Runs on a server            │
│   browser (Chrome,              (hidden from users)         │
│   Safari, etc.)                                             │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

**Why does this matter for ChatKit?**

ChatKit needs BOTH:
- **Frontend**: The chat interface users see and interact with
- **Backend**: A secure place to store your OpenAI API key and create chat sessions

### The "Full Stack" Concept

When developers say "full stack," they mean both frontend AND backend together. For a ChatKit website, you need a full-stack solution because:

1. **Security**: Your OpenAI API key is like a password. It should NEVER be in your frontend code (which users can see). It must stay on your backend.

2. **Session Management**: ChatKit requires a "session" to be created before chatting. This session creation must happen on your backend for security.

```
┌─────────────────────────────────────────────────────────────────┐
│                    HOW CHATKIT WORKS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────┐      1. Request session     ┌──────────┐           │
│  │  User   │  ───────────────────────→   │  Your    │           │
│  │ Browser │                             │ Backend  │           │
│  │(Frontend)                             │ (API)    │           │
│  └────┬────┘                             └────┬─────┘           │
│       │                                       │                 │
│       │     2. Backend securely calls         │                 │
│       │        OpenAI with your API key       │                 │
│       │                                       ↓                 │
│       │                               ┌──────────────┐          │
│       │                               │   OpenAI     │          │
│       │                               │   Servers    │          │
│       │                               └──────┬───────┘          │
│       │                                      │                  │
│       │     3. Backend receives              │                  │
│       │        session token                 │                  │
│       │                                      │                  │
│       │    4. Backend sends token     ┌──────┴─────┐            │
│       │  ←────────────────────────────│  Your      │            │
│       │       to frontend             │  Backend   │            │
│       │                               └────────────┘            │
│       │                                                         │
│       │    5. Frontend uses token                               │
│       ↓       to chat with OpenAI                               │
│  ┌─────────┐                                                    │
│  │ ChatKit │ ←───────────────────────→  OpenAI                  │
│  │ Widget  │     Direct AI conversation                         │
│  └─────────┘                                                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## What You're Actually Building

When you create a ChatKit-powered website, you're building:

### 1. A Regular Website
- Homepage
- Various pages (About, Contact, etc.)
- Navigation between pages
- Styling and design

### 2. A Special Chat Page
- A page where users can chat with your AI
- ChatKit handles the actual chat UI
- You just need to integrate it properly

### 3. A Backend API Endpoint
- A single endpoint that creates chat sessions
- This is where your secret API key lives
- ChatKit calls this to start conversations

### What This Looks Like in Practice

```
your-website/
├── Homepage         → "/" 
├── About page       → "/about"
├── Contact page     → "/contact"
├── Chat page        → "/ask-agent" (where ChatKit lives)
└── API endpoint     → "/api/chatkit/session" (backend, not visible)
```

---

## Choosing Your Tech Stack

### What is a "Tech Stack"?

A tech stack is the combination of technologies you use to build your website. Think of it like choosing ingredients for a recipe – different combinations work, but some are better for certain dishes.

### Framework Options for ChatKit

Here are your main options, with honest pros and cons:

#### Option 1: Next.js (Recommended)

**What it is**: A React-based framework that handles both frontend AND backend in one project.

**Why we chose Next.js:**

| Advantage | Explanation |
|-----------|-------------|
| **All-in-one** | Frontend and backend in the same project. No need to manage two separate codebases. |
| **Built-in API routes** | Create backend endpoints just by adding files to an `api/` folder. No extra setup. |
| **React-based** | ChatKit is built for React. Next.js uses React, so integration is seamless. |
| **Vercel deployment** | Vercel (the company that makes Next.js) offers easy, free deployment with automatic HTTPS. |
| **Huge community** | Tons of tutorials, examples, and help available online. |
| **TypeScript support** | Built-in TypeScript helps catch errors before they become bugs. |

**Potential downsides:**

| Consideration | Details |
|---------------|---------|
| **Learning curve** | If you're new to React, there's a learning curve |
| **Opinionated** | Next.js has specific ways of doing things; less flexibility than pure HTML/JS |
| **Overkill for simple sites** | If you just want a single chat page, it might be more than you need |

**Best for**: Most ChatKit projects, especially if you're building a multi-page website.

---

#### Option 2: Vite + React (Alternative)

**What it is**: A fast, modern build tool for React applications. Frontend-only by default.

**When to consider it:**

| Advantage | Explanation |
|-----------|-------------|
| **Faster development** | Vite is extremely fast during development |
| **Simpler mental model** | Pure React, no server-side concepts to learn |
| **More flexible** | Less opinionated about project structure |

**Why we didn't choose it:**

| Challenge | Details |
|-----------|---------|
| **No built-in backend** | You'd need to set up a separate backend server for the session API |
| **Separate deployment** | Frontend and backend would need different deployments |
| **More configuration** | Need to handle CORS, environment variables differently |

**Best for**: If you already have a backend API elsewhere, or want maximum frontend flexibility.

---

#### Option 3: Plain HTML + Vanilla JavaScript (Simplest)

**What it is**: Traditional web development with no framework.

**When to consider it:**

| Advantage | Explanation |
|-----------|-------------|
| **No build step** | Write HTML, open in browser, done |
| **No framework to learn** | Just basic web technologies |
| **Lightweight** | Minimal code, fast loading |

**Why we didn't choose it:**

| Challenge | Details |
|-----------|---------|
| **ChatKit is React-based** | You'd need to use the vanilla JS version, which is less featured |
| **No built-in backend** | Need a separate backend solution |
| **Manual everything** | No routing, no components, no TypeScript |
| **Harder to maintain** | As your site grows, managing plain HTML becomes tedious |

**Best for**: Very simple, single-page chat widgets. Not recommended for a full website.

---

#### Option 4: Vue.js / Nuxt.js

**What it is**: Vue is another popular JavaScript framework. Nuxt is to Vue what Next.js is to React.

**When to consider it:**

| Advantage | Explanation |
|-----------|-------------|
| **Simpler syntax** | Some find Vue easier to learn than React |
| **Nuxt features** | Similar to Next.js – full-stack, file-based routing |

**Why we didn't choose it:**

| Challenge | Details |
|-----------|---------|
| **ChatKit is React-first** | You'd need to wrap the vanilla JS version or use workarounds |
| **Less ChatKit examples** | Fewer community resources for Vue + ChatKit |

**Best for**: If you're already a Vue developer and don't want to learn React.

---

#### Option 5: Remix

**What it is**: Another React-based full-stack framework, similar to Next.js.

**When to consider it:**

| Advantage | Explanation |
|-----------|-------------|
| **Better data loading** | Some prefer Remix's approach to handling data |
| **Web standards focused** | Uses more native web APIs |

**Why we didn't choose it:**

| Challenge | Details |
|-----------|---------|
| **Smaller community** | Less tutorials and examples available |
| **Similar to Next.js** | If choosing between them, Next.js has more momentum |

**Best for**: Developers who prefer Remix's philosophy over Next.js.

---

### Our Recommendation: Next.js

For a ChatKit website, **Next.js is the best choice** because:

1. **One codebase**: Frontend and backend together
2. **Native React**: ChatKit works perfectly
3. **Easy deployment**: Vercel makes it simple
4. **Great documentation**: Official and community
5. **Industry standard**: Skills transfer to other projects

---

## Website Structure Explained

### The File System = Your Website Structure

In Next.js (and most modern frameworks), **where you put files determines your website's structure**. This is called "file-based routing."

### Visual Overview

```
your-project/
│
├── src/                          # Source code lives here
│   │
│   ├── app/                      # Your website pages
│   │   │
│   │   ├── layout.tsx            # Wraps ALL pages (navbar, footer)
│   │   │
│   │   ├── page.tsx              # Homepage → yoursite.com/
│   │   │
│   │   ├── about/
│   │   │   └── page.tsx          # About page → yoursite.com/about
│   │   │
│   │   ├── contact/
│   │   │   └── page.tsx          # Contact page → yoursite.com/contact
│   │   │
│   │   ├── ask-agent/
│   │   │   └── page.tsx          # Chat page → yoursite.com/ask-agent
│   │   │                         # (ChatKit lives here!)
│   │   │
│   │   ├── api/                  # Backend API routes (not visible as pages)
│   │   │   └── chatkit/
│   │   │       └── session/
│   │   │           └── route.ts  # API endpoint → yoursite.com/api/chatkit/session
│   │   │
│   │   └── globals.css           # Global styles
│   │
│   └── components/               # Reusable UI pieces
│       ├── Navbar.tsx            # Navigation bar
│       ├── Footer.tsx            # Footer
│       └── ...                   # Other components
│
├── public/                       # Static files (images, videos)
│   └── images/
│       └── logo.png
│
├── package.json                  # Project dependencies
├── .env.local                    # Secret environment variables
└── .gitignore                    # Files to not upload to GitHub
```

### Understanding Each Part

#### 1. The `layout.tsx` File

This is the "wrapper" for your entire website. It contains things that appear on EVERY page:

```tsx
// src/app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />        {/* Appears on every page */}
        <main>
          {children}      {/* The actual page content goes here */}
        </main>
        <Footer />        {/* Appears on every page */}
      </body>
    </html>
  );
}
```

**Why this matters for ChatKit**: This is where you load the ChatKit script so it's available throughout your site.

#### 2. Page Files (`page.tsx`)

Each `page.tsx` file becomes a page on your website:

| File Location | URL |
|---------------|-----|
| `app/page.tsx` | `yoursite.com/` (homepage) |
| `app/about/page.tsx` | `yoursite.com/about` |
| `app/contact/page.tsx` | `yoursite.com/contact` |
| `app/ask-agent/page.tsx` | `yoursite.com/ask-agent` |

**Why this matters for ChatKit**: Your chat interface lives in `app/ask-agent/page.tsx` (or whatever you name it).

#### 3. API Routes (`route.ts`)

Files in the `api/` folder become backend endpoints. Users can't see these as pages – they're for your code to call.

| File Location | URL (API) |
|---------------|-----------|
| `app/api/chatkit/session/route.ts` | `yoursite.com/api/chatkit/session` |

**Why this matters for ChatKit**: This is where you securely create chat sessions using your OpenAI API key.

#### 4. Components Folder

Reusable UI pieces that you use across multiple pages:

```tsx
// Using a component
import Navbar from '@/components/Navbar';

// Then in your JSX:
<Navbar />
```

**Why this matters**: Keeps your code organized and DRY (Don't Repeat Yourself).

---

## Understanding Key Concepts

Before you start coding, let's understand some concepts that might be confusing if you're new:

### Concept 1: Client vs Server Components

In Next.js, components can run in two places:

#### Server Components (Default)
- Run on the server when the page loads
- Can access databases, file systems, API keys
- Send HTML to the browser
- CANNOT use browser features (localStorage, window, etc.)
- CANNOT use React hooks (useState, useEffect)

#### Client Components
- Run in the user's browser
- CAN use browser features
- CAN use React hooks
- CANNOT access server-only features (API keys, databases)
- Marked with `'use client'` at the top of the file

**For ChatKit**: Your chat page MUST be a client component because ChatKit uses React hooks and browser APIs:

```tsx
'use client';  // ← This line makes it a client component

import { ChatKit, useChatKit } from '@openai/chatkit-react';
// ... rest of your code
```

### Concept 2: Environment Variables

Environment variables are values that change depending on where your code runs (your computer vs a server).

#### Why Use Them?
- **Security**: Keep API keys out of your code
- **Flexibility**: Different values for development vs production
- **Best practice**: Never commit secrets to GitHub

#### How They Work in Next.js

```
.env.local                       (Your computer - for local development)
├── OPENAI_API_KEY=sk-abc123...  (Your real API key)
└── WORKFLOW_ID=wf-xyz789...     (Your workflow ID)

Vercel Dashboard                 (Production server)
├── OPENAI_API_KEY=sk-abc123...  (Same key, added manually)
└── WORKFLOW_ID=wf-xyz789...     (Same ID, added manually)
```

**Important**: `.env.local` only works on YOUR computer. You MUST also add variables to Vercel for production.

#### The `NEXT_PUBLIC_` Prefix

In Next.js, environment variables are **private by default** (only available on the server).

```
# These are PRIVATE (server-only, secure)
OPENAI_API_KEY=sk-secret...
WORKFLOW_ID=wf-secret...

# These are PUBLIC (visible in browser, not for secrets!)
NEXT_PUBLIC_SITE_NAME=My Website
```

**For ChatKit**: Your API key should NEVER have `NEXT_PUBLIC_` prefix. It must stay private.

### Concept 3: API Routes

API routes let you create backend endpoints in your Next.js project.

```tsx
// src/app/api/chatkit/session/route.ts

export async function POST(request: Request) {
  // This code runs on the SERVER
  // It can safely use your API key
  
  const apiKey = process.env.OPENAI_API_KEY;  // Safe! Server-only
  
  // Call OpenAI, create session, return result
  return Response.json({ session: 'created' });
}
```

**Why This Matters**: ChatKit needs to call your backend to get a session token. This API route handles that securely.

### Concept 4: The Session Flow

Understanding how ChatKit sessions work:

```
1. User visits your chat page
   ↓
2. Your frontend code calls your backend: POST /api/chatkit/session
   ↓
3. Your backend (with API key) calls OpenAI: Create session for workflow XYZ
   ↓
4. OpenAI returns a "client_secret" (temporary token)
   ↓
5. Your backend sends this token to your frontend
   ↓
6. ChatKit uses this token to connect directly to OpenAI
   ↓
7. User can now chat!
```

This flow keeps your API key secure while letting users chat.

---

## Setting Up Your Project

Now that you understand the concepts, here's how to set up your project:

### Step 1: Create a New Next.js Project

```bash
npx create-next-app@latest my-chatkit-website
```

When prompted:
- ✅ Would you like to use TypeScript? **Yes** (helps catch errors)
- ✅ Would you like to use ESLint? **Yes** (code quality)
- ✅ Would you like to use Tailwind CSS? **Yes** (easy styling)
- ✅ Would you like to use `src/` directory? **Yes** (cleaner organization)
- ✅ Would you like to use App Router? **Yes** (latest Next.js routing)
- ❌ Would you like to customize the default import alias? **No** (keep defaults)

### Step 2: Install ChatKit

```bash
cd my-chatkit-website
npm install @openai/chatkit-react
```

### Step 3: Create Your Folder Structure

```bash
# Create the API route folders
mkdir -p src/app/api/chatkit/session

# Create a chat page folder
mkdir -p src/app/ask-agent
```

### Step 4: Create Your Files

You need to create/modify these files:

| File | Purpose |
|------|---------|
| `src/app/api/chatkit/session/route.ts` | Backend API for creating sessions |
| `src/app/ask-agent/page.tsx` | Frontend chat page |
| `src/app/layout.tsx` | Add ChatKit script |
| `.env.local` | Your secret keys |

See the [ChatKit Integration Guide](./CHATKIT_INTEGRATION_GUIDE.md) for the actual code to put in each file.

---

## What to Consider Before You Start

### 1. Do You Have the Prerequisites?

Before coding, make sure you have:

| Requirement | Where to Get It |
|-------------|-----------------|
| OpenAI Account | [platform.openai.com](https://platform.openai.com) |
| API Key | OpenAI Dashboard → API Keys |
| Workflow ID | OpenAI Agent Builder → Your Workflow |
| GitHub Account | [github.com](https://github.com) |
| Vercel Account | [vercel.com](https://vercel.com) (free tier works) |
| Node.js installed | [nodejs.org](https://nodejs.org) (LTS version) |

### 2. Planning Your Website Structure

Think about your pages BEFORE you code:

**Questions to ask yourself:**
- What pages does my website need?
- Where will the chat feature live? (Dedicated page? Floating widget? Both?)
- What will the navigation look like?
- Do I need user authentication? (ChatKit can track users)

**Common structures:**

```
Simple Site:
├── Home
├── About
└── Chat (ChatKit)

Business Site:
├── Home
├── Services
├── About
├── Contact
└── Support Chat (ChatKit)

Documentation Site:
├── Home
├── Docs
│   ├── Getting Started
│   ├── API Reference
│   └── Examples
└── Ask AI (ChatKit)
```

### 3. Domain Considerations

ChatKit requires your domain to be whitelisted in OpenAI. Plan for:

| Environment | Domain | Need to Whitelist? |
|-------------|--------|-------------------|
| Local dev | `localhost` | Yes, if you want local testing |
| Vercel preview | `your-project-abc123.vercel.app` | Yes, each preview URL |
| Production | `your-project.vercel.app` | Yes |
| Custom domain | `yourdomain.com` | Yes, requires DNS verification |

### 4. Cost Considerations

| Item | Cost |
|------|------|
| Next.js | Free |
| Vercel Hobby Plan | Free (sufficient for most projects) |
| OpenAI API | Pay-per-use (see OpenAI pricing) |
| Custom domain | ~$10-20/year (optional) |

**Tip**: Start with Vercel's free tier and the `.vercel.app` domain. Upgrade later if needed.

### 5. Security Checklist

Before deploying, ensure:

- [ ] API key is ONLY in `.env.local` (local) and Vercel Dashboard (production)
- [ ] API key does NOT have `NEXT_PUBLIC_` prefix
- [ ] `.env.local` is in `.gitignore`
- [ ] You haven't accidentally committed secrets to GitHub
- [ ] Your domain is in OpenAI's allowlist

---

## Common Pitfalls and How to Avoid Them

### Pitfall 1: "It Works Locally But Not on Vercel"

**Cause**: Environment variables not set in Vercel Dashboard.

**Solution**: 
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add BOTH `OPENAI_API_KEY` and `WORKFLOW_ID`
3. Check ALL environments (Production, Preview, Development)
4. Redeploy

### Pitfall 2: "Domain Verification Failed"

**Cause**: Your current URL isn't in OpenAI's allowlist.

**Solution**:
1. Check the EXACT URL in the browser (including any preview hash)
2. Add that exact domain to OpenAI Platform → Settings → Security → Domain Allowlist
3. Refresh your page

### Pitfall 3: "Module Not Found" Errors

**Cause**: Package not installed or cached incorrectly.

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Pitfall 4: "CORS Error" in Browser Console

**Cause**: Usually a misconfiguration or trying to call OpenAI directly from frontend.

**Solution**: Make sure all OpenAI API calls go through YOUR backend endpoint, not directly from the browser.

### Pitfall 5: Chat Works But Shows Wrong AI

**Cause**: Wrong `WORKFLOW_ID`.

**Solution**: Double-check your workflow ID in both `.env.local` and Vercel Dashboard.

### Pitfall 6: "Hydration Error" or "Server/Client Mismatch"

**Cause**: Using browser-only features in a server component.

**Solution**: Add `'use client'` at the top of your chat page file.

---

## Quick Reference: Minimum Files Needed

For a minimal ChatKit website, you need these files:

### 1. Backend API (`src/app/api/chatkit/session/route.ts`)

Creates chat sessions securely.

### 2. Chat Page (`src/app/ask-agent/page.tsx`)

Shows the ChatKit interface to users.

### 3. Layout (`src/app/layout.tsx`)

Loads the ChatKit script.

### 4. Environment Variables (`.env.local`)

Stores your secrets locally.

### 5. Vercel Environment Variables

Same secrets, but on Vercel's servers.

---

## Glossary

| Term | Definition |
|------|------------|
| **Frontend** | The part of a website users see and interact with in their browser |
| **Backend** | The server-side code that handles data, security, and logic |
| **API** | A way for different programs to communicate |
| **API Route** | A URL that returns data instead of a webpage |
| **API Key** | A secret password that identifies you to a service |
| **Environment Variable** | A value stored outside your code, different per environment |
| **Framework** | Pre-built code that helps you build faster (React, Next.js, etc.) |
| **Deployment** | Putting your website on the internet for others to use |
| **Client Component** | Code that runs in the user's browser |
| **Server Component** | Code that runs on the server before sending to browser |
| **Session** | A temporary connection between a user and the chat system |
| **Workflow** | Your AI agent's configuration in OpenAI Agent Builder |
| **Domain Allowlist** | A security list of approved websites that can use ChatKit |

---

## Next Steps

1. **Read the detailed integration guide**: [CHATKIT_INTEGRATION_GUIDE.md](./CHATKIT_INTEGRATION_GUIDE.md)
2. **Set up your OpenAI workflow**: Create your AI agent in Agent Builder
3. **Create your project**: Follow the setup steps above
4. **Deploy to Vercel**: Get your site live
5. **Iterate and improve**: Add more pages, customize the design

---

## Resources

### Official Documentation
- [OpenAI ChatKit Docs](https://platform.openai.com/docs/guides/chatkit)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)

### Tutorials
- [Next.js Learn Course](https://nextjs.org/learn) (free, interactive)
- [React Basics](https://react.dev/learn) (if you're new to React)

### Community Help
- [ChatKit GitHub](https://github.com/openai/chatkit-js)
- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

---

## Summary

Building a ChatKit website requires:

1. **A full-stack framework** (we recommend Next.js)
2. **Understanding client vs server** (API keys stay on server)
3. **Proper file structure** (pages, API routes, components)
4. **Environment variables** (both local and on Vercel)
5. **Domain whitelisting** (add your URLs to OpenAI)

The key insight: ChatKit is a frontend widget, but it needs a backend to work securely. Next.js gives you both in one project, making it the ideal choice for beginners.

---

*Happy building! Remember: every expert was once a beginner. Take it step by step, and don't hesitate to ask for help when you need it.*
