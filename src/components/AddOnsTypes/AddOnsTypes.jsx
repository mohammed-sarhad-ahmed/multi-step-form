import SubTitle from "../SubTitle/SubTitle";
import Title from "../Title/Title";
import styles from "./addOnsTypes.module.css";

function AddOnsTypes({ title, subTitle, price }) {
  console.log(subTitle);
  return (
    <div className={styles.container}>
      <input type="checkbox" className={styles.check} />
      <div className={styles.info}>
        <Title type="secondaryTitle">{title}</Title>
        <SubTitle type="secondarySubHeading">{subTitle}</SubTitle>
      </div>
      <p className={styles.price}>{price}</p>
    </div>
  );
}

export default AddOnsTypes;
