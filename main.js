const EmittEvent = require("./emitter"); 

const emitter = new EmittEvent();

emitter.on("Phone Called", function(value){
    console.log("Answer Phone Call From " + value.phoneNumber);
})

emitter.emitterEvent();
 

// ==================================================== \\

// npm list = showing dependencies list
// npm view { axios } dependencies 
// npm run dev