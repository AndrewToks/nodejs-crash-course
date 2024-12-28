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
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log('folder created.');
//     })
// } else{
//     fs.rmdir('./assets',(err)=>{
//         if (err) {
//             console.log(err); 
//         }
//         else{
//             console.log('folder deleted');
            
//         }
//     })
// }



//deleting files

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }   
        console.log('File deleted');
        
    })
}