function hitungParkir(){
    // Tangkap angka yang user input
    let masuk = document.getElementById('masuk').value
    let keluar = document.getElementById('keluar').value
    
    // Tangkap span untuk hasil
    let hasilDurasi = document.getElementById('hasilDurasi')
    let totalBiaya = document.getElementById('totalBiaya')

    // Hitung durasi parkir
    let durasi = keluar - masuk

    // Hitung biaya parkir
    let biaya = 3000
    for(let i = 2; i <= durasi; i++){
        biaya = biaya + 1000
    }    

    // Menampilkan hasil perhitungan 
    hasilDurasi.innerHTML = durasi
    totalBiaya.innerHTML = biaya

}