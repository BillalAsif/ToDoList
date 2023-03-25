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

//Task save button and input field and HTML5 local storage - 
//to store user chosen date and repeat status for new task
let saveTaskButton = document.getElementById("saveTask");
let deleteButton = document.querySelector(".del");
let taskStatus = "new";
let key = localStorage.length;

if (key === 0) {
    const arr = [];
    localStorage.setItem('newTask', JSON.stringify(arr));
    localStorage.setItem('ongoingTask', JSON.stringify(arr));
    localStorage.setItem('incompleteTask', JSON.stringify(arr));
    localStorage.setItem('completeTask', JSON.stringify(arr));
    testTasks()//Populates app with dummy tasks

}

displayTasks("newTask");
displayTasks("ongoingTask");
displayTasks("completeTask");
displayTasks("incompleteTask");
showBadges();
showTaskTally();


if (key > 0) {
    ongoingTask();
    incompleteTask();
    showBadges();
    showTaskTally();
}

//Classes
class Task {

    constructor(title, date, repeat, status, dateCreated) {

        this.title = document.getElementById("newTaskInput").value;
        this.date = calenderDate;
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
        document.getElementById("newTaskInput").value = "";
        calenderUI.classList.remove('hide');
        calenderUI.classList.add('hide');

    } else {

        alert("Can't set a date for a task in the past.");

    }

});

//Functions

// Displays all tasks
function displayTasks(task) {

    const taskArr = JSON.parse(localStorage.getItem(task));
    const result = document.getElementById(task);
    result.innerHTML = "";

    for (let i = 0; i < taskArr.length; i++) {


        if (task === "completeTask") {
            const div = document.createElement("div");
            div.classList.add(task);
            const taskText = `
            <div class="top-section-task">
            <i class='badge task-i'>${taskArr[i].status}</i>
            <i class='taskText'>${taskArr[i].title}</i>
            </div>
            <div class="bottom-section-completetask">
            <div class="task-controls-del">
            <i class='fas fa-times del delCom' onclick="deleteTask(event, '${task}')"></i>
            </div>
            </div>
             `;
            div.innerHTML = taskText;
            result.appendChild(div);

        }

        if (task === "newTask" || task === "ongoingTask" || task === "incompleteTask") {
            const fullDate = new Date(taskArr[i].date);
            const date = fullDate.toDateString();
            const hour = fullDate.getHours();
            const min = fullDate.getMinutes();
            const time = hour + ":" + min;
            const div = document.createElement("div");
            div.classList.add(task);
            const taskText = `
            <div class="top-section-task">
            <i class='badge bg-secondary task-i'>${taskArr[i].status}</i>
            <i class='taskText'>${taskArr[i].title}</i>
            </div>
            <div class="bottom-section-task">
            <i class='dateText'>${date} - ${time}</i>
            <div class="task-controls">
            <i class='fas fa-times del' onclick="deleteTask(event, '${task}')"></i>
            <i class='fas fa-check complete' onclick="completeTask(event)"></i>
            </div>
            </div>
             `;
            div.innerHTML = taskText;
            result.appendChild(div);

        }

    }
    showBadges();
    showTaskTally();

}

// Adds tasks to local storage

function addTask() {

    const taskArr = JSON.parse(localStorage.getItem('newTask'));
    const newTask = new Task;
    taskArr.push(newTask);
    localStorage.setItem('newTask', JSON.stringify(taskArr));
    displayTasks("newTask");
    showBadges();
    showTaskTally();

}

// Removes tasks from local storage

function deleteTask(event, taskType) {

    const sisElement = event.target.previousElementSibling.previousElementSibling.innerHTML;
    const taskArr = JSON.parse(localStorage.getItem(taskType));
    const index = taskArr.indexOf(sisElement);
    taskArr.splice(index, 1);
    localStorage.setItem(taskType, JSON.stringify(taskArr));
    event.target.parentElement.remove();
    showBadges();
    showTaskTally();

}

// stores complete tasks to local storage

function completeTask(event) {

    const del = event.target.previousElementSibling;
    const statusEl = "complete";
    const dateEl = event.target.previousElementSibling.previousElementSibling.innerHTML;
    const titleEl = event.target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;

    const arr = { title: titleEl, date: dateEl, status: statusEl };
    const taskArr = JSON.parse(localStorage.getItem('completeTask'));
    const newTask = arr;
    taskArr.push(newTask);
    localStorage.setItem('completeTask', JSON.stringify(taskArr));
    del.click();
    displayTasks("completeTask");
    showBadges();
    showTaskTally();

}

// stores incomplete tasks to local storage

