'use strict';
// Variables&Arrays
let cake = [
  { code: "cake_1", nameRu: "«Торжество»", nameEn: "«Celebration»", amount: 0, priceRu: 1400.00, priceEn: 140.00, image: 'img/cake-1.jpg' },
  { code: "cake_2", nameRu: "«Одиссей»", nameEn: "«Odysseus»", amount: 0, priceRu: 1200.00, priceEn: 120.00, image: 'img/cake-2.jpg' },
  { code: "cake_3", nameRu: "«Восторг»", nameEn: "«Delight»", amount: 0, priceRu: 1000.00, priceEn: 100.00, image: 'img/cake-3.jpg' },
  { code: "cake_4", nameRu: "«Юбиляр»", nameEn: "«Anniversary»", amount: 0, priceRu: 1000.00, priceEn: 100.00, image: 'img/cake-4.jpg' },
  { code: "cake_5", nameRu: "«Ассорти»", nameEn: "«Assorted»", amount: 0, priceRu: 1300.00, priceEn: 130.00, image: 'img/cake-5.jpg' },
  { code: "cake_6", nameRu: "«Хоровод»", nameEn: "«Country»", amount: 0, priceRu: 1300.00, priceEn: 130.00, image: 'img/cake-6.jpg' },
  { code: "cake_7", nameRu: "«Карьер»", nameEn: "«Career»", amount: 0, priceRu: 1300.00, priceEn: 130.00, image: 'img/cake-7.jpg' },
  { code: "cake_8", nameRu: "«Бармалей»", nameEn: "«Pleasure»", amount: 0, priceRu: 1300.00, priceEn: 130.00, image: 'img/cake-8.jpg' },
  { code: "mini_cake_1", nameRu: "«Утро»", nameEn: "«Morning»", amount: 0, priceRu: 80.00, priceEn: 8.00, image: 'img/mini-cake-1.jpg' },
  { code: "mini_cake_2", nameRu: "«Титаник»", nameEn: "«Titanic»", amount: 0, priceRu: 80.00, priceEn: 8.00, image: 'img/mini-cake-2.jpg' },
  { code: "mini_cake_3", nameRu: "«Нуар»", nameEn: "«Noir»", amount: 0, priceRu: 90.00, priceEn: 9.00, image: 'img/mini-cake-3.jpg' },
  { code: "mini_cake_4", nameRu: "«Блик»", nameEn: "«Glare»", amount: 0, priceRu: 70.00, priceEn: 7.00, image: 'img/mini-cake-4.jpg' },
  { code: "mini_cake_5", nameRu: "«Взлет»", nameEn: "«Takeoff»", amount: 0, priceRu: 90.00, priceEn: 9.00, image: 'img/mini-cake-5.jpg' },
  { code: "mini_cake_6", nameRu: "«Коралл»", nameEn: "«Coral»", amount: 0, priceRu: 100.00, priceEn: 10.00, image: 'img/mini-cake-6.jpg' },
  { code: "mini_cake_7", nameRu: "«Доффин»", nameEn: "«Doffin»", amount: 0, priceRu: 90.00, priceEn: 9.00, image: 'img/mini-cake-7.jpg' },
  { code: "mini_cake_8", nameRu: "«Блюз»", nameEn: "«Blues»", amount: 0, priceRu: 90.00, priceEn: 9.00, image: 'img/mini-cake-8.jpg' },
];

let locale = ['ru', 'en'];

let cakeBlockPoint = document.getElementById("cakeBlock");
let cakeCardPoint = document.getElementById("cakeCardPoint");

// Functions
function addCartListener(id) { 
  let addCartButton = document.getElementById(id);
  addCartButton.addEventListener("click", () => { console.log(`Clicked button id=${id}`);})
}
function logRu(arr, pointParent, pointOriginal) {
  for (let index = 0; index < arr.length; index++) {
    let newCard = document.createElement("card");
    newCard.innerHTML = `<div class="cake-card">
    <div class="cake-card-image--block">
      <img src="${arr[index].image}" class="cake-card-image" alt="Cake ${[index]}"/>
    </div>
    <div class="cake-card-info">
      <p class="cake-card-name">${arr[index].nameRu}</p>
      <p class="cake-card-price">${arr[index].priceRu} ₽</p>
    </div>
    <div class="cake-card-buttons">
      <button class="cake-button-contract" id="card${index}">Add to cart</button>
    </div>
    </div>`;
    pointParent.insertBefore(newCard, pointOriginal.nextSibling);
    let cardId = 'card' + index;
    addCartListener(cardId);
  }
}
function logEn(arr, pointParent, pointOriginal) {
  for (let index = 0; index < arr.length; index++) {
    let newCard = document.createElement("card");
    newCard.innerHTML = `<div class="cake-card">
    <div class="cake-card-image--block">
      <img src="${arr[index].image}" class="cake-card-image" alt="Cake ${[index]}"/>
    </div>
    <div class="cake-card-info">
      <p class="cake-card-name">${arr[index].nameEn}</p>
      <p class="cake-card-price">${arr[index].priceEn} $</p>
    </div>
    <div class="cake-card-buttons">
      <button class="cake-button-contract" id="card${index}">Add to cart</button>
    </div>
    </div>`;
    pointParent.insertBefore(newCard, pointOriginal.nextSibling);
    let cardId = 'card' + index;
    addCartListener(cardId);
  }
}
function showCake(arr, lang, pointParent, pointOriginal) {
  if (lang === 'ru') {
    logRu(arr, pointParent, pointOriginal);
  } else {
    logEn(arr, pointParent, pointOriginal);
  }
}

// Calls
showCake(cake, locale[1], cakeBlockPoint, cakeCardPoint);