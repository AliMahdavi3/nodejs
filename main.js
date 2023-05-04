const EventEmitter = require("events");
const emitter = new EventEmitter;

emitter.on("Phone Called", function(value){
    console.log("Answer Phone Call From " + value.name);
})

process.on("exit", code => {
    console.log("Phone Call From ", code);
})

emitter.emit("Phone Called", {
    id : 1, 
    name : "Ali",
    number : 09012559469,
});

