
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export function Input({
  label,
  id,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-900"
      >
        {label}
      </label>

      <input
        id={id}
        className={`
          h-11 w-full rounded-lg border border-slate-400
          bg-white px-4 text-sm text-slate-900
          outline-none transition-colors
          placeholder:text-slate-400
          focus:border-blue-600 focus:ring-2 focus:ring-blue-100
          ${error ? "border-red-500" : ""}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p className="text-xs text-red-600">{error}</p>
      )}
    </div>
  );
}
