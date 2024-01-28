import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import PersonalInfoInput from "../../components/PersonalInfoInput/PersonalInfoInput";
import Container from "../../components/Container/Container";

function StepOne({ name, email, phoneNumber, dispatch }) {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Personal info </Title>
        <SubTitle type="mainSubHeading">
          Please provide you name, email address, and phone number.
        </SubTitle>
        <Container gap="inputGap">
          <PersonalInfoInput
            inputId="name"
            inputType="text"
            labelText="Name"
            placeHolder="e.g. Stephen King"
            value={name}
            dispatch={dispatch}
            event="setName"
          />
        </Container>
        <Container gap="inputGap">
          <PersonalInfoInput
            inputId="email"
            inputType="email"
            labelText="Email Address"
            placeHolder="e.g. StephenKing@lorem.com"
            value={email}
            dispatch={dispatch}
            event="setEmail"
          />
        </Container>
        <Container gap="inputGap">
          <PersonalInfoInput
            inputId="phone"
            inputType="tel"
            labelText="Phone Number"
            placeHolder="e.g. +1 234 567 890"
            value={phoneNumber}
            dispatch={dispatch}
            event="setPhoneNumber"
          />
        </Container>
      </SideBar>
      <Navigation page="one">
        <Button type="next">Next Step</Button>
      </Navigation>
    </>
  );
}

export default StepOne;
