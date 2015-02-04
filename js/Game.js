var rps = new RockPaperScissors();

$(document).ready(function(){

  var userChoice;

  $('#rock').on('click', function(){
    result('rock')
  });

  $('#paper').on('click', function(){
    result('paper')
  });

  $('#scissors').on('click', function(){
    result('scissors')
  });
});

var result = function(userChoice) {

  var computerChoice = RockPaperScissors.randomChoice();

  var outcome = rps.getWinner(userChoice, computerChoice);

  if (outcome === userChoice){
    $('body').css('background-image','url("../public/images/happyFace.svg")');
    $('#computer-choice-text').html("The computer chose: " + computerChoice);
    $('#game-result-text').html("You WIN!!");
  }
  else if (outcome === computerChoice){
    $('body').css('background-image','url("../public/images/sadFace.svg")');
    $('#computer-choice-text').html("The computer chose: " + computerChoice);
    $('#game-result-text').html("You LOSE!!");
  }
  else {
    $('body').css('background-image','url("../public/images/neutralFace.svg")');
        $('#computer-choice-text').html("The computer chose: " + computerChoice);
        $('#game-result-text').html("It's a tie!");
  }
};