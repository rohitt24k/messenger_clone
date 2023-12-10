import styles from "./message.module.css";

function Message({ own }) {
  return (
    <div className={`${styles.messageContainer} ${own ? styles.own : ""}`}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
      nesciunt?
    </div>
  );
}

export default Message;
