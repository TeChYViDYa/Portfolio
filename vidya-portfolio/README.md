# Vidya Sagar — Portfolio

A modern, minimal personal portfolio built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (scroll animations, hover effects, staggered reveals)
- **Lucide React** (icons)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

## Customize Your Content

All your personal data lives in one file:

```
src/lib/data.ts
```

Edit this file to update:
- Your name, email, GitHub, LinkedIn links
- Stats (years of experience, projects, technologies)
- Skills and tech stack
- Projects (title, description, tech, links)
- Work experience / education timeline
- Values / principles

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata & font
│   ├── page.tsx         # Main page (composes all sections)
│   └── globals.css      # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx   # Sticky nav with mobile menu
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ValuesSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── FadeUp.tsx   # Scroll-triggered fade-up animation
│       └── SectionLabel.tsx
└── lib/
    └── data.ts          # ← Edit this to personalize everything
```

## Deploy to Vercel (Free)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Click Deploy — done!

## Color Palette

| Token | Value |
|-------|-------|
| Background | `#FAFAFA` |
| Primary text | `#111111` |
| Muted text | `#666666` |
| Border | `#E5E5E5` |
| Accent (Forest Green) | `#2D6A4F` |
| Accent light | `#D8F3DC` |
| Accent mid | `#52B788` |
