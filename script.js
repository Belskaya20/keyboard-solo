const spans = document.querySelectorAll('.word');
const timer = document.getElementById('timer');

function random () {
    const words = [
        'mother', 'world', 'work', 'friend', 'book', 'idea',
        'cat', 'mountain', 'fish', 'letter', 'girl', 'boy',
        'paper', 'family', 'ship', 'wind', 'moon', 'song',
        'potato', 'pig', 'rich', 'king', 'yellow', 'blue',
        'pen', 'phone', 'son', 'travel', 'six', 'morning'
    ]

    const randWord = Math.floor(Math.random()*(words.length));
    spans.innerHTML = words;
    return words[randWord];
}


let i = 0;
document.addEventListener ('keypress', (event) => {
    if (event.key == word[i]) {
        spans[i].className = "c"
        i++;
       }
})


let ssec = '00';
let min = '00';


const timerStart = setInterval(() => {
document.getElementById('timer').innerHTML = `${min}:${ssec}`;

if (ssec < 59) {
    ssec++;
} else {
    min++;
    ssec = 0;
}
ssec = ssec < 10 ? '0' + ssec : ssec;
min = min < 10 ? '0' + min : min;
}, 1000);

function clearTimer() {
    clearInterval(funcTimer);
    timer.textContent = `00:00`;
}

random();