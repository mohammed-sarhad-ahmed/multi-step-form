import { useReducer } from "react";
import { useLocation } from "react-router-dom";

import styles from "./SubscriptionSwitcher.module.css";
import { useNavigate } from "react-router-dom";
const initialState = { activeSubType: "monthly" };
function reducer(state, action) {
  switch (action.type) {
    case "changeSubType":
      return {
        activeSubType: state.activeSubType === "monthly" ? "yearly" : "monthly",
      };
    default:
      throw new Error("no action was found");
  }
}

function SubscriptionSwitcher() {
  const [{ activeSubType }, dispatch] = useReducer(reducer, initialState);
  const location = useLocation();

  const navigate = useNavigate();
  return (
    <div className={styles.switcherContainer}>
      <p
        className={
          activeSubType === "monthly"
            ? styles.currentlyActive
            : styles.currentlyNotActive
        }
      >
        Monthly
      </p>
      <div
        className={`${styles.outerSwitch} ${
          activeSubType === "monthly"
            ? styles.monthlyActive
            : styles.yearlyActive
        }`}
      >
        <div
          className={styles.innerSwitch}
          onClick={() => {
            navigate(
              location.pathname === "/steptwo/monthly" ? "yearly" : "monthly"
            );
            dispatch({ type: "changeSubType" });
          }}
        ></div>
      </div>
      <p
        className={
          activeSubType === "yearly"
            ? styles.currentlyActive
            : styles.currentlyNotActive
        }
      >
        Yearly
      </p>
    </div>
  );
}

export default SubscriptionSwitcher;
