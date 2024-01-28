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
          case "/steptwo/monthly":
            whereToNavigate =
              type === "back" ? "/stepone" : "/stepthree/monthly";
            break;
          case "/steptwo/yearly":
            whereToNavigate =
              type === "back" ? "/stepone" : "/stepthree/yearly";
            break;
          case "/stepthree/yearly":
            whereToNavigate =
              type === "back" ? "/steptwo/yearly" : "/stepfour/yearly";
            break;
          case "/stepthree/monthly":
            whereToNavigate =
              type === "back" ? "/steptwo/monthly" : "/stepfour/monthly";
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
