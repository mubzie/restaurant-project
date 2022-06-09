import navBar from "../header";
import '../style/home.css'
import food from '../images/food.jpg';

const homePage = () => {

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const h1 = document.createElement('div');
    h1.classList.add('h1');
    h1.textContent = "this is some glorious text"
    
    const para = document.createElement('div');
    para.classList.add('para');
    para.textContent = "this will be a very long text. i will come back to write a very long one but."

    textContainer.appendChild(h1);
    textContainer.appendChild(para);


    mainContainer.appendChild(textContainer);

    return mainContainer;
}

export { homePage };
