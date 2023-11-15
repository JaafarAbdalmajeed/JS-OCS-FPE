let selectCountry = document.getElementById('select-country');
let image = document.getElementById('image');

const changeCountry = () => {
    if(selectCountry.value === 'jordan'){
        image.style.backgroundImage = 'url(./images/Jordan.svg.png)';
    } else if(selectCountry.value === 'Palestine') {
        image.style.backgroundImage = 'url(./images/Palestine.svg.png)';
    }
}
