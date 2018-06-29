var answers = [
    ['One', 'Two', 'Three', 'Four'],
    ['Uno', 'Dos', 'Tres', 'Cuatro'],
    ['Yut', 'Eee', 'Sam', 'Say'],
    ['Itchi', 'Nee', 'San', 'Shi']
];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var sTimer = 30;
var nextTimer = 0;

function answersOptions(e) {
    for (var i in answers) {
        var box = $('<div>')
        var button = $('<button>').html(answers[e][i]);
        button.addClass('options');
        box.html(button);
        $('.box').append(box);
    }
}



function startTimer() {
    sTimer--;
    $('.timer').html(sTimer);
    if (sTimer == 0) {
    	$('.question').html("");
        $('.box').html("Ran out of time");
        clearInterval(clearTimer);
        invisTimer = setInterval(interTimer, 0500);
    }
}

function interTimer() {
    nextTimer++;
    if (nextTimer == 5) {
    	sTimer = 30
        answersOptions(1);
        $('.timer').html(sTimer);
        clearTimer = setInterval(startTimer, 0200);
        clearInterval(invisTimer);
    }
}

$('.start').on('click', function() {
    $('.timer').html(sTimer);
    clearTimer = setInterval(startTimer, 0200);
    $(this).hide();
    $('.question').html('What language is this?');
    answersOptions(0);

});

$(document).on('click', '.options', function() {
    if ($(this).html() == 'One') {
    	clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Correct");
    } else {
    	clearInterval(clearTimer);
    	$('.question').html("");
        $('.box').html("Incorrect");
    }

    if ($(this).html() == 'Uno') {
    	clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Correct");
    } else {
    	clearInterval(clearTimer);
    	$('.question').html("");
        $('.box').html("Incorrect");
    }

    if ($(this).html() == 'One') {
    	clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Correct");
    } else {
    	clearInterval(clearTimer);
    	$('.question').html("");
        $('.box').html("Incorrect");
    }

    if ($(this).html() == 'One') {
    	clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Correct");
    } else {
    	clearInterval(clearTimer);
    	$('.question').html("");
        $('.box').html("Incorrect");
    }
});


















