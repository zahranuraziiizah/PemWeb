function kurs(){
    let masuk = document.getElementById("masuk").value
    let Keluar = document.getElementById("Keluar")
    let angka = 14650

    let perhitungan = masuk * angka

    Keluar.innerHTML = perhitungan
}