import SideBar from "../../components/SideBar/SideBar";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import Container from "../../components/Container/Container";
import AddOnsTypes from "../../components/addOnsTypes/addOnsTypes";

function StepThree({ subscriptionInterval, addOns, dispatch }) {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Pick add-ons</Title>
        <SubTitle type="mainSubHeading">
          add-ons help enhance your gaming experience
        </SubTitle>
        <Container gap="addOnsGap">
          {addOns.map((addOn) => (
            <AddOnsTypes
              addOn={addOn}
              subscriptionInterval={subscriptionInterval}
              key={addOn.type}
              dispatch={dispatch}
            />
          ))}
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
