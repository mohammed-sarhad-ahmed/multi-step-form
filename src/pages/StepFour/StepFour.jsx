import SideBar from "../../components/SideBar/SideBar";
import SubTitle from "../../components/SubTitle/SubTitle";
import Title from "../../components/Title/Title";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import styles from "./StepFour.module.css";

function StepFour({ activeSubType, plan, addOns }) {
  const activeSubTypeAbbreviation = activeSubType === "yearly" ? "yr" : "mo";

  return (
    <>
      <SideBar>
        <Title type="mainTitle">Finishing Up</Title>
        <SubTitle type="mainSubHeading">
          Double-Check everything looks OK before confirming it.
        </SubTitle>
        <div className={styles.summary}>
          <Title type="secondaryTitle">
            <span className={styles.planText}>{plan.type}</span>(
            <span className={styles.activeSubText}>{activeSubType}</span>)
          </Title>
          <div className={styles.mainInfoContainer}>
            <Button type="change">Change</Button>
            <p>
              ${plan.price}/{activeSubTypeAbbreviation}
            </p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.addOnsInfoContainer}></div>
        </div>
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="confirm">Confirm</Button>
      </Navigation>
    </>
  );
}

function AddOn({ addOn }) {
  return (
    <div className={styles.addOns}>
      <p className={styles.addOnName}></p>
      <p className={styles.addOnPrice}></p>
    </div>
  );
}

export default StepFour;
