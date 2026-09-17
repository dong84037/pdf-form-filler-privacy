import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

// Link 등 <button>이 아닌 요소를 버튼처럼 스타일링할 때도 재사용한다.
export const BUTTON_VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-copper text-ink hover:bg-copper/90 disabled:bg-ink/10 disabled:text-muted",
  outline:
    "border border-copper text-copper hover:bg-copper hover:text-ink disabled:border-ink/10 disabled:text-muted disabled:hover:bg-transparent",
};

export const BUTTON_BASE_CLASSES =
  "px-5 py-3 text-sm font-medium transition-colors disabled:cursor-not-allowed";

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`${BUTTON_BASE_CLASSES} ${BUTTON_VARIANT_CLASSES[variant]} ${className}`}
      {...props}
    />
  );
}
