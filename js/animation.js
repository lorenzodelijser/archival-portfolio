// Menubar Smile

function smile() {
  anime({
    targets: ".feather-smile path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 400
  });

  anime({
    targets: ".feather-smile .right-eye",
    opacity: [1, 0, 1],
    easing: "easeInOutSine",
    delay: 200,
    duration: 400
  });
}

// Menubar Overview

function overview() {
  anime({
    targets: ".menu-bar .feather-grid rect",
    easing: "easeInOutExpo",
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 400
  });
}

// Go To App

function GoToApp() {
  anime({
    targets: ".button-to-app .feather-arrow-up-right",
    easing: "easeInOutExpo",
    rotate: 45,
    duration: 400
  });
}

// Bottom Navigation Overview

function BottomNavigationOverview() {
  anime({
    targets: ".buttons .feather-grid rect",
    easing: "easeInOutExpo",
    opacity: [0, 1],
    delay: anime.stagger(200),
    duration: 400
  });
}

// Bottom Navigation Next

function BottomNavigationNext() {
  anime({
    targets: ".buttons .feather-arrow-right",
    easing: "easeInOutExpo",
    paddingRight: [8, 0, 8],
    duration: 400
  });
}
