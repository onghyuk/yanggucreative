const menu = document.querySelector(".menubox")
const menuIcon = document.querySelector(".menuicon")
const xbox = document.querySelector(".xbox");
const banner = document.querySelector(".banner");

    

 function menuToggle() {
        document.querySelector(".menubox").classList.toggle("displayBlock");
}

function bannerDisplay() {
        document.querySelector(".banner").classList.add("displayNone");
}



menuIcon.addEventListener("click", menuToggle);
xbox.addEventListener("click", menuToggle);
banner.addEventListener("click", bannerDisplay);



