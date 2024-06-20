let adSoyad = (prompt("Adınızı ve soyadınızı girinz"))
let isim = document.querySelector("#isim")
isim.classList.add("text-primary")
isim.innerHTML = `Merhaba, ${ adSoyad } ! Hoş Geldin!`

let baslik = document.querySelector("#kodluyoruz")
baslik.classList.add("text-primary")
baslik.innerHTML = `KODLUYORUZ`

let tarih = document.querySelector("#saat")
tarih.classList.add("text-primary")
const gun = ["Pazartesi","Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];
function guncelSaniye(){
    let date = new Date()
    tarih.innerHTML = `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }  
    ${ gun[date.getDay() - 1 ] }`
}
guncelSaniye();
setInterval(guncelSaniye, 1000);