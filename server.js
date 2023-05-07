const express = require("express");
const app = express();
const messageRouter = require("./routes/messageRouter");
const friendsRouter = require("./routes/friendsRouter");
const PORT = 3001;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use(express.json());
app.use("/message", messageRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
