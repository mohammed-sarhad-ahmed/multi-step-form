import styles from "./Title.module.css";

function Title({ children, type, className }) {
  if (type === "mainTitle")
    return (
      <h1 className={`${styles.mainTitle} ${styles[className]}`}>{children}</h1>
    );
  if (type === "secondaryTitle")
    return (
      <h3 className={`${styles.secondaryTitle} ${styles[className]}`}>
        {children}
      </h3>
    );
}

export default Title;
