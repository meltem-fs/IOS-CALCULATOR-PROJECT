// const ac = document.querySelector(".ac");
// const ae = document.querySelector(".ae");
// const yüzde = document.querySelector(".yüzde");
// const böl = document.querySelector(".bölü");
// const seven = document.querySelector(".seven");
// const six = document.querySelector(".six");
// const five = document.querySelector(".five");
// const four = document.querySelector(".four");
// const three = document.querySelector(".three");
// const two = document.querySelector(".two");
// const one = document.querySelector(".one");
// const eight = document.querySelector(".eight");
// const nine = document.querySelector(".nine");
// const sub = document.querySelector(".sub");
// const zero = document.querySelector(".zero");
// const x = document.querySelector(".x");
// const add = document.querySelector(".add");
// const dot = document.querySelector(".dot");
// const equal = document.querySelector(".equal");
// const calc = document.querySelector(".calc");
// const nums = document.querySelector(".nums")
// const us = document.querySelector(".us")
// const number = document.querySelector(".number")
// let first = ""
// let sec =""
// let islem =""


// nums.addEventListener("click", (e) => {
// console.log(e.target.innerText);
// if(e.target.classList.contains("number"))
// calc.innerText += `${e.target.innerText}`
// })

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

    sonuc.innerText = eval(sonuc.innerText).toPrecision(10);
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