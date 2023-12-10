import InputBox from "../inputBox/inputBox";
import Message from "../messge/message";
import Button from "../button/button";
import styles from "./messageModule.module.css";
import { FaSearch } from "react-icons/fa";
import MessageTime from "../messageTime/messageTime";

function MessageModule({ selectedConversation }) {
  return (
    <div className={styles.messageModuleContainer}>
      <header>
        <div>
          <img
            className={styles.userAvatar}
            src="https://images.pexels.com/photos/18123871/pexels-photo-18123871/free-photo-of-man-in-hat-and-sunglasses-taking-pictures-with-camera-on-city-square.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="User Avatar"
          />
          <span>{selectedConversation.senderId}</span>
        </div>
        <FaSearch size={"1.25rem"} />
      </header>
      <main>
        <Message own={true} />
        <Message own={true} />
        <MessageTime own={true} />
        <Message own={false} />
        <Message own={false} />
        <MessageTime own={false} />
        <Message own={true} />
        <MessageTime own={true} />
        <Message own={false} />
        <MessageTime own={false} />
        <Message own={true} />
        <Message own={true} />
        <MessageTime own={true} />
      </main>
      <footer>
        <div className={styles.inputBox}>
          <InputBox
            type={"text"}
            placeholder={"Say Somthing..."}
            style={{ border: "none" }}
          />
        </div>
        <div className={styles.button}>
          <Button
            type={"button"}
            text={"send"}
            style={{
              width: "90px",
              boxShadow: "rgba(174, 169, 169, 0.16) 0px 3px 7px",
            }}
          />
        </div>
      </footer>
    </div>
  );
}

export default MessageModule;
