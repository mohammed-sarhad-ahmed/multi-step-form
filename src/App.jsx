import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useReducer } from "react";
import { reducer, initialState } from "./reducer.js";
import StepOne from "./pages/StepOne/StepOne.jsx";
import StepTwo from "./pages/StepTwo/StepTwo.jsx";
import StepThree from "./pages/StepThree/StepThree.jsx";
// import StepFour from "./pages/StepFour/StepFour.jsx";

function App() {
  const [
    { name, email, phoneNumber, plans, subscriptionInterval, addOns },
    dispatch,
  ] = useReducer(reducer, initialState);
  console.log(subscriptionInterval, plans, addOns);
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
                plans={plans}
              />
            }
          />
          <Route
            path="stepthree"
            element={
              <StepThree
                dispatch={dispatch}
                subscriptionInterval={subscriptionInterval}
                addOns={addOns}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
/*
          <Route
            path="stepfour"
            element={
              <StepFour
                activeSubType={activeSubType}
                plan={plan}
                addOns={addOns}
              />
            }
          />{" "}
          */
