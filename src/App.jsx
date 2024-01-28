import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer.jsx";
import StepOne from "./pages/StepOne/StepOne.jsx";
import StepTwo from "./pages/StepTwo/StepTwo.jsx";
import StepThree from "./pages/StepThree/StepThree.jsx";
import StepFour from "./pages/StepFour/StepFour.jsx";

function App() {
  const [{ name, email, phoneNumber, activeSubType, plan, addOns }, dispatch] =
    useReducer(reducer, initialState);
  console.log(activeSubType, plan);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="stepone" />} />
          <Route
            path="stepone"
            element={
              <StepOne
                dispatch={dispatch}
                email={email}
                phoneNumber={phoneNumber}
                name={name}
              />
            }
          />
          <Route
            path="steptwo"
            element={
              <StepTwo
                activeSubType={activeSubType}
                dispatch={dispatch}
                plan={plan}
              />
            }
          />
          <Route
            path="stepthree"
            element={
              <StepThree
                dispatch={dispatch}
                activeSubType={activeSubType}
                addOns={addOns}
              />
            }
          />
          <Route path="stepfour" element={<StepFour />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
