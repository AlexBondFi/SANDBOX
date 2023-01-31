const calcGasoline = () => {
    const price = Number (document.getElementById('price').value);
    const money = +document.querySelector('#money').value; // same as above
    const answer = document.querySelector('#answer');


let text;

const amount = Math.floor(money / price);

if (amount >= 10) {
    text=`you could get about ${amount} liters. Good, now you can go.`;
}
else {
    text=`you could get about ${amount} liters. Sry, you have to stay.`;
}


    // console.log('prise is:', price);
    // console.log('money is:', money);

    answer.textContent = text; // answer is variable. same as text
};

//####################################################################

const convertor = (id, value) => {
    const val = parseFloat(value);

    const cel = document.querySelector('#celsius')
    const fah = document.querySelector('#fahrenheit')
    const kel = document.querySelector('#kelvin')

    if (id === "celsius") {
        fah.value = (val * 1.8 + 32).toFixed(2);
        kel.value = (val + 273.15).toFixed(2);

    }
    if (id === "fahrenheit") {
        cel.value = ((val - 32) / 1.8).toFixed(2);
        kel.value = ((val - 32) / 1.8 + 273.15).toFixed(2);

    }
    if (id === "kelvin") {
        fah.value = (val - 273.15).toFixed(2);
        cel.value = ((val - 273.15) * 1.8 + 32).toFixed(2);

    }
};

   

    
    



// const paragraphs = document.querySelectorAll('p');
// const inputs = document.querySelectorAll('input');

// paragraphs.forEach((paragraph) => {
//     paragraph.textContent = 'Hello world!';
// });
// inputs.forEach((input) => {
//     input.value = 100;
// });