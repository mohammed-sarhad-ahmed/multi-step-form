import styles from "./Selection.module.css";
function Selection({ alt, src, plan, type, children, dispatch }) {
  return (
    <div
      className={`${styles.select} ${plan.type === type ? styles.active : ""}`}
      onClick={() => dispatch({ type: "selectPlan", payload: type })}
    >
      <img src={src} alt={alt} />
      <div>{children}</div>
    </div>
  );
}

export default Selection;
