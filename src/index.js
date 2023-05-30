var square, circle;
//Selection of background colours
var colors = [
  "yellow",
  "red",
  "green",
  "purple",
  "aqua",
  "chartreuse",
  "coral",
  "dodgerBlue",
  "deepPink"
];
var time = 0;
var score = document.querySelector(".wrapper");

//makes shapes disappear on load.
(function() {
  square = document.getElementById("square").style.display = "none";
  circle = document.getElementById("circle").style.display = "none";
})();

//Timing of click
function timer() {
  time = time + 0.1;
  console.log(time)
}
setInterval(timer, 100);

// Initiate shapes on screen.
function show() {
  var randomColor = colors[Math.floor(colors.length * Math.random())]; // Random color chosen
  var randomX = Math.floor(Math.random() * 60); // random x axis margin
  var randomY = Math.floor(Math.random() * 80); // random y axis margin

  square = document.getElementById("square");
  circle = document.getElementById("circle");
  var shapeArray = [square, circle];
  var randShape = shapeArray[Math.floor(shapeArray.length * Math.random())];

  randShape.style.margin = randomX + "% " + randomY + "%";
  randShape.style.backgroundColor = randomColor;
  randShape.style.display = "block";
  time = 0;
  randShape.addEventListener("click", click);

  function click() {
    score.innerHTML = "Time: " + time.toFixed(1) + " seconds";
    scoreCompare();
    time = 0;
    console.log("clicked on", randShape);
    randShape.style.display = "none";
    setTimeout(show, Math.floor(Math.random() * 2500) + 200);
    randShape.removeEventListener("click", click);
  }
}

setTimeout(show, 1200);



//Compare the score and rate it.
function scoreCompare() {
  var compare = document.querySelector(".wrapper2");

  if (time < 0.4) {
    compare.innerHTML = "That was SUPERFAST!!";
  } else if (time <= 0.5) {
    compare.innerHTML = "That was Fast!";
  } else if (time < 0.8) {
    compare.innerHTML = "Good!";
  } else {
    compare.innerHTML = "Too Slow!";
  } 
}
