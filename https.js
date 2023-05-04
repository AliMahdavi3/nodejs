// const { send, encrypt } = require("./internals/request");
// const { read } = require("./response");
const { send, read } = require("./internals");

function makeRequest (data, text){
    send(data, text);
    return read();
}

makeRequest("Code", "Cool!");

