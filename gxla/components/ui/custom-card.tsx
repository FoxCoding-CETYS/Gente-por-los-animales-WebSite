"use client"

import type React from "react"

interface CustomCardProps {
  children?: React.ReactNode
  variant?: "normal" | "big" | "vertical"
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
  md: "lg:h-[11/12] lg:w-[288px]",
  lg: "lg:w-[545px] w-9/11 h-9/12",
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
        className={`flex flex-col lg:items-center items-start lg:text-center text-left p-5 shadow-md rounded-[10px] border border-gray-200 bg-white ${sizeClasses[size]} ${className}`}
        onClick={onClick}
      >
        <div className="flex lg:flex-col flex-row lg:justify-center items-center">
          {icon && <img src={icon} alt="" className="lg:mb-2 w-16 h-16 lg:mt-3" />}
          {title && <h3 className="lg:text-[32px] text-[24px] font-bold">{title}</h3>}
        </div>
        {children && <div className="lg:text-[20px] w-11/12 text-[16px] pt-[10px] font-light mb-5">{children}</div>}
      </div>
    )
  }
  else if(variant === "vertical"){
    return (
      <div
        className={`flex flex-col items-center lg:text-center p-5 shadow-md rounded-[10px] border border-gray-200 bg-white  ${sizeClasses[size]} ${className}`}
        onClick={onClick}
      >
        <div className="flex flex-col lg:justify-center items-center">
          {icon && <img src={icon} alt="" className="lg:mb-5 w-16 h-16 lg:mt-3" />}
          {title && <h3 className="lg:text-[32px] text-[24px] font-bold text-center">{title}</h3>}
        </div>
        {children && <div className="lg:text-[20px] w-11/12 text-[16px] pt-[10px] font-light mb-5 text-center">{children}</div>}
      </div>
    )
  }
  else{
  return (
    <div
      className={`flex flex-col items-center justify-center text-center shadow-md rounded-[10px] border border-gray-200 bg-white w-10/12 ${className}`}
      onClick={onClick}
    >
      {icon && <img src={icon} alt="" className="hidden lg:block mb-2 w-20 h-20" />}
      {title && <h3 className="lg:text-[36px] text-[24px] font-bold">{title}</h3>}
      <div className="w-10/12 grid lg:grid-cols-3 grid-cols-2 gap-y-6 gap-x-4 mt-6 mb-10 text-center">
        {/* 1 */}
        {title1 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title1}</h1>
            {text1 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text1}</p>}
          </div>
        )}
        {/* 2 */}
        {title2 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title2}</h1>
            {text2 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text2}</p>}
          </div>
        )}
        {/* 3 */}
        {title3 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title3}</h1>
            {text3 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text3}</p>}
          </div>
        )}
        {/* 4 */}
        {title4 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title4}</h1>
            {text4 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text4}</p>}
          </div>
        )}
        {/* 5 */}
        {title5 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title5}</h1>
            {text5 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text5}</p>}
          </div>
        )}
        {/* 6 */}
        {title6 && (
          <div>
            <h1 className="font-bold lg:text-[28px] text-[18px]">{title6}</h1>
            {text6 && <p className="lg:text-[18px] text-[16px] pt-2 font-light">{text6}</p>}
          </div>
        )}
      </div>

    </div>
  )
}
}