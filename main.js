const EmittEvent = require("./emitter"); 

const emitter = new EmittEvent();

emitter.on("Phone Called", function(value){
    console.log("Answer Phone Call From " + value.name);
})

emitter.emitterEvent();
 

// ==================================================== \\
