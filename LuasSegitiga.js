// Program untuk menghitung luas segitiga

var alas = prompt("Masukkan panjang alas segitiga:");
var tinggi = prompt("Masukkan tinggi segitiga:");

alas = parseFloat(alas);
tinggi = parseFloat(tinggi);

var luas = (alas * tinggi) / 2;

console.log("Luas segitiga adalah: " + luas);
