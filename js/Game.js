window.onload = function() {
  console.log("Hello");

  var rps = new RockPaperScissors();
  // var paper = document.getElementById("paper");
  // var rock = document.getElementById("rock");
  // var scissors = document.getElementById("scissors");
  
  var choices = document.getElementsByClassName("choices");
  console.log(choices);

  for (var i=0; i<choices.length;i++) {
      choices[i].onclick = function(event) {
      // document.getElementsByTagName("body")[0].className = "highlight";
      document.getElementsByTagName("body")[0].className = "";
      console.log(event.target.id);
      // window.location = "http://google.com"
    };
  }
  

  // paper.onclick = function() {
  //   console.log("Paper. click me again!!");
  //   var result = rps.getWinner("paper", RockPaperScissors.randomChoice() );
  //   console.log("And the winner is:", result);
  // };

  // rock.onclick = function() {
  //   console.log("Rock.click me again!!");
  //   var result = rps.getWinner("rock", RockPaperScissors.randomChoice() );
  //   console.log("And the winner is:", result);
  // };

  // scissors.onclick = function() {
  //   console.log("Scissors.click me again!!");
  //   var result = rps.getWinner("scissors", RockPaperScissors.randomChoice() );
  //   console.log("And the winner is:", result);
  // };

};