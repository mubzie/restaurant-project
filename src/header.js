import './header.css'


const navBar = () => {
    const createDiv = document.createElement('div')
    createDiv.classList.add('header');

    const navList = document.createElement('ul');
    navList.classList.add('nav');

    const homeBtn = document.createElement('li');
    homeBtn.classList.add('nav-list');
    homeBtn.textContent = 'Home';

    const menuBtn = document.createElement('li');
    menuBtn.classList.add('nav-list');
    menuBtn.textContent = 'Menu';

    const aboutBtn = document.createElement('li');
    aboutBtn.classList.add('nav-list');
    aboutBtn.textContent = 'About us';

    navList.appendChild(homeBtn);
    navList.appendChild(menuBtn);
    navList.appendChild(aboutBtn);

    createDiv.appendChild(navList);

    return createDiv;
}



export { navBar };