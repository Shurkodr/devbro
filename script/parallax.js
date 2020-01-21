'use strict';

window.addEventListener("scroll", parallax);

function parallax() {
  let mainStone = document.querySelector('.main-stone');
  let scroll_count = document.documentElement.scrollTop;
  mainStone.style.transform = `translate(0,${scroll_count / 200 * 80}px)`;
  console.log(`translate(0,${scroll_count}px)`);
  mainStone.style.translateY
}
