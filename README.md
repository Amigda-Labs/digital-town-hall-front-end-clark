# Clark Pampanga Digital Town Hall

A modern, responsive website for the Clark Freeport Zone in Pampanga, Philippines.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage
│   ├── contact/page.tsx      # Contact Us page
│   ├── ask-agent/page.tsx    # AI Agent chat interface (placeholder)
│   ├── layout.tsx            # Root layout with navbar and footer
│   └── globals.css           # Global styles and theme
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer component
│   ├── HeroSection.tsx       # Hero with video background
│   ├── DestinationsSection.tsx  # Popular destinations
│   ├── EventsSection.tsx     # Upcoming events
│   ├── ActivitiesSection.tsx # Activities and experiences
│   └── NewsSection.tsx       # Latest news and updates
```

## 🎨 Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Hero Video Section** - Engaging video background
- ✅ **Destinations Showcase** - Popular Clark attractions
- ✅ **Events Calendar** - Upcoming events and festivals
- ✅ **Activities Grid** - Things to do in Clark
- ✅ **News Section** - Latest updates
- ✅ **Contact Form** - With office information and map
- ✅ **AI Chat Placeholder** - Ready for OpenAI integration
- ✅ **Image Error Handling** - Graceful fallbacks for failed images

## 🎨 Design Theme

The website uses warm, inviting colors inspired by Clark's natural landscape:
- Primary Green: `#2D5A3D`
- Earth Tones: `#8B7355`, `#D4C4A8`
- Sky Blue: `#5B9BD5`
- Sunset Orange: `#E07C3E`

## 🔧 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons (SVG)
- **Images**: Next.js Image optimization

## 📝 Future Integration

The "Ask Our Agent" page is prepared for OpenAI Agents SDK integration. The chat interface is ready - just connect your backend API.

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Clear Next.js cache
```bash
rm -rf .next
npm run dev
```

## 📄 License

Private - Amigda Labs
