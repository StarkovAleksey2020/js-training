'use strict';
// Variables&Arrays
let headers = [
  { code: "cakeTitle", nameRu: "Торты", nameEn: "Cakes" },
  { code: "bakeryTitle", nameRu: "Выпечка", nameEn: "Bakery" },
];

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
let cakeWrapperPoint = document.getElementById("cakeWrapper");
let cakeTitlePoint = document.getElementById("cakeTitlePoint");

let bakeryWrapperPoint = document.getElementById("bakeryWrapper");
let bakeryTitlePoint = document.getElementById("bakeryTitlePoint");

let cakeBlockPoint = document.getElementById("cakeBlock");
let cakeCardPoint = document.getElementById("cakeCardPoint");

let bakeryBlockPoint = document.getElementById("bakeryBlock");
let bakeryCardPoint = document.getElementById("bakeryCardPoint");

// Functions

// Description: adds a listener for clicking the add to shopping cart button
//
function addCartListener(id) { 
  let addCartButton = document.getElementById(id);
  addCartButton.addEventListener("click", () => { console.log(`Clicked button id=${id}`);})
}

// Description: adds a localized product name to the card
//
function getLocalizedName(arrayItem) { 
  if ( window.navigator.language.slice(0, 2) === "en" ) {
    return arrayItem.nameEn;
  } else if ( window.navigator.language.slice(0, 2) === "ru" ) {
    return arrayItem.nameRu;
  }
}

// Description: adds a localized product price to the card
//
function getLocalizedPrice(arrayItem) { 
  if ( window.navigator.language.slice(0, 2) === "en" ) {
    return "$" + arrayItem.priceEn;
  } else if ( window.navigator.language.slice(0, 2) === "ru" ) {
    return arrayItem.priceRu + " ₽";
  }
}

// Description: adds a localized name for the add to shopping cart button
//
function getLocalizedAddToCartButton() {  
  if ( window.navigator.language.slice(0, 2) === "en" ) {
    return "Add to cart";
  } else if ( window.navigator.language.slice(0, 2) === "ru" ) {
    return "В корзину";
  }
}

// Description: adds a localized name for the product information button
//
function getLocalizedInfoButton() { 
  if ( window.navigator.language.slice(0, 2) === "en" ) {
    return "More details";
  } else if ( window.navigator.language.slice(0, 2) === "ru" ) {
    return "Подробнее";
  }
}

// Description: adds a localized bloks header
//
function getLocalizedHeader(headerArray, headerCode) {  
  if ( window.navigator.language.slice(0, 2) === "en" ) {
    return headerArray.find( x => x.code === headerCode).nameEn;
  } else if ( window.navigator.language.slice(0, 2) === "ru" ) {
    return headerArray.find( x => x.code === headerCode).nameRu;
  }
}

// Description: the function takes as an input an array of objects to display, as well as the mount points of the object cards - parent
// and original
//
function addCakeCard(cakeArray, pointParent, pointOriginal) {
  for (let arrayIndex = 0; arrayIndex < cakeArray.length; arrayIndex++) {
    let newCard = document.createElement("card");
    newCard.innerHTML = `<div class="cake-card">
    <div class="cake-card-image--block">
      <img src="${cakeArray[arrayIndex].image}" class="cake-card-image" alt="Cake ${[arrayIndex]}"/>
    </div>
    <div class="cake-card-info">
      <p class="cake-card-name">${getLocalizedName(cakeArray[arrayIndex])}</p>
      <p class="cake-card-price">${getLocalizedPrice(cakeArray[arrayIndex])}</p>
    </div>
    <div class="cake-card-buttons">
      <button class="cake-button-info" id="cardInfo${arrayIndex}">${getLocalizedInfoButton()}</button>
      <button class="cake-button-contract" id="card${arrayIndex}">${getLocalizedAddToCartButton()}</button>
    </div>
    </div>`;
    pointParent.insertBefore(newCard, pointOriginal.nextSibling);
    let cardId = 'card' + arrayIndex;
    addCartListener(cardId);
  }
}

// Description: the function takes as an input an array of objects to display, a title code, as well as the mount points of the object
// cards - parent and original
//
function addTitleToSection(headerArray, headerCode, pointParent, pointOriginal) {  
  let newTitle = document.createElement("div");
  newTitle.classList.add("block-title");
  newTitle.innerHTML = `<h3 class="block-title-header">${getLocalizedHeader(headerArray, headerCode)}</h3>`;
  pointParent.insertBefore(newTitle, pointOriginal.nextSibling);
}

// Calls
// Add section headers
addTitleToSection(headers, "cakeTitle", cakeWrapperPoint, cakeTitlePoint);
addTitleToSection(headers, "bakeryTitle", bakeryWrapperPoint, bakeryTitlePoint);

// Add cards
addCakeCard(cake.slice(0, 8), cakeBlockPoint, cakeCardPoint);
addCakeCard(cake.slice(8), bakeryBlockPoint, bakeryCardPoint);