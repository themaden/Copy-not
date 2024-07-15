// script.js
document.addEventListener('copy', function (event) {
     event.preventDefault();
     alert('Kopyalama işlemi devre dışı bırakıldı!');
 });
 
 document.addEventListener('paste', function (event) {
     event.preventDefault();
     alert('Yapıştırma işlemi devre dışı bırakıldı!');
 });
 document.addEventListener('contextmenu', function (event) {
     event.preventDefault();
     alert('Sağ tıklama işlemi devre dışı bırakıldı!');
 });
 