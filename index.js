var Wins = 0;
var Losses = 0;
var Ties = 0;

var Choices = ["r", "p", "s"];
var startGame = function(){
    var playerChoice = window.prompt("Please Type r, p or s:");
    while (playerChoice == null){
    playerChoice = prompt("Please Type r, p or s:");
    }
    playerChoice = playerChoice.toLowerCase();
    var selection = Math.floor(Math.random() * Choices.length);
    var computerSelection = Choices[selection];
    window.alert("Computer Chose " + computerSelection);

    if (playerChoice == computerSelection){
        window.alert("It's a Tie!");
        Ties++;
    }
    else if ((playerChoice == "r" && computerSelection == "s") ||
            (playerChoice == "s" && computerSelection == "p") ||
            (playerChoice == "p" && computerSelection == "s"))
            {
            window.alert("You Won!");
            Wins++;
            }
        else {
            window.alert("You Lost!");
            Losses++;
        }
        window.alert("Stats:\nWins: " + Wins + "\nTies: " + Ties + "\nLosses: " + Losses);
        var rePlay = window.confirm("Play Again?! ")
        if (rePlay){
            startGame();
        }
        if (!playerChoice){
            return;
        }
}
startGame();