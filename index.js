console.log("Hello from Pawel's website");

let myContent = {"games":{
    "title": "My games",
    "content": "<a href='/HD_out/hoppy_days.html'>Hoppy Days</a><br><a href='/BlackFrost/BlackFrost.html'>BlackFrost</a><br><a href='/BlackFrost_02/BlackFrost.html'>BlackFrost_0.2</a><br>"
},
"bio":{
    "title": "My Bio",
    "content": "After finishing high school I was studying Architecture for 5 years at 'Politechnika Śląska' in Gliwice, before moving to computer games. My first job was a 2d/3d background artist at Artifex Mundi - studio I'm in good relations with and often do work for them still to this day. While working full time for them I was mostly responsible for creating concept art and background illustrations for hidden object gamest like 'Grim Legends 3: The Dark City' and point'n'click game 'Irony Curtain: From Matryoshka with Love'. Meanwhile I started to take part in projects for different companies as a freelance artist. I took part in development of card game 'Minute Realms' for DV Giochi, and also did illustration work at Creative Assembly for 'Queen and the Crone' DLC for Warhammer and 'Curse of the Vampire Coast' DLC also for Warhammer. In 2019 I was contracted for several months as a concept artist for Riot Games to work on Tales of Runeterra."
},
"contact":{
    "title":"Contact",
    "content": "You can contact me at<br>email: hordyniak [at] gmail.com"
}};

// ###############################3

const navbarHiding = document.querySelector("#navIcon");
const navbarItself = document.querySelector("#navbar");
const mainText = document.querySelector(".mainText");
const articleTitle = document.querySelector("#titleField");
const paragraphField = document.querySelector("#paragraphField")

const gamesBtn = document.querySelector("#gamesBtn");
const bioBtn = document.querySelector("#bioBtn");
const contactBtn = document.querySelector("#contactBtn");

let navbar_visible = true;




function toggleNavbar(){
    console.log("navbar toggler clicked");
    if (navbar_visible){
        navbarHiding.style.transform = "rotate(90deg)";
        navbarItself.style.left = "-6.5em"
        navbar_visible = false;
        mainText.style.marginLeft = "6em";
    }
    else {
        navbarHiding.style.transform = "rotate(0deg)";
        navbarItself.style.left = "0em"
        mainText.style.marginLeft = "12em";
        navbar_visible = true;
    }
    
    
}

function setContent(title, paragraph){
    articleTitle.textContent = title;
    paragraphField.innerHTML = paragraph;
}


navbarHiding.addEventListener("click", toggleNavbar);
gamesBtn.addEventListener("click", () => {
    setContent(myContent["games"]['title'], myContent["games"]["content"])
})
bioBtn.addEventListener("click", () => {
    setContent(myContent["bio"]['title'], myContent["bio"]["content"])
})
contactBtn.addEventListener("click", () => {
    setContent(myContent["contact"]['title'], myContent["contact"]["content"])
})

setContent(myContent["games"]["title"], myContent["games"]["content"])