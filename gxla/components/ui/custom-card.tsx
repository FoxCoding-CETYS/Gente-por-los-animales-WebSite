"use client"

import type React from "react"

interface CustomCardProps {
  children?: React.ReactNode
  variant?: "normal" | "big"
  size?: "sm" | "md" | "lg"
  className?: string
  icon?: string
  title?: string
  title1?: string
  title2?: string
  title3?: string
  title4?: string
  title5?: string
  title6?: string
  text1?: string
  text2?: string
  text3?: string
  text4?: string
  text5?: string
  text6?: string
  onClick?: () => void
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "lg:h-[354px] lg:w-[288px]",
  lg: "lg:w-[545px] w-7/11",
}

export function CustomCard({
  children,
  variant = "normal",
  size = "lg",
  className = "",
  icon,
  title,
  title1,
  title2,
  title3,
  title4,
  title5,
  title6,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  onClick,
}: CustomCardProps) {
  if (variant === "normal") {
    return (
      <div
        className={`flex flex-col items-center text-center shadow-md rounded-[10px] border border-gray-200 bg-white ${sizeClasses[size]} ${className}`}
        onClick={onClick}
      >
        {icon && <img src={icon} alt="" className="mb-2 w-16 h-16 mt-3" />}
        {title && <h3 className="lg:text-[32px] text-[24px] font-bold">{title}</h3>}
        {children && <div className="lg:text-[20px] w-11/12 text-[14px] pt-[20px] font-light mb-5">{children}</div>}
      </div>
    )
  }
  else{
  return (
    <div
      className={`flex flex-col items-center justify-center text-center shadow-md rounded-[10px] border border-gray-200 bg-white w-10/12 ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className="mb-2 w-20 h-20 mt-3" />}
      {title && <h3 className="text-[36px] font-bold">{title}</h3>} 
      <div className="w-[1173px]">
        <div className="flex flex-row">
          {title1 && <h1 className="w-[454px] pt-[20px] font-bold text-[32px]">{title1}</h1>}
          {title2 && <h1 className="w-[454px] pt-[20px] font-bold text-[32px]">{title2}</h1>}
          {title3 && <h1 className="w-[454px] pt-[20px] font-bold text-[32px]">{title3}</h1>}
        </div>
        <div className="flex flex-row">
          {text1 && <p className="text-[20px] w-8/12 pt-[20px] font-light">{text1}</p>}
          {text2 && <p className="text-[20px] w-8/12 pt-[20px] font-light">{text2}</p>}
          {text3 && <p className="text-[20px] w-8/12 pt-[20px] font-light">{text3}</p>}
        </div>
        <div className="flex flex-row">
          {title4 && <h1 className="text-[32px] w-[454px] pt-[20px] font-bold">{title4}</h1>}
          {title5 && <h1 className="text-[32px] w-[454px] pt-[20px] font-bold">{title5}</h1>}
          {title6 && <h1 className="text-[32px] w-[454px] pt-[20px] font-bold">{title6}</h1>}
        </div>
        <div className="flex flex-row mb-5">
          {text4 && <p className="text-[20px] w-[454px] pt-[20px] font-light">{text4}</p>}
          {text5 && <p className="text-[20px] w-[454px] pt-[20px] font-light">{text5}</p>}
          {text6 && <p className="text-[20px] w-[454px] pt-[20px] font-light">{text6}</p>}
        </div>
      </div>
    </div>
  )
}
}