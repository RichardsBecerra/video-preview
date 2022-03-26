
/*var x = document.getElementById("video")

function over(element) {
    element.onmouseover();
    element.play();
}

function out(element){
    element.onmouseout();
    element.pause();
}

var x = document.getElementById("");

x.onmouseover = function playVid() {
    x.play();
}

x.onmouseout = function pauseVid() {
    x.pause();
}

var x = document.getElementById("myVideo");

function playVid() {
    x.play();
}

function pauseVid() {
    x.pause();
}*/
function playVid(element){
    element.play()
    console.log("play")
}

function pauseVid(element){
    element.pause()
    console.log("pause")
}