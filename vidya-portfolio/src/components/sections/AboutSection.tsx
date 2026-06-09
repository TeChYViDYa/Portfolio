import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { personalInfo } from '@/lib/data'

const pills = ['Problem Solver', 'Open Source Enthusiast', 'CS Student', 'Builder']

export default function AboutSection() {
  return (
    <section id="about" className="py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <FadeUp>
        <SectionLabel text="About Me" />
        <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#111] mb-16 leading-[1.1]">
          I build things<br />that matter.
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Text */}
        <FadeUp delay={0.1}>
          <div className="space-y-6">
            <p className="text-[17px] text-[#666] leading-[1.85]">
              Hi, I'm{' '}
              <strong className="text-[#111] font-semibold">{personalInfo.name}</strong> — a
              first-year Computer Science student and full stack developer with a passion for
              building clean, functional, and impactful digital products.
            </p>
            <p className="text-[17px] text-[#666] leading-[1.85]">
              I believe great software isn't just about code. It's about{' '}
              <strong className="text-[#111] font-semibold">understanding people, solving real problems,</strong>{' '}
              and delivering experiences that feel effortless. Every project I take on, I approach
              with curiosity and intention.
            </p>
            <p className="text-[17px] text-[#666] leading-[1.85]">
              Currently exploring the world of web development, backend systems, and open source.
              I'm always building, always learning, and always looking for the next challenge.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {pills.map((pill) => (
                <span
                  key={pill}
                  className="bg-[#D8F3DC] text-[#2D6A4F] px-4 py-2 rounded-full text-[13px] font-semibold"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Quote card */}
        <FadeUp delay={0.2}>
          <div className="bg-white border border-[#E5E5E5] border-l-4 border-l-[#2D6A4F] rounded-2xl p-10">
            <blockquote className="text-[21px] font-semibold text-[#111] leading-[1.5] tracking-[-0.4px] mb-5">
              "Good code is written for humans first, and machines second. I strive to write
              software that is readable, maintainable, and purposeful."
            </blockquote>
            <cite className="text-[14px] text-[#666] not-italic">
              — My approach to engineering
            </cite>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
