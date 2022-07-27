// import { navBar }  from './header';
import { homePage } from './module/home';
import { menu } from './module/menu';
import { aboutUs } from './module/about';
import './header.css'

const navBar = () => {

    const createDiv = document.createElement('div');
    createDiv.classList.add('header');

    const navList = document.createElement('ul');
    navList.classList.add('nav');

    const homeBtn = document.createElement('li');
    homeBtn.classList.add('nav-list');
    homeBtn.textContent = 'Home';
    homeBtn.classList.add('nav-list-active');

    //the eventListener for home page
    homeBtn.addEventListener('click', () => {
        content.innerHTML = " ";
        document.body.appendChild(homePage());
        homeBtn.classList.toggle('nav-list-active');
        menuBtn.classList.remove('nav-list-active');
        aboutBtn.classList.remove('nav-list-active');
    })

    const menuBtn = document.createElement('li');
    menuBtn.classList.add('nav-list');
    menuBtn.textContent = 'Menu';

    //the eventListener for menu page
    menuBtn.addEventListener('click', () => {
        content.innerHTML = " ";
        document.body.appendChild(menu());
        homeBtn.classList.remove('nav-list-active');
        menuBtn.classList.toggle('nav-list-active');
        aboutBtn.classList.remove('nav-list-active');
    })

    const aboutBtn = document.createElement('li');
    aboutBtn.classList.add('nav-list');
    aboutBtn.textContent = 'About me';

    //the eventListener for about page
    aboutBtn.addEventListener('click', () => {
         content.innerHTML = " ";
         document.body.appendChild(aboutUs());
         homeBtn.classList.remove('nav-list-active');
         menuBtn.classList.remove('nav-list-active');
         aboutBtn.classList.toggle('nav-list-active');
    })

    navList.append(homeBtn, menuBtn, aboutBtn);

    createDiv.appendChild(navList);

    return createDiv;
}

document.body.append(navBar(), homePage());