//map 
//function take functions as args
//higer order function
var animals = [
    {name:'FLuffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'cat'},
    {name:'Ursula', species:'cat'},
    {name:'Thor', species:'dog'},
    {name:'Hulk', species:'fish'},
    {name:'Bahubali', species:'cat'},
]

//typical way
/*
var names = []
for(var i =0; i<animals.length;i++){
    // loop that runs in the array
    names.push(animals[i].name)
    //pushes the name value of each object
}
*/

//using map
//fileter will return true or false
//map will go though each elsement
//it need a transformationed items to create a new array
//this has a claa back function similler to filter

var names = animals.map((animal)=>{
    //each obj contains an animal
    //so Im getting only the name of the animal
    return animal.name
})

//es6
var names = animals.map(x=>x.name);
//here the callback returns on state ment 
//so i can right like this
console.log(names);
//logs the name