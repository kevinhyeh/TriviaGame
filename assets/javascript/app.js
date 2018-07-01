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
var gifs = {
	closest: 'https://media.giphy.com/media/26BGLwK0ciNMY7BaU/200.gif', 
	orbit: 'https://media.giphy.com/media/ipMj7kerASRXO/200.gif',
	man: 'https://media.giphy.com/media/m3aDH8GEfqNeU/200.gif',
	sun: 'https://media.giphy.com/media/xT0Gqz4x4eLd5gDtaU/200.gif',
	venus: 'https://media.giphy.com/media/csUHYurqlupfq/200.gif',
	pluto: 'https://media.giphy.com/media/w0iDk4wqyMwpi/200.gif',
	moons: 'https://media.giphy.com/media/l3970BECiUweOrOnu/200.gif',
	travel: 'https://media.giphy.com/media/l3fQnG7CVU9OytX3y/200.gif',
	nineth: 'https://media.giphy.com/media/tdTB899Aa7gcM/200.gif',
	martian: 'https://media.giphy.com/media/TaZddT2KC3wFa/200.gif',
	lose: 'https://media.giphy.com/media/hPPx8yk3Bmqys/200.gif',
	time: 'https://media.giphy.com/media/3ornjXizVZDbngmjRK/200.gif'
}
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;
var sTimer = 15;
var nextTimer = 0;

function addGif(num) {
	var imgGif = $('<img>').attr('src', num);
	$('#box').html(imgGif)
}

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
        addGif(gifs.time);
        $('#answer').html("Ran out of time");
        clearInterval(clearTimer);
        invisTimer = setInterval(interTimer, 1000);
        unanswered++;
        $('#gif').html("The correct answer is " + trueAns);
    }
    if (sTimer <= 5) {
    	$('#timer').css('color', 'red');
    } 
}

function nextQuestion(next) {
    sTimer = 15;
    $('#box').empty();
    $('#answer').empty();
    answersOptions(next);
    $('#timer').html('Time Remaining: ' + sTimer + ' seconds');
    clearTimer = setInterval(startTimer, 1000);
    clearInterval(invisTimer);
    $('#gif').empty();
    $('#timer').css('color', '#fff');
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
        result.addClass('result');
        restart.addClass('restart');
        $('#gif').html(restart);
        $('#question').html(result);
        clearInterval(invisTimer);
        $('#box').empty();
        $('#answer').empty();
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
            addGif(gifs.closest);
        }
        if ($(this).html() == '365 Days') {
            addGif(gifs.orbit);
        }
        if ($(this).html() == 'Neil Armstrong') {
            addGif(gifs.man);
        }
        if ($(this).html() == '5,778 Kelvin') {
            addGif(gifs.sun);
        }
        if ($(this).html() == 'Venus') {
            addGif(gifs.venus);
        }
        if ($(this).html() == '2006') {
            addGif(gifs.pluto);
        }
        if ($(this).html() == '53') {
            addGif(gifs.moons);
        }
        if ($(this).html() == 'About 300 Days') {
            addGif(gifs.travel);
        }
        if ($(this).html() == 'Planet Nine') {
            addGif(gifs.nineth);
        }
        if ($(this).html() == '1,479 Minutes') {
            addGif(gifs.martian);
        }
        clearInterval(clearTimer);
        $('#answer').html("Correct");
        invisTimer = setInterval(interTimer, 1000);
        correctAnswers++;
    } else {
        clearInterval(clearTimer);
        $('#answer').html("Incorrect");
        invisTimer = setInterval(interTimer, 1000);
        trueAns = $('[data-answer=true]').html();
        $('#gif').html("The correct answer is " + trueAns);
        incorrectAnswers++;
        addGif(gifs.lose);
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