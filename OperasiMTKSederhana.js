// Program sederhana untuk melakukan operasi matematika berdasarkan input pengguna
var angka1 = prompt("Masukkan angka pertama:");
var angka2 = prompt("Masukkan angka kedua:");
angka1 = parseFloat(angka1);
angka2 = parseFloat(angka2);
var tambah = angka1 + angka2;
var kurang = angka1 - angka2;
var kali = angka1 * angka2;
var bagi = angka1 / angka2;

console.log("Hasil penjumlahan: " + tambah);
console.log("Hasil pengurangan: " + kurang);
console.log("Hasil perkalian: " + kali);
console.log("Hasil pembagian: " + bagi);
