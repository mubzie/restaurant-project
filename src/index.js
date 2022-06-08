import navBar from './header';
import { homePage } from './module/home';
import { menu } from './module/menu';

const render = () => {
    // const bodyContainer = document.getElementById('#content');
    const bodyContainer = document.createElement('div');

    bodyContainer.appendChild(navBar());
    // bodyContainer.appendChild(homePage());
    bodyContainer.appendChild(menu())

    return bodyContainer;
}

document.body.appendChild(render());