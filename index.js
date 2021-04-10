console.log("Hello from Pawel's website");

const navbarHiding = document.querySelector("#navIcon");
const navbarItself = document.querySelector("#navbar");
const mainText = document.querySelector(".mainText")

let navbar_visible = true;




function toggleNavbar(){
    console.log("navbar toggler clicked");
    if (navbar_visible){
        navbarHiding.style.transform = "rotate(90deg)";
        navbarItself.style.left = "-8%"
        navbar_visible = false;
        mainText.style.marginLeft = "8%";
    }
    else {
        navbarHiding.style.transform = "rotate(0deg)";
        navbarItself.style.left = "0%"
        mainText.style.marginLeft = "15%";
        navbar_visible = true;
    }
    
    
}

navbarHiding.addEventListener("click", toggleNavbar);