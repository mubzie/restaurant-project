import { navBar }  from './header';
import { homePage } from './module/home';
import { menu } from './module/menu';
import { aboutUs } from './module/about';

const render = () => {
    // const bodyContainer = document.getElementById('#content');
    const bodyContainer = document.createElement('div');

    bodyContainer.appendChild(navBar());
    bodyContainer.appendChild(homePage());
    // bodyContainer.appendChild(menu());
    // bodyContainer.appendChild(aboutUs());

    return bodyContainer;
}

document.body.appendChild(render());