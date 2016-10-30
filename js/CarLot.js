"use strict";

var CarLot = (function () {
  var inventory = [];

  return {
    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.open("GET", "lib/inventory.json");
      inventoryLoader.send();
      inventoryLoader.addEventListener("load", function () {
      inventory = JSON.parse(this.responseText).cars;
      callback(inventory);
      });
    },
    getInventory: function() {
    	return inventory;
    }
  };
})();
