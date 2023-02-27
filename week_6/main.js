const backButton = document.querySelector('#toTop');
const header = document.querySelector('header');
const topButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul')
const menuItems = document.querySelectorAll('nav ul li a');
const modalButton = document.querySelector('.target')
const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.close')


window.onscroll = function(){
    scrollFunction()
};

const scrollFunction = () => { 
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
        backButton.style.display = 'block';
        header.classList.add('bg')

    } else{
        backButton.style.display = 'none'
        header.classList.remove('bg')
    }
};

const toTopp = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

const toMenu = () => {
    for(const menuItem of menuItems){
        menuItem.addEventListener('click', toMenu)
    }
    if (nav.classList.contains('responsive')){
        nav.classList.remove('responsive')
    }
    else{
        nav.classList.add('responsive')
    }
}

const modalShow = () => {
    overlay.classList.toggle('visible')
}

backButton.addEventListener('click', toTopp)
topButton.addEventListener('click', toMenu)
modalButton.addEventListener('click', modalShow)
closeButton.addEventListener('click', modalShow)