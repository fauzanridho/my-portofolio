import React from "react";
import { Menu as MenuIcon } from "lucide-react";

type MenuProps = {
  className?: string;
} & React.SVGAttributes<SVGSVGElement>;

export const Menu = React.forwardRef<SVGSVGElement, MenuProps>(
  ({ className, ...props }, ref) => {
    return (
      <MenuIcon
        ref={ref}
        className={`h-6 w-6 cursor-pointer ${className}`}
        {...props}
      />
    );
  }
);

Menu.displayName = "Menu";
