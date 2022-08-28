//function Declaration
function walk(){
    console.log('walk');
}
//anonymous function Expression
let run = function() {
    console.log('run');
};
//named function Expression
let swim = function water() {
    console.log('strokes');
};
let move = run;

walk();
run();
move();
swim();