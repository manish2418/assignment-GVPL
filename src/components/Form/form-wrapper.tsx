import { ReactNode } from "react";
import { Button, Text } from "../../core";

export interface FormWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  buttonLabel: string;
  step: number;
  children: ReactNode;
  onFormSubmit: () => void;
}

export const FormWrapper = ({
  label,
  buttonLabel,
  step,
  onFormSubmit,
  children,
  ...props
}: FormWrapperProps) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div
        className={`absolute m-auto top-0 left-0 right-0 bottom-0 bg-card box-border border-[1px] border-card_border rounded-[10px] isolate max-w-[577px] max-h-[564px] p-[32px]`}
        {...props}
      >
        <div className="flex flex-row justify-between mb-6">
          <Text variant="xl" className="font-font_header">
            {label}
          </Text>
          <Text variant="md" className="font-font_header font-medium">
            Step {step}
          </Text>
        </div>
        {children}
        <div className="absolute bottom-0 right-0 justify-end p-8">
          <Button label={buttonLabel} variant="primary" type="submit" />
        </div>
      </div>
    </form>
  );
};
