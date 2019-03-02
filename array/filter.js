var animals = [
    {name:'FLuffykins', species:'rabbit'},
    {name:'Caro', species:'dog'},
    {name:'Hamilton', species:'dog'},
    {name:'Harold', species:'cat'},
    {name:'Ursula', species:'cat'},
    {name:'Thor', species:'dog'},
    {name:'Hulk', species:'cat'},
    {name:'Bahubali', species:'cat'},
]
//to get the og using typical loop

//var dogs =[]
//var cats=[]

//for(var i=0;i<animals.length;i++){
//(animals[i].species === 'dog')?
  //  dogs.push(animals[i]):
  //  cats.push(animals[i])
//}

//using filter
//var isDog = function(dog){
   // return dog.species==='dog'
//}

//var isCat = function(cat){
    //r/eturn cat.species==='cat'
//}

//var dogs = animals.filter(isDog)
var cats = animals.filter((animal)=>{
    return animal.species === 'cat'
})
//var dogs = animals.filter(function(animal){
  //  return animal.species === 'dog'
//})
//console.log(dogs)
console.log(cats)
//console.log(cats)