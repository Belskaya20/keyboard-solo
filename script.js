const word = document.querySelectorAll('.word');
const timer = document.getElementById('timer');
const wrongCount = document.querySelector('.wrong-count');
const wordMistake = document.querySelector('.word-mistakes');
const correctCount = document.querySelector('.correct-count');

function random() {
    const words = [
        'mother', 'world', 'work', 'friend', 'book', 'idea',
        'cat', 'mountain', 'fish', 'letter', 'girl', 'boy',
        'paper', 'family', 'ship', 'wind', 'moon', 'song',
        'potato', 'pig', 'rich', 'king', 'yellow', 'blue',
        'pen', 'phone', 'son', 'travel', 'six', 'morning'
    ]

    const randWord = Math.floor(Math.random() * (words.length));
    return words[randWord];
}


function insertWord(words) {
    word.innerHTML = words;
}
const newWord = random();
insertWord(newWord);


let i = 0;
document.addEventListener('keypress', (event) => {
    if (event.key == newWord[i]) {
        word[i].className = "c"
        i++;
    } else {
        event.key == newWord[i];
        word[i].className = "w"
        wrongCount.textContent = ++wrongCount.textContent;
        wordMistake.textContent = ++wordMistake.textContent;
        i++;
    }
    if (randWord == length.newWord) {
        correctCount.textContent = ++correctCount.textContent;
        clearTimeout(timer);
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
}, 1000);

function clearTimer() {
    clearInterval(funcTimer);
    timer.textContent = `00:00`;
}
