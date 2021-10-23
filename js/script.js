//Timer
let isPaused = false;
let counterDisplay = document.getElementById("counter");
var timer = new Date("Mar 15, 2019 00:00:00").getTime();
displayTimer(0,0,0);
timer = 0 /timer;
const pauseButton = document.getElementById("pauseButton").addEventListener('click', () => { });
const resetButton = document.getElementById("resetButton").addEventListener('click', () => {
    displayTimer(0,0,0);
    timer = 0 /timer;
});
const increaseCountButton = document.getElementById("increaseCount").addEventListener('click', () => {
    updateTimer(900000);
});
const decreaseCountButton = document.getElementById("decreaseCount").addEventListener('click', () => {
    updateTimer(-900000);
});

const startButton = document.getElementById("startButton").addEventListener('click', () => {
    loop();
});

function updateTimer(time) {
timer = timer + time;
let hours;
let mins;
let secs;
    if (timer > 0){
        hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mins = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((timer % (1000 * 60)) / 1000);
        displayTimer(hours, mins, secs)
    } else {

    }
}

function loop() {
    if (currentCount > 0) {
        startCounter();
    }
}

function startCounter() {
    setTimeout(function () {
        currentCount = currentCount - 1;
        counterDisplay.innerHTML = currentCount;
        loop();
    }, 1000)
}

function displayTimer(hours, mins, secs) {
    if (hours == 0 && mins == 0 && secs == 0) {
        counterDisplay.innerHTML = hours + ":" + mins + ":" + secs;
    }else if (hours == 0 && mins < 0) {
        alert("Timer can not go below Zero!");
    }
    else {
        counterDisplay.innerHTML = hours + ":" + mins + ":" + secs;
    }
}