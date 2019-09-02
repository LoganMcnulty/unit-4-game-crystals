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
var newGame = false;

//startGame function
    function startGame(){

    // newGame = true;

    //update userNumberSum to zero
        userNumberSum = 0;

    //assign rupees and winning number random values, and added +10 on winning number ensures that it's always larger than the possible rupees
    //+ 1 on individual rupees to ensure it's never 0. 
        winningNumber = Math.round(Math.random() * 50 + 10);
        blueRupeeStart = Math.round(Math.random() * 10 + 1);
        greenRupeeStart = Math.round(Math.random() * 10 + 1);
        whiteRupeeStart = Math.round(Math.random() * 10 + 1);
        redRupeeStart = Math.round(Math.random() * 10 + 1);

        console.log(winningNumber,blueRupeeStart,redRupeeStart,whiteRupeeStart,greenRupeeStart);

    //push winning number and rupees collected to HTML
        $(".winningNumber").text(winningNumber);
        $(".userNumberSum").text(userNumberSum);


    //buttons that send rupee value to HTML
        $(".blueRupee").on("click", blueRupee);
        function blueRupee () {
            userNumberSum = userNumberSum + blueRupeeStart;
            console.log(userNumberSum);
            console.log(winningNumber);
        }

        $(".redRupee").on("click", redRupee);
        function redRupee () {
            userNumberSum = userNumberSum + redRupeeStart;
            console.log(userNumberSum);
            console.log(winningNumber);
        }

        $(".whiteRupee").on("click", whiteRupee);
        function whiteRupee () {
            userNumberSum = userNumberSum + whiteRupeeStart;
            console.log(userNumberSum);
            console.log(winningNumber);
        }

        $(".greenRupee").on("click", greenRupee);
        function greenRupee () {
            userNumberSum = userNumberSum + greenRupeeStart;
            console.log(userNumberSum);
            console.log(winningNumber);
        }

}

//function that compares userNumberSum to winningNumber
    function checkNumbers () {

        console.log("Wins: " + wins + " | " + losses);
        console.log('USER SUM: ' + userNumberSum);
        console.log('WINNING NUMBER: ' + winningNumber);

            if (userNumberSum === winningNumber) {
                wins++;
                alert("you win!");
                $(".wins").text(wins);
                startGame();
            }  
            else if (userNumberSum > winningNumber) {
                losses++;
                alert("you lose!");
                $(".losses").text(losses);
                startGame();
            }
    }

startGame();
// checkNumbers();


});



