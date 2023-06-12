import { useState, createContext, useContext } from "react";
import { FirstFormType, SecondFormType } from "../components/Form";

export interface CardList extends FirstFormType, SecondFormType {}

interface GlobalContextType {
  data: CardList[];
  setGlobalValues: (values: CardList) => void;
}

const sampleData: CardList[] = [
  {
    job_title: "UI UX Designer",
    location: "Chennai, Tamil Nadu, India",
    total_employee: "51-200",
    company_name: "Great Vibes",
    industry: "Information Technology",
    remote_type: "In-office",
    salary_min: 30000,
    salary_max: 50000,
    experience_min: 1,
    experience_max: 2,
    quick_apply: true,
    external_apply: true,
  },
  {
    job_title: "Developer",
    location: "Chennai, Tamil Nadu, India",
    total_employee: "51-200",
    company_name: "Great Vibes",
    industry: "Information Technology",
    remote_type: "In-office",
    salary_min: 50000,
    salary_max: 70000,
    experience_min: 1,
    experience_max: 2,
    quick_apply: true,
    external_apply: true,
  },
  {
    job_title: "Interaction Designer",
    location: "Chennai, Tamil Nadu, India",
    total_employee: "51-200",
    company_name: "Great Vibes",
    industry: "Information Technology",
    remote_type: "In-office",
    salary_min: 30000,
    salary_max: 50000,
    experience_min: 1,
    experience_max: 2,
    quick_apply: true,
    external_apply: true,
  },
  {
    job_title: "SEO Analyst",
    location: "Chennai, Tamil Nadu, India",
    total_employee: "51-200",
    company_name: "Great Vibes",
    industry: "Information Technology",
    remote_type: "In-office",
    salary_min: 30000,
    salary_max: 50000,
    experience_min: 1,
    experience_max: 2,
    quick_apply: true,
    external_apply: true,
  },
];

const initialFormValues: GlobalContextType = {
  data: sampleData,
  setGlobalValues: () => {},
};

export const GlobalContext = createContext<GlobalContextType>({
  data: initialFormValues.data,
  setGlobalValues: () => {},
});

export default function GlobalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data, setData] = useState(initialFormValues.data);

  const setGlobalValues = (values: CardList) => {
    setData((prevValues: CardList[]) => [...prevValues, values]);
  };

  return (
    <GlobalContext.Provider value={{ data, setGlobalValues }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalData = () => useContext(GlobalContext);
