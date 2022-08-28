const numbers = [1,2,3,4,1];
const count = countOccurrences(numbers, 1);
console.log(count);
function countOccurrences(array, searchElement){
    let count = 0;
    for(let element of array)
        if(element===searchElement)
            count++;
    return count;
}

const numbers1 = [1,2,3,4,1,2,3];
const count1 = countOccurrences1(numbers1, 2);
console.log(count1);
function countOccurrences1(array, searchElement){
 return array.reduce((accumulator,current)=>{
        const occurrence = (current === searchElement)? 1:0;
        console.log(accumulator, current, searchElement);
        return accumulator+occurrence;
    },0);
}