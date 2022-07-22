
import wPrice from "../component/wPrice.js";
import webPrice from "../component/webPrice.js"

document.querySelector("#whatsapp").addEventListener("click",displaywhatsapp)
document.querySelector("#website").addEventListener("click",displaywebsite)

function displaywhatsapp(e){
    e.preventDefault();
   let container= document.getElementById("main_container_price").innerHTML="";
   let whatsapp=document.getElementById("main_container_price").innerHTML=wPrice();
   let website=document.querySelector("#website");
   website.style.backgroundColor="white";
   website.style.color="black"
   let whatsApp=document.querySelector("#whatsapp");
   whatsApp.style.backgroundColor="#465DEF";
   whatsApp.style.color="white"
    // container.innerHTML="";
    // container.append(whatsapp);
}


function displaywebsite(){
    let container= document.getElementById("main_container_price").innerHTML="";
    let whatsapp=document.getElementById("main_container_price").innerHTML=webPrice();
    let whatsApp=document.querySelector("#whatsapp");
    whatsApp.style.backgroundColor="white";
    whatsApp.style.color="black"
    let website=document.querySelector("#website");
    website.style.backgroundColor="#465DEF";
    website.style.color="white"
}
