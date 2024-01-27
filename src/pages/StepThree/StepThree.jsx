import styles from "./StepThree.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Title from "../../components/Title/Title";
import SubTitle from "../../components/SubTitle/SubTitle";
import Navigation from "../../components/navigation/Navigation";
import Button from "../../components/Button/Button";
import { Outlet } from "react-router-dom";

function StepThree() {
  return (
    <>
      <SideBar>
        <Title type="mainTitle">Pick add-ons</Title>
        <SubTitle type="mainSubHeading">
          add-ons help enhance your gaming experience
        </SubTitle>
        <Outlet />
      </SideBar>
      <Navigation>
        <Button type="back">Go Back</Button>
        <Button type="next">Next Step</Button>
      </Navigation>
    </>
  );
}

export default StepThree;
