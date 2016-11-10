"use strict";

function populatePage (inventory) {

var carOutput = document.getElementById('carOutput');
var carString = "";
carString += `<h1>Classifieds:</h1> `;

for (var i = 0; i < inventory.length; i++) {

  if (i % 3 === 0) {
    carString += '<div class="row">';
  }

  carString += `<div class="col-md-4 carCard">`; 
  carString += `<h2>${inventory[i].year}</h2>`;
  carString += `<h2>${inventory[i].make} ${inventory[i].model}</h2>`;
  carString += `<h2>$${inventory[i].price}</h2>`;
  carString += `<p>${inventory[i].description}</p>`;
  carString += '</div>';

  if ((i + 1) % 3 === 0) {
    carString += `</div>`;
  }

}

carOutput.innerHTML += carString;

  CarLot.activateEvents();
}

CarLot.loadInventory(populatePage);
