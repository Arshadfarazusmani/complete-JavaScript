let RandomNumber=Math.floor(Math.random()*100)+1; // to generate random no b/w 1 to 100 -> Math.random() generate no. b/w 0 and 1

// accessing the HTML in Js -> DOM : Document Object Model 
const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");
const guessField=document.querySelector(".guessField");
const guessSubmit=document.querySelector(".guessSubmit");

let guessCount=1; // indicate chance 1 
let resetBtn; // refrence to restart the game 

function Checkguess() {  // function defination to check the result . 

const userGuess=Number(guessField.value) // taking the the user input from gurssField 

if(guessCount===1){
    guesses.innerHTML="Previous Guesses: "
}
guesses.innerHTML=`${guesses.innerHTML} ${userGuess}`

// winning logic 
if (userGuess === RandomNumber) {  
    lastResult.innerHTML = "Congratulations! You got it right!";
    lastResult.style.color = "green";
    lowOrHi.innerHTML = "";
    setGameOver();
}
// all chances completed 
else if(guessCount===10){
    lastResult.innerHTML="Game Over !!"
    lastResult.style.color="red";
    lowOrHi.innerHTML="";
    setGameOver();
}
// Logic for the wrong Guess . 
else{
    lastResult.innerHTML="WRONG GUESS"
    lastResult.style.color="red";
    if (userGuess < RandomNumber) {
        lowOrHi.textContent = "Last guess was too low!";
      } else if (userGuess > RandomNumber) {
        lowOrHi.textContent = "Last guess was too high!";
      }
}
guessCount++;
guessField.value=""
guessField.focus();
}
guessSubmit.addEventListener("click", Checkguess);  // adding event listner -> on submitbtn on clicking  Checkguess() function will be called 

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetBtn = document.createElement("button");
   resetBtn.innerHTML = "Start new game";
    document.body.append(resetBtn);
  resetBtn.addEventListener("click", resetGame);
  }
  function resetGame() {
    guessCount = 1;
  
    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
      resetPara.textContent = "";
    }
  
   resetBtn.parentNode.removeChild(resetBtn);
  
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
  
    lastResult.style.backgroundColor = "#1a1a1a";
  
   RandomNumber = Math.floor(Math.random() * 100) + 1;
  }
  

