import React from "react";

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: keyof typeof textVariants;
}

export const textVariants = {
  defaults: "text-font_dark font-poppins",
  h1: "text-[32px] leading-[48px] font-medium",
  h2: "text-[28px] leading-[42px] font-medium",
  h3: "text-[24px] leading-[32px]",
  h4: "text-[14px] leading-[20px] font-medium",
  xl: "text-[20px] leading-[28px]",
  lg: "text-[18px] leading-[28px]",
  md: "text-[16px] leading-[24px]",
  sm: "text-[14px] leading-[20px]",
  xs: "text-[12px] leading-[18px]",
  error: "text-[14px] leading-[20px] font-medium text-error",
};

export const Text = ({
  variant = "md",
  className = "",
  style,
  children,
  ...props
}: Props) => {
  return (
    <p
      className={`
      ${textVariants.defaults}
      ${textVariants[variant]}
      ${className}
    `}
      {...props}
    >
      {children}
    </p>
  );
};
