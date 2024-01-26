import styles from "./Navigation.module.css";
function Navigation({ children }) {
  return <div className={styles.nav}>{children}</div>;
}

export default Navigation;
