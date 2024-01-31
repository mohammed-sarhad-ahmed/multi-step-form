import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubscriptionSwitcher from "../../components/SubscriptionSwitcher/SubscriptionSwitcher";
import Container from "../../components/Container/Container";
import Selection from "../../components/Selection/Selection";
import SubscriptionType from "../../components/SubscriptionType/SubscriptionType";
import { AbbreviateTimeIntervalName } from "../../helper";

function StepTwo({ subscriptionInterval, plans, dispatch }) {
  const subscriptionIntervalAbbreviation =
    AbbreviateTimeIntervalName(subscriptionInterval);

  return (
    <>
      <SideBar>
        <Title type="mainTitle">Select your plan</Title>
        <SubTitle type="mainSubHeading">
          You have the option of monthly or yearly billing.
        </SubTitle>
        <Container gap="selectionGap">
          {plans.map((plan) => {
            return (
              <Selection plan={plan} key={plan.type} dispatch={dispatch}>
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
