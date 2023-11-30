// JavaScript Document
console.log("hi");

var Burger = document.getElementById('Burger');
var CarousselButtonsList = document.querySelector('.CarouselButton');

function OpenMenu() {
  var x = document.querySelector(".NavContent");
  if (x.style.display === "grid") {
    x.style.display = "none";
    Burger.src = 'images/Burger.svg'
  } else {
    x.style.display = "grid";
    Burger.src = 'images/Cross.svg'
  }
}

MediaWindow(document.querySelector('#MediaSelect')).ready(function () {

  MediaWindow(".Media-Content").hide();

  MediaWindow("#MediaSelect-Featured").show();

  MediaWindow("#MediaSelect").change(function () {
    MediaWindow("#Media-Content").hide();

    MediaWindow('#' + MediaWindow(this).val().show);
  });

})

// function ButtonActive() {
//   CarousselButtonsList.array.forEach(element => {
//   });(CarousselButton => {
//     CarousselButton.addeventlistener('click', () => {
//       document.querySelector('.CarouselButtonActive').classList.
//         remove('.CarouselButtonActive');
//         CarousselButton.classList.add('.CarouselButtonActive');
//     })
//   });
// }