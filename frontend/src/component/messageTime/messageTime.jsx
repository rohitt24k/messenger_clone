import styles from "./messageTime.module.css";

function MessageTime({ own }) {
  return (
    <div className={`${styles.messageTimeContainer} ${own ? styles.own : ""}`}>
      53 minutes ago
    </div>
  );
}

export default MessageTime;
