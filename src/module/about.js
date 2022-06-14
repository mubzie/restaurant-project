import '../style/about.css'
import chef from '../images/chef.png'

const aboutUs = () => {

    const wrapperContainer = document.getElementById('content');
    wrapperContainer.classList.add('wrapper-container-about');

    const infoText = document.createElement('div');
    infoText.classList.add('info-text');
    infoText.textContent = 'Meet Our Chef';

    const chefContainer = document.createElement('div');
    chefContainer.classList.add('chef-container');

    const chefImage = new Image();
    chefImage.src = chef;

    const chefInfo = document.createElement('div');
    chefInfo.classList.add('chef-info');

    const chefName = document.createElement('div');
    chefName.classList.add('h1-about');
    chefName.textContent = 'Mubarak Rabiu';

    const chefDetails = document.createElement('div');
    chefDetails.classList.add('para-about');
    chefDetails.textContent = 'tbh, i am the agba cooker you\'ve been hearing about'

    const chefSocialMediaPage = document.createElement('div');
    chefSocialMediaPage.classList.add('chef-sm-page');

    const twitterBtn = document.createElement('button');
    twitterBtn.classList.add('about');
    twitterBtn.textContent = 'twitter';

    const youtubeBtn = document.createElement('button');
    youtubeBtn.classList.add('about');
    youtubeBtn.textContent = 'youtube';

    const linkedinBtn = document.createElement('button');
    linkedinBtn.classList.add('about');
    linkedinBtn.textContent = 'linkedin';

    chefInfo.append(chefName, chefDetails);

    chefSocialMediaPage.append(twitterBtn, youtubeBtn, linkedinBtn);

    chefContainer.append(chefImage, chefInfo, chefSocialMediaPage);

    wrapperContainer.append(infoText, chefContainer);

    return wrapperContainer;

}

export { aboutUs };