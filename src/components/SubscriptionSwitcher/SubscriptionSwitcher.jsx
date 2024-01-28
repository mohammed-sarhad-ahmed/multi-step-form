import styles from "./SubscriptionSwitcher.module.css";

function SubscriptionSwitcher({ dispatch, activeSubType }) {
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
          onClick={() => dispatch({ type: "changeSubType" })}
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
