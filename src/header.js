import './header.css'

const navBar = () => {
    const createDiv = document.createElement('div')
    createDiv.classList.add('header');

    const navList = document.createElement('div');
    navList.classList.add('nav');

    const homeBtn = document.createElement('button');
    homeBtn.classList.add('header');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('button');
    menuBtn.classList.add('header');
    menuBtn.textContent = 'Menu';

    const aboutBtn = document.createElement('button');
    aboutBtn.classList.add('header');
    aboutBtn.textContent = 'About us';

    navList.appendChild(homeBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(aboutBtn);

    createDiv.appendChild(navList);

    return createDiv;
}

export default navBar;