// JavaScript Document
console.log("hi");

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