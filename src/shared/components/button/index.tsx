import { forwardRef } from "react";

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
}

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ backgroundColor, hoverColor, color, hoverBackgroundColor, ...props }, ref) => (
    <button
      className={`
      rounded-3xl w-[200px] h-[100px] 
      ${backgroundColor ? backgroundColor : "bg-yellow"}
      ${hoverBackgroundColor? hoverBackgroundColor : "hover:bg-dark-gray"}
      ${color ? color : "text-black"}
      ${hoverColor ? hoverColor : "hover:text-white"}
      text-button font-montserrat
      transition-colors duration-300
      `}
      ref={ref}
      {...props}
    />
  )
);
