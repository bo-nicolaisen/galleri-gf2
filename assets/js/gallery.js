const bigImage = document.getElementById('imageBig');
const smallImage = document.getElementById('imageSmall');

smallImage.addEventListener('click', (event) => {

    let myUrl = smallImage.src;

    smallImage.src = bigImage.src;

    bigImage.src = myUrl;

});