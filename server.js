const express = require("express");
const app = express();
const messageRouter = require("./routes/messageRouter");
const friendsRouter = require("./routes/friendsRouter");
const path = require("path");
const PORT = 3001;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});
app.use(express.json());

app.set("view engine", "hbs");
app.set("views", "views");
app.get("/", (req, res) => {
    res.render("index", {
        title : "HBS Website!",
        caption : "This is my site!"
    });
});

app.use("/site", express.static(path.join(__dirname, "public")));
app.use("/message", messageRouter);
app.use("/friends", friendsRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
