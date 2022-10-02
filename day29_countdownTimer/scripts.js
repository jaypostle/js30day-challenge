let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    // pause any existing timer
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    // run display immediately once and again once the timer starts
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        // check if we should stop
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    // padded zero
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    console.log({minutes, remainderSeconds});
}

function displayEndTime(timestamp) {
    // turn time stamp into a date
    const end = new Date(timestamp); // number of miliseconds since 1970, passing new Date a miliseconds value will give you a new date
    const hour = end.getHours();
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back at ${hour > 12 ? hour - 12 : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}


buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer() {
    
    console.log(this);
    let time = this.getAttribute('data-time');
    // ORRRRR
    // this.dataset.time // then parse it into an int // parseInt(this.dataset.time)

    // run timer with the button's data-time attribute
    timer(time);
}

document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});