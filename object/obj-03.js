var person ={
    firstName:'Mohamed',
    lastName:'Ziyad',
    //middleName:''
}

person.firstName='Ahamed'
person.middleName='Kamal'//this will be arumented the pro is not there
//the prop value is replaced
console.log(`
    the full name is ${person.firstName} ${person['lastName']}
    but the middle name if ${person.middleName}
`)