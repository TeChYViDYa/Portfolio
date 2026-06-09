'use client'

import { motion } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { skills } from '@/lib/data'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <FadeUp>
        <SectionLabel text="Skills" />
        <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#111] mb-4 leading-[1.1]">
          My Tech Stack
        </h2>
        <p className="text-[17px] text-[#666] max-w-[580px] leading-[1.75] mb-16">
          A curated toolkit of technologies I use to bring ideas to life — from pixels to databases.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill, i) => (
          <FadeUp key={skill.category} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -3, borderColor: '#52B788' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E5E5] rounded-2xl p-7 h-full cursor-default"
            >
              <div className="text-3xl mb-4">{skill.icon}</div>
              <h3 className="text-[12px] font-bold tracking-[1.5px] uppercase text-[#666] mb-4">
                {skill.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#FAFAFA] text-[#111] border border-[#E5E5E5] px-3 py-1.5 rounded-lg text-[12px] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
