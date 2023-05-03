const url = "www.codeyad";

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

module.exports = {
    endPoint : url,
    log : logger,
}

console.log(module);