const messageController = require("./controllers/messageController");
const express = require("express");
const app = express();
const PORT = 3001;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// controllers 
app.get("/", (req, res) => {
    res.send("<h1>SUCCESS COME FROM PATIONS...!</h1>");
});
app.get("/message", messageController.getMessage);
app.get("/message/:messageId", messageController.getMessageById);
app.post("/message", messageController.postMessage);
app.put("/message/:messageId", messageController.putMessage);
app.delete("/message/:messageId", messageController.deleteMessage);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
