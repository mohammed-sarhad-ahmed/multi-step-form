import styles from "./Navigation.module.css";
function Navigation({ children, page }) {
  return (
    <div
      className={`${styles.nav} ${
        page === "one" ? styles.pageOne : styles.normal
      } `}
    >
      {children}
    </div>
  );
}

export default Navigation;
