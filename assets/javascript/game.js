$(document).ready(function() {

//define global variables
var winningNumber = 0;
var userNumberSum = 0;
var blueRupeeStart = 0;
var greenRupeeStart = 0;
var whiteRupeeStart = 0;
var redRupeeStart = 0;
var wins = 0;
var losses = 0;
// var newGame = false;

//startGame function
    function startGame(){
        // if (newGame){
    //update userNumberSum to zero
        userNumberSum = 0;

    //assign rupees and winning number random values, and added +10 on winning number ensures that it's always larger than the possible rupees
        winningNumber = Math.round(Math.random() * 50 + 10);
        blueRupeeStart = Math.round(Math.random() * 10);
        greenRupeeStart = Math.round(Math.random() * 10);
        whiteRupeeStart = Math.round(Math.random() * 10);
        redRupeeStart = Math.round(Math.random() * 10);

        console.log(winningNumber,blueRupeeStart,redRupeeStart,whiteRupeeStart,greenRupeeStart);

    //log winning number and rupees collected to HTML
        $(".winningNumber").text(winningNumber);
        $(".userNumberSum").text(userNumberSum);
        roundComplete();
}




//buttons that send rupee value to HTML
    $(".blueRupee").on("click", blueRupee);
    function blueRupee () {
        userNumberSum = userNumberSum + blueRupeeStart;
        console.log(userNumberSum);
    }

    $(".redRupee").on("click", redRupee);
    function redRupee () {
        userNumberSum = userNumberSum + redRupeeStart;
        console.log(userNumberSum);
    }

    $(".whiteRupee").on("click", whiteRupee);
    function whiteRupee () {
        userNumberSum = userNumberSum + whiteRupeeStart;
        console.log(userNumberSum);
    }

    $(".greenRupee").on("click", greenRupee);
    function greenRupee () {
        userNumberSum = userNumberSum + greenRupeeStart;
        console.log(userNumberSum);
    }

//function that compares userNumberSum to winningNumber
    function roundComplete () {
        console.log("Wins: " + wins + " | " + losses);
            if (userNumberSum === winningNumber) {
                wins++;
                $(".wins").text(wins);
                startGame();
            }  
            else if (userNumberSum > winningNumber) {
                losses++;
                $(".losses").text(losses);
                startGame();
            }
    }

startGame();

});



