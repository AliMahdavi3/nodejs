const messageController = require("../controllers/messageController");
const express = require("express");
const messageRouter = express.Router();

messageRouter.get("/", messageController.getMessage);
messageRouter.get("/:messageId", messageController.getMessageById);
messageRouter.post("/", messageController.postMessage);
messageRouter.put("/:messageId", messageController.putMessage);
messageRouter.delete("/:messageId", messageController.deleteMessage);

module.exports = messageRouter;