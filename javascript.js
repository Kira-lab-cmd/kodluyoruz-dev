let adSoyad = prompt("Adınızı ve soyadınızı girinz")

let baslik = document.querySelector("#kodluyoruz")
baslik.classList.add(text-primary)
let isim = document.querySelector("isim")
isim.innerHTML = `Merhaba, ${adSoyad}! Hoş Geldin!`

let tarih = document.querySelector("saat")
const date = new Date() 
tarih.innerHTML = `${ date.getDay }`