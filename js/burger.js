(function (){
    let burger = document.querySelector('.header__burger');
    let nav = document.querySelector('.header__nav');
    burger.addEventListener('click', () => {
    burger.classList.toggle('header__active');
    nav.classList.toggle('burger__active');
});
}());