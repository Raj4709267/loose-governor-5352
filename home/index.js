document.getElementById("what").addEventListener("click", mywhat);
document.getElementById("landing-p").addEventListener("click", mylanding);
document.getElementById("facebook-chat").addEventListener("click", myface);
document.getElementById("mobile-app").addEventListener("click", mymobile);
document.getElementById("web-click").addEventListener("click", mycl);

function mywhat() {
   document.getElementById("img-support").innerHTML = null
   let img = document.createElement("img");
   img.src = "https://www.smatbot.com/img/platforms/whatsapp_chatbot_platform.svg"
   document.getElementById("img-support").append(img)
}
function mylanding() {
   document.getElementById("img-support").innerHTML = null
   let img = document.createElement("img");
   img.src = "https://www.smatbot.com/img/platforms/landing_page_platform.svg"
   document.getElementById("img-support").append(img)
}
function myface() {
   document.getElementById("img-support").innerHTML = null
   let img = document.createElement("img");
   img.src = "https://www.smatbot.com/img/platforms/fb_messenger_platform.svg"
   document.getElementById("img-support").append(img)
}
function mymobile() {
   document.getElementById("img-support").innerHTML = null
   let img = document.createElement("img");
   img.src = "https://www.smatbot.com/img/platforms/mobile_app_platform.svg"
   document.getElementById("img-support").append(img)
}
function mycl() {
   document.getElementById("img-support").innerHTML = null
   let img = document.createElement("img");
   img.src = "https://www.smatbot.com/img/platforms/webiste_chatbot_platform.svg"
   document.getElementById("img-support").append(img)
}
// arrow js
document.getElementById("left-arrow").addEventListener("click", myarrow);
document.getElementById("right-arrow").addEventListener("click", myr);

function myarrow() {

   document.getElementById("blog").style.marginLeft = "-200px";
}
function myr() {

   document.getElementById("blog").style.marginLeft = "400px";
}

   // document.getElementsByClassName("hover-blue").addEventListener("click", myScript);

  
   // scroll
   const footerElem = document.getElementById("go");

const scroollElement = document.createElement("div");
scroollElement.classList.add("scrollTop-style");

scroollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElem.after(scroollElement);

const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scroollElement.addEventListener("click", scrollTop);

// import navbar from '../component/navbar.js';

// document.querySelector("#navbar").innerHTML=navbar();