function incompleteTask() {

    const incompleteTaskDiv = document.getElementById('incompleteTask');
    incompleteTaskDiv.innerHTML = "";
    const incompleteTask = JSON.parse(localStorage.getItem('incompleteTask'));
    const newTask = JSON.parse(localStorage.getItem('newTask'));
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
                const status = "incomplete";
                const dateCreated = task[i].dateCreated;
                const arr = { title, date, status, dateCreated };

                incompleteTask.push(arr);
                localStorage.setItem('incompleteTask', JSON.stringify(incompleteTask));
                const array = task;
                array.splice(i, 1);
                localStorage.setItem(taskKey, JSON.stringify(array));
            }

        }


        displayTasks("newTask");
        displayTasks("ongoingTask");
        displayTasks("incompleteTask");

    }

    changeTaskStatusToIncomplete(newTask, "newTask");
    changeTaskStatusToIncomplete(ongoingTask, "ongoingTask");
    showBadges();
    showTaskTally();

}

// stores ongoing tasks to local storage
function ongoingTask() {

    const ongoingTask = JSON.parse(localStorage.getItem('ongoingTask'));
    const task = JSON.parse(localStorage.getItem('newTask'));
    const ongoingTaskDiv = document.getElementById("newTask");
    ongoingTaskDiv.innerHTML = "";

    for (let i = 0; i < task.length; i++) {

        Date.prototype.addHours = function (h) {
            this.setHours(this.getHours() + h);
            return this;
        }

        const now = new Date();
        const secLater = new Date(task[i].dateCreated);

        if (now > secLater.addHours(24)) {

            const title = task[i].title;
            const date = task[i].date;
            const status = "ongoing";
            const dateCreated = task[i].dateCreated;
            const arr = { title, date, status, dateCreated };

            ongoingTask.push(arr);
            localStorage.setItem('ongoingTask', JSON.stringify(ongoingTask));
            const array = task;
            array.splice(i, 1);
            localStorage.setItem('newTask', JSON.stringify(array));

        }

    }

    displayTasks("newTask");
    displayTasks("ongoingTask");
    showBadges();
    showTaskTally();

}



// BAGDE CODE - Displays status of the tasks 

function showBadges() {

    let newTaskBadge = document.getElementById("newTaskBadge");
    let ongoingTaskBadge = document.getElementById("ongoingTaskBadge");
    let incompleteTaskBadge = document.getElementById("incompleteTaskBadge");
    let completeTaskBadge = document.getElementById("completeTaskBadge");
    let allTaskBadge = document.getElementById("allTaskBadge");

    newTaskBadge.innerText = checkNumberOfTasks("newTask");
    ongoingTaskBadge.innerText = checkNumberOfTasks("ongoingTask");
    incompleteTaskBadge.innerText = checkNumberOfTasks("incompleteTask");
    completeTaskBadge.innerText = checkNumberOfTasks("completeTask");
    allTaskBadge.innerText = parseInt(newTaskBadge.textContent) + parseInt(ongoingTaskBadge.textContent) + parseInt(incompleteTaskBadge.textContent) + parseInt(completeTaskBadge.textContent);

}

// End Badge code

// Displays completed and outstanding task

function checkNumberOfTasks(task) {

    const taskStorage = JSON.parse(localStorage.getItem(task));
    let taskNum = 0;

    for (i = 0; i <= taskStorage.length; i++) {
        taskNum = i;
    }

    return taskNum;
}

function showTaskTally() {

    let taskCompleted = document.getElementById("taskCompleted");
    let taskOutstanding = document.getElementById("taskOutstanding");

    taskCompleted.innerText = checkNumberOfTasks("completeTask");
    taskOutstanding.innerText = checkNumberOfTasks("incompleteTask") + checkNumberOfTasks("ongoingTask") + checkNumberOfTasks("newTask");
}

//Test tasks

function testTasks() {

    function makeTestTask(task, taskArr) {
        const newArr = JSON.parse(localStorage.getItem(task));
        const newTask = taskArr;
        newArr.push(newTask);
        localStorage.setItem(task, JSON.stringify(newArr));
        displayTasks(task);
        showBadges();
        showTaskTally();
    }

    makeTestTask("ongoingTask", { title: "Send email to Karen.", date: "2022-12-01T09:30:00.000Z", status: "ongoing", dateCreated: "2021-12-14T21:43:48.979Z" })
    makeTestTask("incompleteTask", { title: "Send email to Devon.", date: "2020-12-17T09:30:00.000Z", status: "incomplete", dateCreated: "2020-12-14T21:43:48.979Z" })
    makeTestTask("newTask", { title: "Call Bill.", date: "2022-12-01T09:30:00.000Z", status: "new", dateCreated: "2021-12-14T21:43:48.979Z" })
    makeTestTask("completeTask", { title: "Complete Sales Presentation.", date: "2020-12-17T09:30:00.000Z", status: "complete", dateCreated: "2020-12-14T21:43:48.979Z" })

}



