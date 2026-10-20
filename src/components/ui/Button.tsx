
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  const variants = {
    primary:
      "bg-[#174B78] text-white hover:bg-[#103B60] border border-transparent",

    secondary:
      "bg-white text-slate-900 border border-slate-800 hover:bg-slate-50",
  };

  return (
    <button
      type={type}
      className={`
        inline-flex min-h-10 items-center justify-center
        rounded-full px-7 py-2
        text-sm font-semibold
        transition-colors duration-200
        cursor-pointer
        focus-visible:outline-2
        focus-visible:outline-offset-2
        focus-visible:outline-blue-600
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
