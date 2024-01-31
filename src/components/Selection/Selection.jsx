import styles from "./Selection.module.css";
function Selection({ plan, children, dispatch }) {
  return (
    <div
      className={`${styles.select} ${plan.isActive ? styles.active : ""}`}
      onClick={() => dispatch({ type: "selectPlan", payload: plan.type })}
    >
      <img src={plan.image.src} alt={plan.image.alt} />
      <div>{children}</div>
    </div>
  );
}

export default Selection;
