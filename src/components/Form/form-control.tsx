import { useState } from "react";
import FirstStep from "./first-step";
import SecondStep from "./second-step";
import { useNavigate } from "react-router-dom";

export const FormControl = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step === 2) {
      navigate('/')
      return;
    }
    setStep((prev) => prev + 1);
  };

  return (
    <>
      {step === 1 && (
        <FirstStep
          label="Create a job"
          formStep={step}
          nextFormStep={nextStep}
        />
      )}
      {step === 2 && (
        <SecondStep
          label="Create a job"
          formStep={step}
          nextFormStep={nextStep}
        />
      )}
    </>
  );
};
