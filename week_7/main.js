
const searchCar = document.querySelector('#searchBtn')
const addCar = document.querySelector('#addCar')
const searchResult = document.querySelector('#searchResult')
const result = document.querySelector('#result')

const cars = [];
class Car {
    constructor(licence, maker, model, owner, price, color) {
        this.carLicence = licence;
        this.carMaker = maker;
        this.carModel = model;
        this.carOwner = owner;
        this.carPrice = price;
        this.carColor = color;
    }
}



function carPush (event){
    event.preventDefault()
    const newLicense = document.querySelector('#license').value;
    const newMaker = document.querySelector('#maker').value;
    const newModel = document.querySelector('#model').value;
    const newOwner = document.querySelector('#owner').value;
    const newPrice = document.querySelector('#price').value;
    const newColor = document.querySelector('#color').value;
    const newCar = new Car(newLicense, newMaker, newModel, newOwner, newPrice, newColor)
    cars.push(newCar)
    // result.textContent = JSON.stringify(cars, null, 4)


    document.querySelector("#result").innerHTML = cars.map(car => 
        `<td>
        <td>${car.carLicence}</td>
        <td>${car.carMaker}</td>
        <td>${car.carModel}</td>
        <td>${car.carOwner}</td>
        <td>${car.carPrice}</td>
        <td>${car.carColor}</td>
        </tr>`).join('')
}
console.log(cars)

// localStorage.setItem(newLicense, newMaker, newModel, newOwner, newPrice, newColor)





addCar.addEventListener('click', carPush)