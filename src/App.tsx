import List from "./components/Card/list";
import { FormControl } from "./components/Form";
import FormProvider from "./context/form-context";
import GlobalProvider from "./context/global-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <FormProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/create" element={<FormControl />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </GlobalProvider>
  );
}

export default App;
