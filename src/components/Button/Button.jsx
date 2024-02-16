import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
function Button({ children, type, disable, setBlur }) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <button
      className={styles[type]}
      onClick={() => navigator(navigate, location, type, disable, setBlur)}
    >
      {children}
    </button>
  );
}

function navigator(navigate, location, type, disable, setBlur) {
  let whereToNavigate;
  if (disable)
    return setBlur({ emailBlur: true, nameBlur: true, phoneNumberBlur: true });
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
