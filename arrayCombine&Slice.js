const first = [1,2,3];
const second = [4,5,6];
const third = [{id:1}];

const combined = first.concat(second);
const slice = combined.slice(2,4);
const slice1 = combined.slice(2);
const slice2 = combined.slice();
const combined1 = first.concat(third);
const slice3 = combined1.slice(2);

const combined2 = [...first,'a', ...second];
// this is spread operator
const copy = [...combined2, 'b'];

console.log(combined);
console.log(slice);
console.log(slice1);
console.log(slice2);
console.log(combined1);
console.log(slice3);
console.log(combined2);
console.log(copy);