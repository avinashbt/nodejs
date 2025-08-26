// module.exports.sum = (a,b)=>{
//     return a+b;

// }
  

// module.exports.multiply = (a,b)=>{

//     return a*b;
// }
 
 
//Object always reference by key value pairs

// const path = require('path');

// console.log(path.extname('E:/MERN/nodejs/sum.js'));
// console.log(path.basename('E:/MERN/nodejs/sum.js'));
// console.log(path.parse('E:/MERN/nodejs/sum.js'));
// console.log(path.dirname('E:/MERN/nodejs/sum.js'));
// console.log(path.win32);


const os = require('os');

console.log("os", os.arch());
console.log("os", os.platform());


console.log("os", os.hostname());
console.log("os", os.userInfo());

console.log("os", os.totalmem());
console.log("os", os.freemem());
 