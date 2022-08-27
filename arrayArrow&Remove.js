const courses = [{id:1, name:'a'},
                 {id:1, name:'b'}];

const course = courses.find(course => course.name==='a');

console.log(course);


const numbers = [1,2,3,4];
const numbers1 = [5,6,7,8];

const last = numbers.pop();
const first = numbers.shift();
console.log(numbers);

numbers1.splice(2,1);
console.log(numbers1);