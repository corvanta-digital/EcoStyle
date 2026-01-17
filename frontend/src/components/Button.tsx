import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles =
    "px-6 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 disabled:cursor-not-allowed";

  const variants = {
    primary: "bg-primary text-white hover:bg-[#267349] disabled:bg-[#95d6ac]",
    secondary: "bg-secondary text-white hover:opacity-90 disabled:opacity-70",
    outline:
      "border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:border-gray-300 disabled:text-gray-300",
    ghost:
      "text-gray-600 hover:text-primary hover:bg-gray-100 disabled:text-gray-300",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        children
      )}
    </button>
  );
};
