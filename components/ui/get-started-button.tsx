import { ArrowRight } from "lucide-react"
import { ButtonHTMLAttributes, forwardRef } from "react"

interface GetStartedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  showArrow?: boolean
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
}

export const GetStartedButton = forwardRef<HTMLButtonElement, GetStartedButtonProps>(
  ({ 
    children = "Get Started", 
    showArrow = true, 
    size = "md", 
    fullWidth = false,
    className = "",
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-2.5 text-base",
      lg: "px-8 py-3 text-lg"
    }

    const widthClass = fullWidth ? "w-full" : ""

    return (
      <button
        ref={ref}
        className={`
          bg-gradient-to-r from-[#6B40FF] to-[#FF66C4]
          text-white font-semibold
          ${sizeClasses[size]}
          rounded-lg shadow-md
          hover:scale-105 hover:shadow-lg
          transition-all duration-200 ease-out
          focus:outline-none focus:ring-2 focus:ring-[#6B40FF] focus:ring-offset-2
          active:scale-95
          disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
          ${widthClass}
          ${className}
        `.trim()}
        {...props}
      >
        <span className="flex items-center justify-center space-x-2">
          <span>{children}</span>
          {showArrow && (
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          )}
        </span>
      </button>
    )
  }
)

GetStartedButton.displayName = "GetStartedButton" 