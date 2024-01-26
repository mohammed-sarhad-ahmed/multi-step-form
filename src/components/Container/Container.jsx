import styles from "./Container.module.css";

function Container({ children, gap }) {
  return <div className={`${styles.container} ${styles[gap]}`}>{children}</div>;
}

export default Container;
