
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
/*==================================================
EFEITO DE SCROLL SUAVE NOS LINKS
==================================================*/


const scrollLinks = document.querySelectorAll('a[href^="#"]');


scrollLinks.forEach(link=>{


link.addEventListener("click",(e)=>{


e.preventDefault();


const target = document.querySelector(
link.getAttribute("href")
);


if(target){


target.scrollIntoView({

behavior:"smooth"

});


}


});


});



/*==================================================
HEADER COM EFEITO AO ROLAR
==================================================*/


const header = document.querySelector(".header");


window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}


});

/*==================================================
EFEITO DE ENTRADA DA PÁGINA
==================================================*/


window.addEventListener("load",()=>{


document.body.classList.add("loaded");


});




});
