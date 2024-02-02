import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubscriptionSwitcher from "../../components/SubscriptionSwitcher/SubscriptionSwitcher";
import Container from "../../components/Container/Container";
import Selection from "../../components/Selection/Selection";
import SubscriptionType from "../../components/SubscriptionType/SubscriptionType";
import { abbreviateTimeIntervalName } from "../../helper";
import { plansYearly, plansMonthly } from "../../data";

function StepTwo({ subscriptionInterval, activePlan, dispatch }) {
  const subscriptionIntervalAbbreviation =
    abbreviateTimeIntervalName(subscriptionInterval);
  const currentPlans =
    subscriptionInterval === "monthly" ? plansMonthly : plansYearly;

  return (
    <>
      <SideBar>
        <Title type="mainTitle">Select your plan</Title>
        <SubTitle type="mainSubHeading">
          You have the option of monthly or yearly billing.
        </SubTitle>
        <Container className="selection">
          {currentPlans.map((plan) => {
            return (
              <Selection
                plan={plan}
                activePlan={activePlan}
                key={plan.type}
                dispatch={dispatch}
              >
                <SubscriptionType
                  title={plan.type}
                  subTitle={`$${plan.price}/${subscriptionIntervalAbbreviation}`}
                  yearlyBonus={plan.bonus}
                />
              </Selection>
            );
          })}
        </Container>
        <SubscriptionSwitcher
          subscriptionInterval={subscriptionInterval}
          dispatch={dispatch}
        />
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </Navigation>
    </>
  );
}

export default StepTwo;
