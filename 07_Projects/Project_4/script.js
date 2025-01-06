let randomNo = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#sbmt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resulParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let playGame = true

if (playGame) {
    submit.addEventListener('click', function(e) {
        e.preventDefault()

        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('Please Enter a Valid Number.')
    } else if (guess < 1) {
        alert('Please Enter a Number Between 1-100.')
    } else if (guess > 100) {
        alert('Please Enter a Number Between 1-100.')
    } else {
        prevGuess.push(guess)
        if (numGuess > 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random Number was ${randomNo} .`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNo) {
        displayMessage(`You Guessed it Right.`)
        endGame()
    } else if (guess < randomNo) {
        displayMessage(`Number is Too Low.`)
    } else if (guess > randomNo) {
        displayMessage(`Number is Too High.`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess} , `
    numGuess++
    remaining.innerHTML = `${10 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game</h2>'
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNo = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}