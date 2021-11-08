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
let newTaskField = document.getElementById("newTask");
let addButton = document.getElementById("addButton");
let calenderButton = document.getElementById("calenderButton");
let repeatButton = document.getElementById("repeatButton");
let calenderUI = document.getElementById("calender");
let yearRight = document.getElementById("yearRight");
let yearLeft = document.getElementById("yearLeft");
let monthRight = document.getElementById("monthRight");
let monthLeft = document.getElementById("monthLeft");
let daysRight = document.getElementById("daysRight");
let daysLeft = document.getElementById("daysLeft");
let hourRight = document.getElementById("hourRight");
let hourLeft = document.getElementById("hourLeft");
let minRight = document.getElementById("minRight");
let minLeft = document.getElementById("minLeft");
let yearText = document.getElementById("yearText");
let monthText = document.getElementById("monthText");
let dayText = document.getElementById("dayText");
let timeText = document.getElementById("timeText");
var dateNow = new Date();
let hours = dateNow.getHours();
let mins = dateNow.getMinutes();
let year = dateNow.getFullYear();
let month = dateNow.getMonth();
dateNow.setDate(1);
let day = dateNow.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


//Using Variables
let calenderDate = new Date(year, month, day, hours, mins);
yearText.textContent = year;
monthText.textContent = months[month];
dayText.textContent = day;
timeText.textContent = hours + ':' + mins;

//Button triggers
yearRight.addEventListener('click', () => {

    const date = new Date();
    date.setFullYear(year + 1);
    const nextYear = date.getFullYear();
    yearText.textContent = nextYear;
    year = nextYear;

})

yearLeft.addEventListener('click', () => {

    const date = new Date();
    date.setFullYear(year - 1);
    const prevYear = date.getFullYear();
    yearText.textContent = prevYear;
    year = prevYear;

})

monthRight.addEventListener('click', () => {

    const date = new Date();
    date.setMonth(month + 1);
    const nextMonth = date.getMonth();
    monthText.textContent = months[nextMonth];
    month = nextMonth;
    date.setDate(1);
    const prevDay = date.getDate();
    dayText.textContent = prevDay;
    day = prevDay;

})

monthLeft.addEventListener('click', () => {

    const date = new Date();
    date.setMonth(month - 1);
    const prevMonth = date.getMonth();
    monthText.textContent = months[prevMonth];
    month = prevMonth;
    date.setDate(1);
    const prevDay = date.getDate();
    dayText.textContent = prevDay;
    day = prevDay;

})

daysLeft.addEventListener('click', () => {

    if (day == 1) {
        day = day;
    } else {
        const date = new Date(year, month);
        date.setDate(day - 1);
        const prevDay = date.getDate();
        dayText.textContent = prevDay;
        day = prevDay;
    }

})

daysRight.addEventListener('click', () => {

    const date = new Date(year, month);
    date.setDate(day + 1);
    const nextDay = date.getDate();
    dayText.textContent = nextDay;
    day = nextDay;

})

hourLeft.addEventListener('click', () => {

})

hourRight.addEventListener('click', () => {

})

minLeft.addEventListener('click', () => {

})

minRight.addEventListener('click', () => {

})