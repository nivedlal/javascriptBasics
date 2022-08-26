let address = createAddress('a','b','c');

function createAddress(street,city,zipCode){
    return{
        street,city,zipCode
    };
}

console.log(address);