// Write to a file Using the fs library again, 
// try to write to the contents of a file. You can use the fs library to as a black box, 
// the goal is to understand async tasks.
const fs = require ('fs')
function print(err,data){
    if(err){
        console.log('Error:File not found')
    }else{
       
    }
}
fs.writeFile("a.txt" , 'hello world', print)