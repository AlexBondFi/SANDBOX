npm - node package manager

npm install eslint
npm init @eslint/config

when we push to github, we make ".gitignore" file and list in it all files and folders what we don't want to push.
When we make pull we type just "npm install". "package.json" has all information of libraries we needed and will install them.

"Nopeuspeli" game

Title
Score bar
4 circles
button to start (durin the game it is a stop button)

highlight of circle - is a picture (own theme)

when gameover - see modal with score (text deppending on score)
If you miss 3 times - lose
same button can't be twice
speed grow via gaming
wrong circle - game over

1. button (check with console)
2. circles (make clickable and which is clicked)
3. update score after click
4. display score
5. find random number for highlights
6. no same number twice
7. add timer (set time out)
8. increase the speed every new number
9. connect circle and number
10. all circles are unclickable
11. use conditions to start and stop the game (button display none, display block)
12. add modal on end game
13. 3 triggers to stop the game
14. sound on click, start and stop
15. url ready

random number:
function getRndInteger(min, max) {
return Math.floor(Math.random() \* (max - min + 1) ) + min;
}

Functions:
startGame
endGame - global
clickCircle (check the click) clickButton
pickNew - pick the wen random number (inside start)
enableCircles - on off clickability of circles
resetGame - close for modal

var:

score
active - current active number (highlight )
timer - set timeout (start on, endGame kill it) global
pace - how many times you miss
rounds

setTimeout

clearTimeout - end game

generator = () => {
let lastDigit = null;
let currentDigit = null;
do {
currentDigit = Math.floor(Math.random() \* 4)+1;
} while (currentDigit === lastDigit);
lastDigit = currentDigit;
return currentDigit;
}
let generatedNumber = generator();

ringSwitch = () => {
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
