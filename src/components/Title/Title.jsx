import styles from "./Title.module.css";

function Title({ children, type }) {
  if (type === "mainTitle")
    return <h1 className={styles.mainTitle}>{children}</h1>;
  if (type === "subscriptionTitle")
    return <h3 className={styles.SubscriptionTitle}>{children}</h3>;
}

export default Title;
