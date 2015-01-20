var RockPaperScissors = function() {};

RockPaperScissors.prototype.rockVersus = function(choice) {
  if (choice=="scissors") {
    return "rock";
  }
  return "paper";
};

RockPaperScissors.prototype.paperVersus = function(choice){
    if (choice=="rock") {
    return "paper";
  }
  return "scissors";
};

RockPaperScissors.prototype.scissorsVersus = function(choice){
    if (choice=="paper") {
    return "scissors";
  }
  return "rock";
};

RockPaperScissors.prototype.getWinner = function(choice1, choice2) {
  if (choice1 === choice2){
    return "tie";
  }

  switch(choice1) {
    case "rock":
      return this.rockVersus(choice2);
      break;
    case "paper":
      return this.paperVersus(choice2);
      break;
    case "scissors":
      return this.scissorsVersus(choice2);
      break;
    default:
      break;
  };
}

RockPaperScissors.randomChoice = function(){
  var choice = Math.random();
  if (choice <= 0.3)
    return("rock");
  else if (choice > 0.3 && choice < 0.6) 
    return("scissors");
  else 
    return("paper");
};

