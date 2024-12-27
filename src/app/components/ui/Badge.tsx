import React from "react";
import clsx from "clsx";

type BadgeProps = {
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  children: React.ReactNode;
};

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "primary", className, children }, ref) => {
    const variants = {
      primary: "bg-green-500 text-white",
      secondary: "bg-gray-200 text-gray-600",
      outline: "border border-gray-300 text-gray-800",
    };

    return (
      <span
        ref={ref}
        className={clsx(
          "inline-block px-3 py-1 rounded-full text-sm font-medium",
          variants[variant],
          className
        )}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
