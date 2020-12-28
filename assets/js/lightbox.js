// Variablen deklarieren
let currentItemIndex;
let myItems;

function openModal(modalName, myModalItems) {
    document.getElementById(modalName).classList.add('open');
    myItems = document.getElementById(myModalItems);
    currentItemIndex = 0;
    nextSlide(0);
}

function closeModal(modalName) {
    document.getElementById(modalName).classList.remove('open');    //Schließt das Pop-Up
    myItems = null; 
}

function nextSlide(index) {
    const formerItemIndex = currentItemIndex;
    currentItemIndex += index
    if (currentItemIndex >= myItems.childElementCount) {
        currentItemIndex = 0; //diese Zeile springt zum ersten Bild zurück (Karusell)
    } else if(currentItemIndex < 0) {
        currentItemIndex = myItems.children.length - 1 // vom ersten zum letzten
    }
    myItems.children[formerItemIndex].classList.remove('active')
    myItems.children[currentItemIndex].classList.add('active')
}

//Modal
/*jQuery.noConflict();
jQuery(document).ready(function ($) {
  $(document).ready(function () {
    

      $(".gallery__element").click(function() {
        $(".gallery__modal", this).addClass('open'); 
      })

      $(".modal_close").click(function() {
        $(this).parent().removeClass('open');  
      })

      $('.modal_close').click(function(event) {
        // removeClass
        event.stopPropagation();
      });
  });
}); */



