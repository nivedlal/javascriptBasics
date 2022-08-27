let numbers = [1 ,2 ,3 ,4];
let another = numbers;
numbers.length = 0;
console.log(another);
console.log(numbers);

let numbers1 = [1 ,2 ,3 ,4];
let another1= numbers1;
numbers1= [];
console.log(another1);
console.log(numbers1);

let numbers2 = [1 ,2 ,3 ,4];
let another2= numbers2;
numbers2.splice(0, numbers2.length);
console.log(another2);
console.log(numbers2);

let numbers3 = [1 ,2 ,3 ,4];
let another3= numbers3;
while(numbers3.length > 0)
    numbers3.pop();
console.log(another3);
console.log(numbers3);