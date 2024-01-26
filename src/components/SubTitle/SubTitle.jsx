import styles from "./SubTitle.module.css";
function SubTitle({ children, type }) {
  if (type === "mainSubHeading")
    return <h2 className={styles.mainSubHeading}>{children}</h2>;
  if (type === "secondarySubHeading")
    return <h4 className={styles.secondarySubHeading}>{children}</h4>;
}

export default SubTitle;
