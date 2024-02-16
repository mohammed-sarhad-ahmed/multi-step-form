import styles from "./PersonalInfoInput.module.css";
import { useState } from "react";

function PersonalInfoInput({
  type,
  placeholder,
  label,
  event,
  value,
  dispatch,
  pattern,
  errorMsg,
  requiredError,
}) {
  const [blur, setBlur] = useState(false);
  return (
    <>
      <label htmlFor={type} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={type}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        required
        pattern={pattern}
        blur={String(blur)} // eslint-disable-line
        onChange={(e) => dispatch({ type: event, payload: e.target.value })}
        onBlur={() => setBlur(true)}
      />
      <p className={styles.error}>{value === "" ? requiredError : errorMsg}</p>
    </>
  );
}

export default PersonalInfoInput;
