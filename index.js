let playertext = document.querySelector("#playertext");
let computertext = document.querySelector("#computertext");
let resulttext = document.querySelector("#resulttext");
let checkbutton = document.querySelectorAll(".checkbutton");
let player;
let computer;
let result;

checkbutton.forEach(button => button.addEventListener("click",()=>{

  player = button.textContent;
  computerturn();
  playertext.textContent = `player : ${player}`;
  computertext.textContent = `computer: ${computer}`;
  resulttext.textContent = checkwinner();
}))

function computerturn(){

  const random = Math.floor(Math.random()*3)+1;

  switch(random){
    case 1:
      computer = "paper";
      break;
      case 2:
      computer = "rock";
      break;
      case 3:
      computer = "scissor";
      break;
  }
}
function checkwinner(){
  if(player == computer){
    return "DRAW!";
  }
  else if(computer == "paper"){
    return(player == "scissor")? "YOU WIN" : " YOU LOOSE";
  }
  else if(computer =="scissor"){
    return(player == "rock")? "YOU WIN" : " YOU LOOSE";
  }
  else if(computer =="rock"){
    return(player == "paper")? "YOU WIN" : " YOU LOOSE";
  }
  else{
    return "FAIL TO PLAY";
  }
}