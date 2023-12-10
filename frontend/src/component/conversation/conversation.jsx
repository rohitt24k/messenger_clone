import styles from "./conversation.module.css";

function Conversation({ senderId, active, handlClick }) {
  return (
    <div
      className={styles.conversationContainer}
      style={active ? { backgroundColor: "#d1e4e8" } : {}}
      onClick={handlClick}
    >
      <img
        className={styles.userAvatar}
        src="https://images.pexels.com/photos/18123871/pexels-photo-18123871/free-photo-of-man-in-hat-and-sunglasses-taking-pictures-with-camera-on-city-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="User Avatar"
      />
      <div className={styles.name}>{senderId}</div>
      <div className={styles.time}>05:14 pm</div>
    </div>
  );
}

export default Conversation;
