
function random(resolve){
    setTimeout(resolve, 3000)
}
function setTimeoutPromisified(){
    return new Promise(random)
}
function main(){
    console.log('promise called');
}
setTimeoutPromisified().then(main)    // => setTimeout(main,3000)


