import styles from "./SideBar.module.css";
import PaginationButton from "../PaginationButton/PaginationButton";

const buttons = Array.from({ length: 4 }, (_, index) => {
  let step;
  if (index === 0) step = "/stepone";
  if (index === 1) step = "/steptwo";
  if (index === 2) step = "/stepthree";
  if (index === 3) step = "/stepfour";
  return {
    id: index,
    step,
  };
});

function SideBar({ children }) {
  return (
    <div className={styles.sideBar}>
      <ul className={styles.nav}>
        {buttons.map((button) => {
          return (
            <PaginationButton
              key={button.id}
              step={button.step}
              number={button.id + 1}
            />
          );
        })}
      </ul>
      <div className={styles.contentContainer}>{children}</div>
    </div>
  );
}

export default SideBar;
