// import { navBar }  from './header';
import { homePage } from './module/home';
import { menu } from './module/menu';
import { aboutUs } from './module/about';
import './header.css'

const navBar = () => {

    const createDiv = document.createElement('div')
    createDiv.classList.add('header');

    const navList = document.createElement('ul');
    navList.classList.add('nav');

    const homeBtn = document.createElement('li');
    homeBtn.classList.add('nav-list');
    homeBtn.textContent = 'Home';

    //the eventListener for home page
    homeBtn.addEventListener('click', () => {
        content.innerHTML = " ";
        document.body.appendChild(homePage());
    })

    const menuBtn = document.createElement('li');
    menuBtn.classList.add('nav-list');
    menuBtn.textContent = 'Menu';

    //the eventListener for menu page
    menuBtn.addEventListener('click', () => {
        content.innerHTML = " ";
        document.body.appendChild(menu());
        
    })

    const aboutBtn = document.createElement('li');
    aboutBtn.classList.add('nav-list');
    aboutBtn.textContent = 'About us';

    //the eventListener for about page
    aboutBtn.addEventListener('click', () => {
     content.innerHTML = " ";
     document.body.appendChild(aboutUs());
    })

    navList.append(homeBtn, menuBtn, aboutBtn);

    createDiv.appendChild(navList);

    return createDiv;
}

document.body.append(navBar(), homePage());