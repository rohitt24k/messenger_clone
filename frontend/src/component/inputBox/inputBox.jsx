import styles from "./inputBox.module.css";

function InputBox({
  label,
  name,
  type,
  disabled,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <div className={styles.inputContainer}>
      <label>
        <p>{label}</p>
        <input
          type={type}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            handleChange(e, name);
          }}
        />
      </label>
    </div>
  );
}

export default InputBox;
