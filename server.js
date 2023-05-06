// don't forget to change filename in nodemon package.json

const express = require("express");

const app = express();

const PORT = 3002;

app.get("/", (req, res) => {
    res.send("I WILL BECOME RICH...!");
});

app.get("/message", (req, res) => {
    res.send("<h1>LIFT IS BEAUTIFL</h1>");
});

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})