const numbers = [1,2,3,1,4];

console.log(numbers.indexOf('a'));
console.log(numbers.indexOf(2));
console.log(numbers.indexOf('1'));
console.log(numbers.lastIndexOf(1));
console.log(numbers.indexOf('a')!==-1);
console.log(numbers.includes(1));
console.log(numbers.indexOf(1,2));


const courses = [{id:1, name:'a'},
                 {id:1, name:'b'}];
const course = courses.find(function(course){
               return course.name==='a';
});
console.log(course);

const courses1 = [{id:1, name:'a'},
                 {id:1, name:'b'}];
const course1 = courses1.findIndex(function(course1){
               return course1.name==='b';
});
console.log(course1);

const courses2 = [{id:1, name:'a'},
                 {id:1, name:'b'}];
const course2 = courses2.find(function(course2){
               return course2.name==='xys';
});
console.log(course2);