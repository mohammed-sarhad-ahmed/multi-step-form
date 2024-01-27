import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

function Button({ children, type }) {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <button
      className={styles[type]}
      onClick={() => {
        let whereToNavigate;
        switch (location.pathname) {
          case "/stepone":
            whereToNavigate = "/steptwo";
            break;
          case "/steptwo/yearly":
          case "/steptwo/monthly":
            whereToNavigate = type === "back" ? "/stepone" : "/stepthree";
            break;
          case "/stepthree":
            whereToNavigate = type === "back" ? "/steptwo" : "/stepfour";
            break;
          case "/stepfour":
            whereToNavigate = type === "back" ? "/stepthree" : "/stepfive";
            break;
        }
        navigate(whereToNavigate);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
