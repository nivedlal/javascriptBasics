const numbers = [3,2,4,1];
numbers.sort();
numbers.reverse();
console.log(numbers);


const courses=[
    {id:1, name:'Node.js'},
    {id:2, name:'Javascript'}
]
courses.sort(function(a,b){
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(courses);

const names=[
    {id:1, name:'Node.js'},
    {id:2, name:'javascript'}
];
names.sort(function(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log(names);