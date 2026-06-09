interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-xs font-bold tracking-[3px] text-[#2D6A4F] uppercase mb-5 ${className}`}
    >
      {text}
    </p>
  )
}
