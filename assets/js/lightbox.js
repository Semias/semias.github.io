// Variablen deklarieren
var slideIndex;
var mySlides;

function openModal(modalName, myModalSlides) {
    //document.getElementById("myModal").style.display = "block";
    document.getElementById(modalName).style.display = "block";
    mySlides = document.getElementById(myModalSlides);
}

function closeModal(modalName) {
    document.getElementById(modalName).style.display = "none"; //Schließt das Pop-Up
    mySlides = null; //Löscht Speicher beim Schließen (lokal) - Ähnlich wie Cache
}

function plusSlides(index) {
    showSlides(slideIndex += index); //naechste Slide oder bei 'prev' vorherige
    Element.style.opacity = 1;
}

function currentSlide(index) {
    showSlides(slideIndex = index); //Ruft das erste Bild auf beim Klick
}


function showSlides(index) {
    var i;
    if (index > mySlides.childElementCount) {
        slideIndex = 1
    } //diese Zeile springt zum ersten Bild zurück (Karusell)
    for (i = 0; i < mySlides.childElementCount; i++) { //Setzt durch die Schleife die Bilder auf 'display:none'
        mySlides.children[i].style.display = "none";
    }
    mySlides.children[slideIndex - 1].style.display = "block"; //Setzt aktuelle Bild auf 'display:block'
}
