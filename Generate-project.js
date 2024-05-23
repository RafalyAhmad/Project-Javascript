function generateUniqueWord() {
  const sifat = [
    "Misterius",
    "Bersemi",
    "Bersemi",
    "Abadi",
    "Menggema",
    "Kilauan",
    "Harmonis",
    "Ajaib",
    "Lumayan",
    "Cemerlang",
  ];
  const benda = [
    "Pulau",
    "Cahaya",
    "Harmoni",
    "Keindahan",
    "Keberuntungan",
    "Harapan",
    "Petualangan",
    "Mimpi",
    "Pesona",
    "Cinta",
  ];

  const randomSifat = sifat[Math.floor(Math.random() * sifat.length)];
  const randomBenda = benda[Math.floor(Math.random() * benda.length)];

  const uniqueWord = randomSifat + " " + randomBenda;

  return uniqueWord;
}

const uniqueWord = generateUniqueWord();
console.log("Kata unik yang dihasilkan:", uniqueWord);
