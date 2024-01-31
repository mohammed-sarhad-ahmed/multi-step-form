import styles from "./SubscriptionSwitcher.module.css";

function SubscriptionSwitcher({ dispatch, subscriptionInterval }) {
  return (
    <div className={styles.switcherContainer}>
      <p
        className={
          subscriptionInterval === "monthly"
            ? styles.currentlyActive
            : styles.currentlyNotActive
        }
      >
        Monthly
      </p>
      <div
        className={`${styles.outerSwitch} ${
          subscriptionInterval === "monthly"
            ? styles.monthlyActive
            : styles.yearlyActive
        }`}
      >
        <div
          className={styles.innerSwitch}
          onClick={() => dispatch({ type: "changeSubscriptionInterval" })}
        ></div>
      </div>
      <p
        className={
          subscriptionInterval === "yearly"
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
