import * as React from "react";
import { Text } from "./text";

export interface RInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label_name?: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

export const Radio = React.forwardRef<HTMLInputElement, RInputProps>(
  (props, ref) => {
    const { label, label_name, id, error, required, className, ...inputProps } =
      props;

    return (
      <div className={`mb-6 ${className}`}>
        {label && (
          <Text variant={error ? "error" : "sm"} className="mb-1">
            {label}
            {required && <span className="text-red-500">*</span>}
          </Text>
        )}
        <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
          <input
            ref={ref}
            type="radio"
            id={id}
            className="relative float-left mt-0.5 mr-1 -ml-[1.5rem] h-5 w-5 appearance-none rounded-full border-2 border-solid border-[rgba(0,0,0,0.25)] bg-white before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:bg-white after:content-[''] checked:border-primary checked:bg-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:bg-white checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
            required={required}
            onChange={(e) => {
              inputProps.onChange?.(e);
            }}
            {...inputProps}
          />
          <label
            className="text-placeholder font-poppins font-normal text-[14px] leading-[20px]"
            htmlFor={id}
          >
            {label_name}
          </label>
        </div>
      </div>
    );
  }
);
