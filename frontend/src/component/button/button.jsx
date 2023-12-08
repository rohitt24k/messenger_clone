import styles from "./button.module.css";

function Button({ text, type, handleClick }) {
  return (
    <div className={styles.buttonContainer}>
      <button
        type={type}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
