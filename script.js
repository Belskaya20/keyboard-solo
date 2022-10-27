const wordChoose = document.querySelector('.word');
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
    ];
    const randWord = Math.floor(Math.random() * (words.length));
    return words[randWord];
}


//присвоили переменную для слова,которое берется в работу из Random и каждое из этих слов оборачивается в span
let wordNow = random();
spanWord(wordNow);

//Обернули слова в span
function spanWord(word) {
    wordChoose.innerHTML = word
      .split("")
      .map((it) => `<span>${it}</span>`)
      .join("");
  }


let i = 0;
document.addEventListener("keypress", (event) => {
    const spans = wordChoose.querySelectorAll("span");
    if (event.key === wordNow[i]) {
      spans[i].className = "c";
      i++;
    } else {
      event.key === wordNow[i];
      spans[i].className = "w";
      wordMistake.textContent = ++wordMistake.textContent;
      wrongCount.textContent = ++wrongCount.textContent;
      i++;
    }
    if (wordNow.length == i) {
      correctCount.textContent = ++correctCount.textContent;
      setTimeout(randomNextWord, 0);
    }
  });


//выбор след слова
function randomNextWord() {
    gameWord();
    wordNow = random();
    spanWord(wordNow);
    i = 0;
    wordMistake.textContent = 0;
}


function gameWord() {
    if (correctCount.textContent >= 10) {
    alert(`Правильных слов ${correctCount.textContent}, Слова с ошибками ${wrongCount.textContent}`);
    clearTimer();
    }
}




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
    clearInterval(timerStart);
    timer.textContent = `00:00`;
}
