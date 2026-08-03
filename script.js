
/*==================================================
ALÉM DA ADVOCACIA
SCRIPT PRINCIPAL
PARTE 1
==================================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*==================================================
MENU MOBILE
==================================================*/


const menuButton = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu");


if(menuButton){


menuButton.addEventListener("click",()=>{


menu.classList.toggle("active");


});


}



/* FECHAR MENU AO CLICAR */

const links = document.querySelectorAll(".menu a");


links.forEach(link=>{


link.addEventListener("click",()=>{


menu.classList.remove("active");


});


});



});

/*==================================================
ANIMAÇÕES AO ROLAR A PÁGINA
==================================================*/


const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{


threshold:0.15


});



const elements = document.querySelectorAll(

".card, .aprendizado-card, .material-card, .publico-card, .quebra-box, .curso-box, .autoridade-content, .cta-box"

);



elements.forEach(element=>{


element.classList.add("hidden");


observer.observe(element);


});
