const http = require("http");

const PORT = 3001;
const server = http.createServer();

const hope = [
    {id : 1, text : "I WILL DEFENITLY BECOME RICH...!"},
    {id : 2, text : "I WILL DEFENITLY BECOME BEST...!"},
    {id : 3, text : "I WILL DEFENITLY BECOME GREATE...!"},
]

server.on("request", (req, res) => {

    const items = req.url.split("/");

    if(items[1] === "hope"){
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        if(items.length == 3) {
            const itemsIndex = Number(items[2]);
            res.end(JSON.stringify(hope[itemsIndex]));
        } else {
            res.end(JSON.stringify(hope));
        }
    } else if (items[1] === "content") {
        res.setHeader("Content-Type", "text-html");
        res.write("<html>");
        res.write("<body>");
        res.write("<ul>");
        res.write("<li>I WILL BECOM RICH...!</li>");
        res.write("<li>I AM A GREAT PROGRAMMER..!</li>");
        res.write("</ul>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else {
        res.statusCode = 404;
        res.end();
    };
});

server.listen(PORT, ()=>{
    console.log(`Listening on PORT ${PORT}`);
});