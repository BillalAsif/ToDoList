//Timer
let counterDisplay = document.getElementById("counter");
let currentCount = 0;
counterDisplay.innerHTML = currentCount;
const startButton = document.getElementById("startButton").addEventListener('click', () => {
    const count = currentCount;
    startCounter(count);
});
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
    if (currentCount === 0 && count < 0) {
        alert('Can not decrease timer below zreo!');
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


function startCounter(count) {
    for (i = -0; i < count; i++) {
        setTimeout(minusCountByOne(), 1000);
    }
}

function minusCountByOne() {
    currentCount = currentCount - 1;
    counterDisplay.innerHTML = currentCount;
}

//Check this out.
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_settimeout_clock
