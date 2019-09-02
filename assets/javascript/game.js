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
var rupeeSound = new Audio("assets/sounds/get_rupee.wav");
var themeMusic = new Audio("assets/sounds/Title_Theme.mp3");

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

}
    //buttons that send rupee value to HTML
    //need to have code that says "every time a rupee is clicked, check to see if we now match the winning criteria"
        
    // each click, run the function matching that rupee
        $(".blueRupee").on("click", blueRupee);

            function blueRupee () {
                //this is a really weird work around I did to get theme music to play upon first click 
                    if (wins === 0 && losses === 0){
                    themeMusic.play();
                    }

                rupeeSound.play();
                userNumberSum = userNumberSum + blueRupeeStart;
                console.log('user number sum: ' + userNumberSum);
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
            }

        $(".redRupee").on("click", redRupee);

            function redRupee () {
                if (wins === 0 && losses === 0){
                    themeMusic.play();
                    }
                rupeeSound.play();
                userNumberSum = userNumberSum + redRupeeStart;
                console.log('user number sum: ' + userNumberSum);
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
            }

        $(".whiteRupee").on("click", whiteRupee);

            function whiteRupee () {
                if (wins === 0 && losses === 0){
                    themeMusic.play();
                    }
                rupeeSound.play();
                userNumberSum = userNumberSum + whiteRupeeStart;
                console.log('user number sum: ' + userNumberSum);
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
            }

        $(".greenRupee").on("click", greenRupee);

            function greenRupee () {
                if (wins === 0 && losses === 0){
                    themeMusic.play();
                    }
                rupeeSound.play();
                userNumberSum = userNumberSum + greenRupeeStart;
                console.log('user number sum: ' + userNumberSum);
                $(".userNumberSum").text(userNumberSum);
                checkNumbers();
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

});



