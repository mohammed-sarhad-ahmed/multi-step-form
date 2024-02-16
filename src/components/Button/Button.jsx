import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ children, type, disable }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={styles[type]}
      disabled={disable || false}
      onClick={() => navigator(navigate, location, type)}
    >
      {children}
    </button>
  );
}

function navigator(navigate, location, type) {
  let whereToNavigate;
  switch (location.pathname) {
    case "/stepone":
      whereToNavigate = "/steptwo";
      break;
    case "/steptwo":
      whereToNavigate = type === "back" ? "/stepone" : "/stepthree";
      break;
    case "/stepthree":
      whereToNavigate = type === "back" ? "/steptwo" : "/stepfour";
      break;

    case "/stepfour":
      whereToNavigate =
        type === "back"
          ? "/stepthree"
          : type === "change"
          ? "/steptwo"
          : "/stepfive";
      break;
  }
  navigate(whereToNavigate);
}
export default Button;
