const fs = require('fs');

const readStream = fs.createReadStream('./file-system/docs/blog3.txt');

readStream.on('data',(chunk)=>{
    console.log(chunk);
    
})