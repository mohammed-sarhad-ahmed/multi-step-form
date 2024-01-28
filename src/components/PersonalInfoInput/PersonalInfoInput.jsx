import styles from "./PersonalInfoInput.module.css";
function PersonalInfoInput({
  labelText,
  inputId,
  inputType,
  placeHolder,
  value,
  dispatch,
  event,
}) {
  return (
    <>
      <label htmlFor={inputId} className={styles.label}>
        {labelText}
      </label>
      <input
        type={inputType}
        id={inputId}
        className={styles.input}
        placeholder={placeHolder}
        value={value}
        onChange={(e) => dispatch({ type: event, payload: e.target.value })}
      />
    </>
  );
}

export default PersonalInfoInput;
