function asyncSum(a,b) {
    var promise = new Promise();

    setTimeout(function(){
        promise.resolve(a+b);
    }, 1000)
    return promise;
}

(function () {
var asyncResult = asyncSum(3,5);
//if the answer return return the result
//this is the resolve
asyncResult.then(function (result){
    console.log(result);
})

//else return the error this will be the reject
asyncResult.catch(function(error){
    console.log(error);
})
})