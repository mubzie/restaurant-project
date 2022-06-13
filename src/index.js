// import { navBar }  from './header';
import { homePage } from './module/home';
import { menu } from './module/menu';
import { aboutUs } from './module/about';

const navBar = () => {

    const createDiv = document.createElement('div')
    createDiv.classList.add('header');

    const navList = document.createElement('ul');
    navList.classList.add('nav');

    const homeBtn = document.createElement('li');
    homeBtn.classList.add('nav-list');
    homeBtn.textContent = 'Home';

    homeBtn.addEventListener('click', (e) => {
        document.body.appendChild(homePage());
    })

    const menuBtn = document.createElement('li');
    menuBtn.classList.add('nav-list');
    menuBtn.textContent = 'Menu';

    menuBtn.addEventListener('click', () => {
        document.body.appendChild(menu());
    })

    const aboutBtn = document.createElement('li');
    aboutBtn.classList.add('nav-list');
    aboutBtn.textContent = 'About us';

    aboutBtn.addEventListener('click', () => {
        if(aboutBtn) {
            document.body.appendChild(aboutUs());
            return;
        }
    })

    navList.append(homeBtn, menuBtn, aboutBtn);

    createDiv.appendChild(navList);

    return createDiv;
}

// const render = () => {

//     const bodyContainer = document.createElement('div');

//     bodyContainer.append(navBar(), homePage(), menu(), aboutUs());

//     return bodyContainer;
// }

document.body.append(navBar(), homePage());