function bus(sopir, jurusan, penumpang, kas) {
  this.sopir = sopir;
  this.jurusan = jurusan;
  this.penumpang = penumpang;
  this.kas = kas;

  this.penumpangNaik = function (Namapenumpang) {
    this.penumpang.push(Namapenumpang);
    return this.penumpang;
  };

  this.penumpangTurun = function (Namapenumpang, bayar) {
    for (var i = 0; i < this.penumpang.length; i++) {
      if (this.penumpang[i] == Namapenumpang) {
        this.penumpang[i] = undefined;
        this.kas += bayar;
      }
    }
  };
}

var bus1 = new bus("Ali", "Rajabasa", [], 0);
var bus2 = new bus("Ahmad", "Itera", [], 0);

console.log("halo dunia");
