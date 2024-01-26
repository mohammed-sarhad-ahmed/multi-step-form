import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import StepOne from "./pages/StepOne/StepOne.jsx";
import StepTwo from "./pages/StepTwo/StepTwo.jsx";
import StepThree from "./pages/StepThree/StepThree.jsx";
import StepFour from "./pages/StepFour/StepFour.jsx";
import SelectionOptions from "./components/SelectionOptions/SelectionOptions.jsx";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="stepone" />} />
          <Route path="stepone" element={<StepOne />} />
          <Route path="steptwo" element={<StepTwo />}>
            <Route index element={<Navigate replace to="monthly" />} />
            <Route
              index
              path="monthly"
              element={<SelectionOptions type="monthly" />}
            />
            <Route
              index
              path="yearly"
              element={<SelectionOptions type="yearly" />}
            />
          </Route>
          <Route path="stepthree" element={<StepThree />} />
          <Route path="stepfour" element={<StepFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
