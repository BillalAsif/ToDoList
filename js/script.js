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
let calenderDate = new Date();

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
    calenderDate = new Date(year, month, day, hours, mins);
})

yearLeft.addEventListener('click', () => {

    if (year == year) {
        year = year;
    } else {
        const date = new Date();
        date.setFullYear(year - 1);
        const prevYear = date.getFullYear();
        yearText.textContent = prevYear;
        year = prevYear;
        calenderDate = new Date(year, month, day, hours, mins);
    }

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
    calenderDate = new Date(year, month, day, hours, mins);

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
    calenderDate = new Date(year, month, day, hours, mins);

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
        calenderDate = new Date(year, month, day, hours, mins);
    }

})

daysRight.addEventListener('click', () => {

    const date = new Date(year, month);
    date.setDate(day + 1);
    const nextDay = date.getDate();
    dayText.textContent = nextDay;
    day = nextDay;
    calenderDate = new Date(year, month, day, hours, mins);

})

hourLeft.addEventListener('click', () => {

    const date = new Date();
    date.setHours(hours - 1);
    const prevHour = date.getHours();
    timeText.textContent = prevHour + ':' + mins;;
    hours = prevHour;
    calenderDate = new Date(year, month, day, hours, mins);

})

hourRight.addEventListener('click', () => {

    const date = new Date();
    date.setHours(hours + 1);
    const nextHour = date.getHours();
    timeText.textContent = nextHour + ':' + mins;;
    hours = nextHour;
    calenderDate = new Date(year, month, day, hours, mins);

})

minLeft.addEventListener('click', () => {

    const date = new Date();
    date.setMinutes(mins - 1);
    const prevMin = date.getMinutes();
    timeText.textContent = hours + ':' + prevMin;;
    mins = prevMin;
    calenderDate = new Date(year, month, day, hours, mins);

})

