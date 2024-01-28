import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import SubscriptionSwitcher from "../../components/SubscriptionSwitcher/SubscriptionSwitcher";
import Container from "../../components/Container/Container";
import Selection from "../../components/Selection/Selection";
import SubscriptionType from "../../components/SubscriptionType/SubscriptionType";

function StepTwo({ activeSubType, dispatch, plan }) {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Select your plan</Title>
        <SubTitle type="mainSubHeading">
          You have the option of monthly or yearly billing.
        </SubTitle>
        <Container gap="selectionGap">
          <Selection
            alt="arcade selection"
            src="/images/icon-arcade.svg"
            plan={plan}
            type="arcade"
            dispatch={dispatch}
            activeSubType={activeSubType}
          >
            {activeSubType === "monthly" ? (
              <SubscriptionType title="Arcade" subTitle="$9/mo" />
            ) : (
              <SubscriptionType
                title="Arcade"
                subTitle="$90/yr"
                yearlyBonus="2 months free"
              />
            )}
          </Selection>
          <Selection
            alt="advanced selection"
            src="/images/icon-advanced.svg"
            plan={plan}
            type="advanced"
            activeSubType={activeSubType}
            dispatch={dispatch}
          >
            {activeSubType === "monthly" ? (
              <SubscriptionType title="Advanced" subTitle="$12/mo" />
            ) : (
              <SubscriptionType
                title="Advanced"
                subTitle="$120/yr"
                yearlyBonus="2 months free"
              />
            )}
          </Selection>
          <Selection
            alt="pro selection"
            src="/images/icon-pro.svg"
            plan={plan}
            type="pro"
            activeSubType={activeSubType}
            dispatch={dispatch}
          >
            {activeSubType === "monthly" ? (
              <SubscriptionType title="Pro" subTitle="$15/mo" />
            ) : (
              <SubscriptionType
                title="Pro"
                subTitle="$150/yr"
                yearlyBonus="2 months free"
              />
            )}
          </Selection>
        </Container>
        <SubscriptionSwitcher
          dispatch={dispatch}
          activeSubType={activeSubType}
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
