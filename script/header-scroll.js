'use strict';

window.addEventListener("scroll", ChangeHeaderBackground);

function ChangeHeaderBackground() {
  let scroll_count = document.documentElement.scrollTop;
  let head = document.getElementById("header-block");
  if (scroll_count > 320) {
    head.style.backgroundColor = "#1F2427";
  } else {
    head.style.backgroundColor = "transparent";
  }
}
