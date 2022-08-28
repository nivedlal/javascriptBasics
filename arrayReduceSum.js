const numbers = [1,2,3,-1,4];
const numbers1 = [12,32,43,-11,34];
const numbers2 = [1,-1,2,3];

let sum = 0;
for (let n of numbers){
    sum+=n;
}
console.log(sum);

const sum1 = numbers1.reduce((accumulator, currentValue) => {
    return accumulator+currentValue;
});
console.log(sum1);

const sum2 = numbers2.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sum2);
