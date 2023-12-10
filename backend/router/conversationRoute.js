const express = require("express");
const {
  createConversation,
  getConversation,
  addMessage,
  getMessages,
} = require("../controllers/conversationControllers");

const router = express.Router();

router.post("/createconv", createConversation);

router.get("/getconv/:id", getConversation);

router.post("/addmessage", addMessage);

router.get("/getmessage/:id", getMessages);

module.exports = router;
