import styles from "./PersonalInfoInput.module.css";

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
  blur,
  setBlur,
}) {
  console.log(type, blur);
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
        onBlur={() =>
          setBlur((blur) => {
            const newBlur = { ...blur };
            if (type === "email") newBlur.emailBlur = true;
            if (type === "text") newBlur.nameBlur = true;
            if (type === "tel") newBlur.phoneNumberBlur = true;
            return newBlur;
          })
        }
      />
      <p className={styles.error}>{value === "" ? requiredError : errorMsg}</p>
    </>
  );
}

export default PersonalInfoInput;
