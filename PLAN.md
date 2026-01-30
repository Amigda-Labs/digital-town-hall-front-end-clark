# Clark Pampanga Townhall

## Project Description

Clark Pampanga Townhall is a community-focused website for the Clark Freeport Zone in Pampanga, Philippines. The site will present a warm, leisure-park style digital portal for residents and visitors, avoiding the bland aesthetic of typical government pages. It features a simple navigation bar (Home, Contact Us, Ask Our Agent) and a hero section with an embedded YouTube video highlighting local sights. Crucially, the "Ask Our Agent" section integrates OpenAI’s ChatKit UI to provide an interactive AI-powered chat assistant. A lightweight backend (e.g. Node.js or Python/FastAPI) will support the agent sessions and API calls, even as the precise stack is refined.

## Key Features

- **Interactive Navigation:** A clean navbar with Home, Contact Us, and Ask Our Agent links ensures intuitive access to key sections.
- **Hero Video Section:** The homepage includes a prominent hero area embedding a YouTube video (e.g. a Clark Pampanga tourism or intro video) to engage visitors with vibrant visual content: http://www.visitclark.com/pics/cdc_avp.mp4?b
- **AI-Powered Chat (“Ask Our Agent”):** Leveraging OpenAI’s ChatKit, the site provides an embeddable AI chat widget. ChatKit offers a customizable chat UI to build agentic chat experiences. This lets visitors ask questions in natural language and receive instant responses. OpenAI Agents SDK from a different backend will be integrating with this.
- **Modern Responsive Design:** The site will use a clean, mobile-friendly layout with clear headings and high-quality images. Key information (like contact details or news) will be prominent.
- **Contact & Info Pages:** In addition to live chat, there will be a Contact Us page and an FAQ/information section to help users find information about town services, events, and resources.

## Design Philosophy

Clark Pampanga Townhall’s visual style will emphasize the region’s **natural and leisure-oriented identity**. We will use warm, inviting color palettes (greens, blues, earth tones) and friendly typography to create a homely atmosphere. For example, the design may feature high-quality photos of local landmarks (Mt. Arayat, Clark parks, etc.) to capture the essence of Pampanga’s scenery. The site should “feel as welcoming as the parks themselves,” so layouts will be straightforward and user-friendly. Clear visual hierarchy (through headings and imagery) will guide users to important content, building trust with a professional yet approachable look.

Accessibility is also a priority: we will ensure sufficient color contrast and keyboard-friendly navigation so the site is inclusive. This aligns with accessibility best practices, which promote inclusivity, increase engagement, and reduce frustration for all users.

## Planned Tech Stack

- **Frontend:** The front end will be built with a flexible framework (e.g. React, Vue, or vanilla JS) and standard web technologies (HTML5/CSS3). It will embed OpenAI’s ChatKit JavaScript widget in the "Ask Our Agent" page.
- **Chat Integration:** We will follow OpenAI’s recommended setup: obtain a ChatKit *workflow ID* via their Agent Builder, then generate ChatKit session tokens on our server. The frontend uses the ChatKit control to render the chat UI with the session token.
- **Backend:** A simple backend server (Node.js/Express or Python/FastAPI) will handle ChatKit session creation and refresh (exchanging the workflow ID and API keys as needed). It may also store logs or connect to a database for any additional agent data.
- **Other Tools:** We may include UI libraries or CSS frameworks (like Bootstrap or Tailwind) for rapid development. Core focus is on integrating the ChatKit UI and ensuring the site is scalable and secure.
