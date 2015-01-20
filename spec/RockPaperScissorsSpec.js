describe("Rock Paper Scissors", function() {
  var rps;

  // cases for beating rock vs sc vs paper
  describe("knows that", function(){

    it("rock beats scissors", function(){
      rps = new RockPaperScissors();
      expect(rps.rockVersus("scissors")).toBe("rock");
    });

    it("rock loses to paper", function(){
      rps = new RockPaperScissors();
      expect(rps.rockVersus("paper")).toBe("paper");
    });

    it("paper beats rock", function(){
      rps = new RockPaperScissors();
      expect(rps.paperVersus("rock")).toBe("paper");
    });

    it("paper loses to scissors", function(){
      rps = new RockPaperScissors();
      expect(rps.paperVersus("scissors")).toBe("scissors");
    });

   it("scissors beats paper", function(){
      rps = new RockPaperScissors();
      expect(rps.scissorsVersus("paper")).toBe("scissors");
    });

    it("scissors loses to rock", function(){
      rps = new RockPaperScissors();
      expect(rps.scissorsVersus("rock")).toBe("rock");
    });

  });

  describe("knows which is winner", function() {
    it ("between rock and paper", function() {
      rps = new RockPaperScissors();
      expect(rps.getWinner("rock", "paper")).toBe("paper");
    });

    it ("between scissors and paper", function() {
      rps = new RockPaperScissors();
      expect(rps.getWinner("scissors", "paper")).toBe("scissors");
    });
  });

  describe("knows when its a tie", function() {
    it ("when choices are the same", function() {
      rps = new RockPaperScissors();
      expect(rps.getWinner("rock", "rock")).toBe("tie");
      expect(rps.getWinner("paper", "paper")).toBe("tie");
      expect(rps.getWinner("scissors", "scissors")).toBe("tie");
    });
  });

  describe("can get a random choice", function(){
    it("from values rock paper and scissors", function(){
      var choiceArray = ["rock","paper","scissors"];
      expect(choiceArray).toContain(RockPaperScissors.randomChoice());
    });

    it("only in the range rock paper scissors", function(){
      // var choiceArray = ["rock","paper","scissors"];
      var choiceArray=["ping","pong"];
      expect(choiceArray).not.toContain(RockPaperScissors.randomChoice());
    });
  });

});