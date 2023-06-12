import React from "react";
import { Input } from "../../core";
import { FormWrapper } from "./form-wrapper";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useFormData } from "../../context";

interface Props {
  label: string;
  formStep: number;
  nextFormStep: () => void;
}

const schema = z.object({
  job_title: z
    .string({
      required_error: "Job title is required",
    })
    .min(1),
  company_name: z
    .string({
      required_error: "Company name is required",
    })
    .min(1),
  industry: z
    .string({
      required_error: "Industry is required",
    })
    .min(1),
  location: z.string().default(""),
  remote_type: z.string().default(""),
});

export type FirstFormType = z.infer<typeof schema>;

export default function FirstStep({ label, formStep, nextFormStep }: Props) {
  const {setFormValues} = useFormData();

  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FirstFormType>({ mode: "all" });

  const onSubmit = (data: FirstFormType) => {
    setFormValues(data);
    nextFormStep();
  };

  return (
    <FormWrapper label={label} buttonLabel={"Next"} step={formStep} onFormSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Job title"
          placeholder="ex. UI UX Designer"
          required
          {...register("job_title", {
            required: "Job title is required",
          })}
          error={errors.job_title?.message?.toString()}
        />
        <Input
          label="Company name"
          placeholder="ex. Google"
          required
          {...register("company_name", {
            required: "Company name is required",
          })}
          error={errors.company_name?.message?.toString()}
        />
        <Input
          label="Industry"
          placeholder="ex. Information Technology"
          required
          {...register("industry", {
            required: "Industry is required",
          })}
          error={errors.industry?.message?.toString()}
        />
        <div className="flex flex-row justify-between">
          <Input
            label="Location"
            placeholder="ex. Chennai"
            className="mr-6"
            {...register("location")}
            error={errors.location?.message?.toString()}
          />
          <Input
            label="Remote type"
            placeholder="ex. In-office"
            {...register("remote_type")}
            error={errors.remote_type?.message?.toString()}
          />
        </div>
    </FormWrapper>
  );
}
