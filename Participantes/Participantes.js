function heigthSideBar() {
    document.getElementById("SideBarContainer").style.height =
      window.screen.height;
  }
  heigthSideBar();
  
  function showUserSettings() {
    document.getElementById("containerUserSettings").style.display = "flex";
  }
  function hideUserSettings() {
    document.getElementById("containerUserSettings").style.display = "none";
  }
  
  function showSideBar() {
    document.getElementById("containerUserSettings").style.display = "flex";
  }
  function hideSideBar() {
    document.getElementById("SideBarContainer").style.display = "none";
    document.getElementById("XIcon").style.display = "none";
    document.getElementById("MenuIcon").style.display = "flex";
  }
  
  function showSideBar() {
    document.getElementById("SideBarContainer").style.display = "flex";
  
    document.getElementById("XIcon").style.display = "flex";
    document.getElementById("MenuIcon").style.display = "none";
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