class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks ) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
    }
    start = () => {
        if (+this.durationInput.value <= 0)  return
        if (this.onStart) this.onStart(this.timeLeft);
        this.tick();
        this.intervalId = setInterval(this.tick, 10);
    }
    pause = () => {
        clearInterval(this.intervalId)
    }
    tick = () => {
        if (this.timeLeft <= 0)  {
            this.pause()
            if (this.onComplete) this.onComplete();
        }
        else {
            this.timeLeft = this.timeLeft - 0.01;   
            if (this.onTick) this.onTick(this.timeLeft);
        }
    }
    get timeLeft() {
        return parseFloat(this.durationInput.value)
    }
    set timeLeft(time) {
        this.durationInput.value = time.toFixed(2);
    }
}
