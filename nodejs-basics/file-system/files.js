const fs = require('fs');

//reading files
//This takes two arguments
fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());//it prints buffer to the 
    // console but you use toString() method to convert to string
    
})

//writing files


//directories


//deleting files