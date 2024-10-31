alert('Selamat Datang...');
var lagi = true;

while(lagi === true){
    var nama = prompt('Masukkan Nama Anda:');
    alert('Halo ' + nama);

    lagi = confirm('Coba Lagi??');
}

alert('Terima Kasih...');