const digitalClock = {
    time: Math.round(Date.now() / 1000),
    startTicking: function() {
        setInterval(() => this.time++, 1000);
    }
};

const censor = (word, string) => {
    const badWord = new RegExp(word, 'gi');
    return string.replace(badWord, 'BLEEP');
}

const violenceCensor = (string) => {
    return censor('violence', string);
}


const drugsCensor = (string) => {
    return censor('drugs', string);
}
