
const searchCar = document.querySelector('#searchBtn')
const searchCar2 = document.querySelector('#searchBtn2')
const addCar = document.querySelector('#addCar')
const searchResult = document.querySelector('#searchResult')
const result = document.querySelector('#result')

const cars = [];





class Car {
    constructor(license, maker, model, owner, price, color) {
        this.carLicense = license;
        this.carMaker = maker;
        this.carModel = model;
        this.carOwner = owner;
        this.carPrice = price;
        this.carColor = color;
        this.carDisc = function () {
            this.carDiscount = 0;
        
            if (this.carPrice < 5000){
                this.carDiscount =  (this.carPrice)-(this.carPrice*0.1)
                return this.carDiscount
            }
        
        else if (5000 < this.carPrice < 20000){
            this.carDiscount =  (this.carPrice)-(this.carPrice*0.15)
            return this.carDiscount
        }
        else if (this.carPrice > 20000){
            this.carDiscount =  (this.carPrice)-(this.carPrice*0.25)
            return this.carDiscount
        }
        console.log(this.carDiscount)
        };
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
    const newCarDiscount = newCar.carDisc();
    console.log(newCarDiscount)
    cars.push(newCar)


   





    document.querySelector("#result").innerHTML = cars.map(car => 
        `<tr>
        <td>${car.carLicense}</td>
        <td>${car.carMaker}</td>
        <td>${car.carModel}</td>
        <td>${car.carOwner}</td>
        <td>${car.carPrice}</td>
        <td>${car.carColor}</td>
        </tr>`).join('')
}


//***** VERSION 1 *****


const searchByLicense = () => {
    const licenseInput = document.querySelector('#licenseNumber').value;
    const foundCar = cars.find(Car => Car.carLicense === licenseInput);

    const searchResult = document.querySelector('#searchResult');

    if (foundCar) {
        searchResult.innerText = `Yor car is: License-number: ${foundCar.carLicense}, Maker: ${foundCar.carMaker}, Model: ${foundCar.carModel}, Owner: ${foundCar.carOwner}, Price: ${foundCar.carPrice}, Color: ${foundCar.carColor}, ${foundCar.carDiscount}`;
      } else {
        searchResult.innerText = "Car not found";
      }
}

//***** VERSION 2 *****

const licenseInput2 = document.querySelector('#licenseNumber').value;

const searchByLicense2 = (licenseInput2) => {
    const searchResult = document.querySelector('#searchResult');

    for (let i=0; i < cars.length; i++) {
        if (cars[i].carLicense === licenseInput2) {
            return cars[i];
        }
        searchResult.innerText = `Yor car is: ${cars[i].carMaker}, Model: ${cars[i].carModel}, Owner: ${cars[i].carOwner}, Price: ${cars[i].carPrice}, Color: ${cars[i].carColor}, Discount: ${cars[i].carDiscount}`;
    }    
}


// function searchByLicense2(licenseInput2){
//     const found=[];
//     console.log(found)

//     for(const Car of cars){
//         if(Car.carLicense.includes(licenseInput2)){
//             found.push({
//                 carMaker:Car.carMaker,
//                 carModel:Car.carModel,
//             });
//         }    
//     }
//     return found;
// }





searchCar2.addEventListener('click', searchByLicense2)
searchCar.addEventListener('click', searchByLicense)
addCar.addEventListener('click', carPush)