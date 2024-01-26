import styles from "./PersonalInfoInput.module.css";
function PersonalInfoInput({ labelText, inputId, inputType, placeHolder }) {
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
      />
    </>
  );
}

export default PersonalInfoInput;
