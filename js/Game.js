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
  }
  else if (outcome === computerChoice){
    $('body').css('background-image','url("../public/images/sadFace.svg")');
  }
  else {
    $('body').css('background-image','url("../public/images/neutralFace.svg")');
  }
};