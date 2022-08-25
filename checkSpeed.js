function checkSpeed(input){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (input<speedLimit) return 'Ok';
    else{
        const points = Math.floor((input-speedLimit)/kmPerPoint);
        if (points>=12) return 'License suspended';
        else console.log('Points:', points);
    }
}
checkSpeed(80)