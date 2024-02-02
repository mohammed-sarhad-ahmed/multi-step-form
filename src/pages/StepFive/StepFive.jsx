import SideBar from "../../components/SideBar/SideBar";
import Title from "../../components/Title/Title";
import styles from "./StepFive.module.css";

function StepFive() {
  return (
    <>
      <SideBar className="center">
        <img src="/images/icon-thank-you.svg" className={styles.thankYouImg} />
        <Title type="mainTitle">Thank You !</Title>
        <p className={styles.thankYouParagraph}>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. IF you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </SideBar>
    </>
  );
}

export default StepFive;
