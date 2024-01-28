import SideBar from "../../components/SideBar/SideBar";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import AddOnsTypes from "../../components/addOnsTypes/addOnsTypes";

function StepThree({
  activeSubType,
  addOns: { onlineServices, largerStorage, customizableProfile },
  dispatch,
}) {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Pick add-ons</Title>
        <SubTitle type="mainSubHeading">
          add-ons help enhance your gaming experience
        </SubTitle>
        <Container gap="addOnsGap">
          <AddOnsTypes
            title="Online Services"
            subTitle="Access multiplayer games"
            price={activeSubType === "monthly" ? "+$1/mo" : "+$10/yr"}
            checked={onlineServices.checked}
            dispatch={dispatch}
            event="changeOnlineServiceState"
          />
          <AddOnsTypes
            title="Larger Storage"
            subTitle="Extra 1TB of cloud storage"
            price={activeSubType === "monthly" ? "+$2/mo" : "+$20/yr"}
            checked={largerStorage.checked}
            dispatch={dispatch}
            event="changeLargerStorageState"
          />
          <AddOnsTypes
            title="Customizable Profile"
            subTitle="Custom theme on your profile"
            price={activeSubType === "monthly" ? "+$2/mo" : "+$20/yr"}
            checked={customizableProfile.checked}
            dispatch={dispatch}
            event="changeCustomizableProfileState"
          />
        </Container>
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </Navigation>
    </>
  );
}

export default StepThree;
