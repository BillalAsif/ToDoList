//Timer Codes---------------------------------------------
//Variables
let isPaused = false;
let counterDisplay = document.getElementById("counter");
let timer = new Date("Mar 15, 2019 00:00:00").getTime();
const resetButton = document.getElementById("resetButton");
const increaseCountButton = document.getElementById("increaseCount");
const decreaseCountButton = document.getElementById("decreaseCount");
const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButton");

//Dispaly timer as zero onload
displayTimer(0, 0, 0);
timer = 0 / timer;

//Disbale start/pause button onload
startButton.classList.add("disabled");
pauseButton.classList.add("disabled");

//Buuton triggers
increaseCountButton.addEventListener('click', () => {
    updateTimer(900000);
    startButton.classList.remove('disabled');
});

decreaseCountButton.addEventListener('click', () => {
    if (counterDisplay.innerHTML == 0 + ":" + 0 + ":" + 0) {
        alert("Timer can not go below Zero!");
    } else {
        updateTimer(-900000);
        startButton.classList.remove('disabled');
    }
});

startButton.addEventListener('click', () => {
    var startCounter = setInterval(() => {
        updateTimer(-1000)
        if (isPaused == true) {
            clearInterval(startCounter);
        }
    }, 1000);
    startCounter;
    isPaused = false;
    timerRunState('start');
});

pauseButton.addEventListener('click', () => {
    isPaused = true;
    timerRunState('pause');
});

// Error on this function - to reolve add 1 sec delay before excute
resetButton.addEventListener('click', () => {
    isPaused = true;
    timer = 0 / timer;
    timerRunState('reset');
    displayTimer(0, 0, 0);
});

//Functions
function updateTimer(time) {
    timer = timer + time;
    let hours;
    let mins;
    let secs;
    if (timer > 0) {
        hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        mins = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        secs = Math.floor((timer % (1000 * 60)) / 1000);
        displayTimer(hours, mins, secs)
    }
}

function displayTimer(hours, mins, secs) {
    counterDisplay.innerHTML = ('0' + hours).slice(-2) + ":" + ('0' + mins).slice(-2) + ":" + ('0' + secs).slice(-2);
}

function timerRunState(state) {
    switch (state) {
        case 'start':
            startButton.classList.remove('disabled');
            pauseButton.classList.remove('disabled');
            startButton.classList.add('disabled');
            break;
        case 'pause':
            startButton.classList.remove('disabled');
            pauseButton.classList.remove('disabled');
            pauseButton.classList.add('disabled');
            break;
        case 'reset':
            pauseButton.classList.add('disabled');
            startButton.classList.add('disabled');
    }
}

//Task Code ----------------------------------------------
//Variables









//Button triggers










//Functions