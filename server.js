// don't forget to change filename in nodemon package.json

const express = require("express");
const app = express();
const PORT = 3001;

let array = [
    {
        id : 0,
        firstName : "Ali",
        lastName : "Mahdavi"
    },
    {
        id : 1,
        firstName : "Reza",
        lastName : "Mahdavi"
    },
    {
        id : 2,
        firstName : "Rayhaneh",
        lastName : "Mahdavi"
    },
];

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>SUCCESS COME FROM PATIONS...!</h1>");
});

app.get("/message", (req, res) => {
    res.send(array);
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

app.post("/message", (req, res) => {
    
    if(!req.body.name){
        return  res.status(404).json({
            error : "Array Not found...!"
        });
    }
    let newArray = {
        name : req.body.name,
        id : array.length,
    };

    array.push(newArray);

    res.json(newArray);

});

app.put("/message/:messageId", (req, res) => {
    
    const item = array[parseInt(req.params.messageId)]
    if(!item) {
        return res.status(404).json({
            error : "Item Not Found...!"
        });
    };
    if(!req.body.name){
        return res.status(404).json({
            error : "Your Value Is Empty...!"
        });
    };

    item.firstName = req.body.name;
    res.send(item);

});


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});