const app = "I don't do much.";

const digitalClock = {
  time: Math.round(Date.now()/1000),
  startTicking: function() {
    setInterval(function(){
      this.time += 1
    }.bind(this), 1000)
  }
};

function censor(word, string){
  const regex = new RegExp(word, "g");
  return string.replace(regex, "BLEEP");
}

const violenceCensor = censor.bind(null, "violence");

const drugsCensor = censor.bind(null, "drugs");
