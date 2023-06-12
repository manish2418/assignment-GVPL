import * as React from "react";
import { Text } from "./text";

export interface NInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export const Input = React.forwardRef<HTMLInputElement, NInputProps>(
  (props, ref) => {
    const { label, error, required, className, ...inputProps } = props;

    const borderColor = error ? "border-error" : "border-card_border";

    return (
      <div className={`mb-6 w-full ${className}`}>
        {label && (
          <Text
            variant={error ? "error" : "h4"}
            className="mb-1"
          >
            {label}
            {required && <span className="text-red-500">*</span>}
          </Text>
        )}
        <input
          ref={ref}
          className={`border-[1px] h-9 px-3 py-2 ${borderColor} focus:border-primary focus:outline-none placeholder-placeholder rounded-[5px] text-font_dark font-normal text-sm w-full`}
          required={required}
          {...inputProps}
        />
      </div>
    );
  }
);
