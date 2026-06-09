import { personalInfo } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5] py-8 px-6 md:px-10 text-center">
      <p className="text-[13px] text-[#666]">
        Designed & built with ♡ by{' '}
        <strong className="text-[#2D6A4F] font-semibold">{personalInfo.name}</strong> · 2025
      </p>
    </footer>
  )
}
