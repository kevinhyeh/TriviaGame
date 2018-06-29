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
        invisTimer = setInterval(interTimer, 1000);
        unanswered++;
    }
}

function interTimer() {
    nextTimer++;
    if (nextTimer == 3) {
        sTimer = 30
        answersOptions(1);
        $('.timer').html(sTimer);
        clearTimer = setInterval(startTimer, 1000);
        clearInterval(invisTimer);
        $('#gif').empty();
        $('button:eq(1)').attr('data-answer', true);
    }
    if (nextTimer == 6) {
        sTimer = 30
        answersOptions(2);
        $('.timer').html(sTimer);
        clearTimer = setInterval(startTimer, 1000);
        clearInterval(invisTimer);
        $('#gif').empty();
        $('button:eq(1)').attr('data-answer', true);
    }
    if (nextTimer == 9) {
        sTimer = 30
        answersOptions(3);
        $('.timer').html(sTimer);
        clearTimer = setInterval(startTimer, 1000);
        clearInterval(invisTimer);
        $('#gif').empty();
        $('button:eq(1)').attr('data-answer', true);
    }
    if (nextTimer == 12) {
        var restart = $('<button>').html("Restart");
        var result = $('<div>').html(correctAnswers + '<br>' + incorrectAnswers + '<br>' + unanswered);
        restart.addClass('restart');
        $('#gif').html(restart);
        $('.question').html(result);
        clearInterval(invisTimer);
        $('.box').empty();
    }
}

$('.start').on('click', function() {
    $('.timer').html(sTimer);
    clearTimer = setInterval(startTimer, 1000);
    $(this).hide();
    $('.question').html('What language is this?');
    answersOptions(0);
    $('button:eq(1)').attr('data-answer', true);
});

$(document).on('click', '.options', function() {
    // debugger;
    // || $(this).html() == 'Uno' || $(this).html() == 'Yut' || $(this).html() == 'Itchi'
    if ($(this).html() == 'One' || $(this).html() == 'Uno' || $(this).html() == 'Yut' || $(this).html() == 'Itchi') {
        if ($(this).html() == 'One') {
            $('#gif').html("one");
        }
        if ($(this).html() == 'Uno') {
            $('#gif').html("uno");
        }
        if ($(this).html() == 'Yut') {
            $('#gif').html("yut");
        }
        if ($(this).html() == 'Itchi') {
            $('#gif').html("itchi");
        }
        clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Correct");
        invisTimer = setInterval(interTimer, 1000);
        correctAnswers++;
    } else {
        var trueAns = $('[data-answer=true]').html();
        clearInterval(clearTimer);
        $('.question').html("");
        $('.box').html("Incorrect");
        invisTimer = setInterval(interTimer, 1000);
        $('#gif').html("correct answer is " + trueAns)
        incorrectAnswers++;
    }
});

$(document).on('click', '.restart', function() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    sTimer = 30;
    nextTimer = 0;
    $('.question').html('What language is this?');
    answersOptions(0);
    $('.timer').html(sTimer);
    clearTimer = setInterval(startTimer, 1000);
    $('#gif').empty();
    
});










