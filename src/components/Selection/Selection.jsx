import styles from "./Selection.module.css";
function Selection({ alt, src, children }) {
  return (
    <div className={styles.select}>
      <img src={src} alt={alt} />
      <div>{children}</div>
    </div>
  );
}

export default Selection;
