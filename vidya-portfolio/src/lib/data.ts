import doshaImg from '@/assets/Dosha.png'
import sentimentImg from '@/assets/sentiment_ana.png'
import Myimage from '@/assets/Myimage.png'

export const personalInfo = {
  name: 'Vidya Sagar',
  initials: 'VS',
  title: 'Full Stack Developer',
  subtitle:
    'Full Stack Developer focused on creating meaningful digital experiences through thoughtful design and scalable engineering.',
  email: 'vidyasagar@email.com',
  github: 'https://github.com/TeChYViDYa',
  linkedin: 'https://linkedin.com/in/vidyasagar',
  resume: '/resume.pdf',
  available: true,
  image: Myimage,
}

export const stats = [
  { number: '1+', label: 'Year Learning' },
  { number: '10+', label: 'Projects Built' },
  { number: '12+', label: 'Technologies' },
]

export const skills = [
  {
    icon: '🎨',
    category: 'Frontend',
    technologies: ['React', 'Next.js', 'HTML', 'CSS', 'Tailwind', 'TypeScript'],
  },
  {
    icon: '⚙️',
    category: 'Backend',
    technologies: ['Node.js', 'Express', 'Python', 'REST APIs', 'Java'],
  },
  {
    icon: '🗄️',
    category: 'Databases',
    technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase'],
  },
  {
    icon: '☁️',
    category: 'Cloud & DevOps',
    technologies: ['Git', 'GitHub', 'Vercel', 'Docker', 'Linux'],
  },
  {
    icon: '🛠️',
    category: 'Tools',
    technologies: ['VS Code', 'Figma', 'Postman', 'npm'],
  },
]

export const projects = [
  {
    number: '01',
    title: 'Dosha-App — Discover your Ayuvedic Dosha',
    description:
      'A personalized wellness app that identifies your Ayurvedic dosha through a simple quiz and provides daily health tips, diet recommendations, and lifestyle advice based on your unique constitution.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/TeChYViDYa/dosha-app',
    demo: 'https://devconnect.vercel.app',
    color: '#D8F3DC',
    image: doshaImg,
  },
  {
    number: '02',
    title: 'Sentiment Analyzer — AI-Powered Text Analysis',
    description:
      'A smart sentiment analysis tool that provides insights into text data using machine learning algorithms. Features real-time processing, customizable models, and detailed reporting.',
    technologies: ['Next.js', 'PostgreSQL', 'Chart.js', 'Tailwind'],
    github: 'https://github.com/TeChYViDYa/Sentiment-Analyzer',
    demo: 'https://budgetbuddy.vercel.app',
    color: '#E8F4FD',
    image: sentimentImg,  
  },

]

export const experiences = [

  {
    year: '2026 - Present',
    role: 'Web Developer',
    organization: 'Different Companies & Freelance',
    description:
      'Built responsive websites and web apps for small businesses and individuals. Delivered projects using React, Node.js, and various backend technologies.',
  },
  {
    year: '2025',
    role: 'B.Tech in ECE',
    organization: 'UIET Chandigarh, Panjab University',
    description:
      'Pursuing my degree with a focus on data structures, algorithms, full stack development, and software engineering principles. Actively building projects alongside coursework.',
  },
  
  {
    year: '2023',
    role: 'Started Coding Journey',
    organization: 'Self-taught',
    description:
      'Began with Python and HTML/CSS, quickly moved into JavaScript and full stack development. Built my first full stack application within 6 months of starting.',
  },
]

export const values = [
  {
    icon: '✦',
    title: 'Simplicity',
    description:
      "The best solutions are the ones that don't feel like solutions at all. I strip away complexity until only clarity remains.",
  },
  {
    icon: '◎',
    title: 'Clarity',
    description:
      "Whether it's code or communication, I prioritize being understood over being impressive.",
  },
  {
    icon: '◆',
    title: 'Craftsmanship',
    description:
      "I care deeply about the details — the ones users never see, and the ones they feel every time they use an app.",
  },
  {
    icon: '⟳',
    title: 'Continuous Learning',
    description:
      "Technology evolves fast. I embrace that. Every project is a chance to learn something new and grow as an engineer.",
  },
  {
    icon: '❋',
    title: 'Service',
    description:
      "I build for people. The measure of great software is not how clever it is — it's how well it serves its users.",
  },
]
