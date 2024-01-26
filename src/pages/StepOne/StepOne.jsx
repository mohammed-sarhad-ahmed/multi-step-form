import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import PersonalInfoInput from "../../components/PersonalInfoInput/PersonalInfoInput";
import Container from "../../components/Container/Container";

function StepOne() {
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
          />
        </Container>
        <Container gap="inputGap">
          <PersonalInfoInput
            inputId="email"
            inputType="email"
            labelText="Email Address"
            placeHolder="e.g. StephenKing@lorem.com"
          />
        </Container>
        <Container gap="inputGap">
          <PersonalInfoInput
            inputId="phone"
            inputType="tel"
            labelText="Phone Number"
            placeHolder="e.g. +1 234 567 890"
          />
        </Container>
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="next">Next</Button>
      </Navigation>
    </>
  );
}

export default StepOne;
