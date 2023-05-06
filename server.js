// don't forget to change filename in nodemon package.json

// const express = require("express");

// const app = express();

// const PORT = 3002;

// app.get("/", (req, res) => {
//     res.send("I WILL BECOME RICH...!");
// });

// app.get("/message", (req, res) => {
//     res.send("<h1>LIFT IS BEAUTIFL</h1>");
// });

// app.listen(PORT, ()=>{
//     console.log(`listening on port ${PORT}`);
// });

const express = require("express");
const app = express();
const PORT = 3000;

const array = [
    {
        id : 1,
        name : "Ali",
        lastName : "Mahdavi"
    },
    {
        id : 2,
        name : "Reza",
        lastName : "Mahdavi"
    },
    {
        id : 3,
        name : "Rayhaneh",
        lastName : "Mahdavi"
    },
]

app.get("/", (req, res) => {
    res.send("<h1>SUCCESS COME FROM PATIONS...!</h1>");
});

app.get("/message", (req, res) => {
    res.send("<h1>NOTING CAN STOP US...!</h1>");
});

app.get("/message/:messageId", (req, res) => {
    const messageId = req.params.messageId;
    const items = array[messageId];
    if (items) {
        res.json(items);
    } else {
        res.status(404).json({
            error : "Object does not found...!",
        });
    }
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});