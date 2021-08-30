const menu = document.querySelector(".menubox")
const menuIcon = document.querySelector(".menuicon")
const xbox = document.querySelector(".xbox");
const xboxBanner = document.querySelector(".xboxBanner");


    

 function menuToggle() {
        document.querySelector(".menubox").classList.toggle("displayBlock");
}

function bannerDisplay() {
        document.querySelector(".banner").classList.add("displayNone");
}

menuIcon.addEventListener("click", menuToggle);
xbox.addEventListener("click", menuToggle);
xboxBanner.addEventListener("click", bannerDisplay);



