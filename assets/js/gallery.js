// Din cool code here

const myImages = ['elephant.jpg', 'great-white.jpg', 'koala.jpg', 'smithi.jpg', 'tiger.jpg'];

const baseUrl = 'assets/img/';

const mygallery = document.getElementById('gallery');


CreateGallery();



function createCard(myUrl, mygallery) {

    let myArticle = document.createElement('article');
    myArticle.classList.add('galleryCard');
    let myImage = document.createElement('img');
    myImage.src = myUrl;

    myImage.addEventListener('click', (event) => {
        console.log(myUrl);
        ShowBigCard(myUrl);

    });
    myArticle.appendChild(myImage);

    return myArticle;

}

function ShowBigCard(myUrl) {
    mygallery.innerHTML = '';
    let myArticle = document.createElement('article');
    myArticle.classList.add('detailView');
    let myImage = document.createElement('img');

    myImage.src = myUrl;

    myImage.addEventListener('click', (event) => {
        CreateGallery();

    });
    myArticle.appendChild(myImage);
    mygallery.appendChild(myArticle);
}

function CreateGallery() {
    mygallery.innerHTML = '';
    myImages.forEach(animal => {

        mygallery.appendChild(createCard(baseUrl + animal));

    });
}