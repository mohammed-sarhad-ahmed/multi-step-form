import styles from "./SubscriptionType.module.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";

function SubscriptionType({ title, subTitle, yearlyBonus }) {
  return (
    <div className={styles.subscription}>
      <Title type="secondaryTitle" className="capitalize">
        {title}
      </Title>
      <SubTitle type="secondarySubHeading">{subTitle}</SubTitle>
      {yearlyBonus && <p className={styles.yearlyBonus}>{yearlyBonus}</p>}
    </div>
  );
}

export default SubscriptionType;
