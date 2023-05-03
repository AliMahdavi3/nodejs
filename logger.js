const url = "www.codeyad.com";

function logger (message){
    // send a request
    console.log(message);
}

// module.exports.log=logger;
// module.exports.end=url;

// module.exports = {
//     url,
//     logger,
// }

// module.exports = {
//     endPoint : url,
//     log : logger,
// }

// console.log(module);

exports.log = logger;
exports.endPoint = url;