minRight.addEventListener('click', () => {

    const date = new Date();
    date.setMinutes(mins + 1);
    const nextMin = date.getMinutes();
    timeText.textContent = hours + ':' + nextMin;;
    mins = nextMin;
    calenderDate = new Date(year, month, day, hours, mins);

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

if (key === 0) {
    const TodayTask = [];
    localStorage.setItem('todayTask', JSON.stringify(TodayTask));
    localStorage.setItem('tomorrowTask', JSON.stringify(TodayTask));
    localStorage.setItem('ongoingTask', JSON.stringify(TodayTask));
    localStorage.setItem('incompleteTask', JSON.stringify(TodayTask));
    localStorage.setItem('completeTask', JSON.stringify(TodayTask));

}

displayTasks("todayTask");
displayTasks("tomorrowTask");
displayTasks("ongoingTask");
displayTasks("completeTask");
displayTasks("incompleteTask");


if (key > 0) {
    ongoingTask();
    incompleteTask();
}

//Classes
class Task {

    constructor(title, date, repeat, status, dateCreated) {

        this.title = document.getElementById("newTask").value;
        this.date = calenderDate;
        this.repeat = repeatStatus;
        this.status = taskStatus;
        this.dateCreated = new Date();

    }

}

//Button events 
saveTaskButton.addEventListener('click', () => {

    const date = new Date();
    const calDate = new Date(calenderDate);

    if (date < calDate) {

        addTask();
        document.getElementById("newTask").value = "";
        calenderUI.classList.remove('hide');
        calenderUI.classList.add('hide');

    } else {

        alert("Can't set a date for a task in the past.");

    }

});

//Functions

function displayTasks(task) {

    const taskArr = JSON.parse(localStorage.getItem(task));
    const result = document.getElementById(task);
    result.innerHTML = "";

    for (let i = 0; i < taskArr.length; i++) {


        if (task === "completeTask") {
            const div = document.createElement("div");
            div.classList.add(task);
            const taskText = `
            <i class='badge bg-secondary task-i'>${taskArr[i].status}</i>
            <i class='badge bg-primary task-i'>${taskArr[i].repeat}</i>
            <i class='taskText'>${taskArr[i].title}</i>
            <i class='fas fa-times del delCom' onclick="deleteTask(event, '${task}')"></i>
             `;
            div.innerHTML = taskText;
            result.appendChild(div);

        }

        if (task === "todayTask" || task === "ongoingTask" || task === "incompleteTask" || task === "tomorrowTask") {
            const fullDate = new Date(taskArr[i].date);
            const date = fullDate.toDateString();
            const hour = fullDate.getHours();
            const min = fullDate.getMinutes();
            const time = hour + ":" + min;
            const div = document.createElement("div");
            div.classList.add(task);
            const taskText = `
            <i class='badge bg-secondary task-i'>${taskArr[i].status}</i>
            <i class='badge bg-primary task-i'>${taskArr[i].repeat}</i>
            <i class='taskText'>${taskArr[i].title}</i>
            <i class='dateText'>${date} - ${time}</i>
            <i class='fas fa-times del' onclick="deleteTask(event, '${task}')"></i>
            <i class='fas fa-check complete' onclick="completeTask(event)"></i>
             `;
            div.innerHTML = taskText;
            result.appendChild(div);

        }

    }

}

function addTask() {

    const taskArr = JSON.parse(localStorage.getItem('todayTask'));
    const newTask = new Task;
    taskArr.push(newTask);
    localStorage.setItem('todayTask', JSON.stringify(taskArr));
    displayTasks("todayTask");

}

function deleteTask(event, taskType) {

    const sisElement = event.target.previousElementSibling.previousElementSibling.innerHTML;
    const taskArr = JSON.parse(localStorage.getItem(taskType));
    const index = taskArr.indexOf(sisElement);
    taskArr.splice(index, 1);
    localStorage.setItem(taskType, JSON.stringify(taskArr));
    event.target.parentElement.remove();

}


function completeTask(event) {

    const del = event.target.previousElementSibling;
    const statusEl = "complete";
    const dateEl = event.target.previousElementSibling.previousElementSibling.innerHTML;
    const titleEl = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    const repeatEl = event.target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;


    const arr = { title: titleEl, date: dateEl, repeat: repeatEl, status: statusEl };
    const taskArr = JSON.parse(localStorage.getItem('completeTask'));
    const newTask = arr;
    taskArr.push(newTask);
    localStorage.setItem('completeTask', JSON.stringify(taskArr));
    del.click();
    displayTasks("completeTask");


}

function incompleteTask() {

    const incompleteTaskDiv = document.getElementById('incompleteTask');
    incompleteTaskDiv.innerHTML = "";
    const incompleteTask = JSON.parse(localStorage.getItem('incompleteTask'));
    const todayTask = JSON.parse(localStorage.getItem('todayTask'));
    const ongoingTask = JSON.parse(localStorage.getItem('ongoingTask'));

    function changeTaskStatusToIncomplete(task, taskKey) {

        for (let i = 0; i < task.length; i++) {

            Date.prototype.addSec = function (s) {
                this.setSeconds(this.getSeconds() + s);
                return this;
            }

            const date = task[i].date;
            const now = new Date();
            const secLater = new Date(date).addSec(1);
            

            if (now > secLater) {
                const title = task[i].title;
                const date = task[i].date;
                const repeat = task[i].repeat;
                const status = "incomplete";
                const dateCreated = task[i].dateCreated;
                const arr = { title, date, repeat, status, dateCreated };

                incompleteTask.push(arr);
                localStorage.setItem('incompleteTask', JSON.stringify(incompleteTask));
                const array = task;
                array.splice(i, 1);
                localStorage.setItem(taskKey, JSON.stringify(array));
            }

        }


        displayTasks("todayTask");
        displayTasks("ongoingTask");
        displayTasks("incompleteTask");

    }

    changeTaskStatusToIncomplete(todayTask, "todayTask");
    changeTaskStatusToIncomplete(ongoingTask, "ongoingTask");

}

function ongoingTask() { 

    const ongoingTask = JSON.parse(localStorage.getItem('ongoingTask'));
    const task = JSON.parse(localStorage.getItem('todayTask'));
    const ongoingTaskDiv = document.getElementById("todayTask");
    ongoingTaskDiv.innerHTML = "";

    for (let i = 0; i < task.length; i++) {

        const now = new Date();
        const dateC = task[i].dateCreated.addSec(1);
        console.log(now);
        console.log(secLater);

        Date.prototype.addSec = function (s) {
            this.setSeconds(this.getSeconds() + s);
            return this;
        }

        Date.prototype.addHours = function (h) {
            this.setHours(this.getHours() + h);
            return this;
        }

        if(now > secLater) {

            const title = task[i].title;
            const date = task[i].date;
            const repeat = task[i].repeat;
            const status = "ongoing";
            const dateCreated = task[i].dateCreated;
            const arr = { title, date, repeat, status, dateCreated };

            ongoingTask.push(arr);
            localStorage.setItem('ongoingTask', JSON.stringify(ongoingTask));
            const array = task;
            array.splice(i, 1);
            localStorage.setItem('todayTask', JSON.stringify(array));

        }


    }

    displayTasks("todayTask");
    displayTasks("ongoingTask");

}


// BAGDE CODE 

//variables
let todayTaskBadge = document.getElementById("todayTaskBadge");
let ongoingTaskBadge = document.getElementById("ongoingTaskBadge");
let incompleteTaskBadge = document.getElementById("incompleteTaskBadge");
let completeTaskBadge = document.getElementById("completeTaskBadge");
let tomorrowTaskBadge = document.getElementById("tomorrowTaskBadge");
let allTaskBadge = document.getElementById("allTaskBadge");

todayTaskBadge.innerText = 2;
tomorrowTaskBadge.innerText = 3
ongoingTaskBadge.innerText = 3;
incompleteTaskBadge.innerText = 4;
completeTaskBadge.innerText = 2;
allTaskBadge.innerText = parseInt(todayTaskBadge.textContent) + parseInt(ongoingTaskBadge.textContent) + parseInt(incompleteTaskBadge.textContent) + parseInt(completeTaskBadge.textContent) + parseInt(tomorrowTaskBadge.textContent);
