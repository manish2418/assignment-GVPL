// loader
import React from "react";

type Size = "small" | "medium" | "large";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: Size;
  color?: string;
}

export const Loader = ({ size, color, className }: Props) => {
  const sizeClass =
    size === "small" ? "h-3 w-3" : size === "medium" ? "h-5 w-5" : "h-7 w-7";
  return (
    <div className={`flex justify-center items-center ${className}`}>
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-gray-200 ${
          color ? `border-${color}` : "white"
        } ${sizeClass}`}
      />
    </div>
  );
};
