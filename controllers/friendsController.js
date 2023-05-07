
function getFriends (req, res) {
    res.send("<h1>SUCCESS COME FROM PATIONS...!</h1>");
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