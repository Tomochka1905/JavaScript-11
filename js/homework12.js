//для елементу з текстом 'Навігація по DOM дереву'
let header = document.getElementById('headerTwo');
console.log('header', header);

//для першого елементу <section>
let section = document.getElementsByClassName('firstSection');
console.log('section', section);

//для елементу списку з текстом 'Пункт 5'
let element5 = document.getElementsByTagName('Li')[4];
console.log('element5', element5);

//для елементу з класом 'hatredLevelBlock'
let hatredLevelBlock = document.querySelector('.hatredLevelBlock');
console.log("hatredLevelBlock", hatredLevelBlock);
