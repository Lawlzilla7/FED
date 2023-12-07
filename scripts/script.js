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

VideoFrame = document.getElementById('Special-Video');

function Setvideo(Url) {
  switch (Url) {
    case 'Strength':
      VideoFrame.src = 'https://www.youtube.com/embed/Yuo7AuDGNN8';
      break;
    case 'Perception':
      VideoFrame.src = 'https://www.youtube.com/embed/Vw21X2jKwCM';
      break;
    case 'Endurance':
      VideoFrame.src = 'https://www.youtube.com/embed/paYU1neP3xM';
      break;
    case 'Charisma':
      VideoFrame.src = 'https://www.youtube.com/embed/X95lZ56ddj4';
      break;
    case 'Intelligence':
      VideoFrame.src = 'https://www.youtube.com/embed/H6yt-43Vp1M';
      break;
    case 'Agility':
      VideoFrame.src = 'https://www.youtube.com/embed/bQ_okO2tLN0';
      break;
    case 'Luck':
      VideoFrame.src = 'https://www.youtube.com/embed/Bke9wvob8Ls';
      break;

  }
}