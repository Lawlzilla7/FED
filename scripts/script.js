// JavaScript Document
console.log("hello world!");

var Burger = document.getElementById('Burger');

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

document.getElementById('MediaSelect').addEventListener('change', SwitchMediaContent);

function SwitchMediaContent() {
  // Gets all divs
  var Divs = document.getElementsByClassName('Media-Content');

  // Hides all the divs
  for (var i = 0; i < Divs.length; i++) {
    Divs[i].style.display = 'none';
  }

  // Shows the selected div
  var SelectedDiv = document.getElementById('MediaSelect-' + this.value);
  if (SelectedDiv) {
    SelectedDiv.style.display = 'block';
  }
}



VideoFrame = document.getElementById('Special-Video');
//Switchcase to switch iframe source when pressing a button
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