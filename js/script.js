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
displayTimer(0,0,0);
timer = 0 /timer;

//Disbale start/pause button onload
startButton.classList.add("disabled");
pauseButton.classList.add("disabled");

//Buuton triggers
resetButton.addEventListener('click', () => {
    displayTimer(0,0,0);
    timer = 0 /timer;
    startButton.classList.add("disabled");
    pauseButton.classList.add("disabled");
});

increaseCountButton.addEventListener('click', () => {
    updateTimer(900000);
});

decreaseCountButton.addEventListener('click', () => {
    if (counterDisplay.innerHTML == 0 + ":" + 0 + ":" + 0) {
        alert("Timer can not go below Zero!");
    } else {
        updateTimer(-900000);
    }
});

startButton.addEventListener('click', () => {
    var startCounter = setInterval(() => {
        updateTimer(-1000)
        startButton.classList.add('disabled');
        if(isPaused == true){
            clearInterval(startCounter);
        }
    }, 1000);
    startCounter;
    pauseButton.classList.toggle('disabled');
});

pauseButton.addEventListener('click', () => {
    isPaused = true;
    startButton.classList.toggle('disabled');
    pauseButton.classList.toggle('disabled');
 });

 //Functions
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
        startButton.classList.toggle('disabled');
    }
}

function displayTimer(hours, mins, secs) {
        counterDisplay.innerHTML = hours + ":" + mins + ":" + secs;
}