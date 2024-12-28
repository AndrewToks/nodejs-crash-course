// const xyz = require('./people');
// console.log(xyz);
// console.log(people) --> people not defined.


//import people value -> they do not need to
//  be called the same thing >>> e.g people(from people.js) ===abc

const {people,ages} = require("./people")//destructuring
console.log(people,ages);


//operating system

const os = require("os")
console.log(os.platform(),os.homedir());


//file system

const fs = require('fs')
console.log(fs);

