var answers = [
    ['Mercury', 'Jupiter', 'Earth', 'Mars'],
    ['225 Days', '324 Days', '365 Days', '408 Days'],
    ['Edwin Aldrin', 'Michael Collins', 'Lance Armstrong', 'Neil Armstrong'],
    ['5,349 Kelvin', '5,778 Kelvin', '4,197 Kelvin', '6,304 Kelvin'],
    ['Venus', 'Saturn', 'Sun', 'Mars'],
    ['2005', '2006', '2007', '2008'],
    ['2', '34', '53', '78'],
    ['About 100 Days', 'About 200 Days', 'About 300 Days', 'About 400 Days'],
    ['Neptune', 'Planet Nine', 'Xena', '9th Planet'],
    ['1,479 Minutes', '1,351 Minutes', '1,589 Minutes', '1,154 Minutes']
];
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var sTimer = 15;
var nextTimer = 0;

function answersOptions(e) {
    for (var i in answers[0]) {
        var box = $('<div>')
        var button = $('<button>').html(answers[e][i]);
        button.addClass('options');
        box.html(button);
        $('#box').append(box);
    }
}

function startTimer() {
	var trueAns = $('[data-answer=true]').html();
    sTimer--;
    $('#timer').html('Time Remaining: ' + sTimer + ' seconds');
    if (sTimer == 0) {
        $('#question').html("");
        $('#box').html("Ran out of time");
        clearInterval(clearTimer);
        invisTimer = setInterval(interTimer, 1000);
        unanswered++;
        $('#gif').html("The correct answer is " + trueAns);
    }
}

function nextQuestion(next) {
    sTimer = 15;
    $('#box').empty();
    answersOptions(next);
    $('#timer').html('Time Remaining: ' + sTimer + ' seconds');
    clearTimer = setInterval(startTimer, 1000);
    clearInterval(invisTimer);
    $('#gif').empty();
}

function interTimer() {
    nextTimer++;
    if (nextTimer == 3) {
        $('#question').html('How many days does the Earth orbit the Sun?');
        nextQuestion(1);
        $('button:eq(3)').attr('data-answer', true);
    }
    if (nextTimer == 6) {
        $('#question').html('Who was the first American to walk on the Moon?');
        nextQuestion(2);
        $('button:eq(4)').attr('data-answer', true);
    }
    if (nextTimer == 9) {
        $('#question').html('How hot is the Sun?');
        nextQuestion(3);
        $('button:eq(2)').attr('data-answer', true);
    }
    if (nextTimer == 12) {
        $('#question').html('Which is the hottest planet?');
        nextQuestion(4);
        $('button:eq(1)').attr('data-answer', true);
    }
    if (nextTimer == 15) {
        $('#question').html('When did Pluto become a dwarf planet?');
        nextQuestion(5);
        $('button:eq(2)').attr('data-answer', true);
    }
    if (nextTimer == 18) {
        $('#question').html('How many moons does Jupiter have?');
        nextQuestion(6);
        $('button:eq(3)').attr('data-answer', true);
    }
    if (nextTimer == 21) {
        $('#question').html('How long does it take to get to Mars?');
        nextQuestion(7);
        $('button:eq(3)').attr('data-answer', true);
    }
    if (nextTimer == 24) {
        $('#question').html('As of 2016, which one is the 9th planet?');
        nextQuestion(8);
        $('button:eq(2)').attr('data-answer', true);
    }
    if (nextTimer == 27) {
        $('#question').html('How long is a Martian day?');
        nextQuestion(9);
        $('button:eq(1)').attr('data-answer', true);
    }
    if (nextTimer == 30) {
        var restart = $('<button>').html("Restart");
        var result = $('<div>').html('Correct Answers: ' + correctAnswers + '<br>' + 'Incorrect Answers: ' + incorrectAnswers + '<br>' + 'Unanswered: ' + unanswered);
        restart.addClass('restart');
        $('#gif').html(restart);
        $('#question').html(result);
        clearInterval(invisTimer);
        $('#box').empty();
    }
}

$('#start').on('click', function() {
    $('#timer').html('Time Remaining: ' + sTimer + ' seconds');
    clearTimer = setInterval(startTimer, 1000);
    $(this).hide();
    $('#question').html('Which planet is the closest to the sun?');
    answersOptions(0);
    $('button:eq(1)').attr('data-answer', true);
});

$(document).on('click', '.options', function() {
    if ($(this).html() == 'Mercury' || $(this).html() == '365 Days' || $(this).html() == 'Neil Armstrong' || $(this).html() == '5,778 Kelvin' || $(this).html() == 'Venus' || $(this).html() == '2006' || $(this).html() == '53' || $(this).html() == 'About 300 Days' || $(this).html() == 'Planet Nine' || $(this).html() == '1,479 Minutes') {
        if ($(this).html() == 'Mercury') {
            $('#gif').html("Gif of Mercury");
        }
        if ($(this).html() == '365 Days') {
            $('#gif').html("Gif of Calender");
        }
        if ($(this).html() == 'Neil Armstrong') {
            $('#gif').html("Gif of Neil");
        }
        if ($(this).html() == '5,778 Kelvin') {
            $('#gif').html("Gif of the Sun");
        }
        if ($(this).html() == 'Venus') {
            $('#gif').html("Gif of Venus");
        }
        if ($(this).html() == '2006') {
            $('#gif').html("Gif of Pluto");
        }
        if ($(this).html() == '53') {
            $('#gif').html("Gif of Jupiter");
        }
        if ($(this).html() == 'About 300 Days') {
            $('#gif').html("Gif of space travel");
        }
        if ($(this).html() == 'Planet Nine') {
            $('#gif').html("Gif of Planet Nine");
        }
        if ($(this).html() == '1479 Minutes') {
            $('#gif').html("Gift of a martian");
        }
        clearInterval(clearTimer);
        $('#question').html("Correct");
        invisTimer = setInterval(interTimer, 1000);
        correctAnswers++;
    } else {
        trueAns = $('[data-answer=true]').html();
        clearInterval(clearTimer);
        $('#question').html("Incorrect");
        invisTimer = setInterval(interTimer, 1000);
        $('#gif').html("The correct answer is " + trueAns);
        incorrectAnswers++;
    }
});

$(document).on('click', '.restart', function() {
    correctAnswers = 0;
    incorrectAnswers = 0;
    unanswered = 0;
    sTimer = 30;
    nextTimer = 0;
    $('#question').html('What language is this?');
    answersOptions(0);
    $('#timer').html(sTimer);
    clearTimer = setInterval(startTimer, 1000);
    $('#gif').empty();	
});