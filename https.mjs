// const { send, encrypt } = require("./request");
// const { read } = require("./response");

import { send, encrypt } from "./request.mjs";
import { read } from "./response.mjs"


function makeRequest (data, text){
    send(data, text);
    return read();
}

makeRequest("Coding", "Cool!");