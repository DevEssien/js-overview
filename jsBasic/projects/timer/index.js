
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const durationInput = document.querySelector('#duration');
const circle = document.querySelector('circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);

let duration;

const newTimer = new Timer(durationInput, startBtn, pauseBtn, {
    
    onStart(totalDuration) {
        duration = totalDuration;
        console.log(totalDuration)
        console.log('Timer started');
    },
    onTick(timeLeft) {
        const currentOffset = perimeter * (timeLeft / duration) - perimeter
        circle.setAttribute('stroke-dashoffset', currentOffset);
    },
    onComplete() {
        console.log('Timer completed')
    }
})
