import styles from "./Selection.module.css";
function Selection({ plan, activePlan, children, dispatch }) {
  return (
    <div
      className={`${styles.select} ${
        activePlan === plan.type ? styles.active : ""
      }`}
      onClick={() => dispatch({ type: "selectPlan", payload: plan.type })}
    >
      <img src={plan.image.src} alt={plan.image.alt} />
      <div>{children}</div>
    </div>
  );
}

export default Selection;
