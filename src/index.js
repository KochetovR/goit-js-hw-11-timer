import './sass/main.scss';

class CountdownTimer {
    constructor({selector, targetDate}) {
        this.start();
        this.getTimeComp();
        this.selector = selector;
        this.targetDate = targetDate;

        this.dayIndex = document.querySelector(`${selector} [data-value="days"]`)
        this.hourIndex = document.querySelector(`${selector} [data-value="hours"]`)
        this.minuteIndex = document.querySelector(`${selector} [data-value="mins"]`)
        this.secIndex = document.querySelector(`${selector} [data-value="secs"]`)
    }

    start() {
        setInterval (() => {
            const startTime = Date.now();
            const lastTime = this.targetDate.getTime() - startTime;
            const timeComp = this.getTimeComp(lastTime)
            this.updateTimeLast(timeComp)
        },1000);
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
  
    getTimeComp(time) {
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
  
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
  
      return {days, hours, mins, secs};
  }

  updateTimeLast({days, hours, mins, secs}) {
    this.dayIndex.textContent = days;
    this.hourIndex.textContent = hours;
    this.minuteIndex.textContent = mins;
    this.secIndex.textContent = secs;
    }
}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2021'),
});

const summer = new CountdownTimer({
    selector: '#summer',
    targetDate: new Date('Aug 31, 2021'),
});


  
