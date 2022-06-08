import '../style/menu.css'
import card from '../images/card.jpg'

const menu = () => {
    const wrapperContainer = document.createElement('div');
    wrapperContainer.classList.add('wrapper-container');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');

    // const cardImage = document.createElement('img')
    // cardImage.src = "../images/card.jpg";

    const cardImage = new Image();
    cardImage.src = card;

    const h1 = document.createElement('div');
    h1.classList.add('card-h1')
    h1.textContent = 'rice and beans'

    const para = document.createElement('div');
    para.classList.add('card-description');
    para.textContent = 'this is a very delicious meal mf. this is a very delicious meal mf'

    const button = document.createElement('button');
    button.classList.add('card-btn')
    button.textContent = '$400'

    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(h1)
    cardContainer.appendChild(para)
    cardContainer.appendChild(button)

    wrapperContainer.appendChild(cardContainer);

    return wrapperContainer;

}

export { menu }