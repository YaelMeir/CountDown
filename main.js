var button = document.querySelector("updateCountdown");

const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? `0` + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (c == 0) {
    clearInterval(myTimer);
    alert("Reached zero");
  }

  function end() {
    clearInterval(myTimer);
  }

  return { start: start, end: end };
  // document
  countdownEl;
}

function endTime() {
  fetch("https://aws.random.cat/meow")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      img.src = json.file;
      img.style = "display: inline";
    });
}
