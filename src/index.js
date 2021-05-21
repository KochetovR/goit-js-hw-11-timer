import './sass/main.scss';

const dayIndex = document.querySelector('[data-value="days"]')
const hourIndex = document.querySelector('[data-value="hours"]')
const minuteIndex = document.querySelector('[data-value="mins"]')
const secIndex = document.querySelector('[data-value="secs"]')

class CountdownTimer {
    constructor({onTick, targetDate}) {
        this.onTick = onTick;
        this.start()
        this.targetDate = targetDate
    }
    start() {
        setInterval (() => {
            const startTime = Date.now();
            const lastTime = this.targetDate.getTime() - startTime;
            const timeComp = getTimeComp(lastTime)

            this.onTick(timeComp)
        },1000);
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    onTick: updateTimeLast,
    targetDate: new Date('Dec 31, 2021'),
});

function updateTimeLast({days, hours, mins, secs}) {
    dayIndex.textContent = days;
    hourIndex.textContent = hours;
    minuteIndex.textContent = mins;
    secIndex.textContent = secs;
}

  function pad(value) {
      return String(value).padStart(2, '0')
  }

  function getTimeComp(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return {days, hours, mins, secs};
}
