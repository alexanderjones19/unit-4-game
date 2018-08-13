var wins = 0;
var losses = 0;
var randomNumber = Math.floor(Math.random() * 120) + 19;
var button1 = Math.floor(Math.random() * 12) + 1;
var button2 = Math.floor(Math.random() * 12) + 1;
var button3 = Math.floor(Math.random() * 12) + 1;
var button4 = Math.floor(Math.random() * 12) + 1;
var score = 0;

var gameStart = function() {
    $('#wins').text(wins);
    $('#losses').text(losses);
    $('#random-number').text(randomNumber);
    $('#crystal-one').val(button1);
    $('#crystal-two').val(button2);
    $('#crystal-three').val(button3);
    $('#crystal-four').val(button4);
}






$(document).ready(function() {
    gameStart();
    $('#crystal-one').click(function() {
        var crystalOneValue = parseInt($('#crystal-one').val());
        score = score + crystalOneValue;
        console.log(score);
    })
    $('#crystal-two').click(function() {
        var crystalTwoValue = parseInt($('#crystal-two').val());
        score = score + crystalTwoValue;
        console.log(score);
    })
    $('#crystal-three').click(function() {
        var crystalThreeValue = parseInt($('#crystal-three').val());
        score = score + crystalThreeValue;
        console.log(score);
    })
    $('#crystal-four').click(function() {
        var crystalFourValue = parseInt($('#crystal-four').val());
        score = score + crystalFourValue;
        console.log(score);
    })
    if (randomNumber = score) {
        $('#wins').text(wins++);
    }

    
        


});
