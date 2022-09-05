var sayi = document.querySelector("#sayi");
var sonuc = document.querySelector("#sonuc");
var hesapla = document.querySelector("#hesapla");

hesapla.onclick = function () {
  var adet = 0,
    toplam = 0;
  var num = Number(sayi.value);
  console.log(num);
  while (num != 0) {
    toplam = (num % 10) + toplam;
    num = Math.floor(num / 10);
    ++adet;
  }
  if (toplam % 2 == 0) {
    window.alert(toplam + "-->" + " Even");
  } else {
    window.alert(toplam + "-->" +" Odd");
  }

  
  sonuc.value = toplam;

  
};
