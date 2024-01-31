import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import styles from "./addOnsTypes.module.css";
import { AbbreviateTimeIntervalName } from "../../helper";

function AddOnsTypes({ addOn, subscriptionInterval, dispatch }) {
  const subscriptionIntervalAbbreviation =
    AbbreviateTimeIntervalName(subscriptionInterval);
  return (
    <div
      className={`${styles.container} ${addOn.checked ? styles.checked : ""}`}
    >
      <input
        type="checkbox"
        className={styles.check}
        checked={addOn.checked}
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
