import { useState, createContext, useContext, useEffect } from "react";
import { CardList, useGlobalData } from "./global-context";

interface FormContextType {
  data: any;
  setFormValues: (values: any) => void;
}

const initialFormValues: FormContextType = {
  data: {},
  setFormValues: () => {},
};

export const FormContext = createContext<FormContextType>({
  data: initialFormValues.data,
  setFormValues: () => {},
});

export default function FormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(initialFormValues.data);
  const { setGlobalValues } = useGlobalData();

  function isCardList(data: any): data is CardList {
    return (
      data.job_title !== undefined &&
      data.location !== undefined &&
      data.total_employee !== undefined &&
      data.company_name !== undefined &&
      data.industry !== undefined &&
      data.remote_type !== undefined &&
      data.salary_min !== undefined &&
      data.salary_max !== undefined &&
      data.experience_min !== undefined &&
      data.experience_max !== undefined &&
      data.quick_apply !== undefined &&
      data.external_apply !== undefined
    );
  }

  useEffect(() => {
    if (isCardList(data)) {
      setGlobalValues(data);
      setData({});
    }
  }, [data, setGlobalValues]);

  const setFormValues = (values: any) => {
    setData((prevValues: any) => ({
      ...prevValues,
      ...values,
    }));
  };

  return (
    <FormContext.Provider value={{ data, setFormValues }}>
      {children}
    </FormContext.Provider>
  );
}

export const useFormData = () => useContext(FormContext);
