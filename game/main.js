const circles = document.querySelectorAll('.circle');
const closeButton = document.querySelector('#close');
const startButton = document.querySelector('#start');
const endButton = document.querySelector('#end');
const scoreSpan = document.querySelector('.score');
const scoreEnd = document.querySelector('.scoreEnd');
const overlay = document.querySelector('.overlay');


let score =0;
let active =0;
let timer
let pace = 2000
let rounds = 0






circles.forEach((circle, i) => {
    circle.addEventListener('click', () => clickCircle(i))

}
)

const getRndInt = (min, max) => Math.floor(Math.random() * (max - min+1) ) + min;

const clickCircle = (i) => {
    if(i !== active){
        return endGame()
    }
    console.log('circle index: ', i)
    score+=10
    scoreSpan.textContent = score
}

const enableCircles = () =>{
    circles.forEach(circle =>{
        circle.style.pointerEvents = 'auto'
    })
}

const startGame = () =>{
    console.log('game started')
    if(rounds >=3){
        return endGame()
    }
    startButton.classList.add('hidden')
    endButton.classList.remove('hidden')
    enableCircles()
    const nextActive = pickNew (active)
    circles[nextActive].classList.toggle('active')
    circles[active].classList.remove('active')
    active = nextActive;
    timer = setTimeout(startGame, pace) // we can write just 1000, but we declare "pace" - above
    pace -=10
    rounds++
    console.log(nextActive)
    function pickNew (active){
        const nextActive = getRndInt (0, 3)
        if (nextActive !== active) {
            return nextActive
        }
        return pickNew (active)
    }
}

const endGame = () =>{
    scoreEnd.textContent = score
    overlay.style.visibility = 'visible'
    endButton.classList.remove('hidden')
    startButton.classList.add('hidden')
    console.log('game ended')
    clearTimeout(timer)
}



const resetGame = () => {
    window.location.reload()
}


startButton.addEventListener('click', startGame)
endButton.addEventListener('click', endGame)
closeButton.addEventListener('click', resetGame)