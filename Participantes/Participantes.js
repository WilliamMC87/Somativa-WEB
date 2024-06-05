function showUserSettings() {
  document.getElementById("containerUserSettings").style.display = "flex";
}
function hideUserSettings() {
  document.getElementById("containerUserSettings").style.display = "none";
}

function hideSideBar() {
  document.getElementById("SideBarContainer").style.transform =
    "translateX(-100%)";
  document.getElementById("XIcon").style.display = "none";
  document.getElementById("MenuIcon").style.display = "flex";
  document.getElementById("containerIconNavBar").style.marginLeft = "0%";
  document.getElementById("MainComponentsHome").style.marginLeft = "";
}

function showSideBar() {
  let WidthScreen = screen.width;
  document.getElementById("SideBarContainer").style.transform =
    "translateX(0%)";
  document.getElementById("XIcon").style.display = "flex";
  document.getElementById("MenuIcon").style.display = "none";

  if (WidthScreen <= 430) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 430 && WidthScreen <= 576) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 576 && WidthScreen <= 768) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 768 && WidthScreen <= 992) {
    document.getElementById("containerIconNavBar").style.marginLeft = "43%";
  } else if (WidthScreen >= 992 && WidthScreen <= 1200) {
    document.getElementById("containerIconNavBar").style.marginLeft = "50%";
  } else if (WidthScreen >= 1200 && WidthScreen <= 1700) {
    document.getElementById("containerIconNavBar").style.marginLeft = "19%";
  } else {
    document.getElementById("containerIconNavBar").style.marginLeft = "16%";
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


