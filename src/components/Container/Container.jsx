import styles from "./Container.module.css";

function Container({ children, className }) {
  return <div className={styles[className]}>{children}</div>;
}

export default Container;
