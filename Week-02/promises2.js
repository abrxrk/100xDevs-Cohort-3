const fs=require('fs')
function random(success, failure){
    fs.readFile('a.txt' , 'utf-8' , function(err, data){
       if (err){
        failure (err)
       }
       else success (data)
    })
}
function readFilePromisified(){
    return new Promise(random)
}

readFilePromisified().then(console.log)   // => .readFile('a.txt' , 'utf-8', (err,data))
readFilePromisified().then(console.error)
