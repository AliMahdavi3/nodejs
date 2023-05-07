const path = require("path")
function getFriends (req, res) {
    res.sendFile(path.join(__dirname, "..", "public", "article-1.jpg"));
};

function postFriends (req, res) {
    if(!req.body.name){
        return  res.status(400).json({
            error : "Friend Not found...!"
        });
    };
    res.send("Friends Recieved...!");
};

module.exports = {
    getFriends,
    postFriends,
}