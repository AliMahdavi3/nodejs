// const request = require("./request");
// const response = require("./response");

module.exports = {
    // send : request.send,
    // read : response.read,
    //  another way
    ...require("./request"),
    ...require("./response"),
};
