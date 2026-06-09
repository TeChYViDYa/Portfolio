'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import SectionLabel from '@/components/ui/SectionLabel'
import { projects } from '@/lib/data'
import Image from 'next/image'
import doshaImg from '../assets/dosha.png'




export default function ProjectsSection() {
  return (
    <section id="projects" className="py-[100px] px-6 md:px-10 max-w-[1200px] mx-auto">
      <FadeUp>
        <SectionLabel text="Projects" />
        <h2 className="text-[34px] md:text-[48px] font-extrabold tracking-[-1.5px] md:tracking-[-2px] text-[#111] mb-4 leading-[1.1]">
          Work I'm proud of.
        </h2>
        <p className="text-[17px] text-[#666] max-w-[580px] leading-[1.75] mb-16">
          A selection of projects where I turned ideas into real, working products.
        </p>
      </FadeUp>

      <div className="flex flex-col gap-10">
        {projects.map((project, i) => {
          const isReverse = i % 2 !== 0
          return (
            <FadeUp key={project.number} delay={0.1}>
              <motion.div
                whileHover={{ borderColor: '#52B788' }}
                transition={{ duration: 0.2 }}
                className="bg-white border border-[#E5E5E5] rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              >
                {/* Text — swap order on desktop for alternating layout */}
                <div className={`${isReverse ? 'md:order-2' : 'md:order-1'}`}>
                  <p className="text-[12px] font-bold tracking-[2px] text-[#2D6A4F] uppercase mb-3">
                    Project {project.number}
                  </p>
                  <h3 className="text-[22px] md:text-[26px] font-extrabold tracking-[-0.5px] text-[#111] mb-3 leading-[1.25]">
                    {project.title}
                  </h3>
                  <p className="text-[15px] text-[#666] leading-[1.75] mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-[#FAFAFA] text-[#111] border border-[#E5E5E5] px-3 py-1 rounded-lg text-[12px] font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-5">
                    <Link
                      href={project.github}
                      className="text-[13px] font-semibold text-[#2D6A4F] border-b border-[#52B788] pb-0.5 hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </Link>
                    <Link
                      href={project.demo}
                      className="text-[13px] font-semibold text-[#2D6A4F] border-b border-[#52B788] pb-0.5 hover:opacity-70 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo →
                    </Link>
                  </div>
                </div>

                {/* Image placeholder */}
                <div className={`${isReverse ? 'md:order-1' : 'md:order-2'}`}>
                  <div
                    className="relative h-[220px] md:h-[260px] rounded-2xl flex items-center justify-center">
                    <Image
                    src = {project.image}
                    alt = {project.title}
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    
      
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          )
        })}
      </div>
    </section>
  )
}
