//creating a protype

var employee = {
    firstName:'Mohamed',
    lastName:'Ziyad'
}

console.log(`
 the full name is ${employee.firstName} ${employee.lastName}
`)

var person = Object.create(employee)
//im creating a new object by creating it a inheritin the 
//prototpe and im chnagin the props this will not
//effect the original object

person.firstName = 'nimal'
person.lastName = 'Kathar'

console.log(`
    the person name is ${person.firstName} ${person.lastName}
`)

//so the protype chain will be
//runs in each protype to find the prop if it's not exit 
//it will give undifine as delegation (gives out)