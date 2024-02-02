import SideBar from "../../components/SideBar/SideBar";
import SubTitle from "../../components/SubTitle/SubTitle";
import Title from "../../components/Title/Title";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import styles from "./StepFour.module.css";
import {
  addonsMonthly,
  addonsYearly,
  plansMonthly,
  plansYearly,
} from "../../data";
import { abbreviateTimeIntervalName } from "../../helper";
import Container from "../../components/Container/Container";

function StepFour({ subscriptionInterval, activePlan, checkedAddOns }) {
  const activeSubTypeAbbreviation =
    abbreviateTimeIntervalName(subscriptionInterval);

  const currentPlans =
    subscriptionInterval === "monthly" ? plansMonthly : plansYearly;

  const currentAddOns =
    subscriptionInterval === "monthly" ? addonsMonthly : addonsYearly;

  const selectedPlan = currentPlans.find((plan) => plan.type === activePlan);

  const selectedAddons = currentAddOns.reduce((acc, plan) => {
    return checkedAddOns.includes(plan.type) ? [...acc, plan] : acc;
  }, []);

  const totalPrice = [...selectedAddons, selectedPlan]
    .map((item) => item.price)
    .reduce((acc, price) => acc + price, 0);

  return (
    <>
      <SideBar>
        <Title type="mainTitle">Finishing Up</Title>
        <SubTitle type="mainSubHeading">
          Double-Check everything looks OK before confirming it.
        </SubTitle>
        <Container className="summary">
          <Title type="secondaryTitle">
            <span className={styles.planText}>{selectedPlan.type}</span> (
            <span className={styles.activeSubscriptionInterval}>
              {subscriptionInterval}
            </span>
            )
          </Title>
          <div className={styles.planInfoContainer}>
            <Button type="change">Change</Button>
            <p className={styles.planPrice}>
              ${selectedPlan.price}/{activeSubTypeAbbreviation}
            </p>
          </div>
          <hr className={styles.hr} />
          <div className={styles.addOnsInfoContainer}>
            {selectedAddons.map((addOn) => (
              <div className={styles.addOns} key={addOn.type}>
                <p className={styles.addOnName}>{addOn.type}</p>
                <p className={styles.addOnPrice}>
                  +${addOn.price}/{activeSubTypeAbbreviation}
                </p>
              </div>
            ))}
          </div>
        </Container>
        <Container className="total">
          <p className={styles.totalText}>
            Total per ({subscriptionInterval === "monthly" ? "month" : "year"})
          </p>
          <p className={styles.totalPrice}>
            ${totalPrice}/{activeSubTypeAbbreviation}
          </p>
        </Container>
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="confirm">Confirm</Button>
      </Navigation>
    </>
  );
}

export default StepFour;
