// const EventEmitter = require("events");
// const emitter = new EventEmitter;

// emitter.on("Phone Called", function(value){
//     console.log("Answer Phone Call From " + value.name);
// })

// process.on("exit", code => {
//     console.log("Phone Call From ", code);
// })

// emitter.emit("Phone Called", {
//     id : 1, 
//     name : "Ali",
//     number : 09012559469,
// });

// ==================================================== \\

class hamburger {
    constructor(bread, meet, fat){
        this.bread = bread;
        this.meet = meet;
        this.fat = fat;
    }
}


const myHam = new hamburger("Bugdet", "mutton", 30);
const myHam1 = new hamburger("toast", "cow", 50);
const myHam2 = new hamburger("Bugdet", "mutton", 80);
console.log(myHam);
console.log(myHam1);
console.log(myHam2);

// ==================================================== \\

class car {
    constructor(carName){
        this.carName = carName;
    }
    present(){
        return `I Have ${this.carName}`
    }
}

const carOne = new car("Ford");
console.log(carOne);

class newCar extends car {
    constructor(brand){
        super("BMW")
        this.brand = brand
    }

    show() {
        return this.present() + ` Its a ${this.brand}`
    }
}

let myCar = new newCar(2016);
console.log(myCar.show());