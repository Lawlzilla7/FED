// JavaScript Document
console.log("hi");

function OpenMenu() {
    var x = document.querySelector(".Content");
    if (x.style.display === "grid") {
      x.style.display = "none";
    } else {
      x.style.display = "grid";
    }
  }