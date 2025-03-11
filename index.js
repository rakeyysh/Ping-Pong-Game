let table = document.getElementById('ping-pong-table');
let paddle = document.getElementById('paddle');
document.addEventListener('DOMContentLoaded',()=>{

     
    let ball = document.getElementById('ball');
    
    
   //  here the ballX and ballY will be helping us to set a starting point of ball w.r.t table
   let ballX = 50;  //  distance of the left of the ball w.r.t ping pong table
   let  ballY = 50;  //  distance of the top of the ball w.r.t ping pong table

   ball.style.left = `${ballX}px`;
   ball.style.top = `${ballY}px`;

   let dx = 2; // displacement factor in x - direction, 2 -> you will displace by 2px in +x direction , -2->you will displace by 2px in -x direction
   let dy = 2; // displacement factor in y - direction, 2 ->you will displace by 2px in +y direction, -2 -> you will displace by 2px in -y direction.
 
/**
 * ballY --> bottom of the ball
 * ballY-ball.offsetHeight --> top of the ball
 * 
 * paddle.offsetTop + paddle.offsetHeight -->bottom of paddle
 * 
 */

 setInterval( function exec(){


    ballX += dx;
    ballY += dy;

    if(ballX < paddle.offsetLeft + paddle.offsetWidth && 
        ballY > paddle.offsetTop &&
        ballY  < paddle.offsetTop + paddle.offsetHeight
    ){
         dx *= -1;
    }
    

    ball.style.left = `${ballX}px`;
    ball.style.top = `${ballY}px`;

    // if(ballX > 700 - 20 || ballX <= 0)  dx *= -1;
    // if(ballY > 400 - 20 || ballY <= 0)  dy *= -1;
     

    if(ballX > table.offsetWidth - ball.offsetWidth || ballX <=0) dx *= -1;
    if(ballY > table.offsetHeight - ball.offsetHeight || ballY <=0) dy *= -1;
    
},10)


let paddleY = 0
let dpy = 30;
document.addEventListener("keydown", (event) =>{ 
      
    event.preventDefault();  //prevent the execution of the default event behaviour.
    if(event.keyCode == 38  && paddleY >0){
        
        paddleY += (-1) * dpy;
        
        
    }
    else{

        if(event.keyCode == 40 && paddleY < table.offsetHeight - paddle.offsetHeight){
        paddleY += dpy;
      

    }}
    paddle.style.top = `${paddleY}px`;
})
});

document.addEventListener('mousemove',(event) =>{

   // let table = document.getElementById('ping-pong-table');

    let mouseDistanceFromTop = event.clientY;
   // console.log(mouseDistanceFromTop);
    let distanceOfTableFromTop = table.offsetTop;
   // console.log(distanceOfTableFromTop);



    let mousePointControl = mouseDistanceFromTop - distanceOfTableFromTop - paddle.offsetHeight/2 ;
   // console.log(mousePointControl);
   paddleY = mousePointControl;
   if(paddleY <= 0 || paddleY > table.offsetHeight - paddle.offsetHeight) return;
  
    paddle.style.top = `${paddleY}px`;
})