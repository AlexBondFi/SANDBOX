const startButton = document.querySelector('#startGame')
const rings = document.querySelectorAll('.ring')
const ring1 = document.querySelector('#ring1')
const ring2 = document.querySelector('#ring2')
const ring3 = document.querySelector('#ring3')
const ring4 = document.querySelector('#ring4')
const scoreDisplay = document.querySelector('#scoreDisplay')
const launch = () =>{
    startButton.innerText = "STOP"

}





generator = () => {
    let lastDigit = null;
    let currentDigit = null;
    do {
      currentDigit = Math.floor(Math.random() * 4)+1;
    } while (currentDigit === lastDigit);
    lastDigit = currentDigit;
    return currentDigit;
  }
let generatedNumber = generator();

console.log(generatedNumber)

const ringSwitch = () => {
ring1.classList.remove("targetring");
ring2.classList.remove("targetring");
ring3.classList.remove("targetring");
ring4.classList.remove("targetring");
switch (generatedNumber) {
    case 1:
        ring1.classList.toggle("targetring");
        break;
    case 2:
        ring2.classList.toggle("targetring");
        break;
    case 3:
        ring3.classList.toggle("targetring");
        break;
    case 4:
        ring4.classList.toggle("targetring");
        break;
}
}




const startGame = () => {
  setInterval((generator, 1000));
  ringSwitch();
}


let score = 0;

const handleClick= (event) => {
    const clickedButton = event.target;
    if (clickedButton.classList.contains("targetring")) {
      score++;
      scoreDisplay.textContent = score;
    }
  }

// which button is pressed

// const clickButton = (i) =>{
//     console.log('i :',i);
// }
// console.log(clickButton)

rings.forEach((ring, i) => {
    ring.addEventListener('click', () => handleClick(i))
});


startButton.addEventListener('click', launch)
startButton.addEventListener('click', startGame)