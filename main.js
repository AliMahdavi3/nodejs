const http = require("http");

const PORT = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type" : "application/json",
    });
    res.end(JSON.stringify({id : 1, text : "I WILL BECOME RICH...!"}));
});

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
});