"use strict";

var CarLot = (function (oldCarLot) {
  
	oldCarLot.activateEvents = function() {

        var input = document.getElementById("input");
        // input = disabled;
        var carCard = document.getElementsByClassName("carCard");
        var editDescription;
        var cardClassContains;
        var cardClass;
        var color;

		document.addEventListener("click", function(event) {
			
      for (var i = 0; i < carCard.length; i++) {

      		if (event.target === carCard[i]) {
      			cardClass = carCard[i];
            color = "#F7FF00";
            input.focus();
            input.value= "";
            input.removeAttribute("readonly");
            cardClassContains = cardClass.classList.contains("toggleClass");
            CarLot.toggleClass(cardClass, color);      
          }

      } 
        input.addEventListener("keyup", function (event) {
          editDescription = cardClass.getElementsByTagName("p");
          editDescription[0].innerHTML = event.target.value;

            if (event.keyCode === 13) {
              color = "white";
              CarLot.removeClass(cardClass,color);
              input.blur();
          }
    });
     
            if (cardClassContains) {
              color = "white";
              CarLot.removeClass(cardClass,color);
              input.blur();
              input.value = "";
        }
});

	};
	return oldCarLot;
})(CarLot || {});







