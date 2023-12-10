import { useState } from "react";
import MessageModule from "../../component/messageModule/messageModule";
import SideBar from "../../component/sideBar/sideBar";
import styles from "./home.module.css";

const conversationsData = [
  { conversationId: 1, senderId: "user1", receiverId: "user2" },
  { conversationId: 2, senderId: "user2", receiverId: "user1" },
  { conversationId: 3, senderId: "user3", receiverId: "user4" },
  { conversationId: 4, senderId: "user4", receiverId: "user3" },
  { conversationId: 5, senderId: "user5", receiverId: "user6" },
  { conversationId: 6, senderId: "user6", receiverId: "user5" },
  { conversationId: 7, senderId: "user7", receiverId: "user8" },
  { conversationId: 8, senderId: "user8", receiverId: "user7" },
  { conversationId: 9, senderId: "user9", receiverId: "user10" },
  { conversationId: 10, senderId: "user10", receiverId: "user9" },
];

function Home() {
  const [conversations, useConversations] = useState(conversationsData);
  const [selectedConversation, setSelectedConversation] = useState({
    conversationId: 5,
    senderId: "user5",
    receiverId: "user6",
  });

  return (
    <div className={styles.homeContainer}>
      <SideBar
        conversations={conversations}
        selectedConversation={selectedConversation}
        setSelectedConversation={setSelectedConversation}
      />
      <MessageModule selectedConversation={selectedConversation} />
    </div>
  );
}

export default Home;
