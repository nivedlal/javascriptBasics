const max = getMax([1,2,3,12,3]);
console.log(max);

function getMax(array){
    if (array.length===0) return undefined;
    let max = array[0];
    for(let i=1; i< array.length; i++){
        if (array[i]>max)
        max = array[i];
    }
    return max;
}

const max1 = getMax1([1,2,3,4,5,2,66,3])
console.log(max1);

function getMax1(array){
    if (array.length===0) return undefined;
    return array.reduce((a, b) =>  (a > b) ? a : b);
}