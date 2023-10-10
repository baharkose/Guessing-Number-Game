let rasgeleSayi = Math.round(Math.random() * 100);
console.log(rasgeleSayi);

function karsilastir() {

  let tahmin = parseInt(document.getElementById("tahmin").value);
  let sonuc = document.getElementById("sonuc");
  let tahminDizi = document.getElementById("dizi");

    tahminDizi.textContent += `${tahmin} `;

  let hak = 5;
 

 while(hak >= 0) {
    hak = hak - 1;
    if (rasgeleSayi < tahmin) {
      sonuc.textContent = "Aşağı";
    } else if (rasgeleSayi > tahmin) {
      sonuc.textContent = "Yukarı";
    } else {
      sonuc.textContent = "Bildiniz";
      break;
    }
    
    console.log(hak);
  };
  if (hak === 0) {
    sonuc.textContent = "Bilemediniz";
  }
}
