// Global Object
// The global object in window is different from the global object in node
// console.log(global);

const int = setInterval(()=>{
    console.log('in the interval');  
},1000)

setTimeout(() => {
    console.log("in the timeout");
    clearInterval(int)
}, 3000);


console.log(__dirname);
console.log(__filename);


