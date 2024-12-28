const fs = require('fs');

//asynchronous -> takes time to run

//reading files
//This takes two arguments
// fs.readFile('./docs/blog1.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());//it prints buffer to the 
//     // console but you use toString() method to convert to string
// })

// console.log('last line');


//writing files
//three arguments
// fs.writeFile('./docs/blog1.txt','Hello World',()=>{
//     console.log('file was written');
// })

// fs.writeFile('./docs/blog2.txt','Hello World',()=>{
//     console.log('file was written');
// })

//directories
fs.mkdir('./assets',(err)=>{
    if(err){
        console.log(err);
    }
    console.log('folder created.');
    
})

//deleting files