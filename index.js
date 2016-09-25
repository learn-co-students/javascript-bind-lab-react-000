const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now() / 1000),
  startTicking: function() {
    setInterval(() => {
      this.time ++;
    }, 1000)
  }
}

const censor = (censorWord, content) => {
  return content.replace(new RegExp(censorWord, 'g'), 'BLEEP');
}

const violenceCensor = function(content){
  return censor('violence', content);
}
