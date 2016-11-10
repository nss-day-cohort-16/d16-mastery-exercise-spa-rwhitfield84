"use strict";

var CarLot = (function (oldCarLot) {
	oldCarLot.toggleClass = function (element, color) {
		element.classList.add("toggleClass");
		element.style.backgroundColor = color;
	};
	oldCarLot.removeClass = function (element, color) {
		element.classList.remove("toggleClass");
		element.style.backgroundColor = color;
	};
	return oldCarLot;
})(CarLot || {});