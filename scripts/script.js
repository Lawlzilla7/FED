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



function SwitchMediaContent() {
  // Get all the divs
  var divs = document.getElementsByClassName('Media-Content');

  // Hide all the divs
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.display = 'none';
  }

  // Show the selected div
  var selectedDiv = document.getElementById('MediaSelect-' + this.value);
  if (selectedDiv) {
    selectedDiv.style.display = 'block';
  }
}

// Attach the function to the 'change' event of the dropdown
document.getElementById('MediaSelect').addEventListener('change', SwitchMediaContent);


