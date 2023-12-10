const convModel = require("../models/conversationModel");

exports.createConversation = async (req, res) => {
  const userData = req.body;
  if (userData.length === 0 || !userData) {
    res.status(400).json({
      status: "error",
      message: "ids of the users are missing",
    });
  } else {
    try {
      //check if already exists
      const newConv = new convModel({
        participants: userData,
      });
      const savedConversation = await newConv.save();

      res.status(201).json({
        status: "success",
        message: "Conversation created successfully",
        conversation: savedConversation,
      });
    } catch (error) {
      console.error("Error during saving conversation:", error);
      return res.status(500).json({
        status: "error",
        message: "Internal server error during createConversation",
      });
    }
  }
};

exports.getConversation = async (req, res) => {
  try {
    const conversations = await convModel
      .find({
        "participants.userId": req.params.id,
      })
      .select("participants");

    if (conversations.length === 0) {
      res.status(404).json({
        status: "error",
        message: "The user doesn't have any conversation",
      });
    } else {
      res.status(200).json(conversations);
    }
  } catch (error) {
    console.error("Error during fetching conversation:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error during createConversation",
    });
  }
};

exports.addMessage = async (req, res) => {
  const data = req.body;
  try {
    const fetchedMessage = await convModel.findByIdAndUpdate(
      {
        _id: data.conversationId,
      },
      {
        $push: { messages: data.message },
      },
      {
        returnDocument: "after",
      }
    );
    res.json(fetchedMessage);
  } catch (error) {
    console.error("Error during adding message:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error during createConversation",
    });
  }
};

exports.getMessages = async (req, res) => {
  try {
    const conversations = await convModel
      .findById({ _id: req.params.id })
      .select("messages");

    res.status(200).json(conversations);
  } catch (error) {
    console.error("Error during fetching conversation:", error);
    return res.status(500).json({
      status: "error",
      message: "Internal server error during createConversation",
    });
  }
};
