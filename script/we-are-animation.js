'use strict';

window.addEventListener("scroll", weAreAnimation);

function weAreAnimation() {
  let element = document.getElementById("we-are-diff-id");

  let elementPosition = {
    top: window.pageYOffset + element.getBoundingClientRect().top,
  };

  let windowsPosition = {
    bottom : window.pageYOffset + document.documentElement.clientHeight,
  };

  if (windowsPosition.bottom > (elementPosition.top + 130)) {
    console.log("The element has appeared");
    element.style.opacity = "1";
    element.style.transform = "translate(0)";

  } else {
    console.log("There are no element");
    element.style.opacity = "0";
    element.style.transform = "translate(-200px)";
  }
}
