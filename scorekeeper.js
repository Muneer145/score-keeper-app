var player1=document.getElementById("p1"); 
var player2=document.getElementById("p2");
var p1Score=0;
var p2Score=0;
var p1Display=document.getElementById("p1display");
var p2Display=document.getElementById("p2display");
var reset=document.getElementById("reset");
var numInput=document.querySelector("input");
var winningScoreDisplay=document.querySelector("p span");
var gameOver=false;
var winningScore=5;
player1.addEventListener("click",function(){
    if(!gameOver){
    p1Score++;   
    }
    if(p1Score===winningScore){
        p1Display.classList.add("winner");
        gameOver=true;
        console.log("Game Over");
    }  
    p1Display.textContent=p1Score;
});  
player2.addEventListener("click",function(){
    if(!gameOver){
        p2Score++;   
        }
        if(p2Score===winningScore){
            p2Display.classList.add("winner");
            gameOver=true;
            console.log("Game Over");
        } 
    p2Display.textContent=p2Score;
});
reset.addEventListener("click", function(){
    resetGame();  
});
numInput.addEventListener("change", function(){
      winningScoreDisplay.textContent=this.value;
      winningScore=Number(this.value);
      resetGame();
});

//functions
function resetGame(){
    p1Score=0;
    p2Score=0;
    p1Display.textContent=0;
    p2Display.textContent=0;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
    gameOver=false;
};