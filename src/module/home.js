import '../style/home.css'

const homePage = () => {

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const h1 = document.createElement('div');
    h1.classList.add('h1');
    h1.textContent = "Welcome to Marabel's Catering"
    
    const para = document.createElement('div');
    para.classList.add('para');
    para.textContent = "Your home of tasty meal and beautiful experience. We call it taste with a smile 😀.";

    const MenuBtn = document.createElement('button');
    MenuBtn.classList.add('menu-btn');
    MenuBtn.textContent = "check our menu";

    textContainer.append(h1, para);

    mainContainer.append(textContainer, MenuBtn);
    
    return mainContainer;

}

export { homePage };
