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
var names = []
for(var i =0; i<animals.length;i++){
    // loop that runs in the array
    names.push(animals[i].name)
    //pushes the name value of each object
}

console.log(names);
//logs the name