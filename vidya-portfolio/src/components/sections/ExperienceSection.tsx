import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { experiences } from '@/lib/data'

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <FadeUp>
        <SectionLabel text="Experience" />
        <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#111] mb-16 leading-[1.1]">
          My Journey
        </h2>
      </FadeUp>

      <div className="relative pl-8 border-l-2 border-[#E5E5E5]">
        {experiences.map((exp, i) => (
          <FadeUp key={exp.role} delay={i * 0.1}>
            <div className="mb-14 relative">
              {/* Dot */}
              <span className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-[#2D6A4F]" />

              <p className="text-[12px] font-bold tracking-[2px] text-[#2D6A4F] uppercase mb-2">
                {exp.year}
              </p>
              <h3 className="text-[20px] md:text-[22px] font-extrabold text-[#111] tracking-[-0.4px] mb-1">
                {exp.role}
              </h3>
              <p className="text-[14px] font-semibold text-[#666] mb-3">{exp.organization}</p>
              <p className="text-[15px] text-[#666] leading-[1.75] max-w-[600px]">
                {exp.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
