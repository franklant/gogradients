//
// Go Gradients - JavaScript
//

//Create Variables
let colorOne;
let colorTwo;
let fps = 60;
let updateGrad;

//Grab Important Elements
let _firstGradX = document.getElementById("firstColorX");
let _firstGradY = document.getElementById("firstColorY");
let _applyBtn = document.getElementById("applyBtn");
let _firstColor = document.getElementById("firstColor");
let _secondColor = document.getElementById("secondColor");

let _runBtn = document.getElementById("run");
let _stopBtn = document.getElementById("stop");

//Grab Graphics Elements
let canv = document.getElementById("myCanvas");
let ctx = canv.getContext('2d');

_applyBtn.onclick = function() {
    colorOne = _firstColor.value;
    colorTwo = _secondColor.value;

    function setGradient() {
        let grd = ctx.createLinearGradient(
            _firstGradX.value, _firstGradY.value, 0, 0
            );
        grd.addColorStop(0, colorOne);
        grd.addColorStop(1, colorTwo);
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, canv.clientWidth, canv.clientHeight);
    }


    //Set button color to input colors
    _runBtn.style.backgroundColor = colorOne;
    _stopBtn.style.backgroundColor = colorTwo;

    if (colorOne == "white") {
        _runBtn.style.color = "black";
    } else {
        _runBtn.style.color = "white";
    }
    if (colorTwo == "white") {
        _stopBtn.style.color = "black";
    } else {
        _stopBtn.style.color = "white";
    }

    //Call the function 60 frames per second when program first loads
    updateGrad = setInterval(setGradient, 1000/fps);
    function runProgram() {
        if (!updateGrad) {
            updateGrad = setInterval(setGradient, 1000/fps);
        }
    } //Resume

    function stopProgram() {
        clearInterval(updateGrad);
        updateGrad = null;
    } //Pause

    _runBtn.onclick = function() { runProgram(); }
    _stopBtn.onclick = function() { stopProgram(); }
}