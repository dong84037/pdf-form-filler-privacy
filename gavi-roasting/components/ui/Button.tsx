import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-copper text-ink hover:bg-copper/90 disabled:bg-white/10 disabled:text-muted",
  outline:
    "border border-copper text-copper hover:bg-copper hover:text-ink disabled:border-white/10 disabled:text-muted disabled:hover:bg-transparent",
};

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed ${VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
