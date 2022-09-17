let us = document.querySelector(".us")
let secim = document.querySelector(".nums").children;
let sonuc = document.querySelector(".calc");
let clean = document.querySelector(".ac");
let hesap = document.querySelector(".equal");
clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);
// Diğer tüm tuşlar için dinleyiciler tanımlandı.
for (let i = 0; i < 20; i++) {
  if (i != 0 && i != 18) {
    // "temizle" ve "hesapla" butonları hariç tutuldu.
    secim[i].addEventListener("click", yazdir);
    
  }
}
// "eval" ile hesaplama yapıldı.
function hesapla() {
  sonuc.innerText = eval(sonuc.innerText);
  if (eval(sonuc.innerText.length) > 15) {
    // Çıkan sonuç 15 basamaktan büyükse 15 basamak olarak girdirildi.

    sonuc.innerText = eval(sonuc.value).toPrecision(10);
  }
}
// "temizle" butonunun işlevi girildi.
function temizle() {
  sonuc.innerText = " ";
}
// Tıklanan tuşlar sonuç ekranını atandı.
function yazdir() {
  if (sonuc.innerText.length < 15)
    // 15 basamaktan fazla olması engellendi.
    sonuc.innerText = sonuc.innerText + this.innerText;
}

secim.addEventListener("click",(e)=>{
    console.log(e.target);
   if(e.target.classList.contains("islem")){
    us.innerText = sonuc.innerText;
    console.log(sonuc.innerText);
    // sonuc.innerText = eval(sonuc.innerText);
   } 
})

