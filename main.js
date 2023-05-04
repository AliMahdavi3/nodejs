const os = require("os");
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
const hostName = os.hostname();

console.log(totalMemory);
console.log(freeMemory);
console.log(hostName);

// ================================================================\\

const { copyFile } = require("fs");

copyFile("sorece.txt", "destination.txt", function(err){
    console.log(err);
});
// transform text from sorece.txt to desstination.txt
// ================================================================\\

const path = require("path");
const file = path.parse(__filename);

console.log(file);
// showing values in file with parse method
// root, dir, base, ext, name,