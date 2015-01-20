window.onload = function() {

  var rps = new RockPaperScissors();
  
  var choices = document.getElementsByClassName("choices");
  console.log(choices);

  for (var i=0; i<choices.length;i++) {
      choices[i].onclick = function(event) {
      document.getElementsByTagName("body")[0].className = "highlight";
    };
  }
};