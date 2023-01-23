"Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)"

for (let i=1; i<100; i+=2) {
    console.log(i);
}

"Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 … Print result in one line."

let answer = '';
let end = 98;

for (let i = 2; i < 100; i+=2){
    answer += ' ' + i + ' ';
    answer += ' ' + end + ' ';
    end -=2;
}
console.log(answer)


"Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)"

let distance, time;

while (distance != 0) {
    distance = Number(prompt("distance"));

    if (distance == 0) {
        console.log('distance 0');
        break;
    }
    time = Number(prompt("time"));
    let speed = distance / time;
    console.log(speed);
}

"Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even."

let digit, count = 0;

for (i=0; i<5; i++) {
    digit = Number(prompt("digit"));
    if (digit % 2 == 0) {
        count +=1;
    }    
}
console.log('Numder of even numbers:', count);


"Make a program that asks numbers from the user, until user gives 0 and then program ends. In the end program prints out average of the numbers."

let digit, total =0, count =0, avg =0;
digit = Number(prompt("Please enter a number not 0"));

if(result == 0){
    alert("Achtung!");
}
else{
    while(digit != 0){
        total = digit + total;
        count++;
        avg = total / 5;
        digit = Number(prompt("Please enter a number not 0"));
    }
    console.log(avg);
}



"Make a program that asks 25 numbers form the user. In the end program prints out average of the numbers."

let digit, total =0, avg =0;
digit = Number(prompt("Please enter a number"));
for (i =0; i<5; i++) {
    total = digit + total;
    avg = total / i;
    digit = Number(prompt("Please enter a number"));
}
console.log(avg);

"Make a program that ask first one number from the user. After that the program asks: ”Do you want to continue giving numbers?(y/n)”. If user answers y, the program continues to ask another number. If user answers n, program ends. In the end program prints out average of the numbers."

let digit, total =0, avg =0, count =0;
digit = Number(prompt("Please enter a number"));
do {
    total = digit + total;
    count++;
    avg = total / count;
    digit = Number(prompt("Please enter a number"));
    question = (prompt("Do you want to continue giving numbers?(y/n)"))
}
while(question = 1)

if (question = 2) {
    console.log(avg);
}

"Make a program that asks first how many numbers user wants to give to the program. After that program asks those numbers. In the end program prints out the smallest number that user gave."