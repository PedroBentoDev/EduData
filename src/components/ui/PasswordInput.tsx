
import { useState } from "react";
import type { InputHTMLAttributes } from "react";
import { Eye, EyeOff } from "lucide-react";

interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: string;
  error?: string;
}

export function PasswordInput({
  label,
  id,
  error,
  className = "",
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={id}
        className="text-sm font-semibold text-slate-900"
      >
        {label}
      </label>

      <div className="relative">
        <input
          {...props}
          id={id}
          type={showPassword ? "text" : "password"}
          className={`
            h-11 w-full rounded-lg border border-slate-400
            bg-white px-4 pr-12 text-sm text-slate-900
            outline-none transition-colors
            placeholder:text-slate-400
            focus:border-blue-600 focus:ring-2 focus:ring-blue-100
            ${error ? "border-red-500" : ""}
            ${className}
          `}
        />

        <button
          type="button"
          onClick={() => setShowPassword((current) => !current)}
          aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          aria-pressed={showPassword}
          className="
            absolute right-3 top-1/2 -translate-y-1/2
            text-slate-500 hover:text-blue-700
          "
        >
          {showPassword ? (
            <EyeOff size={19} />
          ) : (
            <Eye size={19} />
          )}
        </button>
      </div>

      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
