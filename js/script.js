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
let timeRight = document.getElementById("timeRight");
let timeLeft = document.getElementById("timeLeft");
let yearText = document.getElementById("yearText");
let monthText = document.getElementById("monthText");
let dayText = document.getElementById("dayText");
let timeText = document.getElementById("timeText");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let currentYear = date.getFullYear();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let currentMonth = date.getMonth();
let currrentDay = date.getDay();
let daysArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


//Using Variables
yearText.textContent = currentYear;
monthText.textContent = months[currentMonth];
dayText.textContent = currrentDay;
timeText.textContent = hours + ':' + minutes;

//Button triggers
yearRight.addEventListener('click', () => {

    yearText.textContent = currentYear + 1;
    currentYear += 1;
})

yearLeft.addEventListener('click', () => {

    yearText.textContent = currentYear - 1;
    currentYear -= 1;

})

monthRight.addEventListener('click', () => {

    if (currentMonth == 11) {
        alert("No months exist after December!")
    } else {
        monthText.textContent = months[currentMonth + 1];
        currentMonth += 1;
    }
})

monthLeft.addEventListener('click', () => {

    if (currentMonth == 0) {
        alert("No months exist before January!")
    } else {
        monthText.textContent = months[currentMonth - 1];
        currentMonth -= 1;
    }
})

daysLeft.addEventListener('click', () => {

    getDaysBasedOnMonthYear(months[currentMonth], currentYear)
    dayText.textContent = daysArray[currrentDay - 1];
    currrentDay -= 1;

})

daysRight.addEventListener('click', () => {

    getDaysBasedOnMonthYear(months[currentMonth], currentYear)
    dayText.textContent = daysArray[currrentDay + 1];
    currrentDay += 1;

})

//Functions
function getDaysBasedOnMonthYear(month, year) { 

    let isLeapYear = false;

    if (year % 4 === 0) {
        isLeapYear = true;
    } else {
        isLeapYear = false;
    }

    if (isLeapYear == true && month == "February") {
        daysArray.pop();
        daysArray.pop();
    }

    if (isLeapYear == false && month == "February") {
        daysArray.pop();
        daysArray.pop();
        daysArray.pop();
    }
    
    if (month == "February" || month == "April" || month == "June" || month == "August" || month == "October" || month == "December") {
        daysArray.pop();
    }

}
