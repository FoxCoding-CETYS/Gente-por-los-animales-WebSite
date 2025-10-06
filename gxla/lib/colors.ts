export const colors = {
  // Primary brand colors
  primary: {
    base: "var(--primary)",
    hover: "var(--primary-hover)",
    light: "var(--primary-light)",
  },

  // Neutral colors
  neutral: {
    white: "var(--white)",
    gray50: "var(--gray-50)",
    gray100: "var(--gray-100)",
    gray600: "var(--gray-600)",
    gray700: "var(--gray-700)",
    gray800: "var(--gray-800)",
    gray900: "var(--gray-900)",
    black: "var(--black)",
  },

  // Accent colors
  accent: {
    blue100: "var(--blue-100)",
    blue200: "var(--blue-200)",
    pink100: "var(--pink-100)",
    pink200: "var(--pink-200)",
    green100: "var(--green-100)",
    green200: "var(--green-200)",
    green500: "var(--green-500)",
    green600: "var(--green-600)",
    purple100: "var(--purple-100)",
    purple200: "var(--purple-200)",
    orange100: "var(--orange-100)",
    orange200: "var(--orange-200)",
    red100: "var(--red-100)",
    red500: "var(--red-500)",
    red600: "var(--red-600)",
  },

  // Paw print filter
  pawPrint: {
    filter:
      "brightness(0) invert(55%) sepia(85%) saturate(210%) hue-rotate(90deg) brightness(90%) contrast(90%)",
  },
} as const

// CSS class mappings for Tailwind
export const colorClasses = {
  button: {
    primary: "bg-primary hover:bg-primary-hover text-black",
    secondary: "bg-gray-800 hover:bg-gray-900 text-white",
    outline: "border-green-400 text-green-600 hover:bg-green-50 bg-transparent",
    cta: "bg-black hover:bg-gray-800 text-white",
  },
  background: {
    primary: "bg-white",
    secondary: "bg-gray-50",
    accent: "bg-green-400",
    dark: "bg-gray-800",
  },
  text: {
    primary: "text-gray-800",
    secondary: "text-gray-600",
    light: "text-gray-300",
    accent: "text-green-600",
    white: "text-white",
    black: "text-black",
  },
} as const
