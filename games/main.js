const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 400;

let spacePressed = false;
let angle = 0;
let hue = 0;
let frame = 0;
let score = 0;
let gamespeed = 2;

const gradient = ctx.createLinearGradient(0, 0, 0, 70);
gradient.addColorStop('0.4', '#fff');
gradient.addColorStop('0.5', '#000');
gradient.addColorStop('0.55', '#4040ff');
gradient.addColorStop('0.6', '#000');
gradient.addColorStop('0.9', '#fff');

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //ctx.fillRect(10,canvas.height -90,50,50);
    handleObstacles();
    handleParticles();
    flappy.update();
    flappy.draw();
    ctx.fillStyle = gradient;
    ctx.font = '90px Georgia';
    ctx.strokeText(score, 450, 70);
    ctx.fillText(score, 450, 70);
    handleCollisions();
    if(handleCollisions()) return;
    requestAnimationFrame(animate);
    angle+=0.2;
    hue++;
    frame++;
}
animate();

window.addEventListener('keydown', function(e){
    if(e.code === 'Space') spacePressed=true;
});
window.addEventListener('keyup', function(e){
    if(e.code === 'Space') spacePressed=false;
});

const bang = new Image();
bang.src = 'bang.png';
function handleCollisions(){
    for(let i=0;i<obstaclesArray.length;i++){
        if(flappy.x<obstaclesArray[i].x + obstaclesArray[i].width &&
            flappy.x + flappy.width > obstaclesArray[i].x &&
            ((flappy.y < 0 + obstaclesArray[i].top && flappy.y + flappy.height> 0) ||
            (flappy.y > canvas.height - obstaclesArray[i].bottom &&
            flappy.y + flappy.height < canvas.height))){
                ctx.drawImage(bang, flappy.x, flappy.y, 50, 50);
                ctx.font = "25px Georgia";
                ctx.fillStyle = 'black';
                ctx.fillText('Game Over, Your Score is '+ score, 160, canvas.height/2 -10);
                return true;

        }
    }
}