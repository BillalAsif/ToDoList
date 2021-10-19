//Timer

const startButton = document.getElementById("startButton").addEventListener('click', () => { });
const pauseButton = document.getElementById("pauseButton").addEventListener('click', () => { });
const resetButton = document.getElementById("resetButton").addEventListener('click', () => { });
const increaseCount = document.getElementById("increaseCount").addEventListener('click', () => {
    updateCounter(15);
});

updateCounter = (count) => {
    let currentCount;
    currentCount += count;
    const counter = document.getElementById("counter").innerHTML = currentCount;
}