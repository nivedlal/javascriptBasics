const numbers = [1,2,3];
const numbers1 = [4,5,6];
const numbers2 = [7,8,9];
const numbers3 = [8,9,10];
for (let number of numbers)
    console.log(number);

numbers1.forEach(function(number){
    console.log(number);
});

numbers2.forEach(number => console.log(number));

numbers3.forEach((number, index) => console.log(index,number));

for (let number in numbers)
    console.log(number);