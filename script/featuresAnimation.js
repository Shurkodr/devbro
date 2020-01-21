'use strict';

window.addEventListener("scroll", featuresAnimation);

function featuresAnimation() {
  let featuresBlock = document.querySelector('.main-features');

  let featuresBlockPostion = {
    top: window.pageYOffset + featuresBlock.getBoundingClientRect().top,
  };

  let windowsPosition = {
    bottom : window.pageYOffset + document.documentElement.clientHeight,
  };

  let featureOne = document.querySelector(".feature-animation-one");
  let featureTwo = document.querySelector(".feature-animation-two");
  let featureThree = document.querySelector(".feature-animation-three");

  if (windowsPosition.bottom > (featuresBlockPostion.top + 130)) {

    featureOne.style.opacity = "1";
    featureOne.style.transform = "rotateY(0)";
    featureTwo.style.opacity = "1";
    featureTwo.style.transform = "rotateY(0)";
    featureThree.style.opacity = "1";
    featureThree.style.transform = "scale(1)";

  } else {

    featureOne.style.opacity = "0";
    featureOne.style.transform = "rotateY(90deg)";
    featureTwo.style.opacity = "0";
    featureTwo.style.transform = "rotateY(-90deg)";
    featureThree.style.opacity = "0";
    featureThree.style.transform = "scale(.5)";
  }
}
