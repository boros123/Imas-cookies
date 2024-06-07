$(document).ready(function(){
  $('#form').on('submit', function(e){
    e.preventDefault(); 
  
    var name = $('#name').val();
    var phone = $('#phone').val();
    var date = $('#tgl').val();
    var jumlah = $('#jumlah').val();
    var jenis = $('#jenis-kue').val();
    var alamat = $('#alamat').val();
    
    var currentTime = new Date();
    var realtime = currentTime.toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
    var message = "Nama Pembeli: " + name + "%0A" +
                  "Telepon: " + phone + "%0A" +
                  "Order Tanggal: " + realtime + "%0A" +
                  "Untuk Tanggal: " + date + "%0A" +
                  "Jumlah: " + jumlah + " Bungkus" + "%0A" +
                  "Jenis Kue: " + jenis + "%0A" +
                  "Alamat: " + alamat;

  //  ganti no hp
    var whatsappURL = "https://api.whatsapp.com/send?phone=62895377073012&text=" + message;
    window.open(whatsappURL, '_blank');
  });
});