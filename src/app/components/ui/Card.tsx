import React from "react";
import clsx from "clsx";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "bg-white rounded-lg shadow-md overflow-hidden",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

// Sub-Komponen CardHeader
export const CardHeader = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-b">{children}</div>
);

// Sub-Komponen CardTitle
export const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-xl font-semibold text-gray-600">{children}</h3>
);

// Sub-Komponen CardContent
export const CardContent = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 ">{children}</div>
);

// Sub-Komponen CardDescription
export const CardDescription = ({
  children,
}: {
  children: React.ReactNode;
}) => <p className="text-gray-600 text-sm">{children}</p>;

// Sub-Komponen CardFooter
export const CardFooter = ({ children }: { children: React.ReactNode }) => (
  <div className="p-4 border-t">{children}</div>
);
