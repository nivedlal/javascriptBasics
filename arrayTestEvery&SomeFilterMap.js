const numbers = [1,2,3,-4];

const allPositive = numbers.every(function(value){
    return value >=0});
console.log(allPositive);

const atLeastOnePositive = numbers.some(function(value){
    return value>=0});
console.log(atLeastOnePositive);

const filtered = numbers.filter(value => value >= 0);
const items = filtered.map(value => '<li>' + value + '</li>');
const html = '<ul>' + items.join('') + '</ul>';
const items1 = filtered.map(n => ({value: n}));
console.log(filtered);
console.log(items);
console.log(html);
console.log(items1);