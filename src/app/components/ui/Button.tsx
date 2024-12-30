import React from "react";
import clsx from "clsx";

type ButtonProps = {
  variant?: "default" | "ghost";
  asChild?: boolean;
  size?: "sm" | "md" | "lg"; // Adding the size property
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", asChild, size = "md", className, ...props }, ref) => {
    const Component = asChild ? "span" : "button";

    const variants = {
      default: "bg-green-500 text-white hover:bg-green-600",
      ghost: "bg-transparent text-gray-600 hover:bg-green-500 hover:text-white",
    };

    const sizes = {
      sm: "px-3 py-1 text-sm",
      md: "px-4 py-2 text-base", // Default size
      lg: "px-6 py-3 text-lg", // Large size
    };

    return (
      <Component
        ref={ref as React.Ref<HTMLButtonElement>} // Type assertion for button
        className={clsx(
          "rounded transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
          variants[variant],
          sizes[size], // Adjusting the button size
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
