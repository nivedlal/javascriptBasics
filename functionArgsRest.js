function sum(){
    let total = 0;
    for(let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5));

function troop(a,b){
    console.log(arguments);
    return a+b;
}
console.log(troop(1,2,3,4,5,6));

function sum1(...args){
    console.log(args);
}
console.log(sum1(1,2,3,4,5,10));

function sum2(...args){
    return args.reduce((a,b)=>a+b);
}
console.log(sum2(1,2,3,4,5,10));

function sum3(discount,...prices){
    const total = prices.reduce((a,b)=>a+b);
    return total*(1-discount);
}
console.log(sum3(0.1,20));