function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
console.log(interest(1000));

const person = {
    firstName: 'Nived',
    lastName: 'lal',
    fullName(){
        return `${person.firstName} ${person.lastName}`;
    }
};
console.log(person.fullName());

const person1 = {
    get fullName(){
        return `${person1.firstName} ${person1.lastName}`;
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
person1.fullName = "David Schwimmer"
console.log(person1);