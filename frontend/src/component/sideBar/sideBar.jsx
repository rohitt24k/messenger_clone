import { useState } from "react";
import Conversation from "../conversation/conversation";
import InputBox from "../inputBox/inputBox";
import styles from "./sideBar.module.css";
import { FaAngleDown } from "react-icons/fa6";

function SideBar({
  conversations,
  selectedConversation,
  setSelectedConversation,
}) {
  return (
    <div className={styles.sideBarContainer}>
      <header>
        <div>
          <img
            className={styles.userAvatar}
            src="https://images.pexels.com/photos/163077/mario-yoschi-figures-funny-163077.jpeg"
            alt="User Avatar"
          />
          <div>
            <FaAngleDown />
          </div>
        </div>
        <div>
          <InputBox type="text" placeholder="Search or start a new Chat" />
        </div>
      </header>
      <main>
        {/* different conversations */}
        {conversations.map((d) => (
          <Conversation
            key={d.conversationId}
            senderId={d.senderId}
            active={
              selectedConversation.conversationId === d.conversationId
                ? true
                : false
            }
            handlClick={() => {
              setSelectedConversation(d);
            }}
          />
        ))}
      </main>
    </div>
  );
}

export default SideBar;
