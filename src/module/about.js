import '../style/about.css'
import chef from '../images/chef.jpg'

const aboutUs = () => {

    const wrapperContainer = document.getElementById('content');

    const mainContainer = document.createElement('div');
    mainContainer.classList.add('wrapper-container-about');

    // const infoText = document.createElement('div');
    // infoText.classList.add('info-text');
    // infoText.textContent = 'Meet Our Chef';

    const chefContainer = document.createElement('div');
    chefContainer.classList.add('chef-container');

    const chefImage = new Image();
    chefImage.classList.add('about-us-img');
    chefImage.src = chef;

    const chefInfoContainer = document.createElement('div');
    chefInfoContainer.classList.add('chef-info-container');

    const chefInfo = document.createElement('div');
    chefInfo.classList.add('chef-info');

    const chefName = document.createElement('div');
    chefName.classList.add('h1-about');
    chefName.textContent = 'Mabel Amar';

    const chefDetails = document.createElement('div');
    chefDetails.classList.add('para-about');
    chefDetails.textContent = 'Chef mabel amar has always loved the culinary arts, a talent she inherited from her family, who already succeeded in the restaurant business. While Chef mabel initially went to college for business, she quickly decided that she had to pursue what she was naturally gifted at, make sauce.'

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

    chefInfoContainer.append(chefInfo, chefSocialMediaPage);

    chefContainer.append(chefImage, chefInfoContainer);

    mainContainer.append( chefContainer);

    wrapperContainer.appendChild(mainContainer);

    return wrapperContainer;

}

export { aboutUs };