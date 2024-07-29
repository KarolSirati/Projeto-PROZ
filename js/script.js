// ---------- CARREGA IMAGENS PELO JS---------- //
//------------Foto Principal logo---------------------//
document.getElementById("logo-img-left").innerHTML="<img src='./img/LOGO header.png' alt=Logo Moda Online>";
//------------Foto Capa ------------------------------//
document.getElementsByClassName("imagemtopo").innerHTML="<img src='./img/index/FOTO CABIDE index.png'alt=Foto de cabides com roupas>";
//----------Novidades--------------------------//
document.getElementById("foto1").innerHTML= "<img src='./img/index/FOTO1 novidades.png'alt=Foto da modelo com cascaco lilás>";
document.getElementById("foto2").innerHTML="<img src='./img/index/FOTO2 novidades.png'alt=Foto do modelo com conjunto blusa e short>";
document.getElementById("foto3").innerHTML="<img src='./img/index/FOTO3 novidades.png'alt=Foto da modelo com blusa branca e calça>";
document.getElementById("foto4").innerHTML="<img src='./img/index/FOTO4 novidades.png' alt=Foto do modelo com conjunto moletom>";

// ---------- CARREGA IMAGENS PELO JS---------- //
//----------Promocoes-------------------------//
document.getElementById("fotoPromo1").innerHTML="<img src='./img/index/FOTO1 promoções.png' alt=Foto de duas modelos com blusa branca>";
document.getElementById("fotoPromo2").innerHTML="<img src='./img/index/FOTO2 promoções.png' alt=Foto da modelo com suéter>";
document.getElementById("fotoPromo3").innerHTML="<img src='./img/index/FOTO3 promoções.png' alt=Foto da modelo com blusa manga curta>";
document.getElementById("fotoPromo4").innerHTML="<img src='./img/index/FOTO4 promoções.png' alt=Foto da modelo com blusa manga cumprida>";
// ---------- CARREGA IMAGENS PELO JS---------- //
//----------Mais Vendidos ----------------------//
document.getElementById("fotoVend1").innerHTML="<img src='./img/index/FOTO1 +vendidos.png' alt=Foto blusa feminina manga longa>";
document.getElementById("fotoVend2").innerHTML="<img src='./img/index/FOTO2 +vendidos.png' alt=Foto da modelo com manga curta>";
document.getElementById("fotoVend3").innerHTML="<img src='./img/index/FOTO3 +vendidos.png'  alt=Foto da modelo conjunto blusa e short>";
document.getElementById("fotoVend4").innerHTML="<img src='./img/index/FOTO4 +vendidos.png'  alt=Foto da modelo com blazer>";

//----------------scroll reveal-----------------//
window.sr=ScrollReveal({reset: true});

sr.reveal('.t1novidades',{duration:1000});

sr.reveal('.t2novidades',{
    rotate:{x:0,y:80,z:0},
    duration:3000
});

sr.reveal('.t3novidades',{
    rotate:{x:0 ,y:80,z:0},
    duration:3000
});

//--------------Carrossel JS-----------------//
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  