//====== SELECTORS ======


const searchBtn = document.querySelector('.search-box--icon');
const searchInp = document.querySelector('.search-box--input');
const searchBox = document.querySelector('.search-box');
const openMenu = document.querySelector('.open-side-menu');
const sideMenu = document.querySelector('.side-nav');


//====== EVENT LISTENERS ======


searchBtn.addEventListener('mouseenter', openInput);
searchBox.addEventListener('mouseleave', closeInput);
openMenu.addEventListener('click', openSideNav);


//====== FUNCTIONS ======


function openInput() { searchInp.classList.add('open'); }

function closeInput() { searchInp.classList.remove('open'); }

function openSideNav() { 
    sideMenu.classList.toggle('open'); 
    openMenu.classList.toggle('open'); 
}