let header__burger = document.querySelector('.header__burger');
let header__list = document.querySelector('.header__list');
let back = document.querySelector('body');
let header__flex = document.querySelector('header__flex');


header__burger.onclick = function(){
	header__burger.classList.toggle('active');
	header__list.classList.toggle('active');
	back.classList.toggle('lock');
}

header__flex.onclick = function(){
	header__flex.classList.remove('active');
	back.classList.toggle('lock');
}