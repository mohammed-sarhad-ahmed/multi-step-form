import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import styles from "./addOnsTypes.module.css";
import { abbreviateTimeIntervalName } from "../../helper";

function AddOnsTypes({ addOn, subscriptionInterval, dispatch, checked }) {
  const subscriptionIntervalAbbreviation =
    abbreviateTimeIntervalName(subscriptionInterval);
  return (
    <div className={`${styles.container} ${checked ? styles.checked : ""}`}>
      <input
        type="checkbox"
        className={styles.check}
        checked={checked}
        onChange={() => dispatch({ type: "tickAddOn", payload: addOn.type })}
      />
      <div className={styles.info}>
        <Title type="secondaryTitle">{addOn.type}</Title>
        <SubTitle type="secondarySubHeading">{addOn.description}</SubTitle>
      </div>
      <p
        className={styles.price}
      >{`+$${addOn.price}/${subscriptionIntervalAbbreviation}`}</p>
    </div>
  );
}

export default AddOnsTypes;
