import { NavLink } from "react-router-dom";
import styles from "./PaginationButton.module.css";

function PaginationButton({ step, number }) {
  return (
    <li className={styles.button}>
      <NavLink to={step} className={styles.navLink}>
        {number}
      </NavLink>
    </li>
  );
}

export default PaginationButton;
