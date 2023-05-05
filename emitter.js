const EventEmitter = require("events");

class EmittEvent extends EventEmitter{
    emitterEvent(){
        this.emit("Phone Called", {
            id : 1, 
            name : "Ali",
            phoneNumber : "09012559469",
        });
    }
}

module.exports = EmittEvent;