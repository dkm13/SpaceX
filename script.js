function showMenu() {
  const el = document.getElementById("sec-menu");
  el.style.display = "block";
  const backdrop = document.querySelectorAll(".c");
  for (let i = 0; i < backdrop.length; i++) {
    backdrop[i].style.filter = "brightness(50%)";
  }
}

function hideMenu() {
  const el = document.getElementById("sec-menu");
  el.style.display = "none";
  const backdrop = document.querySelectorAll(".c");
  for (let i = 0; i < backdrop.length; i++) {
    backdrop[i].style.filter = "brightness(100%)";
  }
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.opacity = "1";
  } else {
    document.getElementById("navbar").style.opacity = "0";
  }

  prevScrollpos = currentScrollPos;
};
