//Timer
const startButton = document.getElementById("startButton").addEventListener('click', () => { });
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
let counterDisplay = document.getElementById("counter");
let currentCount = 0;
counterDisplay.innerHTML = currentCount;


updateCounter = (count) => {
    if (currentCount === 0 && count < 0) {
        alert('Can not decreament timer below zreo!');
    }
    else if (count === 0) {
        currentCount = 0;
        counterDisplay.innerHTML = currentCount;
    }
    else {
        currentCount += count;
        counterDisplay.innerHTML = currentCount;
    }
}

async function oneSecondPassed() {
    await new Promise(resolve => setTimeout(resolve, 1000));
}


startCounter = () => {
    for (let i = 0; i <= currentCount.length; i--) {
        currentCount -= 1;
        oneSecondPassed();
        counterDisplay.innerHTML = currentCount;
    }
}


