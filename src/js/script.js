"use strict";

function getTimeRemaining(endtime) {
  let amount = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((amount / 1000) % 60);
  let minutes = Math.floor((amount / 1000 / 60) % 60);
  let hours = Math.floor((amount / (1000 * 60 * 60)) % 24);
  return {
    'amount': amount,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeTimer(endtime) {
  let hoursOutput1 = document.getElementById('hours1');
  let hoursOutput2 = document.getElementById('hours2');
  let minutesOutput1 = document.getElementById('minutes1');
  let minutesOutput2 = document.getElementById('minutes2');
  let secondsOutput1 = document.getElementById('seconds1');
  let secondsOutput2 = document.getElementById('seconds2');

  function updateTimer() {
    var TimeRemaining = getTimeRemaining(endtime);

    let hours = ('0' + TimeRemaining.hours).slice(-2);
    let minutes = ('0' + TimeRemaining.minutes).slice(-2);
    let seconds = ('0' + TimeRemaining.seconds).slice(-2);

    hoursOutput1.innerHTML = hours[0];
    hoursOutput2.innerHTML = hours[1];
    minutesOutput1.innerHTML = minutes[0];
    minutesOutput2.innerHTML = minutes[1];
    secondsOutput1.innerHTML = seconds[0];
    secondsOutput2.innerHTML = seconds[1];

    if (TimeRemaining.amount <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateTimer();
  var timeinterval = setInterval(updateTimer, 1000);
}

let hours = 12;
let minutes = 12;
let seconds = 12;
let time = (hours * 60 * 60) + (minutes * 60) + seconds;
let deadline = new Date(Date.parse(new Date()) + time * 1000);

initializeTimer(deadline);
