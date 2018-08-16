var wins = 0;
var losses = 0;
var randomNumber = 0;
var buttonValue = [];
var score = 0;

var assignButtonValue = function() {
    for (i = 0; i < 4; i++) {
        var arrayNumber = Math.floor(Math.random() * 12) + 1;
        // if statement checks for duplicate button values, if duplicate is found then reiterate over index
        if (buttonValue.includes(arrayNumber) === false) {
            buttonValue.push(arrayNumber);
        }
        else {
            i--;
        }
    }
}

var generateNumber = function() {
    randomNumber = Math.floor(Math.random() * 102) + 19;
}

var gameStart = function() {
    buttonValue = [];
    score = 0;
    generateNumber();
    assignButtonValue();
    $('#total-score').text(score);
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#random-number').text(randomNumber);
    $('#crystal-one').val(buttonValue[0]);
    $('#crystal-two').val(buttonValue[1]);
    $('#crystal-three').val(buttonValue[2]);
    $('#crystal-four').val(buttonValue[3]); 
}

var checkForWin = function() {
    if (randomNumber === score) {
        wins++;
        gameStart();
        console.log(buttonValue);
    }
    if (randomNumber < score) {
        losses++;
        gameStart();
        console.log(buttonValue);
    }
}



$(document).ready(function() {
    gameStart();
    console.log(buttonValue);

    $('.crystal').click(function() {
        var crystalValue = parseInt($(this).val());
        score = score + crystalValue;
        $('#total-score').text(score);
        checkForWin();
        console.log(score);
    });
});

