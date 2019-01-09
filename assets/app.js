var h1 = document.getElementById("timer"),
  start = document.getElementById("start"),
  stop = document.getElementById("stop"),
  pause = document.getElementById("pause"),
  seconds = 0,
  minutes = 0,
  hours = 0,
  t = -1;

function add() {
  seconds++;
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
    if (minutes >= 60) {
      minutes = 0;
      hours++;
    }
  }

  h1.textContent =
    (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
    ":" +
    (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
    ":" +
    (seconds > 9 ? seconds : "0" + seconds);

  timer();
}

function timer() {
  t = setTimeout(add, 500);
}

/* Start button */
start.addEventListener("click", function() {
    seconds = 0; minutes = 0; hours = 0;
    clearInterval(t);
    timer();
});

pause.addEventListener('click', function(e) {
    if (t == -1) {
        pause.innerHTML = 'pause';
        timer();
    } else {
        pause.innerHTML = "resume";
        clearInterval(t);
        t = -1;
    }
})

stop.addEventListener('click', function() {
    clearTimeout(t);
})

