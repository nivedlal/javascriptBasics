const message = "hello";
{
    const message = "hi";
}
console.log(message);
//Global variables are not ideal.

const color = "red";
function start(){
    const color = "blue";
    console.log(color);
}
start();

function three(){
    for(let i=0; i<4; i++)
        console.log(i); 
}
three();

function four(){
    for(var i=0; i<5; i++){
        console.log(i);
        if(true){
            var color = 'red';
            let name='unknown';
        }
    }
        console.log(i); 
        console.log(color); 
}
four();

