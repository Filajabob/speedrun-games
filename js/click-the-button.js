function start() {
    var gameButton = document.getElementById("game-button")

    var i = Math.floor(Math.random() * 500) + 1;
    var j = Math.floor(Math.random() * 500) + 1;

    gameButton.style.left = i+"px";
    gameButton.style.top = j+"px";
}