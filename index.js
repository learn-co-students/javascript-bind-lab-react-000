const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(() => {
      this.time ++;
    }, 1000)
  }
}
