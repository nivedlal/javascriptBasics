function calculateGrade(marks){
    const average = calculateAverage(marks);
    if (average <=59) return 'F';
    if (average <=69) return 'D';
    if (average <=79) return 'C';
    if (average <=89) return 'B';
    return 'A';
}
function calculateAverage(array){
    let sum = 0;
        for(let value of array)
            sum += value;
    return sum / array.length;
}
const marks = [80,80, 50];   
console.log(calculateGrade(marks));