let adSoyad = (prompt("Adınızı ve soyadınızı girinz"))
let isim = document.querySelector("#isim")
isim.innerHTML = `Merhaba, ${ adSoyad } ! Hoş Geldin!`

let baslik = document.querySelector("#kodluyoruz")
baslik.innerHTML = `KODLUYORUZ`

let tarih = document.querySelector("#saat")
const gun = ["Pazartesi","Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi","Pazar"];
function guncelSaniye(){
    let date = new Date()
    tarih.innerHTML = `${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }  
    ${ gun[date.getDay() - 1 ] }`
}
guncelSaniye();
setInterval(guncelSaniye, 1000);