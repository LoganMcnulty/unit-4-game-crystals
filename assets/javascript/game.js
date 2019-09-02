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

//startGame function
    function startGame(){

    //assign rupees and winning number random values
    // +10 on winning number to ensure it's always larger than largest rupee
    // +1 on rupees to ensure they are never 0
        winningNumber = Math.round(Math.random() * 50 + 10);
        blueRupeeStart = Math.round(Math.random() * 10 + 1);
        greenRupeeStart = Math.round(Math.random() * 10 + 1);
        whiteRupeeStart = Math.round(Math.random() * 10 + 1);
        redRupeeStart = Math.round(Math.random() * 10 + 1);
        console.log(winningNumber,blueRupeeStart,redRupeeStart,whiteRupeeStart,greenRupeeStart);

    //push winning number to HTML
        $(".winningNumber").text(winningNumber);

    //buttons that send rupee value to HTML
    //need to have code that says "every time a rupee is clicked, check to see if we now match the winning criteria"
    // maybe i could have a function defined below the rupees, and call that function each time a rupee is clicked
    // ok so this worked but now, each now game, it is counting the new rupee value twice. I.e. game 1 = value. Game 2 = Value + Value. Game 3 = Value + Value + value
        
        // each click, run the function matching that rupee
        $(".blueRupee").on("click", blueRupee);

            function blueRupee () {
                userNumberSum = userNumberSum + blueRupeeStart;
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
                console.log('user number sum: ' + userNumberSum);
            }

        $(".redRupee").on("click", redRupee);

            function redRupee () {
                userNumberSum = userNumberSum + redRupeeStart;
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
                console.log('user number sum: ' + userNumberSum);
            }

        $(".whiteRupee").on("click", whiteRupee);

            function whiteRupee () {
                userNumberSum = userNumberSum + whiteRupeeStart;
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
                console.log('user number sum: ' + userNumberSum);
            }

        $(".greenRupee").on("click", greenRupee);

            function greenRupee () {
                userNumberSum = userNumberSum + greenRupeeStart;
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
                console.log('user number sum: ' + userNumberSum);
            }

}


//function that compares userNumberSum to winningNumber
    function checkNumbers () {
        //if userNumberSum = winningNumber. 
        // 1) Add to wins, alert, update wins text, 
        // 2) reset UserNumberSum in HTML, reset userNumberSum variable back to 0
        // 3) run startGame function
            if (userNumberSum === winningNumber) {
                wins++;
                alert("you win!");
                $(".wins").text(wins);
                $(".userNumberSum").text('0');
                userNumberSum = 0;
                //this console.log to be removed, exists now for confirmation that userNumberSum has been reset
                    console.log('user number sum: ' + userNumberSum);
                startGame();
            }  

        //see above
            else if (userNumberSum > winningNumber) {
                losses++;
                alert("you lose!");
                $(".losses").text(losses);
                $(".userNumberSum").text('0');
                userNumberSum = 0;
                console.log('user number sum: ' + userNumberSum);
                startGame();
            }
    }

startGame();
// checkNumbers();


});



