var slideIndex = 1;

var data = [
{file:'../images/client_1',desc:'Apartment Front View'},
{file:'images/apartment_garden.jpg',desc:'Garden View'},
{file:'images/sorrento_from_jetty1.jpg',desc:'Jetty view'},
{file:'images/ocean_beach.jpg',desc:'Ocean View'},
{file:'images/golf.jpg',desc:'Golf'},
{file:'images/back_beach_sorrento.jpg',desc:'Back Beach'},
{file:'images/ocean_beach4.jpg',desc:'Ocean View'},
{file:'images/dolphin1.jpg',desc:'Dolphin'},
{file:'images/restaurant.jpg',desc:'Restaurant'},
];

showSlides(slideIndex);
/**
 * This function navigates between the pictures of the slideshow
 *
 * @param {integer} index of the next picture that should be displayed
 * @return {string} it returns the source (path) of the image and its description.
 *
*/
function plusSlides(n) {
  showSlides(slideIndex += n);
}
/**
 * This function displays the  pictures with a specific index
 *
 * @param {integer} index of the picture that should be displayed
 * @return {{string} it returns the source (path) of the image and its description.
 *
*/
function currentSlide(n) {
  showSlides(slideIndex = n);
}
/**
 * This function displays the picture and its description 
 *
 * @param {integer, string} index of the picture in the array, index of the description of the 
 * @return {string} it returns the source (path) of the image and its description.
 *
*/
function showSlides(n) {
  var i;
  
  var imgSelect = document.getElementById("myImg"); 
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  
  if (n > data.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = data.length;}

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  imgSelect.src = data[slideIndex-1].file;
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = data[slideIndex-1].desc;
}


function hasLowerCase(str) 
{
return (/[a-z]/.test(str));
}


function hasUpperCase(str) 
{
return (/[A-Z]/.test(str));
}
