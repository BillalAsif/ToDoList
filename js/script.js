//Timer
let isPaused = false;
let counterDisplay = document.getElementById("counter");
let currentSecs = 00;
let currentMins = 00;
let currentHours = 00;
displayCounter(0);

const pauseButton = document.getElementById("pauseButton").addEventListener('click', () => { });
const resetButton = document.getElementById("resetButton").addEventListener('click', () => {
    updateCounter(0);
});
const increaseCountButton = document.getElementById("increaseCount").addEventListener('click', () => {
    updateCounter(15);
});
const decreaseCountButton = document.getElementById("decreaseCount").addEventListener('click', () => {
    updateCounter(-15);
});

const updateCounter = (count) => {
    if (currentSecs === 0 && currentMins === 0 && currentHours === 0 && count < 0) {
        alert('Can not decrease timer below zreo!');
    }
    else if (count === 0) {
        currentMins = 00;
        displayCounter(0);
    }
    else {
        currentMins += count;
        counterDisplay.innerHTML = currentSecs + ":" + currentMins + ":" + currentHours;
    }
}

const startButton = document.getElementById("startButton").addEventListener('click', () => {
    loop();
});

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

function displayCounter(mins) {
    if (mins > 60){
        currentHours = currentHours + 1;
        currentMins = 00;
        currentSecs = 00;
    } else {
        currentSecs = 00;
        currentMins = mins;
        currentHours = 00;
    }
    counterDisplay.innerHTML = currentHours + ":" + currentMins + ":" + currentSecs;
}