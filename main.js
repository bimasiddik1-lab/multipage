window.addEventListener("load", function(){
  const main = document.querySelector(".main-content");
  main.style.opacity="1";
});

function orderWA(product){
  const number = "6282230032724"; // ganti nomor lu
  const message = `Halo Saturnus STR, saya ingin order ${product}.`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url,"_blank");
}