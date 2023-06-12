import React from "react";
import { Loader } from "./loader";
import { Text } from "./text";

type Variant = {
  container: string;
  label: string;
  indicator: string;
};

type VariantName = "defaults" | "primary" | "outline" | "secondary";

type BVariant = {
  [key in VariantName]: Variant;
};

export const buttonVariants: BVariant = {
  defaults: {
    container: "px-4 py-2 drop-shadow-sm h-10 rounded-md",
    label: "text-base font-medium font-poppins",
    indicator: "text-white",
  },
  primary: {
    container: "bg-primary",
    label: "text-white",
    indicator: "text-white",
  },
  secondary: {
    container: "bg-primary-600",
    label: "text-white",
    indicator: "text-white",
  },
  outline: {
    container: "border border-primary",
    label: "text-primary",
    indicator: "text-primary",
  },
};

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantName;
  label?: string;
  loading?: boolean;
}

export const Button = ({
  label,
  loading = false,
  variant = "defaults",
  disabled = false,
  className,
  ...props
}: Props) => {
  return (
    <button
      disabled={disabled || loading}
      className={`
    ${buttonVariants.defaults.container}
     ${buttonVariants[variant].container}
     ${disabled ? "opacity-50" : ""}
      ${className}
    `}
      {...props}
    >
      {loading ? (
        <Loader
          size="small"
          color={"white"}
          className={`
          ${buttonVariants.defaults.indicator}
            ${buttonVariants[variant].indicator}
          `}
        />
      ) : (
        <Text
          className={`
          ${buttonVariants.defaults.label}
           ${buttonVariants[variant].label}
          `}
        >
          {label}
        </Text>
      )}
    </button>
  );
};
