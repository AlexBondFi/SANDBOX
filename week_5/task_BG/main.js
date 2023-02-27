const form = document.querySelector('form');



const colorLeft = document.querySelector('#colorLeft');
const colorRight = document.querySelector('#colorRight');
const radioCheck = document.querySelectorAll('input[name="arrow"]');

const text = document.querySelector('#cssCode');

const LGfunction = () => {

    console.log(radioCheck);

let dirValue, code;

    for (const item of radioCheck) {
        if(item.checked) {
            dirValue = item.value
        }
    }


    code = `linear-gradient(${dirValue}, ${colorLeft.value}, ${colorRight.value})`;

    document.body.style.backgroundImage = code;


    text.textContent = code;
    
};


form.addEventListener('change', LGfunction);