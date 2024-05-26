function heigthSideBar() {
  document.getElementById("SideBarContainer").style.height =
    window.screen.height;
}
heigthSideBar();

let WidthScreen = screen.width

function showUserSettings() {
  document.getElementById("containerUserSettings").style.display = "flex";
}
function hideUserSettings() {
  document.getElementById("containerUserSettings").style.display = "none";
}

function hideSideBar() {
  document.getElementById("SideBarContainer").style.display = "none";
  document.getElementById("XIcon").style.display = "none";
  document.getElementById("MenuIcon").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "0%";
  document.getElementById("MainComponentsHome").style.marginLeft = "";
}

function showSideBar() {
if(WidthScreen <= 420){
  document.getElementById("SideBarContainer").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  document.getElementById("MainComponentsHome").style.marginLeft = "15%";
  document.getElementById("XIcon").style.display = "flex";
  document.getElementById("MenuIcon").style.display = "none";
}else{
  document.getElementById("SideBarContainer").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "16%";
  document.getElementById("MainComponentsHome").style.marginLeft = "15%";
  document.getElementById("XIcon").style.display = "flex";
  document.getElementById("MenuIcon").style.display = "none";
}
}

// function VerifyWidth(container) {
//   if (container.style.display === "flex") {
//     document.getElementById("subNavbarContainer").style.width = "94rem";
//   } else {
//     document.getElementById("subNavbarContainer").style.width = "102rem";
//   }
// }

function FunDate() {
  var TextDate = document.getElementById("IconSubNavConainerText");
  const Data = new Date();

  return (TextDate.innerText = `${
    Data.getDate().toString().length === 1
      ? `0${Data.getDate()}`
      : Data.getDate()
  }/${
    Data.getMonth().toString().length === 1
      ? `0${Data.getMonth() + 1}`
      : Data.getMonth() + 1
  }/${Data.getFullYear()}`);
}
FunDate();

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  // let i;
  // let slides = document.getElementsByClassName("mySlides");
  // let dots = document.getElementsByClassName("dot");
  // if (n > slides.length) {
  //   slideIndex = 1;
  // }
  // if (n < 1) {
  //   slideIndex = slides.length;
  // }
  // for (i = 0; i < slides.length; i++) {
  //   slides[i].style.display = "none";
  // }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  // slides[slideIndex - 1].style.display = "block";
  // dots[slideIndex - 1].className += " active";
}
