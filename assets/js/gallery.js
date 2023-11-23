// Din cool code here

const myImages = ['elephant.jpg', 'smithi.jpg', 'great-white.jpg', 'koala.jpg', 'tiger.jpg'];

buildGallery();


// bygger galleri udfra min array myImages
function buildGallery() {
    const mygalleryElement = document.getElementById('gallery');
    myImages.forEach(image => {
        buildCard('assets/img/' + image, mygalleryElement)
    });


}



// bygger article tag med img kræver url og parent dom element
function buildCard(imageUrl, galleryElement) {

    console.log(imageUrl, galleryElement);



    const myArticle = document.createElement('article');

    const myImage = document.createElement('img');

    myImage.src = imageUrl;

    myImage.addEventListener('click', (event) => {
        galleryElement.innerHTML = '';

        buildBigImage(imageUrl, galleryElement);

    });




    myArticle.appendChild(myImage);

    galleryElement.appendChild(myArticle);


}

// bygger stor article tag med img kræver url og parent dom element
function buildBigImage(imageUrl, galleryElement) {
    const myArticle = document.createElement('article');

    const myImage = document.createElement('img');

    myImage.src = imageUrl;

    myImage.addEventListener('click', (event) => {
        galleryElement.innerHTML = '';
        buildGallery();

    });




    myArticle.appendChild(myImage);

    galleryElement.appendChild(myArticle);

}