
const pizzastotal = document.querySelectorAll('.sizes');

const countpizzas = (event) => {
    parseFloat(event.target.dataset.cost);

    console.log(countpizzas)
}

pizzastotal.forEach(pizzastotal => {
    pizzastotal.addEventListener('click', countpizzas);
})

answer.textContent = event;
// countpizzasData ???

// const addingstotal = document.querySelectorAll('.addings');

// const countaddings = (event) => {
//     event.target;
//     console.log(countaddings)
// }

// addingstotal.forEach(addingstotal => {
//     addingstotal.addEventListener('click', countaddings);
// })






