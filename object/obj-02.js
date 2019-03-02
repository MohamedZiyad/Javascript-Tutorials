//nested objects
var flight = {
    ariline: 'Oceanic',
    number:815,
    departure: {
        IATA:'SYD',
        time:Date.now(),
        city:'Sydney'
    },
    arraival:{
        IATA:'LAX',
        time:Date.now(),
        city:'Los Angels'
    }
}

console.log(`I'm depatureing from ${flight.departure.city} to 
            ${flight.arraival.city} the time I will be presented
            around ${flight.arraival['time']}`)
            //es6 sysnten backtics and template string
            //this will not change the white space
            //thid will include the whitespace
            //tusing the sufix this will wrok []
            //but retiving by . is good practice
            //if the prop is a recive word it's ok to use []