//why async? depending how long it will take to load or read
//js is single threded so async is needed
//how can we right it
//event loop callback promises genarators async/await

console.log('hello');
setTimeout(function(){
    console.log('Hello World after 1 sec')
},1000);//after one see

console.log('hello world')

//------------------------------

console.time('test me please');//compiling time

setTimeout(function(){
    console.log(console.timeEnd('test me please'))
},0)


//------------------------------------
setTimeout(function() {
    console.log('hello world after 2 seconds')
},2000)