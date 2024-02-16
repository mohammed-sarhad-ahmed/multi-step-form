import Button from "../../components/Button/Button";
import SideBar from "../../components/SideBar/SideBar";
import Navigation from "../../components/navigation/Navigation";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import PersonalInfoInput from "../../components/PersonalInfoInput/PersonalInfoInput";
import Container from "../../components/Container/Container";
import { inputs } from "../../data";
import { useEffect, useState } from "react";

function StepOne({ name, email, phoneNumber, dispatch }) {
  const [isThereError, setIsThereError] = useState(true);
  console.log(isThereError);
  useEffect(() => {
    const inputs = document.querySelectorAll("input");
    for (const input of inputs) {
      if (input.matches("input:invalid")) return setIsThereError(true);
    }
    setIsThereError(false);
  });
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Personal info </Title>
        <SubTitle type="mainSubHeading">
          Please provide you name, email address, and phone number.
        </SubTitle>
        <Container className="input">
          <PersonalInfoInput
            {...inputs.name}
            dispatch={dispatch}
            value={name}
          />
        </Container>
        <Container className="input">
          <PersonalInfoInput
            {...inputs.emailAddress}
            dispatch={dispatch}
            value={email}
          />
        </Container>
        <Container className="input">
          <PersonalInfoInput
            {...inputs.phoneNumber}
            dispatch={dispatch}
            value={phoneNumber}
          />
        </Container>
      </SideBar>
      <Navigation page="one">
        <Button type="next" disable={isThereError}>
          Next Step
        </Button>
      </Navigation>
    </>
  );
}

export default StepOne;
