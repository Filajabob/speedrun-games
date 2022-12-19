var timerWrapper = document.getElementById("timer")
var timer = new Stopwatch(timerWrapper)

var startButton = document.getElementById("start-button");
var gameButton = document.getElementById("game-button");
var clickDisplay = document.getElementById("click-number");

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

function stop() {
    timer.stop();

    gameButton.disabled = true;
    startButton.disabled = false;

    console.log(getCookie("bestTime"))

    if (getCookie("bestTime") == "" || getCookie("bestTime") == "undefined") {
        setCookie("bestTime", timer.textContent, 365)
    } else if (parseInt(getCookie("bestTime")) > parseInt(timer.textContent)) {
        // new personal best
        window.alert("New Personal Best! Previous best: " + getCookie("bestTime"))
        setCookie("bestTime", timer.textContent, 365)
    }
}

function processButtonClick() {
    
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

    clickDisplay.textContent = 0;

    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;

    gameButton.style.left = i+"px";
    gameButton.style.top = j+"px";

    gameButton.addEventListener("click", processButtonClick)

    timer.reset();
    timer.start();
}