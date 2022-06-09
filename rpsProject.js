/* New addition below */
let humanPoints = 0;
let hs = document.getElementById("humanScoreboard");
hs.innerHTML = `${humanPoints}`;
let computerPoints = 0;
let cs = document.getElementById("computerScoreboard");
cs.innerHTML = `${computerPoints}`;
/* New addition above */

// Camel case is a common way of representing variable
let left = document.getElementById("leftSide");
let right = document.getElementById("rightSide");

function startGame(){
 let humanChoice = window.prompt("'rock', 'paper', or 'scissors'");
  humanChoice = humanChoice.toLowerCase();
  while(humanChoice!=="rock" && humanChoice!=="paper" && humanChoice!=="scissors"){
         humanChoice = window.prompt("MUST ENTER 'rock', 'paper', or 'scissors'");
         humanChoice = humanChoice.toLowerCase();
  }

  let randomize = Math.floor(Math.random()*3+1);
  let compChoice = "";
  switch(randomize){
    case 1:
      compChoice = "rock";
      break;
    case 2:
      compChoice = "paper";
      break;
    case 3:
      compChoice = "scissors";
      break;
  }

  battle(humanChoice, compChoice);
}

function battle(humanChoice, compChoice){
  // if player chooses rock
  if(humanChoice==="rock"){
    if(compChoice==="paper"){
      console.log("COMPUTER WINS");
      computerPoints++;
    }
    if(compChoice==="scissors"){
      console.log("HUMAN WINS");
      humanPoints++;
    }
    if(compChoice==="rock"){
      console.log("DRAW");
    }
  }
  // if player chooses scissors
  if(humanChoice==="scissors"){
    if(compChoice==="rock"){
      console.log("COMPUTER WINS");
      computerPoints++;
    }
    if(compChoice==="paper"){
      console.log("HUMAN WINS");
      humanPoints++;
    }
    if(compChoice==="scissors"){
      console.log("DRAW");
    }
  }

  // if player chooses paper
  if(humanChoice==="paper"){
    if(compChoice==="scissors"){
      console.log("COMPUTER WINS");
      computerPoints++;
    }
    if(compChoice==="rock"){
      console.log("HUMAN WINS");
      humanPoints++;
    }
    if(compChoice==="paper"){
      console.log("DRAW");
    }
  }

  displayCompetitor(humanChoice, left);
  displayCompetitor(compChoice, right);
}

function displayCompetitor(competitor, side){
  hs.innerHTML = `${humanPoints}`;
  cs.innerHTML = `${computerPoints}`;

  switch(competitor){
    case "rock":
      side.src = "https://images.unsplash.com/photo-1589694502732-74708bde4e3e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTE2OTk2MTk&ixlib=rb-1.2.1&q=85";
      break;
    case "paper":
      side.src = "https://images.unsplash.com/photo-1597338770339-9860acd8406e?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTE2OTQzMTY&ixlib=rb-1.2.1&q=85";
      break;
    case "scissors":
      side.src = "https://images.unsplash.com/photo-1634225109865-7a7b6e4ef85c?crop=entropy&cs=srgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTE2OTQzNjI&ixlib=rb-1.2.1&q=85";
      break
  }
}
