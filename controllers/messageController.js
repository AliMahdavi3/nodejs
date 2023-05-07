const { array } = require("../models/messageModel");

function getMessage (req, res) {
    res.send(array);
};

function getMessageById (req, res) {
    const messageId = req.params.messageId;
    const items = array[messageId];
    if (items) {
        res.json(items);
    } else {
        res.status(404).json({
            error : "Object does not found...!",
        });
    }
};

function postMessage (req, res) {
    
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

};

function putMessage (req, res) {
    
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

};

function deleteMessage (req, res) {
    
    const item = array.find(f => f.id === parseInt(req.params.messageId));
    if(!item) {
        return res.status(404).json({ 
            error : "Item was not found...!"
        })
    };

    const itemIndex = array.indexOf(item);
    array.splice(itemIndex, 1);

    res.send(item);
};

module.exports = {
    getMessage,
    getMessageById,
    postMessage,
    putMessage,
    deleteMessage,
}