const friendsController = require("../controllers/friendsController");
const express = require("express");
const friendsRouter = express.Router();

friendsRouter.get("/", friendsController.getFriends);
friendsRouter.post("/", friendsController.postFriends);

module.exports = friendsRouter;