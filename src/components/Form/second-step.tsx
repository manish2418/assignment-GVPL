import React from "react";
import { FormWrapper } from "./form-wrapper";
import { Input } from "../../core";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useFormData } from "../../context";
import { Radio } from "../../core/radio";

interface Props {
  label: string;
  formStep: number;
  nextFormStep: () => void;
}

const schema = z.object({
  experience_min: z.number().min(0).default(0),
  experience_max: z.number().min(0).default(0),
  salary_min: z.number().min(0).default(0),
  salary_max: z.number().min(0).default(0),
  total_employee: z.string().default(""),
  quick_apply: z.boolean().default(false),
  external_apply: z.boolean().default(false),
});

export type SecondFormType = z.infer<typeof schema>;

export default function SecondStep({ label, formStep, nextFormStep }: Props) {
  const { setFormValues } = useFormData();

  const [radioChecked, setRadioChecked] = React.useState({
    quick_apply: false,
    external_apply: false,
  });

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SecondFormType>({ mode: "all" });

  const onSubmit = (data: SecondFormType) => {
    setFormValues(data);
    nextFormStep();
  };

  return (
    <FormWrapper
      label={label}
      buttonLabel={"Save"}
      step={formStep}
      onFormSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-between">
        <Input
          label="Experience"
          placeholder="Minimum"
          type="number"
          className="mr-6"
          {...register("experience_min")}
          error={errors.experience_min?.message?.toString()}
        />
        <Input
          placeholder="Maximum"
          className="mt-6"
          type="number"
          {...register("experience_max")}
          error={errors.experience_max?.message?.toString()}
        />
      </div>
      <div className="flex flex-row justify-between">
        <Input
          label="Salary"
          placeholder="Minimum"
          className="mr-6"
          type="number"
          {...register("salary_min")}
          error={errors.salary_min?.message?.toString()}
        />
        <Input
          placeholder="Maximum"
          className="mt-6"
          type="number"
          {...register("salary_max")}
          error={errors.salary_max?.message?.toString()}
        />
      </div>
      <Input
        label="Total employee"
        placeholder="ex. 100"
        {...register("total_employee")}
        error={errors.total_employee?.message?.toString()}
      />

      <div className="flex flex-row">
        <Radio
          label="Apply type"
          className="mr-6"
          type="radio"
          id="quick_apply"
          label_name="Quick apply"
          {...register("quick_apply")}
          checked={radioChecked.quick_apply}
          onClick={(e) => {
            setRadioChecked({
              ...radioChecked,
              quick_apply: !radioChecked.quick_apply,
            });
          }}
          error={errors.quick_apply?.message?.toString()}
        />
        <Radio
          className="mt-6"
          type="radio"
          id="external_apply"
          label_name="External apply"
          {...register("external_apply")}
          checked={radioChecked.external_apply}
          onClick={(e) => {
            setRadioChecked({
              ...radioChecked,
              external_apply: !radioChecked.external_apply,
            });
          }}
          error={errors.external_apply?.message?.toString()}
        />
      </div>
    </FormWrapper>
  );
}
