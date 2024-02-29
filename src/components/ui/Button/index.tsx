import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { Link } from "react-router-dom";
import cn from "@utils/cn";

export const buttonVariants = cva(
  "w-[100%] flex item-center justify-center relative font-Sans rounded-[4px] font-[600]",
  {
    variants: {
      variant: {
        primary: "bg-[#D23F57!important] text-white",
        outline:
          "bg-transparent border-solid border-[#dcdcdc94]  text-[#2b3445] border-[1px]",
        danger:
          "bg-[#f3f5f9] border-solid border-[#dcdcdc94]  text-[#2b3445] border-[1px] text-[#2b3445] ",
        dark: "",
      },
      size: {
        lg: "text-[18px] py-[12px] px-[8px] max-w-[200px]",
        md: "text-[14px] sm:text-[16px] py-[10px] px-[6px] max-h-fit h-fit max-w-[150px]",
        sm: "text-[13px] py-[8px] px-[4px] max-w-[90px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  to?: string;
}

const Button: React.FC<ButtonProps> = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ className, children, to, variant, size, ...props }, ref) => {
  if (to) {
    return (
      <Link
        to={to}
        className={cn(buttonVariants({ variant, size, className }))}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

export default Button;
