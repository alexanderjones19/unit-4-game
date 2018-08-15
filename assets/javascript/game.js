var wins = 0;
var losses = 0;
var randomNumber = 0;
// var button1 = Math.floor(Math.random() * 12) + 1;
// var button2 = Math.floor(Math.random() * 12) + 1;
// var button3 = Math.floor(Math.random() * 12) + 1;
// var button4 = Math.floor(Math.random() * 12) + 1;
var buttonValue = [];
var score = 0;

var assignButtonValue = function() {
    for (i = 0; i < 4; i++) {
        buttonValue.push(Math.floor(Math.random() * 12) + 1);
    }
}

var gameStart = function() {

    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#random-number').text(randomNumber);
    $('#crystal-one').val(buttonValue[0]);
    $('#crystal-two').val(buttonValue[1]);
    $('#crystal-three').val(buttonValue[2]);
    $('#crystal-four').val(buttonValue[3]);
}

var generateNumber = function() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
    assignButtonValue();
}

var checkForWin = function() {
    if (randomNumber == score) {
        $('#wins').text(wins++);
    }
    if (randomNumber < score) {
        $('#losses').text(losses++);
    }
}

// use for loop for assigning numbers to buttonValue array
// .on(click) for buttons
// array 1-12 random numbers





$(document).ready(function() {
    generateNumber();
    gameStart();

    $('.crystal').click(function() {
        var crystalValue = parseInt($(this).val());
        score = score + crystalValue;
        $('#total-score').text(score);
        checkForWin();
        console.log(score);
    });
    // $('#crystal-one').on(click)(function() {
    //     var crystalOneValue = parseInt($('#crystal-one').val());
    //     score = score + crystalOneValue;
    //     console.log(score);
    // })
    // $('#crystal-two').on(click)(function() {
    //     var crystalTwoValue = parseInt($('#crystal-two').val());
    //     score = score + crystalTwoValue;
    //     console.log(score);
    // })
    // $('#crystal-three').on(click)(function() {
    //     var crystalThreeValue = parseInt($('#crystal-three').val());
    //     score = score + crystalThreeValue;
    //     console.log(score);
    // })
    // $('#crystal-four').on(click)(function() {
    //     var crystalFourValue = parseInt($('#crystal-four').val());
    //     score = score + crystalFourValue;
    //     console.log(score);
    // })
    

    
        


});
