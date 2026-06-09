'use client'

import { motion } from 'framer-motion'
import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { values } from '@/lib/data'

export default function ValuesSection() {
  return (
    <section className="py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <FadeUp>
        <SectionLabel text="Principles" />
        <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#111] mb-4 leading-[1.1]">
          How I Build
        </h2>
        <p className="text-[17px] text-[#666] max-w-[580px] leading-[1.75] mb-16">
          The guiding principles that shape how I write code, design systems, and collaborate with
          others.
        </p>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {values.map((value, i) => (
          <FadeUp key={value.title} delay={i * 0.08}>
            <motion.div
              whileHover={{ y: -4, borderColor: '#52B788' }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E5E5E5] rounded-2xl p-8 h-full cursor-default"
            >
              <div className="text-3xl mb-4">{value.icon}</div>
              <h3 className="text-[17px] font-extrabold text-[#111] tracking-[-0.3px] mb-2.5">
                {value.title}
              </h3>
              <p className="text-[14px] text-[#666] leading-[1.72]">{value.description}</p>
            </motion.div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
