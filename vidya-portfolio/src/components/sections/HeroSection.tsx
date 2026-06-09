"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo, stats } from "@/lib/data";
import Image from "next/image";
import Myimage from "@/assets/Myimage.jpg";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-20 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto w-full flex flex-col md:flex-row items-center gap-16 md:gap-20">
        {/* Left */}
        <motion.div
          className="flex-[1.2] text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-[#52B788] animate-pulse" />
            <span className="text-xs font-bold tracking-[3px] text-[#2D6A4F] uppercase">
              Available for work
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={itemVariants}
            className="text-[48px] sm:text-[62px] md:text-[76px] font-extrabold leading-[1.0] tracking-[-3px] text-[#111] mb-7"
          >
            BUILDING
            <br />
            <span className="text-[#2D6A4F]">DIGITAL</span>
            <br />
            PRODUCTS
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[17px] md:text-[18px] text-[#666] leading-[1.78] max-w-[480px] mx-auto md:mx-0 mb-10"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex gap-4 mb-14 justify-center md:justify-start flex-wrap"
          >
            <Link
              href="#projects"
              className="bg-[#2D6A4F] text-white px-8 py-3.5 rounded-xl text-[15px] font-semibold hover:opacity-85 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="border border-[#E5E5E5] text-[#111] px-8 py-3.5 rounded-xl text-[15px] font-semibold hover:border-[#111] transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex gap-12 justify-center md:justify-start"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[32px] font-extrabold text-[#111] leading-none tracking-tight">
                  {stat.number}
                </div>
                <div className="text-[12px] text-[#666] tracking-[0.5px] mt-1 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — Visual */}
        <motion.div
          className="flex-1 w-full flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative w-full max-w-[360px]">
            <div className="relative w-full h-[400px] md:h-[440px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#D8F3DC] to-[#B7E4C7]">
              <Image
                src={Myimage}
                alt="Vidya Sagar"
                fill
                priority
                className="object-cover"
              />
            </div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute bottom-6 left-6 bg-white border border-[#E5E5E5] rounded-xl px-5 py-3.5 shadow-sm"
            >
              <div className="text-[13px] font-bold text-[#111]">
                {personalInfo.name}
              </div>
              <div className="text-[11px] text-[#666] mt-0.5">
                {personalInfo.title} · CS Student
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
