var timerWrapper = document.getElementById("timer")
var timer = new Stopwatch(timerWrapper)

var startButton = document.getElementById("start-button");
var gameButton = document.getElementById("game-button");

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function timerUpdate() {
    var timerDisplay = document.getElementById("timer")
    timerDisplay.textContent = 0.0

    var t = 0

    timerDisplay.textContent = t + 0.01
}

function stop() {
    timer.stop();

    gameButton.disabled = true;
    startButton.disabled = false;
}

function processButtonClick() {
    var gameButton = document.getElementById("game-button");
    var clickDisplay = document.getElementById("click-number");
    var prevClicks = parseInt(clickDisplay.textContent)

    clickDisplay.textContent = prevClicks + 1

    if (parseInt(clickDisplay.textContent) >= 20) {
        stop();
    }

    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;

    gameButton.style.left = i+"px";
    gameButton.style.top = j+"px";
}

function start() {
    gameButton.disabled = false;
    startButton.disabled = true;

    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;

    gameButton.style.left = i+"px";
    gameButton.style.top = j+"px";

    gameButton.addEventListener("click", processButtonClick)

    
    timer.start()
}