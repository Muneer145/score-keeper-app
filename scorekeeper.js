var player1=document.getElementById("p1"); 
var player2=document.getElementById("p2");
var p1Score=0;
var p2Score=0;
var p1display=document.getElementById("p1display");
var p2display=document.getElementById("p2display");
var reset=document.getElementById("reset");
var gameOver=false;
var winningScore=5;
player1.addEventListener("click",function(){
    if(!gameOver){
    p1Score++;   
    }
    if(p1Score===winningScore){
        gameOver=true;
        console.log("Game Over");
    } 
    p1display.textContent=p1Score;

});  
player2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;   
        }
        if(p2Score===winningScore){
            gameOver=true;
            console.log("Game Over");
        } 
    p2display.textContent=p2Score;
});