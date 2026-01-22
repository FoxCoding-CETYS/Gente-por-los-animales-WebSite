import { colorClasses } from "@/lib/colors"
import { t, cn } from "@/lib/typography";

interface SectionHeaderProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export function SectionHeader({ title, subtitle, centered = true, className = "" }: SectionHeaderProps) {
  return (
    <div className={`space-y-4 ${centered ? "text-center" : ""} ${className}`}>
      <h2 className={cn("font-bold leading-tight", t.display)}>{title}</h2>
      {subtitle && (
        <p
          className={`text-base sm:text-lg lg:text-2xl ${colorClasses.text.secondary} max-w-2xl ${centered ? "mx-auto" : ""} px-4`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
