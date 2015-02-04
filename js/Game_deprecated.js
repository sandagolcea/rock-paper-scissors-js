// This is the javascript equivalent of the jQuery Game
window.onload = function() {

  var rps = new RockPaperScissors();
  
  var choices = document.getElementsByClassName("choices");
  console.log(choices);

  for (var i=0; i<choices.length;i++) {
      choices[i].onclick = function(event) {
      var computerChoice = RockPaperScissors.randomChoice() ;
      var userChoice = event.target.id; 

      var outcome = rps.getWinner(userChoice, computerChoice);

      if (outcome === userChoice){
        document.getElementById("happyFace").style.visibility='visible';
        document.getElementById("sadFace").style.visibility='hidden';
      }
      else if (outcome === computerChoice){
        document.getElementById("sadFace").style.visibility='visible';
        document.getElementById("happyFace").style.visibility='hidden';
      }
      else {
        // TODO: show userChoice and computerChoice
        document.getElementById("sadFace").style.visibility='hidden';
        document.getElementById("happyFace").style.visibility='hidden';
        // TODO: change this into a third image :D
        document.write("It's a tie!");
      }
    };
  }
};