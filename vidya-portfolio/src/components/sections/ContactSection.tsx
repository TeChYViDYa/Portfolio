'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, FileText } from 'lucide-react'
import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { personalInfo } from '@/lib/data'

const contactLinks = [
  { icon: Mail, label: 'Email', href: `mailto:${personalInfo.email}`, value: personalInfo.email },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin, value: 'linkedin.com/in/vidyasagar' },
  { icon: Github, label: 'GitHub', href: personalInfo.github, value: 'github.com/vidyasagar' },
  { icon: FileText, label: 'Resume', href: personalInfo.resume, value: 'Download CV' },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Replace with your form submission logic (e.g., Resend, Formspree, etc.)
    setSent(true)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="bg-white border-t border-[#E5E5E5] py-[100px] px-6 md:px-10">
      <div className="max-w-[640px] mx-auto text-center">
        <FadeUp>
          <SectionLabel text="Contact" className="justify-center" />
          <h2 className="text-[36px] md:text-[52px] font-extrabold tracking-[-2px] md:tracking-[-2.5px] text-[#111] leading-[1.1] mb-6">
            Let's Build Something{' '}
            <span className="text-[#2D6A4F]">Meaningful</span>
          </h2>
          <p className="text-[17px] text-[#666] leading-[1.75] mb-12">
            Whether you have a project in mind, want to collaborate, or just want to say hello —
            my inbox is always open.
          </p>
        </FadeUp>

        {/* Contact Links */}
        <FadeUp delay={0.1}>
          <div className="flex justify-center flex-wrap gap-6 mb-14">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#111] font-semibold text-[15px] hover:text-[#2D6A4F] transition-colors group"
              >
                <span className="w-10 h-10 bg-[#FAFAFA] border border-[#E5E5E5] rounded-xl flex items-center justify-center group-hover:border-[#52B788] transition-colors">
                  <link.icon size={18} />
                </span>
                {link.label}
              </a>
            ))}
          </div>
        </FadeUp>

        {/* Form */}
        <FadeUp delay={0.15}>
          {sent ? (
            <div className="bg-[#D8F3DC] text-[#2D6A4F] rounded-2xl py-8 px-6 font-semibold text-[16px]">
              ✓ Message sent! I'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
              <input
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-5 py-3.5 border border-[#E5E5E5] rounded-xl text-[15px] bg-[#FAFAFA] text-[#111] placeholder:text-[#999] outline-none focus:border-[#2D6A4F] transition-colors font-medium"
              />
              <input
                type="email"
                required
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-5 py-3.5 border border-[#E5E5E5] rounded-xl text-[15px] bg-[#FAFAFA] text-[#111] placeholder:text-[#999] outline-none focus:border-[#2D6A4F] transition-colors font-medium"
              />
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project or idea..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-5 py-3.5 border border-[#E5E5E5] rounded-xl text-[15px] bg-[#FAFAFA] text-[#111] placeholder:text-[#999] outline-none focus:border-[#2D6A4F] transition-colors font-medium resize-y"
              />
              <button
                type="submit"
                className="bg-[#2D6A4F] text-white py-4 rounded-xl text-[15px] font-bold hover:opacity-85 transition-opacity tracking-[0.3px]"
              >
                Send Message →
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  )
}
