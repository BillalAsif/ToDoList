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
let calenderButton = document.getElementById("calenderButton");
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
dateNow.setHours(09);
dateNow.setMinutes(30);
dateNow.setDate(1);
let hours = dateNow.getHours();
let mins = dateNow.getMinutes();
let year = dateNow.getFullYear();
let month = dateNow.getMonth();
let day = dateNow.getDate();
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let repeatStatus = "none";

//Using Variables
yearText.textContent = year;
monthText.textContent = months[month];
dayText.textContent = day;
timeText.textContent = hours + ':' + mins;
let calenderDate = new Date().toDateString();

//Calender Button triggers
calenderButton.addEventListener('click', () => {
    calenderUI.classList.toggle('hide');
})

yearRight.addEventListener('click', () => {

    const date = new Date();
    date.setFullYear(year + 1);
    const nextYear = date.getFullYear();
    yearText.textContent = nextYear;
    year = nextYear;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();
})

yearLeft.addEventListener('click', () => {

    const date = new Date();
    date.setFullYear(year - 1);
    const prevYear = date.getFullYear();
    yearText.textContent = prevYear;
    year = prevYear;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

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
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

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
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

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
        calenderDate = new Date(year, month, day, hours, mins).toDateString();
    }

})

daysRight.addEventListener('click', () => {

    const date = new Date(year, month);
    date.setDate(day + 1);
    const nextDay = date.getDate();
    dayText.textContent = nextDay;
    day = nextDay;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

})

hourLeft.addEventListener('click', () => {

    const date = new Date();
    date.setHours(hours - 1);
    const prevHour = date.getHours();
    timeText.textContent = prevHour + ':' + mins;;
    hours = prevHour;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

})

hourRight.addEventListener('click', () => {

    const date = new Date();
    date.setHours(hours + 1);
    const nextHour = date.getHours();
    timeText.textContent = nextHour + ':' + mins;;
    hours = nextHour;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

})

minLeft.addEventListener('click', () => {

    const date = new Date();
    date.setMinutes(mins - 1);
    const prevMin = date.getMinutes();
    timeText.textContent = hours + ':' + prevMin;;
    mins = prevMin;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

})

minRight.addEventListener('click', () => {

    const date = new Date();
    date.setMinutes(mins + 1);
    const nextMin = date.getMinutes();
    timeText.textContent = hours + ':' + nextMin;;
    mins = nextMin;
    calenderDate = new Date(year, month, day, hours, mins).toDateString();

})

//Repeat button
let repeatButton = document.getElementById("repeatButton");
let repeatBadge = document.getElementById("repeatBadge");

repeatButton.addEventListener('click', () => {
    switch (repeatStatus) {
        case "none":
            repeatStatus = "daily";
            repeatBadge.textContent = "Daily";
            break;
        case "daily":
            repeatStatus = "weekly";
            repeatBadge.textContent = "Weekly";
            break;
        case "weekly":
            repeatStatus = "monthly";
            repeatBadge.textContent = "Monthly";
            break;
        case "monthly":
            repeatStatus = "none";
            repeatBadge.textContent = "None";
            break;
    }

})

//Task save button and input field and HTML5 local storage - to store user chosen date and repeat status for new task
let saveTaskButton = document.getElementById("saveTask");
let deleteButton = document.querySelector(".del");
let taskStatus = "new";
let key = localStorage.length;
let retrieveTasks = JSON.parse(localStorage.getItem('Task'));
// variables included from calender code and repeat button code
// calenderDate
// repeatSatatus

//Classes
class Task {

    constructor(title, date, repeat, status) {

        this.title = document.getElementById("newTask").value;
        this.date = calenderDate;
        this.repeat = repeatStatus;
        this.status = taskStatus;

    }

}


//Button events
saveTaskButton.addEventListener('click', () => {

    addTask();
    document.getElementById("newTask").value = "";

});

//Functions
function addTask() {

    const newTask = new Task;
    localStorage.setItem('Task', JSON.stringify(newTask));
    displayTask(newTask.title, newTask.date, newTask.repeat, newTask.status);
}

function deleteTask(event) {

    event.target.parentElement.remove();

}

function displayTask(title, date, repeat, stat) {

    document.getElementById("result").innerHTML = `
   <div class='result'>
    <i class='badge bg-secondary task-i'>${stat}</i>
    <i class='badge bg-primary task-i'>${repeat}</i>
    <i class='taskText'>${title}</i>
    <i class='dateText'>${date}</i>
    <i class='fas fa-times del' onclick="deleteTask(event)"></i>
   </div>
   `;

}


/* displayTasks();

saveTask.addEventListener('click', () => {

    saveTasks();

})

//functions

function saveTasks() {

    let taskInfo = [];

    taskInfo.push(key + 1);
    taskInfo.push(newTask.value);
    taskInfo.push(calenderDate);
    taskInfo.push(repeatStatus);
    taskInfo.push(taskStatus);

    localStorage.setItem("Task" + (key + 1), JSON.stringify(taskInfo));
    calenderUI.classList.remove("hide");
    calenderUI.classList.add("hide");
    displayTasks();
    newTask.value = "";
    key++;
}

function displayTasks() {

    document.getElementById("result").innerHTML = "";

    {
        Object.keys(localStorage).forEach(key => {
            //console.log(key, localStorage[key]);
            let createDiv = document.createElement("div");
            let createI = document.createElement("i");
            let createDelButton = document.createElement("i");
            createDiv.classList.add("task");
            createDiv.classList.add("result");
            createI.classList.add("taskText");
            createDelButton.classList.add("fas");
            createDelButton.classList.add("fa-times");
            createDelButton.classList.add("del");
            createDelButton.addEventListener('click', (e) => { delTask(e) })
            createDiv.appendChild(createI);
            createI.innerHTML = JSON.parse(localStorage.getItem(key));
            createDiv.appendChild(createDelButton);
            document.getElementById("result").appendChild(createDiv);
        })

    }

}

function delTask(e) {
    e.target.parentElement.remove();
    let arrNum = e.target.previousElementSibling.textContent[0];
    localStorage.removeItem('Task' + arrNum);

    for (let i = arrNum; i < localStorage.length; i++) {


        console.log(localStorage.getItem('Task' + i));



    }

    //key--;
}

function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
} */