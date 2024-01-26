import styles from "./Button.module.css";
function BackButton({ children, type }) {
  return <button className={styles[type]}>{children}</button>;
}

export default BackButton;
