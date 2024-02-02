import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer.js";
import StepOne from "./pages/StepOne/StepOne.jsx";
import StepTwo from "./pages/StepTwo/StepTwo.jsx";
import StepThree from "./pages/StepThree/StepThree.jsx";
import StepFour from "./pages/StepFour/StepFour.jsx";
import StepFive from "./pages/StepFive/StepFive.jsx";

function App() {
  const [
    {
      name,
      email,
      phoneNumber,
      activePlan,
      subscriptionInterval,
      checkedAddOns,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

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
                subscriptionInterval={subscriptionInterval}
                dispatch={dispatch}
                activePlan={activePlan}
              />
            }
          />
          <Route
            path="stepthree"
            element={
              <StepThree
                dispatch={dispatch}
                subscriptionInterval={subscriptionInterval}
                checkedAddOns={checkedAddOns}
              />
            }
          />
          <Route
            path="stepfour"
            element={
              <StepFour
                subscriptionInterval={subscriptionInterval}
                activePlan={activePlan}
                checkedAddOns={checkedAddOns}
              />
            }
          />
          <Route path="stepfive" element={<StepFive />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
