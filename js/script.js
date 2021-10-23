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
    else {
        displayCounter(count);
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
    if (mins < 0 && currentMins == 0 && currentHours > 0) {
        currentHours = currentHours - 1;
        currentMins = 45;
    }
    else if (currentMins >= 45){
        currentHours = currentHours + 1;
        currentMins = 00;
        currentSecs = 00;
        addCounterToDom();
    } else {
        currentSecs = 00;
        currentMins += mins;
        currentHours = 00;
        addCounterToDom();
    }
}

function addCounterToDom() {
    counterDisplay.innerHTML = currentHours + ":" + currentMins + ":" + currentSecs;
}

let date = new Date;
alert(date.getDate(0));

//check it out
//https://www.developerdrive.com/build-countdown-timer-pure-javascript/#:~:text=%20How%20to%20Build%20a%20Countdown%20Timer%20in,two%20new%20local%20variables.%20The%20first...%20More%20