import '../style/menu.css'
import card from '../images/card.jpg'
import card2 from '../images/card2.jpg'
import card3 from '../images/card3.jpg'
import food from '../images/food.jpg'


const menu = () => {

    const wrapperContainer = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('wrapper-container');

    const cardContainer1 = document.createElement('div');
    cardContainer1.classList.add('card-container');

    const cardImage = new Image();
    cardImage.src = card;

    const h1 = document.createElement('div');
    h1.classList.add('card-h1')
    h1.textContent = 'spaghetti';

    const para = document.createElement('div');
    para.classList.add('card-description');
    para.textContent = 'this is a very delicious meal yk. this is a very delicious meal yk'

    const button = document.createElement('button');
    button.classList.add('card-btn')
    button.textContent = '$4.85';

    cardContainer1.append(cardImage, h1, para, button);

    const cardContainer2 = document.createElement('div');
    cardContainer2.classList.add('card-container');

    const cardImage2 = new Image();
    cardImage2.src = food;

    const h1_2 = document.createElement('div');
    h1_2.classList.add('card-h1')
    h1_2.textContent = 'fruit rice';

    const para_2 = document.createElement('div');
    para_2.classList.add('card-description');
    para_2.textContent = 'this is a very delicious meal yk. this is a very delicious meal yk'

    const button_2 = document.createElement('button');
    button_2.classList.add('card-btn')
    button_2.textContent = '$5.99'

    cardContainer2.append(cardImage2, h1_2, para_2, button_2);

    const cardContainer3 = document.createElement('div');
    cardContainer3.classList.add('card-container');

    const cardImage3 = new Image();
    cardImage3.src = card3;

    const h1_3 = document.createElement('div');
    h1_3.classList.add('card-h1')
    h1_3.textContent = 'hamburger';

    const para_3 = document.createElement('div');
    para_3.classList.add('card-description');
    para_3.textContent = 'this is a very delicious meal yk. this is a very delicious meal yk'

    const button_3 = document.createElement('button');
    button_3.classList.add('card-btn')
    button_3.textContent = '$9.50'

    cardContainer3.append(cardImage3, h1_3, para_3, button_3);

    mainContainer.append(cardContainer1, cardContainer2, cardContainer3);

    wrapperContainer.appendChild(mainContainer);

    return wrapperContainer;

}

export { menu }