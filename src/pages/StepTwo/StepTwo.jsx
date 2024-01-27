import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import { Outlet } from "react-router-dom";
import SubscriptionSwitcher from "../../components/SubscriptionSwitcher/SubscriptionSwitcher";
function StepTwo() {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Select your plan</Title>
        <SubTitle type="mainSubHeading">
          You have the option of monthly or yearly billing.
        </SubTitle>
        <Outlet />
        <SubscriptionSwitcher />
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </Navigation>
    </>
  );
}

export default StepTwo;
