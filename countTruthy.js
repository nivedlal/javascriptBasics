function countTruthy(array){
    let i=0;
    for (value of array)
        if(value)
            i++;
            return i;
}
const array=[0, null, undefined, '', 2, 3];
console.log(countTruthy(array));