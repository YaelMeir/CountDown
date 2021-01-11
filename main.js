var minutes = document.querySelector("#min");
var seconds = document.querySelector("#sec");
var time = document.querySelector("#countdown");
var startCountdown = document.querySelector("#start");
var stopCountdown = document.querySelector("#stop");
var pauseCountdown = document.querySelector("#pause");
var imgCat = document.querySelector("img");

// minutes.oninput = updateCountdown(toatlSeconds);
// seconds.oninput = updateCountdown(toatlSeconds);
//console.log(startCountdown);

startCountdown.onclick = function () {
  var toatlSeconds = +seconds.value + +minutes.value * 60;

  //var clock = +minutes * 60 + +seconds;

  updateCountdown(toatlSeconds);

  var intervalID = setInterval(() => {
    toatlSeconds--;
    updateCountdown(toatlSeconds);
    //time.innerHTML = `${minutes}:${seconds}`;
    //clock--;
    if (toatlSeconds <= 0 || toatlSeconds < 1) {
      endTime();
      clearInterval(intervalID);
    } else {
      stopCountdown.onclick = function () {
        clearInterval(intervalID);
      };
    }
    pauseCountdown.onclick = function () {
      if (clearInterval(intervalID)) {
        toatlSeconds--;
      } else {
        clearInterval(intervalID);
      }
    };
  }, 1000);
};

function updateCountdown(toatlSeconds) {
  var min = Math.floor(toatlSeconds / 60);
  var sec = Math.floor(toatlSeconds % 60);
  time.innerHTML = `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  //console.log("time=", time);

  // var min00 = Math.floor(seconds / 60);
  // var sec00 = Math.floor(seconds % 60);

  // sec00 = second < 10 ? `0` + seconds : seconds;
  // time.innerHTML = `${min00}:${sec00}`;

  //const min00 = Math.floor(seconds / 60);
  //let sec00 = min00 % 60;
}

function endTime() {
  heart.style = "display: inline";
  fetch("https://aws.random.cat/meow")
    .then(function (res) {
      return res.json();
    })
    .then(function (json) {
      img.src = json.file;
      img.onload = function () {
        img.style = "display: inline";
        heart.style = "display: none";
      };
    });
}

/*async function endTime() {
  var imgCat = await fetch("https://aws.random.cat/meow");
  var json = await imgCat.json();
  document.querySelector("imgCat").src = json.file;

  document.querySelector("imgCat").onload = function () {
    document.querySelector(".loader").style.display = "none";
    document.querySelector("imgCat").style.display = "inline";
  };
}*/

/*const startingMinutes = "";
let time = startingMinutes * 60;

const countdownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? `0` + seconds : seconds;

  countdown.innerHTML = `${minutes}:${seconds}`;
  time--;

  if (c == 0 || c < 1) {
    clearInterval(countdown);
    //alert("Reached zero");
  }

  function end() {
    clearInterval(countdown);
  }

  return { start: start, end: end };
  // document
  countdown;
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
};*/
